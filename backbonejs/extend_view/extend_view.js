var DrinkView = Backbone.View.extend({
	tagName: 'div',
	className: 'drink',
	render: function() {
		this.$el.append('<div class="filling"></div>');
		return this;
	},
	empty: function() {
		this.$el.find('.filling').remove();
	}
});

var CoffieView = DrinkView.extend({
	className: 'drink coffie'
});

var OrangeJuiceView = DrinkView.extend({
	className: 'drink orange_juice'
});


var drinkView = new DrinkView();
var coffieView = new CoffieView();
var orangeJuiceView = new OrangeJuiceView();

$('body').append(drinkView.render().el);
$('body').append(coffieView.render().el);
$('body').append(orangeJuiceView.render().el);