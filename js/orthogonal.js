var orthogonal = {
	gx: function(scale) {
		return function(vertex) {
			return vertex.x() * scale;
		};
	},

	gy: function(scale) {
		return function(vertex) {
			return vertex.y() * scale;
		};
	}
};
