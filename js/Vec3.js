function Vec3(elements) {

	if (elements.length !== 3) {
		throw new Error('Vec3 must have 3 elements');
	}

	this.element = function(i) {

		if (i < 0 || i > 2) {
			throw new Error('i must be in the range 0 - 2');
		}

		return elements[i];
	};

	this.multiply = function(matrix) {

		if (!(matrix instanceof Mat3)) {
			throw new Error('matrix must be a Mat3');
		}

		return matrix.multiply(this);
	}
}
