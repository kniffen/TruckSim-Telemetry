import tst from 'trucksim-telemetry'

// types
import {
  TruckDamage,
  CruiseControlEventData,
  TransmissionGear,
  Retarder,
  Fuel,
} from 'trucksim-telemetry'

const telemetry = tst()

// Truck damage event
function truckDamageCallback(current: TruckDamage, previous: TruckDamage) {}

telemetry.truck.addListener('damage', truckDamageCallback)
telemetry.truck.on('damage', truckDamageCallback)
telemetry.truck.once('damage', truckDamageCallback)
telemetry.truck.prependListener('damage', truckDamageCallback)
telemetry.truck.prependOnceListener('damage', truckDamageCallback)

// Truck cruise control toggle event
function cruiseControlToggleCallback(data: CruiseControlEventData) {}

telemetry.truck.addListener('cruise-control', cruiseControlToggleCallback)
telemetry.truck.on('cruise-control', cruiseControlToggleCallback)
telemetry.truck.once('cruise-control', cruiseControlToggleCallback)
telemetry.truck.prependListener('cruise-control', cruiseControlToggleCallback)
telemetry.truck.prependOnceListener('cruise-control', cruiseControlToggleCallback)

// Truck cruise control increase event
function cruiseControlIncreaseCallback(data: CruiseControlEventData) {}

telemetry.truck.addListener('cruise-control-increase', cruiseControlIncreaseCallback)
telemetry.truck.on('cruise-control-increase', cruiseControlIncreaseCallback)
telemetry.truck.once('cruise-control-increase', cruiseControlIncreaseCallback)
telemetry.truck.prependListener('cruise-control-increase', cruiseControlIncreaseCallback)
telemetry.truck.prependOnceListener('cruise-control-increase', cruiseControlIncreaseCallback)

// Truck cruise control decrease event
function cruiseControlDecreaseCallback(data: CruiseControlEventData) {}

telemetry.truck.addListener('cruise-control-decrease', cruiseControlDecreaseCallback)
telemetry.truck.on('cruise-control-decrease', cruiseControlDecreaseCallback)
telemetry.truck.once('cruise-control-decrease', cruiseControlDecreaseCallback)
telemetry.truck.prependListener('cruise-control-decrease', cruiseControlDecreaseCallback)
telemetry.truck.prependOnceListener('cruise-control-decrease', cruiseControlDecreaseCallback)

// Truck warning event
function truckWarningCallback(id: string, enabled: boolean) {}

telemetry.truck.addListener('warning', truckWarningCallback)
telemetry.truck.on('warning', truckWarningCallback)
telemetry.truck.once('warning', truckWarningCallback)
telemetry.truck.prependListener('warning', truckWarningCallback)
telemetry.truck.prependOnceListener('warning', truckWarningCallback)

// Truck emergency event
function truckEmergencyCallback(id: string, current: boolean, previous: boolean) {}

telemetry.truck.addListener('emergency', truckEmergencyCallback)
telemetry.truck.on('emergency', truckEmergencyCallback)
telemetry.truck.once('emergency', truckEmergencyCallback)
telemetry.truck.prependListener('emergency', truckEmergencyCallback)
telemetry.truck.prependOnceListener('emergency', truckEmergencyCallback)

// Truck engine event
function truckEngineCallback(enabled: boolean) {}

telemetry.truck.addListener('engine', truckEngineCallback)
telemetry.truck.on('engine', truckEngineCallback)
telemetry.truck.once('engine', truckEngineCallback)
telemetry.truck.prependListener('engine', truckEngineCallback)
telemetry.truck.prependOnceListener('engine', truckEngineCallback)

// Truck electric event
function truckElectricCallback(enabled: boolean) {}

telemetry.truck.addListener('electric', truckElectricCallback)
telemetry.truck.on('electric', truckElectricCallback)
telemetry.truck.once('electric', truckElectricCallback)
telemetry.truck.prependListener('electric', truckElectricCallback)
telemetry.truck.prependOnceListener('electric', truckElectricCallback)

// Truck gear-change event
function truckGearChangeCallback(current: TransmissionGear, previous: TransmissionGear) {}

telemetry.truck.addListener('gear-change', truckGearChangeCallback)
telemetry.truck.on('gear-change', truckGearChangeCallback)
telemetry.truck.once('gear-change', truckGearChangeCallback)
telemetry.truck.prependListener('gear-change', truckGearChangeCallback)
telemetry.truck.prependOnceListener('gear-change', truckGearChangeCallback)

// Truck park event
function truckParkCallback(enabled: boolean) {}

telemetry.truck.addListener('park', truckParkCallback)
telemetry.truck.on('park', truckParkCallback)
telemetry.truck.once('park', truckParkCallback)
telemetry.truck.prependListener('park', truckParkCallback)
telemetry.truck.prependOnceListener('park', truckParkCallback)

// Truck retarder event
function truckRetarderCallback(current: Retarder, previous: Retarder) {}

telemetry.truck.addListener('retarder', truckRetarderCallback)
telemetry.truck.on('retarder', truckRetarderCallback)
telemetry.truck.once('retarder', truckRetarderCallback)
telemetry.truck.prependListener('retarder', truckRetarderCallback)
telemetry.truck.prependOnceListener('retarder', truckRetarderCallback)

// Truck wipers event
function truckWipersCallback(enabled: boolean) {}

telemetry.truck.addListener('wipers', truckWipersCallback)
telemetry.truck.on('wipers', truckWipersCallback)
telemetry.truck.once('wipers', truckWipersCallback)
telemetry.truck.prependListener('wipers', truckWipersCallback)
telemetry.truck.prependOnceListener('wipers', truckWipersCallback)

// Truck refuel-started event
function truckRefuelStartedCallback(data: Fuel) {}

telemetry.truck.addListener('refuel-started', truckRefuelStartedCallback)
telemetry.truck.on('refuel-started', truckRefuelStartedCallback)
telemetry.truck.once('refuel-started', truckRefuelStartedCallback)
telemetry.truck.prependListener('refuel-started', truckRefuelStartedCallback)
telemetry.truck.prependOnceListener('refuel-started', truckRefuelStartedCallback)

// Truck refuel-stopped event
function truckRefuelStoppedCallback(data: Fuel) {}

telemetry.truck.addListener('refuel-stopped', truckRefuelStoppedCallback)
telemetry.truck.on('refuel-stopped', truckRefuelStoppedCallback)
telemetry.truck.once('refuel-stopped', truckRefuelStoppedCallback)
telemetry.truck.prependListener('refuel-stopped', truckRefuelStoppedCallback)
telemetry.truck.prependOnceListener('refuel-stopped', truckRefuelStoppedCallback)