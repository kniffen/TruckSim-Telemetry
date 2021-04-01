import isEqual   from "lodash.isequal"
import cloneDeep from "lodash.clonedeep"

export default function eventEmittersTruck(telemetry, data) {
 
  // Truck damage
  if ( Math.floor( data[0]?.truck?.damage.total * 100 ) > Math.floor( data[1]?.truck?.damage.total * 100 ) ) {
    telemetry.truck.emit(
      "damage", 
      cloneDeep(data[0].truck.damage), 
      cloneDeep(data[1].truck.damage)
    )
  }

  // Cruise control toggle
  if ( data[0]?.truck?.cruiseControl.enabled != data[1]?.truck?.cruiseControl.enabled ) {
    const cruiseControlData = {
      enabled:      data[0].truck.cruiseControl.enabled,
      currentSpeed: data[0].truck.speed,
      speedLimit:   data[0].navigation.speedLimit,
      cruiseControlSpeed: {
        value: data[0].truck.cruiseControl.value,
        kph:   data[0].truck.cruiseControl.kph,
        mph:   data[0].truck.cruiseControl.mph
      },
    }

    telemetry.truck.emit( "cruise-control", cruiseControlData )
  }

  // cruise control increase
  if ( data[0]?.truck?.cruiseControl.value > data[1]?.truck?.cruiseControl.value ) {
    const cruiseControlData = {
      enabled:      data[0].truck.cruiseControl.enabled,
      currentSpeed: data[0].truck.speed,
      speedLimit:   data[0].navigation.speedLimit,
      cruiseControlSpeed: {
        value: data[0].truck.cruiseControl.value,
        kph:   data[0].truck.cruiseControl.kph,
        mph:   data[0].truck.cruiseControl.mph
      },
    }

    telemetry.truck.emit( "cruise-control-increase", cruiseControlData )
  }

  // cruise control decrease
  if ( data[0]?.truck?.cruiseControl.value < data[1]?.truck?.cruiseControl.value ) {
    const cruiseControlData = {
      enabled:      data[0].truck.cruiseControl.enabled,
      currentSpeed: data[0].truck.speed,
      speedLimit:   data[0].navigation.speedLimit,
      cruiseControlSpeed: {
        value: data[0].truck.cruiseControl.value,
        kph:   data[0].truck.cruiseControl.kph,
        mph:   data[0].truck.cruiseControl.mph
      },
    }

    telemetry.truck.emit( "cruise-control-decrease", cruiseControlData )
  }

  // Warnings
  const warnings = [
    ["Air Pressure",      data[0]?.truck?.brakes.airPressure.warning.enabled,      data[1]?.truck?.brakes.airPressure.warning.enabled],
    ["Fuel",              data[0]?.truck?.fuel.warning.enabled,                    data[1]?.truck?.fuel.warning.enabled],
    ["AdBlue",            data[0]?.truck?.adBlue.warning.enabled,                  data[1]?.truck?.adBlue.warning.enabled],
    ["Oil Pressure",      data[0]?.truck?.engine.oilPressure.warning.enabled,      data[1]?.truck?.engine.oilPressure.warning.enabled],
    ["Water Temperature", data[0]?.truck?.engine.waterTemperature.warning.enabled, data[1]?.truck?.engine.waterTemperature.warning.enabled],
    ["Battery Voltage",   data[0]?.truck?.engine.batteryVoltage.warning.enabled,   data[1]?.truck?.engine.batteryVoltage.warning.enabled],
  ]

  for (let i = 0; i < warnings.length; i++) {
    if (warnings[i][1] != warnings[i][2]) telemetry.truck.emit("warning", warnings[i][0], warnings[i][1])
  }

  // Emergencies
  const emergencies = [
    ["Air Pressure", data[0]?.truck?.brakes.airPressure.emergency.enabled, data[1]?.truck?.brakes.airPressure.emergency.enabled]
  ]

  for (let i = 0; i < emergencies.length; i++) {
    if (emergencies[i][1] != emergencies[i][2]) telemetry.truck.emit("emergency", emergencies[i][0], emergencies[i][1])
  }

  // Engine
  if (data[0]?.truck?.engine.enabled != data[1]?.truck?.engine.enabled)
    telemetry.truck.emit("engine", data[0].truck.engine.enabled)

  // Electric
  if (data[0]?.truck?.electric.enabled != data[1]?.truck?.electric.enabled)
    telemetry.truck.emit("electric", data[0].truck.electric.enabled)

  // Gear change
  if (data[0]?.truck?.transmission.gear.selected != data[1]?.truck?.transmission.gear.selected) {
    telemetry.truck.emit(
      "gear-change", 
      cloneDeep(data[0].truck.transmission.gear),
      cloneDeep(data[1].truck.transmission.gear),
    )
  }

  // Park
  if (data[0]?.truck?.brakes.parking.enabled != data[1]?.truck?.brakes.parking.enabled)
    telemetry.truck.emit("park", data[0].truck.brakes.parking.enabled)

  // Retarder
  if (!isEqual(data[0]?.truck?.brakes.retarder, data[1]?.truck?.brakes.retarder)){
    telemetry.truck.emit(
      "retarder", 
      cloneDeep(data[0].truck.brakes.retarder), 
      cloneDeep(data[1].truck.brakes.retarder),
    )
  }

  // Wipers
  if (data[0]?.truck?.wipers.enabled != data[1]?.truck?.wipers.enabled)
    telemetry.truck.emit("wipers", data[0].truck.wipers.enabled)

  // Refuel
  if ( data[0]?.events?.refuel.active && !data[1]?.events?.refuel.active ) {
    telemetry.truck.emit( "refuel-started", data[1].truck.fuel )
  }

  if ( !data[0]?.events?.refuel.active && data[1]?.events?.refuel.active ) {
    telemetry.truck.emit( "refuel-stopped", data[0].truck.fuel )
  }


}