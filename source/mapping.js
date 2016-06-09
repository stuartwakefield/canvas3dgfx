const faces = [
  new Polygon(vertices[0], vertices[1], vertices[5], vertices[4]), // Front
  new Polygon(vertices[2], vertices[3], vertices[7], vertices[6]), // Rear
  new Polygon(vertices[0], vertices[1], vertices[3], vertices[2]), // Bottom
  new Polygon(vertices[4], vertices[5], vertices[7], vertices[6]), // Top
  new Polygon(vertices[0], vertices[2], vertices[6], vertices[4]), // Left
  new Polygon(vertices[1], vertices[3], vertices[7], vertices[5])  // Right
]
