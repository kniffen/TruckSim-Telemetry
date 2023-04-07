const createWriter = require('../createWriter.js')
const { wheelCount, gearCountForward, gearCountReverse } = require('./constants.js')

const start  = 700
const end    = 1500
const writer = createWriter(Buffer.alloc(end-start))

writer.writeFloatLE(3) // scale

writer.writeFloatLE(500)                     // fuelCapacity (Litres)
writer.writeFloatLE(0.15)                    // fuelWarningFactor (Fraction)
writer.writeFloatLE(80)                      // adblueCapacity (Litres)
writer.writeFloatLE(0.15)                    // adblueWarningFactor (Fraction)
writer.writeFloatLE(60.5)                    // airPressureWarning (PSI)
writer.writeFloatLE(34.5)                    // airPressurEmergency (PSI)
writer.writeFloatLE(10.5)                    // oilPressureWarning (PSI)
writer.writeFloatLE(105)                     // waterTemperatureWarning (Celsius)
writer.writeFloatLE(23.5)                    // batteryVoltageWarning (Voltage)
writer.writeFloatLE(2500)                    // engineRpmMax
writer.writeFloatLE(2.5)                     // gearDifferential (Ratio)
writer.writeFloatLE(20000.5)                 // cargoMass (Kilograms)
writer.writeFloatLE(0.5, wheelCount)         // truckWheelRadius
writer.writeFloatLE(10.1, gearCountForward)  // gearRatiosForward
writer.writeFloatLE(-14.5, gearCountReverse) // gearRatiosReverse
writer.writeFloatLE(645.5)                   // unitMass (Kilograms)

writer.writeFloatLE(16.6667)             // speed (m/s)
writer.writeFloatLE(550.5)               // engineRpm
writer.writeFloatLE(-0.5)                // userSteer <-1,1>
writer.writeFloatLE(0.5)                 // userThrottle <0,1>
writer.writeFloatLE(0.1)                 // userBrake <0,1>
writer.writeFloatLE(0.2)                 // userClutch <0,1>
writer.writeFloatLE(-0.1)                // gameSteer <-1,1>
writer.writeFloatLE(-0.2)                // gameThrottle <0,1>
writer.writeFloatLE(-0.4)                // gameBrake <0,1>
writer.writeFloatLE(-0.5)                // gameClutch <0,1>
writer.writeFloatLE(0)                   // cruiseControlSpeed (m/s)
writer.writeFloatLE(145.5)               // airPressure (PSI)
writer.writeFloatLE(25.5)                // brakeTemperature (Celsius)
writer.writeFloatLE(300.5)               // fuel (Litres)
writer.writeFloatLE(10.5)                // fuelAvgConsumption (liters/km)
writer.writeFloatLE(650.5)               // fuelRange (Km)
writer.writeFloatLE(50.5)                // adblue (Litres)
writer.writeFloatLE(35.5)                // oilPressure (PSI)
writer.writeFloatLE(80.5)                // oilTemperature (Celsius)
writer.writeFloatLE(60)                  // waterTemperature (Celsius)
writer.writeFloatLE(12)                  // batteryVoltage (Voltage)
writer.writeFloatLE(0.5)                 // lightsDashboard <0,1>
writer.writeFloatLE(0.1)                 // wearEngine <0,1>
writer.writeFloatLE(0.2)                 // wearTransmission <0,1>
writer.writeFloatLE(0.3)                 // wearCabin <0,1>
writer.writeFloatLE(0.4)                 // wearChassis <0,1>
writer.writeFloatLE(0.5)                 // wearWheels <0,1>
writer.writeFloatLE(2500)                // truckOdometer (Km)
writer.writeFloatLE(500)                 // routeDistance (Meters)
writer.writeFloatLE(30)                  // routeTime (Seconds)
writer.writeFloatLE(22.2222)             // speedLimit (m/s)
writer.writeFloatLE(0.001, wheelCount)   // truck_wheelSuspDeflection (Meters)
writer.writeFloatLE(0.00001, wheelCount) // truck_wheelVelocity (Rotations per second)
writer.writeFloatLE(0, wheelCount)       // truck_wheelSteering <-0.25,0.25>(Angle of rotation in fractions)
writer.writeFloatLE(0.5, wheelCount)     // truck_wheelRotation <0,1>(Angle of rotation in fractions)
writer.writeFloatLE(0, wheelCount)       // truck_wheelLift <0;1>(0=not lifted, 1=fully lifted)
writer.writeFloatLE(0, wheelCount)       // truck_wheelLiftOffset (Meters)

writer.writeFloatLE(0.5)  // jobDeliveredCargoDamage <0,1>
writer.writeFloatLE(1500) // jobDeliveredDistanceKm (Km)
writer.writeFloatLE(200)  // refuelAmount (Litres)

writer.writeFloatLE(0.2) // cargoDamage <0,1>

module.exports = writer.buffer