const createWriter = require('../createWriter.js')

const start  = 0
const end    = 40
const writer = createWriter(Buffer.alloc(end-start))

writer.writeBool() // sdkActive

writer.padding(3) // padding/placeholder

writer.writeBool() // paused

writer.padding(3) // padding/placeholder

writer.writeBigUInt64LE(1000000000000000n) // time (microseconds)
writer.writeBigUInt64LE(2000000000000000n) // simulatedTime (microseconds)
writer.writeBigUInt64LE(3000000000000000n) // renderTime (microseconds)

module.exports = writer.buffer