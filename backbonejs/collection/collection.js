$(function() {

// メンバー追加ビュー
var InputView = Backbone.View.extend({
	tagName: 'div',
	template: _.template($('#input_view_template').html()),
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	events: {
		'click #add': 'addButtonHasClicked'
	},
	addButtonHasClicked: function() {
		var name = this.$el.find('input').val();
		if(name == '') {
			alert('名前を入力してください');
			return;
		}
		this.$el.find('input').val('');
		list.add({name: name});
	}
});

// リストビュー(ul)
var ListView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function() {
		this.listenTo(this.model, 'add remove', this.render);
	},
	render: function() {
		this.$el.empty();
		
		var self = this;
		this.model.each(function(listItem) {
			var listItemView = new ListItemView({model: listItem});
			self.$el.prepend(listItemView.render().el);
		});
		
		return this;
	}
});

// リストアイテムビュー(li)
var ListItemView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#list_item_view_template').html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	events: {
		'click .remove': 'removeButtonHasClicked'
	},
	removeButtonHasClicked: function() {
		list.remove(this.model);
	}
});

// リストアイテムモデル
var ListItem = Backbone.Model.extend({
	defaults: {
		name: 'no name'
	}
});

// リストモデル
var List = Backbone.Collection.extend({
	model: ListItem
});

// モデルの初期化
var list = new List([
	{name: '勇者'},
	{name: '戦士'},
	{name: '魔法使い'},
	{name: '僧侶'}
])

// ビューを表示
var inputView = new InputView();
var listView = new ListView({model: list});
$('body').append(inputView.render().el);
$('body').append(listView.render().el);

});

