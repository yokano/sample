$('#areya').on('click', function() {
	alert('あれや！');
});

$('#koreya').on('click', function() {
	alert('これや！');
});

$('#start').on('click', function() {
	$('#busy').css('visibility', 'visible');
});

$('#finish').on('click', function() {
	$('#busy').css('visibility', 'hidden');
});