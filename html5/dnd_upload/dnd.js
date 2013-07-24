// dnd.js
$(function() {
	$('#dropzone').on('drop', function(event) {
		var file = event.originalEvent.dataTransfer.files[0];
		var formData = new FormData();
		formData.append('file', file);
		
		$.ajax('/upload', {
			method: 'POST',
			contentType: false,
			processData: false,
			data: formData,
			error: function() {
				console.log('アップロードに失敗しました');
			},
			success: function() {
				console.log('アップロードに成功しました');
			}
		});
		
		return false;
	});
});