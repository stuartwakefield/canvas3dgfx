const drawPolygon = (context, polygon, fx, fy) => {

  context.beginPath()

  polygon.vertices.forEach((vertex, index) => {
    const x = fx(polygon.vertex(0))

    // The -1 * is used to flip the y coordinate
    // as y value increases as you move down the
    // canvas.
    const y = -1 * fy(polygon.vertex(0))

    if (index === 0)
      context.moveTo(x, y)
    else
      context.lineTo(x, y)
  })

  context.closePath()
  context.stroke()

}
