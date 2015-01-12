(function() {
				
	var canvas = document.getElementById('canvas-2');
	var context = canvas.getContext('2d');

	canvas.width = 640;
	canvas.height = 240;

	context.translate(canvas.width / 2, canvas.height / 2); // 0 should be in the centre
	context.strokeStyle = '#222222';

	var modelSize = canvas.width / 4;
	var scale = modelSize / 2;
	var c = 0.2;
	var fx = oblique.gx(scale, c);
	var fy = oblique.gy(scale, c);

	for (var i = 0; i < modelPolygons.length; ++i) {
		drawPolygon(context, modelPolygons[i], fx, fy);
	}

}) ();
