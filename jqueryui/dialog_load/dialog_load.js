$(function() {
	var body = $('body');

	$('#ready').on('click', function() {
		var dialog = $('<div class="dialog">こんにちは</div>');
		body.append(dialog);
		dialog.ready(function() {
			dialog.dialog();
		});
	});
	
	$('#noready').on('click', function() {
		var dialog = $('<div class="dialog">こんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</dialog>');
		body.append(dialog);
		dialog.dialog();
	});
});