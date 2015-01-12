(function() {

	var canvas = document.getElementById('canvas-6a');
	var context = canvas.getContext('2d');

	canvas.width = 640;
	canvas.height = 320;

	context.translate(canvas.width / 2, canvas.height / 2); // 0 should be in the centre
	context.strokeStyle = '#222222';

	var modelSize = canvas.width / 4;
	var scale = modelSize / 2;
	var angle = Math.PI / 6; // 30 degrees
	var transform = Mat3.isometric(angle);

	var fx = function(vertex) { return vertex.x() * scale; };
	var fy = function(vertex) { return vertex.y() * scale; };

	for (var i = 0; i < modelPolygons.length; ++i) {
		drawPolygon2(context, modelPolygons[i], transform, fx, fy);
	}

}) ();
