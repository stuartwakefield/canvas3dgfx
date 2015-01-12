function drawPolygon(context, polygon, fx, fy) {
	context.beginPath();
	context.moveTo(fx(polygon.vertex(0)), -1 * fy(polygon.vertex(0)));
	for (var i = 1; i < polygon.count(); ++i) {
		context.lineTo(fx(polygon.vertex(i)), -1 * fy(polygon.vertex(i)));
	}
	context.closePath();
	context.stroke();
}

function drawPolygon2(context, polygon, matrix, fx, fy) {
	context.beginPath();
	var vertex = Vertex.transform(polygon.vertex(0), matrix);
	context.moveTo(fx(vertex), -1 * fy(vertex));
	for (var i = 1; i < polygon.count(); ++i) {
		vertex = Vertex.transform(polygon.vertex(i), matrix);
		context.lineTo(fx(vertex), -1 * fy(vertex));
	}
	context.closePath();
	context.stroke();
}

function drawAxisIndicator(context, matrix) {

	context.save();

	context.textBaseline = 'middle';
	context.textAlign = 'center';

	context.strokeStyle = '#F06';
	context.fillStyle = '#F06';

	var x = new Vec3([30.0, 0.0, 0.0]).multiply(matrix);
	context.fillText('X', x.element(0), -1 * x.element(1));
	drawLineFromVectors(
		context,
		new Vec3([0.0, 0.0, 0.0]).multiply(matrix),
		new Vec3([20.0, 0.0, 0.0]).multiply(matrix)
	);

	context.strokeStyle = '#F90';
	context.fillStyle = '#F90';

	var y = new Vec3([0.0, 30.0, 0.0]).multiply(matrix);
	context.fillText('Y', y.element(0), -1 * y.element(1));
	drawLineFromVectors(
		context,
		new Vec3([0.0, 0.0, 0.0]).multiply(matrix),
		new Vec3([0.0, 20.0, 0.0]).multiply(matrix)
	);

	context.strokeStyle = '#09C';
	context.fillStyle = '#09C';

	var z = new Vec3([0.0, 0.0, 30.0]).multiply(matrix);
	context.fillText('Z', z.element(0), -1 * z.element(1));
	drawLineFromVectors(
		context,
		new Vec3([0.0, 0.0, 0.0]).multiply(matrix),
		new Vec3([0.0, 0.0, 20.0]).multiply(matrix)
	);

	context.restore();

}

function drawLineFromVectors(context, a, b) {
	context.beginPath();
	context.moveTo(a.element(0), -1 * a.element(1));
	context.lineTo(b.element(0), -1 * b.element(1));
	context.stroke();
}
