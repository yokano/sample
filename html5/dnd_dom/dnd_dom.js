$('#dropzone').on('drop', function() {
	$(this).html('ドロップされました');
}).on('dragover dragenter', function() {
	// イベントをキャンセル
	return false;
});
