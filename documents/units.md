---
title: Units
---
# Units

## Controls
Properties related to player input and vehicle controls.

| Property       | Type   | Min  | Max |
| -------------- | ------ | ---- | --- |
| `gameClutch`   | number | 0.0  | 1.0 |
| `gameSteer`    | number | -1.0 | 1.0 |
| `gameThrottle` | number | 0.0  | 1.0 |
| `userBrake`    | number | 0.0  | 1.0 |
| `userClutch`   | number | 0.0  | 1.0 |
| `userSteer`    | number | -1.0 | 1.0 |
| `userThrottle` | number | 0.0  | 1.0 |

<br/>
<br/>

## Economy

| Property              | Type   | Unit     | Min                             | Max                             |
| --------------------- | ------ | -------- | ------------------------------- | ------------------------------- |
| `ferryPayAmount`      | bigint | Euro/USD | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |
| `fineAmount`          | bigint | Euro/USD | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |
| `jobCancelledPenalty` | bigint | Euro/USD | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |
| `jobDeliveredRevenue` | bigint | Euro/USD | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |
| `jobIncome`           | bigint | Euro/USD | 0                               | BigInt(Number.MAX_SAFE_INTEGER) |
| `tollgatePayAmount`   | bigint | Euro/USD | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |
| `trainPayAmount`      | bigint | Euro/USD | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |

<br/>
<br/>

## Fluids
Properties related to vehicle fluids.

| Property             | Type   | Unit                 | Min                     | Max                     |
| -------------------- | ------ | -------------------- | ----------------------- | ----------------------- |
| `adblue`             | number | Liters               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `adblueCapacity`     | number | Liters               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `fuel`               | number | Liters               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `fuelAvgConsumption` | number | Liters per kilometer | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `fuelCapacity`       | number | Liters               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `fuelRange`          | number | Kilometers           | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |

<br/>
<br/>

## Physics
Properties related to the physical simulation of the truck and environment.

| Property                   | Type   | Unit          | Min                     | Max                     |
| -------------------------- | ------ | ------------- | ----------------------- | ----------------------- |
| `aaAccelerationX`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `aaAccelerationY`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `aaAccelerationZ`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `accelerationX`            | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `accelerationY`            | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `accelerationZ`            | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `avAccelerationX`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `avAccelerationY`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `avAccelerationZ`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinAAX`                 | number | rotations/s^2 | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinAAY`                 | number | rotations/s^2 | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinAAZ`                 | number | rotations/s^2 | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinAVX`                 | number | Rotations/s   | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinAVY`                 | number | Rotations/s   | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinAVZ`                 | number | Rotations/s   | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinOffsetrotationX`     | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinOffsetrotationY`     | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinOffsetrotationZ`     | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinOffsetX`             | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinOffsetY`             | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinOffsetZ`             | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinPositionX`           | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinPositionY`           | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cabinPositionZ`           | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `coordinateX`              | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `coordinateY`              | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `coordinateZ`              | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headOffsetrotationX`      | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headOffsetrotationY`      | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headOffsetrotationZ`      | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headOffsetX`              | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headOffsetY`              | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headOffsetZ`              | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headPositionX`            | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headPositionY`            | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `headPositionZ`            | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `lvAccelerationX`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `lvAccelerationY`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `lvAccelerationZ`          | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `rotationX`                | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `rotationY`                | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `rotationZ`                | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckHookPositionX`       | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckHookPositionY`       | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckHookPositionZ`       | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckWheelLift`           | number |               | 0                       | 1                       |
| `truckWheelLiftOffset`     | number |               | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckWheelPositionX`      | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckWheelPositionY`      | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckWheelPositionZ`      | number | Coordinate    | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckWheelSteering`       | number | Turns         | -0.25                   | 0.25                    |
| `truckWheelSuspDeflection` | number | Meters        | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `truckWheelVelocity`       | number | Rotations/s   | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |

<br/>
<br/>

## Speed and distance
Properties related to vehicle speed and distance traveled.

| Property                 | Type   | Unit              | Min                     | Max                     |
| ------------------------ | ------ | ----------------- | ----------------------- | ----------------------- |
| `cruiseControlSpeed`     | number | Meters per second | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `jobDeliveredDistanceKm` | number | Kilometers        | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `plannedDistanceKm`      | number | Kilometers        | 0                       | Number.MAX_SAFE_INTEGER |
| `routeDistance`          | number | Meters            | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `speed`                  | number | Meters per second | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `speedLimit`             | number | Meters per second | -1.0                    | Number.MAX_SAFE_INTEGER |
| `truckOdometer`          | number | Kilometers        | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |

<br/>
<br/>

## Time
| Property                   | Type   | Unit         | Min                             | Max                             |
| -------------------------- | ------ | ------------ | ------------------------------- | ------------------------------- |
| `jobDeliveredDeliveryTime` | number | Minutes      | 0                               | Number.MAX_SAFE_INTEGER         |
| `jobFinishedTime`          | number | Minutes      | 0                               | Number.MAX_SAFE_INTEGER         |
| `jobStartingTime`          | number | Minutes      | 0                               | Number.MAX_SAFE_INTEGER         |
| `multiplayerTimeOffset`    | bigint |              | 0                               | BigInt(Number.MAX_SAFE_INTEGER) |
| `renderTime`               | bigint | Microseconds | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |
| `restStop`                 | number | Minutes      | Number.MIN_SAFE_INTEGER         | Number.MAX_SAFE_INTEGER         |
| `routeTime`                | number | Seconds      | Number.MIN_SAFE_INTEGER         | Number.MAX_SAFE_INTEGER         |
| `simulatedTime`            | bigint | Microseconds | BigInt(Number.MIN_SAFE_INTEGER) | BigInt(Number.MAX_SAFE_INTEGER) |
| `time`                     | bigint | Microseconds | 0                               | BigInt(Number.MAX_SAFE_INTEGER) |
| `timeAbs`                  | number | Minutes      | 0                               | Number.MAX_SAFE_INTEGER         |
| `timeAbsDelivery`          | number | Minutes      | 0                               | Number.MAX_SAFE_INTEGER         |

In-game time is provided in minutes, this can be formatted with some simple eritmatic
```typescript
const { timeAbs } = getData();

const day   = Math.floor(timeAbs / (60 * 24));
const hours = Math.floor(timeAbs / 60) % 24;
const min   = timeAbs % 60;

console.log(`Day ${day} at ${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`); // Day 5 at 12:00
```
<br/>
<br/>

## Other
| Property           | Type   | Unit      | Min                     | Max                     |
| ------------------ | ------ | --------- | ----------------------- | ----------------------- |
| `airPressure`      | number | PSI       | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `batteryVoltage`   | number | Volts     | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `brakeTemperature` | number | Celsius   | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `cargoMass`        | number | Kilograms | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `oilPressure`      | number | PSI       | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `oilTemperature`   | number | Celsius   | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `unitMass`         | number | Kilograms | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
| `waterTemperature` | number | Celsius   | Number.MIN_SAFE_INTEGER | Number.MAX_SAFE_INTEGER |
