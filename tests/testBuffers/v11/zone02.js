const createWriter = require('../createWriter.js')
const { wheelCount, shifterPositions } = require('./constants.js')

const start  = 40
const end    = 500
const writer = createWriter(Buffer.alloc(end-start))

writer.writeUInt32LE(11) // telemetry_plugin_revision
writer.writeUInt32LE(1)  // version_major
writer.writeUInt32LE(18) // version_minor
writer.writeUInt32LE(1)  // game (0=unknown, 1=ets2, 2=ats)
writer.writeUInt32LE(1)  // telemetry_version_game_major
writer.writeUInt32LE(14) // telemetry_version_game_minor

writer.writeUInt32LE(60) // time_abs (in-game minutes)

writer.writeUInt32LE(12)  // gears
writer.writeUInt32LE(2)   // gears_reverse
writer.writeUInt32LE(5)   // retarderStepCount
writer.writeUInt32LE(6)   // truckWheelCount
writer.writeUInt32LE(1)   // selectorCount
writer.writeUInt32LE(120) // time_abs_delivery (in-game minutes)
writer.writeUInt32LE(10)  // maxTrailerCount
writer.writeUInt32LE(30)  // unitCount (Numbers of units the cargo is devided into)
writer.writeUInt32LE(100) // plannedDistanceKm (Kilometers)

writer.writeUInt32LE(1)                   // shifterSlot
writer.writeUInt32LE(0)                   // retarderBrake
writer.writeUInt32LE(1)                   // lightsAuxFront (0=off, 1=dimmed, 2=full)
writer.writeUInt32LE(0)                   // lightsAuxRoof (0=off, 1=dimmed, 2=full)
writer.writeUInt32LE(1, wheelCount)       // truck_wheelSubstance (Substance index)
writer.writeUInt32LE(2, shifterPositions) // hshifterPosition
writer.writeUInt32LE(3, shifterPositions) // hshifterBitmask

writer.writeUInt32LE(180) // jobDeliveredDeliveryTime (in-game minutes)
writer.writeUInt32LE(230) // jobStartingTime (in-game minutes)
writer.writeUInt32LE(310) // jobFinishedTime (in-game minutes)

module.exports = writer.buffer