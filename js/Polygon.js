function Polygon(vertices) {
	this.count = function() {
		return vertices.length;
	};

	this.vertex = function(i) {
		if (i < 0) {
			throw new Error('Vertex index must be a positive integer')
		}
		if (i >= vertices.length) {
			throw new Error('Vertex index out of bounds');
		}

		return vertices[i];
	};
}
