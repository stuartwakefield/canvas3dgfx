const canvas = document.getElementById('my-canvas')
const context = canvas.getContext('2d')

// The model coordinate system ranges from -1.0 to
// 1.0, where 0.0 appears at the centre. The full
// width of the canvas needs dividing in half to
// get the scale the allows the model to fill the
// canvas.
const size = 0.5 * canvas.width

// We want the cube to take up half of the canvas
// space so we again half the size we also need
// to translate 0.0 in our model coordinate system
// to the the center of the canvas
const fx = vertex =>
  0.5 * size * vertex.x + 0.5 * canvas.width
const fy = vertex =>
  0.5 * size * vertex.y + 0.5 * canvas.width

faces.forEach(face =>
  drawPolygon(context, face, fx, fy))
