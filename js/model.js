var modelVerts = [
	new Vertex(-1.0, -1.0, -1.0), // 0 FBL
	new Vertex( 1.0, -1.0, -1.0), // 1 FBR

	new Vertex(-1.0, -1.0,  1.0), // 2 RBL
	new Vertex( 1.0, -1.0,  1.0), // 3 RBR
	
	new Vertex(-1.0,  1.0, -1.0), // 4 FTL
	new Vertex( 1.0,  1.0, -1.0), // 5 FTR

	new Vertex(-1.0,  1.0,  1.0), // 6 RTL
	new Vertex( 1.0,  1.0,  1.0)  // 7 RTR
];

var modelPolygons = [
	new Polygon([
		modelVerts[0],
		modelVerts[1],
		modelVerts[5],
		modelVerts[4]
	]), // FRONT
	new Polygon([
		modelVerts[2],
		modelVerts[3],
		modelVerts[7],
		modelVerts[6]
	]), // REAR
	new Polygon([
		modelVerts[0],
		modelVerts[1],
		modelVerts[3],
		modelVerts[2]
	]), // BOTTOM
	new Polygon([
		modelVerts[4],
		modelVerts[5],
		modelVerts[7],
		modelVerts[6]
	]), // TOP
	new Polygon([
		modelVerts[0],
		modelVerts[2],
		modelVerts[6],
		modelVerts[4]
	]), // LEFT
	new Polygon([
		modelVerts[1],
		modelVerts[3],
		modelVerts[7],
		modelVerts[5]
	])  // RIGHT
];
