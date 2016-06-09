import fs from 'fs'
import _ from 'highland'

import { mkdirp, processArticle, renderParts } from './lib'

mkdirp('out', err => {
  processArticle(__dirname + '/source/canvas3dgfx')
    .pipe(fs.createWriteStream('out/canvas3dgfx.html'))
})
