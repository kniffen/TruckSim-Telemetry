const createWriter = require('../createWriter.js')

const start  = 4300
const end    = 4400
const writer = createWriter(Buffer.alloc(end-start))

writer.writeBool() // onJob
writer.writeBool() // jobFinished
writer.writeBool() // jobCancelled
writer.writeBool() // jobDelivered
writer.writeBool() // fined
writer.writeBool() // tollgate
writer.writeBool() // ferry
writer.writeBool() // train
writer.writeBool() // refuel
writer.writeBool() // refuelPayed

module.exports = writer.buffer