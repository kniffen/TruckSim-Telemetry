const createWriter = require('../createWriter.js')

const start  = 0
const end    = 40
const writer = createWriter(Buffer.alloc(end-start))

writer.writeBool() // sdkActive

writer.padding(3) // padding/placeholder

writer.writeBool() // paused

writer.padding(3) // padding/placeholder

writer.writeBigUInt64LE(1000000000000000n) // time (microseconds)
writer.writeBigUInt64LE(1100000000000000n) // simulatedTime (microseconds)
writer.writeBigUInt64LE(1200000000000000n) // renderTime (microseconds)
writer.writeBigInt64LE(1300000000000000n)  // multiplayerTimeOffset (in-game minutes)

module.exports = writer.buffer