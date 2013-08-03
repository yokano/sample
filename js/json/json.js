$(function() {
	$('#to_json').on('click', function() {
		var js = $('#javascript').val();
		var json = JSON.stringify(js);
		$('#json').val(json);
	});
	
	$('#to_js').on('click', function() {
		var json = $('#json').val();
		var js = JSON.parse(json);
		$('#javascript').val(js);
	});
	
	$('#javascript').val('{name:"sample"}');
});