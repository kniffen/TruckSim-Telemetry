# Events

## game

### connected
| Parameter | Type                                                             |
| --------- | ---------------------------------------------------------------- |
| None      |                                                                  |

---

### disconnected
| Parameter | Type                                                             |
| --------- | ---------------------------------------------------------------- |
| None      |                                                                  |

---

### pause
| Parameter | Type                                                                                                |
| ----------| --------------------------------------------------------------------------------------------------- |
| isPaused  | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### ferry
| Parameter | Type                                 |
| --------- | ------------------------------------ |
| ferryData | [EventTrain](typedefs.md#EventFerry) |

---

### fine
| Parameter | Type                                 |
| --------- | ------------------------------------ |
| data      | [EventsFine](typedefs.md#EventsFine) |

---

### refuel-paid
| Parameter | Type                                             |
| --------- | ------------------------------------------------ |
| data      | [EventsRefuelPaid](typedefs.md#EventsRefuelPaid) |

---

### time-change
| Parameter    | Type                             |
| ------------ | -------------------------------- |
| currentTime  | [GameTime](typedefs.md#GameTime) |
| previousTime | [GameTime](typedefs.md#GameTime) |

---

### tollgate
| Parameter    | Type                                    |
| ------------ | --------------------------------------- |
| tollgateData | [EventTollgate](typedefs.md#EventTollgate) |

---

### train
| Parameter | Type                                 |
| --------- | ------------------------------------ |
| trainData | [EventTrain](typedefs.md#EventTrain) |


## navigation

### speed-limit
| Parameter          | Type                                       |
| ------------------ | ------------------------------------------ |
| currentSpeedLimit  | [NavSpeedLimit](typedefs.md#NavSpeedLimit) |
| previousSpeedLimit | [NavSpeedLimit](typedefs.md#NavSpeedLimit) |


## job

### started
| Parameter | Type                                                           |
| --------- | -------------------------------------------------------------- |
| data      | [EventsJobStartedVerbose](typedefs.md#eventsjobstartedverbose) |

---

### delivered
| Parameter | Type                                                               |
| --------- | ------------------------------------------------------------------ |
| data      | [EventsJobDeliveredVerbose](typedefs.md#eventsjobdeliveredverbose) |

---

### finished
| Parameter | Type                                                             |
| --------- | ---------------------------------------------------------------- |
| None      |                                                                  |

---

### cancelled
| Parameter | Type                                                               |
| --------- | ------------------------------------------------------------------ |
| data      | [EventsJobCancelledVerbose](typedefs.md#eventsjobcancelledverbose) |


## truck

### cruise-control
| Parameter     | Type                                                   |
| ------------- | ------------------------------------------------------ |
| cruisecontrol | [EventsCruiseControl](typedefs.md#EventsCruiseControl) |

---

### cruise-control-decrease
| Parameter     | Type                                                   |
| ------------- | ------------------------------------------------------ |
| cruisecontrol | [EventsCruiseControl](typedefs.md#EventsCruiseControl) |

---

### cruise-control-increase
| Parameter     | Type                                                   |
| ------------- | ------------------------------------------------------ |
| cruisecontrol | [EventsCruiseControl](typedefs.md#EventsCruiseControl) |

---

### damage
Triggers when there is 1% or more increase to the truck's total damage

| Parameter      | Type                                   |
| -------------- | -------------------------------------- |
| currentDamage  | [TruckDamage](typedefs.md#TruckDamage) |
| previousDamage | [TruckDamage](typedefs.md#TruckDamage) |

---

### electric
| Parameter | Type                                                                                                |
| ----------| --------------------------------------------------------------------------------------------------- |
| isEnabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### emergency
| Parameter | Type                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------- |
| emergency | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   |
| isEnabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### engine
| Parameter | Type                                                                                                |
| ----------| --------------------------------------------------------------------------------------------------- |
| isEnabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### gear-change
| Parameter | Type                                             |
| --------- | ------------------------------------------------ |
| current   | [TransmissionGear](typedefs.md#TransmissionGear) |
| previous  | [TransmissionGear](typedefs.md#TransmissionGear) |

---

### park
| Parameter  | Type     |
| ---------- | -------- |
| isEnabled  | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### refuel-started
| Parameter | Type                     | Description                  |
| --------- | ------------------------ | ---------------------------- |
| fuel      | [Fuel](typedefs.md#fuel) | Fuel prior to refuel started |

---

### refuel-stop
| Parameter | Type                     | Description             |
| --------- | ------------------------ | ----------------------- |
| fuel      | [Fuel](typedefs.md#fuel) | Fuel after refuel ended |

---

### retarder
| Parameter        | Type                             |
| ---------------- | -------------------------------- |
| currentRetarder  | [Retarder](typedefs.md#Retarder) |
| previousRetarder | [Retarder](typedefs.md#Retarder) |

---

### warning
| Parameter | Type                                                                                                |
| ----------| --------------------------------------------------------------------------------------------------- |
| warning   | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   |
| isEnabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### wipers
| Parameter | Type                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------- |
| isEnabled | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

## trailers

### coupling
| Parameter  | Type                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------- |
| trailerId  | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   |
| isAttached | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### damage
| Parameter | Type                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------- |
| trailerId | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| current   | [TrailerDamage](typedefs.md#TrailerDamage)                                                        |
| previous  | [TrailerDamage](typedefs.md#TrailerDamage)    


## trailer

### coupling
| Parameter  | Type                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------- |
| isAttached | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

---

### damage
| Parameter | Type                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------- |
| current   | [TrailerDamage](typedefs.md#TrailerDamage)                                                        |
| previous  | [TrailerDamage](typedefs.md#TrailerDamage)                                                        |