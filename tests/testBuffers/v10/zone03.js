const createWriter = require('../createWriter.js')
const { shifterPositions } = require('./constants.js')

const start  = 500
const end    = 700
const writer = createWriter(Buffer.alloc(end-start))

writer.writeInt32LE(60) // restStop (in-game minutes)

writer.writeInt32LE(1)                   // gear
writer.writeInt32LE(2)                   // gearDashboard
writer.writeInt32LE(0, shifterPositions) // hshifterResulting

writer.writeInt32LE(50) // jobDeliveredEarnedXp


module.exports = writer.buffer