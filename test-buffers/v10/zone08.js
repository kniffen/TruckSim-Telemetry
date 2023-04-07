const createWriter = require('../createWriter.js')

const start  = 2200
const end    = 2300
const writer = createWriter(Buffer.alloc(end-start))

writer.writeDoubleLE(15000)  // coordinateX
writer.writeDoubleLE(-2)     // coordinateY
writer.writeDoubleLE(-30000) // coordinateZ

writer.writeDoubleLE(0.5) // rotationX (Heading)
writer.writeDoubleLE(0)   // rotationY (Pitch)
writer.writeDoubleLE(1.2) // rotationZ (Roll)

module.exports = writer.buffer