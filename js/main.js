/*$('.cub-1').ready (function () {
	//rotate (0);
});*/

function rotate (degrees) {
	degrees -= 2;
	if (degrees === -360) {
		degrees = 0;
	}
	$('.cub-1').animate ({height: '+=0px'}, 5, 'linear', function () {
			$('.cub-1').css ('transform', 'translate3D(0em, 0em, 0em) rotateX(' + degrees + 'deg) rotateY(0deg) rotateZ(60deg)');
			console.log (degrees);
			//$(this).css ('transform', 'rotateX(' + degrees + 'deg)');
			rotate (degrees);
	})
}