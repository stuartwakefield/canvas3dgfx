// Basic scaled projection discarding depth / z value
(function() {

	var canvas = document.getElementById('canvas-1');
	var context = canvas.getContext('2d');

	canvas.width = "640";
	canvas.height = "240";

	context.translate(canvas.width / 2, canvas.height / 2); // 0 should be in the centre
	context.strokeStyle = '#222222';

	var modelSize = canvas.width / 4;
	var scale = modelSize / 2;
	var fx = orthogonal.gx(scale);
	var fy = orthogonal.gy(scale);

	for (var i = 0; i < modelPolygons.length; ++i) {
		drawPolygon(context, modelPolygons[i], fx, fy);
	}

}) ();
