const createWriter = require('../createWriter.js')
const { stringSize, trailerCount, wheelCount } = require('./constants.js')

const start  = 6000
const end    = 6000 + 1555 * trailerCount
const writer = createWriter(Buffer.alloc(end-start))

for (let i = 0; i < trailerCount; i++) {
  // First trailer zone
  writer.writeBool(wheelCount) // wheelSteerable
  writer.writeBool(wheelCount) // wheelSimulated
  writer.writeBool(wheelCount) // wheelPowered
  writer.writeBool(wheelCount) // wheelLiftable

  writer.writeBool(wheelCount) // wheelOnGround
  writer.writeBool()           // attached

  writer.padding(3)

  // Second trailer zone
  writer.writeUInt32LE(1, wheelCount) // wheelSubstance

  writer.writeUInt32LE(6) // wheelCount

  // Third trailer zone
  writer.writeFloatLE(0.1)                // cargoDamage
  writer.writeFloatLE(0.2)                // wearChassis
  writer.writeFloatLE(0.3)                // wearWheels
  writer.writeFloatLE(0.001, wheelCount)  // wheelSuspDeflection
  writer.writeFloatLE(0.0001, wheelCount) // wheelVelocity
  writer.writeFloatLE(0, wheelCount)      // wheelSteering
  writer.writeFloatLE(0.5, wheelCount)    // wheelRotation
  writer.writeFloatLE(0, wheelCount)      // wheelLift
  writer.writeFloatLE(0, wheelCount)      // wheelLiftOffset

  writer.writeFloatLE(0.5, wheelCount) // wheelRadius

  // Fourth trailer zone
  writer.writeFloatLE(0.001)  // linearVelocityX
  writer.writeFloatLE(0)      // linearVelocityY
  writer.writeFloatLE(0.0001) // linearVelocityZ
  writer.writeFloatLE(0.002)  // angularVelocityX
  writer.writeFloatLE(0)      // angularVelocityY
  writer.writeFloatLE(0.0002) // angularVelocityZ
  writer.writeFloatLE(-0.003) // linearAccelerationX
  writer.writeFloatLE(0)      // linearAccelerationY
  writer.writeFloatLE(0.0003) // linearAccelerationZ
  writer.writeFloatLE(0.004)  // angularAccelerationX
  writer.writeFloatLE(0)      // angularAccelerationY
  writer.writeFloatLE(0.0004) // angularAccelerationZ

  writer.writeFloatLE(0)                // hookPositionX
  writer.writeFloatLE(1)                // hookPositionY
  writer.writeFloatLE(-5.5)             // hookPositionZ
  writer.writeFloatLE(-0.5, wheelCount) // wheelPositionX
  writer.writeFloatLE(0.5, wheelCount)  // wheelPositionY
  writer.writeFloatLE(1.5, wheelCount)  // wheelPositionZ

  // Fifth trailer zone
  writer.writeDoubleLE(1600)    // worldX
  writer.writeDoubleLE(-1.5)    // worldY
  writer.writeDoubleLE(-30500)  // worldZ
  writer.writeDoubleLE(0.5)     // rotationX (Heading)
  writer.writeDoubleLE(-0.0005) // rotationY (Pitch)
  writer.writeDoubleLE(5.5)     // rotationZ (Roll)

  // Sixth trailer zone
  writer.writeString('id',                    stringSize) // id
  writer.writeString('cargoAcessoryId',       stringSize) // cargoAcessoryId
  writer.writeString('bodyType',              stringSize) // bodyType
  writer.writeString('brandId',               stringSize) // brandId
  writer.writeString('brand',                 stringSize) // brand
  writer.writeString('name',                  stringSize) // name
  writer.writeString('chainType',             stringSize) // chainType
  writer.writeString('licensePlate',          stringSize) // licensePlate
  writer.writeString('licensePlateCountry',   stringSize) // licensePlateCountry
  writer.writeString('licensePlateCountryId', stringSize) // licensePlateCountryId
}

module.exports = writer.buffer