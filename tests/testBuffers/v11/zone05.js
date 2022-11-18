const createWriter = require('../createWriter.js')
const { wheelCount } = require('./constants.js')

const start  = 1500
const end    = 1640
const writer = createWriter(Buffer.alloc(end-start))

writer.writeBool(wheelCount) // truckWheelSteerable
writer.writeBool(wheelCount) // truckWheelSimulated
writer.writeBool(wheelCount) // truckWheelPowered
writer.writeBool(wheelCount) // truckWheelLiftable

writer.writeBool() // isCargoLoaded
writer.writeBool() // specialJob

writer.writeBool()           // parkBrake
writer.writeBool()           // motorBrake
writer.writeBool()           // airPressureWarning
writer.writeBool()           // airPressureEmergency
writer.writeBool()           // fuelWarning
writer.writeBool()           // adblueWarning
writer.writeBool()           // oilPressureWarning
writer.writeBool()           // waterTemperatureWarning
writer.writeBool()           // batteryVoltageWarning
writer.writeBool()           // electricEnabled
writer.writeBool()           // engineEnabled
writer.writeBool()           // wipers
writer.writeBool()           // blinkerLeftActive
writer.writeBool()           // blinkerRightActive
writer.writeBool()           // blinkerLeftOn
writer.writeBool()           // blinkerRightOn
writer.writeBool()           // lightsParking
writer.writeBool()           // lightsBeamLow
writer.writeBool()           // lightsBeamHigh
writer.writeBool()           // lightsBeacon
writer.writeBool()           // lightsBrake
writer.writeBool()           // lightsReverse
writer.writeBool()           // lightsHazard
writer.writeBool()           // cruiseControl
writer.writeBool(wheelCount) // truck_wheelOnGround
writer.writeBool(2)          // shifterToggle
writer.writeBool()           // differentialLock
writer.writeBool()           // liftAxle
writer.writeBool()           // liftAxleIndicator
writer.writeBool()           // trailerLiftAxle
writer.writeBool()           // trailerLiftAxleIndicator

writer.writeBool() // jobDeliveredAutoparkUsed
writer.writeBool() // jobDeliveredAutoloadUsed

module.exports = writer.buffer