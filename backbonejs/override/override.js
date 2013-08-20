var BlockView = Backbone.View.extend({
	tagName: 'div',
	className: 'block',
	events: {
		'click': 'blockHasClicked'
	},
	render: function() {
		this.$el.html('BLOCK');
		return this;
	},
	blockHasClicked: function() {
		alert('BLOCKがクリックされました');
	}
});

var GreenBlockView = BlockView.extend({
	className: 'block green',
	render: function() {
		this.$el.html('GREEN')
		return this;
	},
	blockHasClicked: function() {
		// スーパークラスのメソッドを呼び出す
		BlockView.prototype.blockHasClicked(this);
		
		// サブクラス独自の処理
		alert('GREENがクリックされました');
	}
});

var blockView = new BlockView();
var greenBlockView = new GreenBlockView();

$('body').append(blockView.render().el).append(greenBlockView.render().el);