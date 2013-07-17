$(function() {
	var Cup = Backbone.Model.extend({
		defaults: {
			filling: 'empty'
		}
	});

	var CupView = Backbone.View.extend({
		template: _.template($('#view_template').html()),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			'click button': 'buttonHasClicked'
		},
		buttonHasClicked: function(event) {
			var filling = $(event.target).attr('id');
			this.model.set('filling', filling);
//			this.mode.filling = filling;
			this.render();
		}
	});

	var cup = new Cup();
	var cupView = new CupView({ model: cup });
	$('body').html(cupView.render().el);
});
