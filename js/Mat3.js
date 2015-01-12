function Mat3(elements) {

	if (elements.length !== 9) {
		throw new Error('Mat3 must have 9 elements');
	}

	this.element = function(x, y) {

		if (x < 0 || x > 2) {
			throw new Error('x must be in the range 0 -2');
		}

		if (y < 0 || y > 2) {
			throw new Error('y must be in the range 0 - 2');
		}

		return elements[y * 3 + x];

	};

	this.multiply = function(other) {

		if (!(other instanceof Vec3)
				&& !(other instanceof Mat3)) {
			throw new Error('vector must be either a Vec3 or Mat3');
		}

		if (other instanceof Vec3) {

			var elements = [];
			for (var y = 0; y < 3; ++y) {
				var sum = 0;
				for (var x = 0; x < 3; ++x) {
					sum += other.element(x) * this.element(x, y);
				}
				elements.push(sum);
			}

			return new Vec3(elements);
		} else {

			var elements = [];
			for (var z = 0; z < 3; ++z) {
				for (var y = 0; y < 3; ++y) {
					var sum = 0;
					for (var x = 0; x < 3; ++x) {
						sum += other.element(y, x) * this.element(x, z);
					}
					elements.push(sum);
				}
			}

			return new Mat3(elements);
		}
	};
}

Mat3.identity = function() {
	return new Mat3([
		1.0, 0.0, 0.0,
		0.0, 1.0, 0.0,
		0.0, 0.0, 1.0
	]);
}

Mat3.rotationX = function(angle) {
	var a = Math.cos(angle);
	var b = Math.sin(angle);
	return new Mat3([
		1.0, 0.0, 0.0,
		0.0,   a,  -b,
		0.0,   b,   a,
	]);
};

Mat3.rotationY = function(angle) {
	var a = Math.cos(angle);
	var b = Math.sin(angle);
	return new Mat3([
		  a, 0.0,   b,
		0.0, 1.0, 0.0,
		 -b, 0.0,   a,
	]);
};


Mat3.rotationZ = function(angle) {
	var a = Math.cos(angle);
	var b = Math.sin(angle);
	return new Mat3([
		  a,  -b, 0.0,
		  b,   a, 0.0,
		0.0, 0.0, 1.0,
	]);
};

Mat3.isometric = function(angle) {
	var a = Math.cos(angle);
	var b = Math.sin(angle);
	return new Mat3([
		 a, 0, a,
		-b, 1, b,
		 0, 0, 0
	]);
};
