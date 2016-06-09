var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');

// Make the cube half the width of the canvas
var size = canvas.width / 2;

var fx = function(vertex) {
  return vertex.x() * size / 2;
};
var fy = function(vertex) {
  return vertex.y() * size / 2;
};

// Makes 0 the center of the canvas
context.translate(canvas.width / 2, canvas.height / 2);

for (var i = 0; i &lt; faces.length; ++i) {
  drawPolygon(context, faces[i], fx, fy);
}
