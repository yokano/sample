$('.drag').draggable();
$('.drop').droppable({
	drop: function(event, ui) {
		alert(ui.draggable.html() + 'がドロップされました');
	},
	hoverClass: 'hover'
});