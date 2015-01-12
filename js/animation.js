var loop = {
	fns: [],
	start: function() {
		var fns = this.fns;
		var step = function() {
			for (var i = 0; i < fns.length; ++i) {
				fns[i]();
			}
			window.requestAnimationFrame(step);
		};
		window.requestAnimationFrame(step);
	}
};
