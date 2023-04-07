const createWriter = require('../createWriter.js')

const start = 2000
const end   = 2200
const writer = createWriter(Buffer.alloc(end-start))

writer.writeFloatLE(0.001)   // cabinOffsetX
writer.writeFloatLE(0.0001)  // cabinOffsetY
writer.writeFloatLE(0.00001) // cabinOffsetZ

writer.writeFloatLE(5.5) // cabinOffsetrotationX (Heading)
writer.writeFloatLE(4.5) // cabinOffsetrotationY (Pitch)
writer.writeFloatLE(3.5) // cabinOffsetrotationZ (Roll)

writer.writeFloatLE(0)    // headOffsetX
writer.writeFloatLE(-0.5) // headOffsetY
writer.writeFloatLE(0.5)  // headOffsetZ

writer.writeFloatLE(0.005) // headOffsetrotationX (Heading)
writer.writeFloatLE(-0.05) // headOffsetrotationY (Pitch)
writer.writeFloatLE(0)     // headOffsetrotationZ (Roll)

module.exports = writer.buffer