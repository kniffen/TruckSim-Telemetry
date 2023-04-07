const createWriter = require('../createWriter.js')

const start  = 4000
const end    = 4200
const writer = createWriter(Buffer.alloc(end-start))

writer.writeBigUInt64LE(1900000000000000n) // jobIncome (ets2=EUR, ats=USD)

module.exports = writer.buffer