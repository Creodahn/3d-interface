var Side = function (up, down, left, right) {
	this.Up = up;
	this.Down = down;
	this.Left = left;
	this.Right = right;
}

var cube = [6];
	cube [0] = new Side (5, 6, 4, 3);
	cube [1] = new Side (6, 5, 3, 4);
	cube [2] = new Side (5, 6, 1, 2);
	cube [3] = new Side (5, 6, 2, 1);
	cube [4] = new Side (2, 1, 4, 3);
	cube [5] = new Side (1, 2, 4, 3);
	
$(document).ready (function () {
	$('.num').click (function () {
		var side = 'show-' + ((Math.round ((Math.random () * 100)) % 6) + 1).toString ();
		$('#cube').removeClass ();
		$('#cube').addClass (side);
	});
	$('.rot').click (function (e) {
		rotation ($(e.target).prop ('class').replace ('rot turn', ''));
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

function rotation (direction) {
	var oldClass = $('#cube').prop ('class');
	var currSide = parseInt (oldClass.substring (oldClass.indexOf ('-') + 1)) - 1 || 0;
	var newClass = 'show-' + cube [currSide] [direction];
	$('#cube').removeClass ();
	$('#cube').addClass (newClass);
}