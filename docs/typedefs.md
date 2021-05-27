
### Acceleration
| Name | Type | Optional |
| ---- | ---- | -------- |
| linearVelocity | [Velocity](typedefs.md#Velocity) | YES |
| angularVelocity | [Velocity](typedefs.md#Velocity) | NO |
| linearAcceleration | [Velocity](typedefs.md#Velocity) | YES |
| angularAcceleration | [Velocity](typedefs.md#Velocity) | NO |

---

### AdBlue
| Name | Type | Optional |
| ---- | ---- | -------- |
| capacity | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| warning | [EngineWarning](typedefs.md#EngineWarning) | NO |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### AirPressure
| Name | Type | Optional |
| ---- | ---- | -------- |
| warning | [AirPressureWarning](typedefs.md#AirPressureWarning) | NO |
| emergency | [AirPressureEmergency](typedefs.md#AirPressureEmergency) | NO |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### AirPressureEmergency
| Name | Type | Optional |
| ---- | ---- | -------- |
| factor | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### AirPressureWarning
| Name | Type | Optional |
| ---- | ---- | -------- |
| factor | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### AuxLight
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Blinker
| Name | Type | Optional |
| ---- | ---- | -------- |
| left | [BlinkerStatus](typedefs.md#BlinkerStatus) | NO |
| right | [BlinkerStatus](typedefs.md#BlinkerStatus) | NO |

---

### BlinkerStatus
| Name | Type | Optional |
| ---- | ---- | -------- |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### Brakes
| Name | Type | Optional |
| ---- | ---- | -------- |
| retarder | [Retarder](typedefs.md#Retarder) | NO |
| airPressure | [AirPressure](typedefs.md#AirPressure) | NO |
| temperature | [Temperature](typedefs.md#Temperature) | NO |
| parking | [Parking](typedefs.md#Parking) | NO |
| motor | [Motor](typedefs.md#Motor) | NO |

---

### Cabin
| Name | Type | Optional |
| ---- | ---- | -------- |
| damage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| position | [Position](typedefs.md#Position) | NO |
| acceleration | [Acceleration](typedefs.md#Acceleration) | NO |
| offset | [Offset](typedefs.md#Offset) | NO |

---

### Chassis
| Name | Type | Optional |
| ---- | ---- | -------- |
| damage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Company
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### Controls
| Name | Type | Optional |
| ---- | ---- | -------- |
| input | [ControlsInput](typedefs.md#ControlsInput) | NO |
| game | [ControlsGame](typedefs.md#ControlsGame) | NO |

---

### ControlsGame
| Name | Type | Optional |
| ---- | ---- | -------- |
| steering | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| throttle | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| brake | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| clutch | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### ControlsInput
| Name | Type | Optional |
| ---- | ---- | -------- |
| steering | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| throttle | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| brake | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| clutch | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### CruiseControl
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| kph | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| mph | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Differential
| Name | Type | Optional |
| ---- | ---- | -------- |
| ratio | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Electric
| Name | Type | Optional |
| ---- | ---- | -------- |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### Engine
| Name | Type | Optional |
| ---- | ---- | -------- |
| oilPressure | [EngineStatus](typedefs.md#EngineStatus) | NO |
| waterTemperature | [EngineStatus](typedefs.md#EngineStatus) | NO |
| batteryVoltage | [EngineStatus](typedefs.md#EngineStatus) | NO |
| rpm | [Rpm](typedefs.md#Rpm) | NO |
| oilTemperature | [OilTemperature](typedefs.md#OilTemperature) | NO |
| damage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### EngineStatus
| Name | Type | Optional |
| ---- | ---- | -------- |
| warning | [EngineWarning](typedefs.md#EngineWarning) | NO |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### EngineWarning
| Name | Type | Optional |
| ---- | ---- | -------- |
| factor | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### EventFerry
| Name | Type | Optional |
| ---- | ---- | -------- |
| source | [TravelSource](typedefs.md#TravelSource) | NO |
| destination | [TravelDestination](typedefs.md#TravelDestination) | NO |
| target | [TravelDestination](typedefs.md#TravelDestination) | NO |
| amount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | YES |

---

### EventRefuel
| Name | Type | Optional |
| ---- | ---- | -------- |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### EventTollgate
| Name | Type | Optional |
| ---- | ---- | -------- |
| amount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | YES |

---

### EventTrain
| Name | Type | Optional |
| ---- | ---- | -------- |
| source | [TravelSource](typedefs.md#TravelSource) | NO |
| destination | [TravelDestination](typedefs.md#TravelDestination) | NO |
| target | [TravelDestination](typedefs.md#TravelDestination) | NO |
| amount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | YES |

---

### Events
| Name | Type | Optional |
| ---- | ---- | -------- |
| job | [EventsJob](typedefs.md#EventsJob) | NO |
| refuelPaid | [EventsRefuelPaid](typedefs.md#EventsRefuelPaid) | NO |
| fine | [EventsFine](typedefs.md#EventsFine) | NO |
| ferry | [EventFerry](typedefs.md#EventFerry) | NO |
| train | [EventTrain](typedefs.md#EventTrain) | NO |
| tollgate | [EventTollgate](typedefs.md#EventTollgate) | NO |
| refuel | [EventRefuel](typedefs.md#EventRefuel) | NO |

---

### EventsCruiseControl
| Name | Type | Optional |
| ---- | ---- | -------- |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| currentSpeed | [Speed](typedefs.md#Speed) | NO |
| speedLimit | [Speed](typedefs.md#Speed) | NO |
| cruiseControlSpeed | [Speed](typedefs.md#Speed) | NO |

---

### EventsFine
| Name | Type | Optional |
| ---- | ---- | -------- |
| offence | [FineOffence](typedefs.md#FineOffence) | NO |
| amount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | YES |

---

### EventsJob
| Name | Type | Optional |
| ---- | ---- | -------- |
| delivered | [EventsJobDelivered](typedefs.md#EventsJobDelivered) | NO |
| started | [EventsJobStarted](typedefs.md#EventsJobStarted) | NO |
| cancelled | [EventsJobCancelled](typedefs.md#EventsJobCancelled) | NO |
| finished | [EventsJobFinished](typedefs.md#EventsJobFinished) | NO |

---

### EventsJobCancelled
| Name | Type | Optional |
| ---- | ---- | -------- |
| penalty | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| startedTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| cancelledTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |

---

### EventsJobCancelledVerbose
| Name | Type | Optional |
| ---- | ---- | -------- |
| cargo | [JobCargo](typedefs.md#JobCargo) | NO |
| expectedDeliveryTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| destination | [JobLocation](typedefs.md#JobLocation) | NO |
| cancelledTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| income | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| isSpecial | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| market | [JobMarket](typedefs.md#JobMarket) | NO |
| penalty | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| plannedDistance | [JobPlannedDistance](typedefs.md#JobPlannedDistance) | NO |
| source | [JobLocation](typedefs.md#JobLocation) | NO |
| startedTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |

---

### EventsJobDelivered
| Name | Type | Optional |
| ---- | ---- | -------- |
| timeTaken | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| startedTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| deliveredTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| earnedXP | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| cargoDamage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| distance | [EventsJobDeliveredDistance](typedefs.md#EventsJobDeliveredDistance) | NO |
| autoParked | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| revenue | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### EventsJobDeliveredDistance
| Name | Type | Optional |
| ---- | ---- | -------- |
| km | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| miles | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### EventsJobDeliveredVerbose
| Name | Type | Optional |
| ---- | ---- | -------- |
| autoParked | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| isSpecial | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| cargo | [JobCargo](typedefs.md#JobCargo) | NO |
| market | [JobMarket](typedefs.md#JobMarket) | NO |
| cargoDamage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| distance | [EventsJobDeliveredDistance](typedefs.md#EventsJobDeliveredDistance) | NO |
| earnedXP | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| expectedDeliveryTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| deliveredTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| plannedDistance | [JobPlannedDistance](typedefs.md#JobPlannedDistance) | NO |
| revenue | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| startedTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| timeTaken | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| destination | [JobLocation](typedefs.md#JobLocation) | NO |
| source | [JobLocation](typedefs.md#JobLocation) | NO |

---

### EventsJobFinished
| Name | Type | Optional |
| ---- | ---- | -------- |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### EventsJobStarted
| Name | Type | Optional |
| ---- | ---- | -------- |
| autoLoaded | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### EventsJobStartedVerbose
| Name | Type | Optional |
| ---- | ---- | -------- |
| autoLoaded | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| cargo | [JobCargo](typedefs.md#JobCargo) | NO |
| expectedDeliveryTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| destination | [JobLocation](typedefs.md#JobLocation) | NO |
| income | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| isSpecial | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| market | [JobMarket](typedefs.md#JobMarket) | NO |
| plannedDistance | [JobPlannedDistance](typedefs.md#JobPlannedDistance) | NO |
| source | [JobLocation](typedefs.md#JobLocation) | NO |

---

### EventsRefuelPaid
| Name | Type | Optional |
| ---- | ---- | -------- |
| amount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| active | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | YES |

---

### FineOffence
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### Fuel
| Name | Type | Optional |
| ---- | ---- | -------- |
| capacity | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| warning | [EngineWarning](typedefs.md#EngineWarning) | NO |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| avgConsumption | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| range | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Game
| Name | Type | Optional |
| ---- | ---- | -------- |
| sdkActive | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| paused | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| timestamp | [GameTimestamp](typedefs.md#GameTimestamp) | NO |
| simulationTimestamp | [GameTimestamp](typedefs.md#GameTimestamp) | NO |
| renderTimestamp | [GameTimestamp](typedefs.md#GameTimestamp) | NO |
| pluginVersion | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| version | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| game | [GameNestedGame](typedefs.md#GameNestedGame) | NO |
| telemetryVersion | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| time | [GameTime](typedefs.md#GameTime) | NO |
| maxTrailerCount | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| scale | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### GameNestedGame
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### GameTime
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| unix | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### GameTimestamp
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Head
| Name | Type | Optional |
| ---- | ---- | -------- |
| position | [Position](typedefs.md#Position) | NO |
| offset | [Offset](typedefs.md#Offset) | NO |

---

### Hook
| Name | Type | Optional |
| ---- | ---- | -------- |
| position | [Position](typedefs.md#Position) | NO |

---

### Job
| Name | Type | Optional |
| ---- | ---- | -------- |
| expectedDeliveryTimestamp | [JobTimestamp](typedefs.md#JobTimestamp) | NO |
| plannedDistance | [JobPlannedDistance](typedefs.md#JobPlannedDistance) | NO |
| cargo | [JobCargo](typedefs.md#JobCargo) | NO |
| isSpecial | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| destination | [JobLocation](typedefs.md#JobLocation) | NO |
| source | [JobLocation](typedefs.md#JobLocation) | NO |
| market | [JobMarket](typedefs.md#JobMarket) | NO |
| income | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### JobCargo
| Name | Type | Optional |
| ---- | ---- | -------- |
| mass | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| unitMass | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| damage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| isLoaded | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### JobCity
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### JobLocation
| Name | Type | Optional |
| ---- | ---- | -------- |
| city | [JobCity](typedefs.md#JobCity) | NO |
| company | [Company](typedefs.md#Company) | NO |

---

### JobMarket
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### JobPlannedDistance
| Name | Type | Optional |
| ---- | ---- | -------- |
| km | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| miles | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### JobTimestamp
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| unix | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### LicensePlate
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| country | [LicensePlateCountry](typedefs.md#LicensePlateCountry) | NO |

---

### LicensePlateCountry
| Name | Type | Optional |
| ---- | ---- | -------- |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### LightStatus
| Name | Type | Optional |
| ---- | ---- | -------- |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### Lights
| Name | Type | Optional |
| ---- | ---- | -------- |
| auxFront | [AuxLight](typedefs.md#AuxLight) | NO |
| auxRoof | [AuxLight](typedefs.md#AuxLight) | NO |
| dashboardBacklight | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| blinker | [Blinker](typedefs.md#Blinker) | NO |
| parking | [Parking](typedefs.md#Parking) | NO |
| beamLow | [LightStatus](typedefs.md#LightStatus) | NO |
| beamHigh | [LightStatus](typedefs.md#LightStatus) | NO |
| beacon | [LightStatus](typedefs.md#LightStatus) | NO |
| brake | [LightStatus](typedefs.md#LightStatus) | NO |
| reverse | [LightStatus](typedefs.md#LightStatus) | NO |

---

### Make
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### Model
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### Motor
| Name | Type | Optional |
| ---- | ---- | -------- |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### NavSpeedLimit
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| kph | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| mph | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Navigation
| Name | Type | Optional |
| ---- | ---- | -------- |
| nextRestStop | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| distance | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| time | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| speedLimit | [NavSpeedLimit](typedefs.md#NavSpeedLimit) | NO |

---

### Offset
| Name | Type | Optional |
| ---- | ---- | -------- |
| position | [Position](typedefs.md#Position) | NO |
| orientation | [Orientation](typedefs.md#Orientation) | NO |

---

### OilTemperature
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Options
| Name | Type | Optional |
| ---- | ---- | -------- |
| mmfName | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | YES |

---

### Orientation
| Name | Type | Optional |
| ---- | ---- | -------- |
| heading | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| pitch | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| roll | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Parking
| Name | Type | Optional |
| ---- | ---- | -------- |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---

### Position
| Name | Type | Optional |
| ---- | ---- | -------- |
| X | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| Y | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| Z | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Retarder
| Name | Type | Optional |
| ---- | ---- | -------- |
| steps | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| level | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Rpm
| Name | Type | Optional |
| ---- | ---- | -------- |
| max | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Speed
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| kph | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| mph | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Telemetry
| Name | Type | Optional |
| ---- | ---- | -------- |
| opts | [Options](typedefs.md#Options) | NO |
| data | [TelemetryData](typedefs.md#TelemetryData) | NO |
| game | [128](typedefs.md#128) | NO |
| job | [128](typedefs.md#128) | NO |
| navigation | [128](typedefs.md#128) | NO |
| trailers | [128](typedefs.md#128) | NO |
| trailer | [128](typedefs.md#128) | NO |
| truck | [128](typedefs.md#128) | NO |

---

### TelemetryData
| Name | Type | Optional |
| ---- | ---- | -------- |
| controls | [Controls](typedefs.md#Controls) | NO |
| events | [Events](typedefs.md#Events) | YES |
| game | [Game](typedefs.md#Game) | NO |
| job | [Job](typedefs.md#Job) | NO |
| navigation | [Navigation](typedefs.md#Navigation) | NO |
| substances | [Substances](typedefs.md#Substances) | YES |
| trailer | [Trailer](typedefs.md#Trailer) | NO |
| trailers | [178](typedefs.md#178) | NO |
| truck | [Truck](typedefs.md#Truck) | NO |

---

### Temperature
| Name | Type | Optional |
| ---- | ---- | -------- |
| value | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Trailer
| Name | Type | Optional |
| ---- | ---- | -------- |
| wheels | [178](typedefs.md#178) | NO |
| attached | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| cargo | [TrailerDamageValue](typedefs.md#TrailerDamageValue) | NO |
| chassis | [TrailerDamageValue](typedefs.md#TrailerDamageValue) | NO |
| acceleration | [Acceleration](typedefs.md#Acceleration) | NO |
| hook | [Hook](typedefs.md#Hook) | NO |
| position | [Position](typedefs.md#Position) | NO |
| orientation | [Orientation](typedefs.md#Orientation) | NO |
| model | [Model](typedefs.md#Model) | NO |
| accessoryId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| bodyType | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| make | [Make](typedefs.md#Make) | NO |
| brand | [Make](typedefs.md#Make) | NO |
| chainType | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| licensePlate | [LicensePlate](typedefs.md#LicensePlate) | NO |
| damage | [TrailerDamage](typedefs.md#TrailerDamage) | NO |

---

### TrailerDamage
| Name | Type | Optional |
| ---- | ---- | -------- |
| cargo | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| chassis | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| wheels | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| total | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### TrailerDamageValue
| Name | Type | Optional |
| ---- | ---- | -------- |
| damage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### TrailerWheel
| Name | Type | Optional |
| ---- | ---- | -------- |
| lift | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| liftable | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| liftOffset | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| onGround | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| position | [Position](typedefs.md#Position) | NO |
| powered | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| radius | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| rotation | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| simulated | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| steerable | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| steering | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| substance | [WheelSubstance](typedefs.md#WheelSubstance) | NO |
| suspDeflection | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| velocity | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### TrailerWheelSubstance
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### Transmission
| Name | Type | Optional |
| ---- | ---- | -------- |
| forwardGears | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| reverseGears | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| selectors | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| slot | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| slots | [178](typedefs.md#178) | NO |
| gear | [TransmissionGear](typedefs.md#TransmissionGear) | NO |
| gearRatiosForward | [178](typedefs.md#178) | NO |
| gearRatiosReverse | [178](typedefs.md#178) | NO |
| damage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| selector | [178](typedefs.md#178) | NO |
| shifterType | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### TransmissionGear
| Name | Type | Optional |
| ---- | ---- | -------- |
| selected | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| displayed | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### TransmissionSlot
| Name | Type | Optional |
| ---- | ---- | -------- |
| handlePosition | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| selector | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| gear | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### TravelDestination
| Name | Type | Optional |
| ---- | ---- | -------- |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### TravelSource
| Name | Type | Optional |
| ---- | ---- | -------- |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### Truck
| Name | Type | Optional |
| ---- | ---- | -------- |
| transmission | [Transmission](typedefs.md#Transmission) | NO |
| brakes | [Brakes](typedefs.md#Brakes) | NO |
| wheels | [178](typedefs.md#178) | NO |
| lights | [Lights](typedefs.md#Lights) | NO |
| fuel | [Fuel](typedefs.md#Fuel) | NO |
| adBlue | [AdBlue](typedefs.md#AdBlue) | NO |
| engine | [Engine](typedefs.md#Engine) | NO |
| differential | [Differential](typedefs.md#Differential) | NO |
| speed | [Speed](typedefs.md#Speed) | NO |
| cruiseControl | [CruiseControl](typedefs.md#CruiseControl) | NO |
| cabin | [Cabin](typedefs.md#Cabin) | NO |
| chassis | [Chassis](typedefs.md#Chassis) | NO |
| odometer | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| electric | [Electric](typedefs.md#Electric) | NO |
| wipers | [Wipers](typedefs.md#Wipers) | NO |
| head | [Head](typedefs.md#Head) | NO |
| hook | [Hook](typedefs.md#Hook) | NO |
| acceleration | [Acceleration](typedefs.md#Acceleration) | NO |
| position | [Position](typedefs.md#Position) | NO |
| orientation | [Orientation](typedefs.md#Orientation) | NO |
| make | [Make](typedefs.md#Make) | NO |
| brand | [Make](typedefs.md#Make) | NO |
| model | [Model](typedefs.md#Model) | NO |
| licensePlate | [LicensePlate](typedefs.md#LicensePlate) | NO |
| damage | [TruckDamage](typedefs.md#TruckDamage) | NO |

---

### TruckDamage
| Name | Type | Optional |
| ---- | ---- | -------- |
| cabin | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| chassis | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| engine | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| transmission | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| wheels | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| total | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### TruckWheel
| Name | Type | Optional |
| ---- | ---- | -------- |
| substance | [WheelSubstance](typedefs.md#WheelSubstance) | NO |
| radius | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| suspDeflection | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| velocity | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| steering | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| rotation | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| lift | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| liftOffset | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| position | [Position](typedefs.md#Position) | NO |
| steerable | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| simulated | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| powered | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| liftable | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| onGround | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |
| damage | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### Velocity
| Name | Type | Optional |
| ---- | ---- | -------- |
| X | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| Y | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| Z | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |

---

### WatchOptions
| Name | Type | Optional |
| ---- | ---- | -------- |
| interval | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | YES |

---

### WheelSubstance
| Name | Type | Optional |
| ---- | ---- | -------- |
| id | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | NO |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | NO |

---

### Wipers
| Name | Type | Optional |
| ---- | ---- | -------- |
| enabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | NO |

---
