$(function() {
	var Food = Backbone.Model.extend({
		defaults: {
			name: '',
			selected: false
		}
	});

	var Menu = Backbone.Collection.extend({
		model: Food,
		initialize: function() {
			// Menu 内の Food の change を Menu が処理できる
			this.on('change:selected', this.foodHasSelected);
		},
		foodHasSelected: function(food) {
			this.each(function(food) {
				food.set('selected', false, {silent: true});
			});
			food.set('selected', true, {silent: true});
		}
	});
	
	var MenuView = Backbone.View.extend({
		tagName: 'ul',
		render: function() {
			this.$el.empty();
			
			this.collection.each(function(food) {
				var foodView = new FoodView({model: food});
				this.$el.append(foodView.render().el);
			}, this);
			return this;
		},
		initialize: function() {
			// Menu 内の Food の選択状態が変わったらリストを再描画する
			this.listenTo(this.collection, 'change:selected', this.render);
		}
	});
	
	var FoodView = Backbone.View.extend({
		tagName: 'li',
		template: _.template('<%= name %>'),
		render: function() {
			this.$el.append(this.template(this.model.toJSON()));
			
			if(this.model.get('selected')) {
				this.$el.css('background-color', 'pink');
			}
			
			return this;
		},
		events: {
			'click': 'foodHasClicked'
		},
		foodHasClicked: function() {
			this.model.set('selected', true);
		}
	});

	var menu = new Menu([
		{name: 'スープカレー'},
		{name: 'ブロッコリーサラダ'},
		{name: 'バリコーヒー'},
		{name: 'レバー'},
		{name: '全部乗せオムライス'},
		{name: 'バニラアイス'}
	]);
	
	var menuView = new MenuView({
		collection: menu
	});
	
	$('body').append(menuView.render().el);
});
