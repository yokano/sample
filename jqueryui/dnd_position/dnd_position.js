$('.drop').droppable({
	hoverClass: 'hover',
	drop: function(event, ui) {
		ui.draggable.fadeOut();
	}
});

$('.drag').draggable({
	appendTo: '#drop',
	revert: true,
	cursor: 'move'
});

$('#revise').on('mousedown', function() {
	var difference = $(this).offset().left + $(this).width() / 2;
	$(this).draggable('option', 'cursorAt', {right: difference});
	$(this).draggable('option', 'start', function() {
		$(this).removeClass('center');
	});
	$(this).draggable('option', 'stop', function() {
		$(this).addClass('center');
	});
});