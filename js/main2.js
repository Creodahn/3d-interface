$(document).ready (function () {
	$('figure').click (function () {
		var side = 'show-' + ((Math.round ((Math.random () * 100)) % 6) + 1).toString ();
		$('#cube').removeClass ();
		$('#cube').addClass (side);
	});
	$('.downContainer').on ('mouseover', function () {
		$('.turnDown').css ('display', 'block');
	});
	$('.leftContainer').on ('mouseover', function () {
		$('.turnLeft').css ('display', 'block');
	});
	$('.rightContainer').on ('mouseover', function () {
		$('.turnRight').css ('display', 'block');
	});
	$('.upContainer').on ('mouseover', function () {
		$('.turnUp').css ('display', 'block');
	});
	
	$('.downContainer').on ('mouseout', function () {
		$('.turnDown').css ('display', 'none');
	});
	$('.leftContainer').on ('mouseout', function () {
		$('.turnLeft').css ('display', 'none');
	});
	$('.rightContainer').on ('mouseout', function () {
		$('.turnRight').css ('display', 'none');
	});
	$('.upContainer').on ('mouseout', function () {
		$('.turnUp').css ('display', 'none');
	});
	
});