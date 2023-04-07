const createWriter = require('../createWriter.js')
const { stringSize } = require('./constants.js')

const start  = 4400
const end    = 6000
const writer = createWriter(Buffer.alloc(end-start))

for (let i = 1; i <= 25; i++) {
  writer.writeString(`substances-${i}`, stringSize)
}

module.exports = writer.buffer