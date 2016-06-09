import marked from 'marked'
import highlight from 'highlight.js'
import mustache from 'mustache'
import fs from 'fs'
import _ from 'highland'

export const mkdirp = (path, callback) =>
  fs.stat(path, (err, stats) =>
    err && err.code === 'ENOENT' ? fs.mkdir(path, callback) : callback(err))

const format = (lang, code) =>
  `<pre class="code">${highlight.highlight(lang, code).value}</pre>`

const processHtml = item =>
  _(fs.createReadStream(item.path, 'utf-8'))

const processCode = item =>
  _(fs.createReadStream(item.path, 'utf-8')).map(code => format(item.lang, code))

const processInvalid = item => {
  throw new Error('Invalid item: ' + JSON.stringify(item))
}

const processFigure = figure =>
  figure.type === 'html' ? processHtml(figure) :
  figure.type === 'code' ? processCode(figure) : processInvalid(figure)

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

const processStepsItems = steps =>
  _(steps)
    .map(processStep)
    .sequence()
    .collect()

const processSteps = part =>
  processStepsItems(part.steps)
    .map(steps => mustache.render(fs.readFileSync('templates/steps.mustache', 'utf-8'), {
      steps
    }))

export const processPart = part =>
  part.type === 'html' ? processHtml(part) :
  part.type === 'code' ? processCode(part) :
  part.type === 'steps' ? processSteps(part) : processInvalid(part)

const resolvePartPath = (path, part) =>
  part.type === 'steps' ? { ...part, steps: part.steps.map(step => resolvePartPath(path, step)) } :
  part.type === 'step' ? { ...part, figure: resolvePartPath(path, part.figure), content: resolvePartPath(path, part.content) } :
    { ...part, path: path + '/' + part.path }

export const processPartFromPath = path =>
  part =>
    processPart(resolvePartPath(path, part))

export const processArticle = path =>
  _(require(path + '/manifest'))
    .map(processPartFromPath(path))
    .sequence()
    .collect()
    .map(renderParts)

export const renderParts = parts =>
  mustache.render(fs.readFileSync('templates/index.mustache', 'utf-8'), {
    content: parts.join('\n')
  })
