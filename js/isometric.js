var isometric = {
	gx: function(scale, c) {
		return function(vertex) {
			return (vertex.x() * c + vertex.z() * c) * scale;
		};
	},

	gy: function(scale, c) {
		return function(vertex) {
			return (vertex.y() + vertex.z() * c - vertex.x() * c) * scale;
		};
	}
};
