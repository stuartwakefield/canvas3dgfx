(function() {

	var canvas = document.getElementById('interactive');
	var context = canvas.getContext('2d');

	canvas.width = 640;
	canvas.height = 320;

	context.translate(canvas.width / 2, canvas.height / 2); // 0 should be in the centre
	context.strokeStyle = '#222222';

	var modelSize = canvas.width / 4;
	var scale = modelSize / 2;
	var cx = 0.001, cy = 0.001;
	var lx = null, ly = null;
	var x = 0, y = 0;
	var decay = 0.98;

	var move = function(e) {
		e.preventDefault();

		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var canvasX = canvas.offsetLeft;
		var canvasY = canvas.offsetTop;
		var canvasWidth = canvas.offsetWidth;
		var canvasHeight = canvas.offsetHeight;
		var px = (mouseX - canvasX) / canvasWidth;
		var py = (mouseY - canvasY) / canvasHeight;
		if (lx && ly) {
			cx = (px - lx);
			cy = (py - ly);
		}
		lx = px;
		ly = py;
	};

	var leave = function() {
		lx = null;
		ly = null;
	};

	canvas.addEventListener('mousemove', move);
	canvas.addEventListener('touchmove', move);

	canvas.addEventListener('mouseleave', leave);
	canvas.addEventListener('touchend', leave);

	loop.fns.push(function() {

		cx *= decay;
		cy *= decay;
		x += cx;
		y += cy;

		context.clearRect(- canvas.width / 2, - canvas.height / 2, canvas.width, canvas.height);
		var transform = Mat3.rotationX(-y * 2 * Math.PI)
			.multiply(Mat3.rotationY(x * 2 * Math.PI));

		var fx = function(vertex) {
			return vertex.x() * scale;
		};

		var fy = function(vertex) {
			return vertex.y() * scale;
		};

		drawAxisIndicator(context, transform);

		for (var i = 0; i < modelPolygons.length; ++i) {
			drawPolygon2(context, modelPolygons[i], transform, fx, fy);
		}
	});

}) ();
