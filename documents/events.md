---
title: Events
---
# Events

## Plugin events
| Event          | Description                       |
| -------------- | --------------------------------- |
| `connected`    | Emitted when the game connects    |
| `disconnected` | Emitted when the game disconnects |

<br/>
<br/>

## Game events
| Event         | Description                              | Parameter                                                          |
| ------------- | ---------------------------------------- | ------------------------------------------------------------------ |
| `ferry`       | Emitted when a ferry ride is paid for    | [`TSTFerryEvent`](../interfaces/main.TSTFerryEvent.html)           |
| `fine`        | Emitted when a fine is issues            | [`TSTFineEvent`](../interfaces/main.TSTFineEvent.html)             |
| `pause`       | Emitted when the game pauses or unpauses | [`paused`](../interfaces/main.SCSSDKTelemetry.html#paused)         |
| `refuel-paid` | Emitted when fuel is paid for            | [`TSTRefuelPaidEvent`](../interfaces/main.TSTRefuelPaidEvent.html) |
| `time`        | Emitted when the in-game time changes    | [`timeAbs`](../interfaces/main.SCSSDKTelemetry.html#timeabs)       |
| `tollgate`    | Emitted when a toll is paid              | [`TSTTollgateEvent`](../interfaces/main.TSTTollgateEvent.html)     |
| `train`       | Emitted when a train ride is paid for    | [`TSTTrainEvent`](../interfaces/main.TSTTrainEvent.html)           |

<br/>
<br/>

## Navigation events
| Event         | Description                          | Parameter                                                          |
| ------------- | ------------------------------------ | ------------------------------------------------------------------ |
| `speed-limit` | Emitted when the speed limit changes | [`speedLimit`](../interfaces/main.SCSSDKTelemetry.html#speedlimit) |

<br/>
<br/>

## Job events
| Event           | Description                                              | Parameter                                                              |
| --------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| `job-started`   | Emitted when a new job has been picked up                | [`TSTJobStartedEvent`](../interfaces/main.TSTJobStartedEvent.html)     |
| `job-delivered` | Emitted when a job has been delivered to its destination | [`TSTJobDeliveredEvent`](../interfaces/main.TSTJobDeliveredEvent.html) |
| `job-finished`  | when a job has been delivered or cancelled               |                                                                        |
| `job-cancelled` | Emitted when a job has been cancelled                    | [`TSTJobCancelledEvent`](../interfaces/main.TSTJobCancelledEvent.html) |

<br/>
<br/>

## Truck events
| Event                      | Description                                             | Parameter                                                                    |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `cruise-control`           | Emitted when the cruise control is enabled or disabled  | [`TSTCruiseControlEvent`](../interfaces/main.TSTCruiseControlEvent.html)     |
| `cruise-control-increased` | Emitted when the cruise control speed is increased      | [`TSTCruiseControlEvent`](../interfaces/main.TSTCruiseControlEvent.html)     |
| `cruise-control-decrease`  | Emitted when the cruise control peed is decreased       | [`TSTCruiseControlEvent`](../interfaces/main.TSTCruiseControlEvent.html)     |
| `electric`                 | Emitted when electrics of the truck is turned on or off | [`electricEnabled`](../interfaces/main.SCSSDKTelemetry.html#electricenabled) |
| `emergency`                | Emitted when a truck emergency occurs                   | [`TSTEmergencyEvent`](../types/main.TSTEmergencyEvent.html)                  |
| `engine`                   | Emitted when engine of the truck is turned on or off    | [`engineEnabled`](../interfaces/main.SCSSDKTelemetry.html#engineenabled)     |
| `gear-change`              | Emitted when the truck changes gear                     | [`TSTGearChangeEvent`](../interfaces/main.TSTGearChangeEvent.html)           |
| `park-brake`               | Emitted when the parking brake is ebabled or disabled   | [`parkBrake`](../interfaces/main.SCSSDKTelemetry.html#parkbrake)             |
| `refuel-start`             | Emitted when fueling has begun                          | [`TSTRefuelEvent`](../interfaces/main.TSTRefuelEvent.html)                   |
| `refuel-stop`              | Emitted when fueling has stopped                        | [`TSTRefuelEvent`](../interfaces/main.TSTRefuelEvent.html)                   |
| `retarder`                 | Emitted when the retarder level changes                 | [`TSTRetarderEvent`](../interfaces/main.TSTRetarderEvent.html)               |
| `warning`                  | Emitted when a truck warning occurs                     | [`TSTWarningEvent`](../types/main.TSTWarningEvent.html)                      |
| `wipers`                   | Emitted when wipers on the truck are turned on or off   | [`wipers`](../interfaces/main.SCSSDKTelemetry.html#wipers)                   |

<br/>
<br/>

## Trailer events
| Event              | Description                        | Parameter |
| ------------------ | ---------------------------------- | --------- |
| `trailer-attached` | Emitted when a trailer is attached | number    |
| `trailer-detached` | Emitted when a trailer is detached | number    |