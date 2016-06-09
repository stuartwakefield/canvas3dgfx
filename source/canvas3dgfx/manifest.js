module.exports = [
  { type: 'html', path: 'intro.html' },
  { type: 'html', path: 'orthogonal.html' },
  { type: 'steps', steps: [
    { type: 'step', figure: { type: 'code', lang: 'js', path: 'vertex.js' }, number: 'Start', content: { type: 'html', path: 'vertex.html' } },
    { type: 'step', figure: { type: 'code', lang: 'js', path: 'vertices.js' }, number: '2', content: { type: 'html', path: 'vertices.html' } },
    { type: 'step', figure: { type: 'code', lang: 'js', path: 'polygon.js' }, number: '3', content: { type: 'html', path: 'polygon.html' } },
    { type: 'step', figure: { type: 'code', lang: 'js', path: 'mapping.js' }, number: '4', content: { type: 'html', path: 'mapping.html' } },
    { type: 'step', figure: { type: 'code', lang: 'js', path: 'draw.js' }, number: '5', content: { type: 'html', path: 'draw.html' } },
    { type: 'step', figure: { type: 'code', lang: 'js', path: 'render.js' }, number: '6', content: { type: 'html', path: 'render.html' } },
    { type: 'step', figure: { type: 'html', path: 'result.html' }, number: 'Finish', content: { type: 'html', path: 'finish.html' } }
  ] }
]
