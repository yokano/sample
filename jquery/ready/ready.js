$(function() {
	var body = $('body');
	var div = $('<div class="pink"></div>');

	var loaded = function() {
		$('div').html('LOADED');
	}

	div.ready(loaded);
	body.append(div);
});
