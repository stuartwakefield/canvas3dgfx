function Vertex(x, y, z) {
	this.x = function() {
		return x;
	};

	this.y = function() {
		return y;
	};

	this.z = function() {
		return z;
	};
}

Vertex.transform = function(vertex, matrix) {
	return Vertex.fromVec3(
		matrix.multiply(
			Vertex.toVec3(vertex)
		)
	);
};

Vertex.toVec3 = function(vertex) {
	return new Vec3([vertex.x(), vertex.y(), vertex.z()]);
};

Vertex.fromVec3 = function(vector) {
	return new Vertex(vector.element(0), vector.element(1), vector.element(2));
};
