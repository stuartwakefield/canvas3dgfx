var oblique = {
	gx: function(scale, zc) {
		return function(vertex) {
			return (vertex.x() + vertex.z() * zc) * scale;
		};
	},

	gy: function(scale, zc) {
		return function(vertex) {
			return (vertex.y() + vertex.z() * zc) * scale;
		};
	}
};
