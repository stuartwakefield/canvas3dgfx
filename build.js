import marked from 'marked'
import highlight from 'highlight.js'
import mustache from 'mustache'
import fs from 'fs'
import _ from 'highland'

const mkdirp = (path, callback) =>
  fs.stat(path, (err, stats) =>
    err && err.code === 'ENOENT' ? fs.mkdir(path, callback) : callback(err))

const format = (code) =>
  `<pre class="code">${highlight.highlight('js', code).value}</pre>`

const part$ = _([
  { type: 'html', path: 'source/intro.html' },
  { type: 'html', path: 'source/orthogonal.html' },
  { type: 'steps', steps: [
    { type: 'step', figure: { type: 'js', path: 'source/vertex.js' }, number: 'Start', content: { type: 'html', path: 'source/vertex.html' } },
    { type: 'step', figure: { type: 'js', path: 'source/vertices.js' }, number: '2', content: { type: 'html', path: 'source/vertices.html' } },
    { type: 'step', figure: { type: 'js', path: 'source/polygon.js' }, number: '3', content: { type: 'html', path: 'source/polygon.html' } },
    { type: 'step', figure: { type: 'js', path: 'source/mapping.js' }, number: '4', content: { type: 'html', path: 'source/mapping.html' } }
  ] }
])

const processFigure = figure => {
  if (figure.type === 'html')
    return _(fs.createReadStream(figure.path, 'utf-8'))
  else if (figure.type === 'js')
    return _(fs.createReadStream(figure.path, 'utf-8')).map(format)
}

const processContent = processFigure

const processStep = step =>
  _([
    processFigure(step.figure),
    processContent(step.content)
  ])
    .sequence()
    .collect()
    .map(([ figure, content ]) => mustache.render(fs.readFileSync('templates/step.mustache', 'utf-8'), {
      number: step.number,
      figure,
      content
    }))

const processSteps = steps =>
  _(steps)
    .map(processStep)
    .sequence()
    .collect()

mkdirp('out', err => {

  part$
    .map(part => {
      if (part.type === 'html')
        return _(fs.createReadStream(part.path, 'utf-8'))
      else if (part.type === 'js')
        return _(fs.createReadStream(part.path, 'utf-8')).map(format)
      else if (part.type === 'steps')
        return processSteps(part.steps)
          .map(steps => mustache.render(fs.readFileSync('templates/steps.mustache', 'utf-8'), {
            steps
          }))
      else
        throw new Error('Did not understand type: ' + part.type)
    })
    .sequence()
    .collect()
    .map(output => output.join('\n'))
    .map(content => mustache.render(fs.readFileSync('templates/index.mustache', 'utf-8'), {
      content
    }))
    .pipe(fs.createWriteStream('out/test.html'))
})
