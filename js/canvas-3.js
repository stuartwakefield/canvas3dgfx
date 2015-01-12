(function() {

	var canvas = document.getElementById('canvas-3');
	var context = canvas.getContext('2d');

	canvas.width = 640;
	canvas.height = 320;

	context.translate(canvas.width / 2, canvas.height / 2); // 0 should be in the centre
	context.strokeStyle = '#222222';

	var modelSize = canvas.width / 4;
	var scale = modelSize / 2;
	var angle = Math.PI / 6; // 30 degrees
	var a = Math.cos(angle);
	var b = Math.sin(angle);
	var fx = oblique.gx(scale, a);
	var fy = oblique.gy(scale, b);

	for (var i = 0; i < modelPolygons.length; ++i) {
		drawPolygon(context, modelPolygons[i], fx, fy);
	}

}) ();
