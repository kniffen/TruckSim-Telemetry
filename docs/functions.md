# Functions

### getBuffer(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object | 
**Returns: [scs-sdk-plugin memory buffer](https://github.com/RenCloud/scs-sdk-plugin)**

---

### getData(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object |
**Returns: [TelemetryData](typedefs.md#telemetrydata)**

---

### getGame(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object |
**Returns: [Game](typedefs.md#game)**

---

### getJob(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object |
**Returns: [Job](typedefs.md#job)**

---

### getNavigation(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object |
**Returns: [Navigation](typedefs.md#navigation)**

---

### getTrailers(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object |
**Returns: [Trailer[]](typedefs.md#Trailer)**

---

### getTrailer(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object |
**Returns: [Trailer](typedefs.md#trailer)**

---

### getTruck(options?)
| Parameter | Type                           | Optional | Restriction                      |
| --------- | ------------------------------ | -------- | -------------------------------- |
| options   | [Options](typedefs.mf#options) | YES      | Not available on observer object |
**Returns: [Truck](typedefs.md#truck)**

---

### watch(options?, update?)
| Parameter    | Type                                     | Optional | 
| ------------ | ---------------------------------------- | -------- | 
| watchOptions | [WatchOptions](typedefs.md#watchoptions) | YES      |
| update       | [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | YES |

---

#### Example
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const telemetry = truckSimTelemetry()

telemetry.game.on("time-change", function(current, previous) {
  // current  == current in-game time
  // previous == previous in-game time
})

telemetry.watch({interval: 50}, function() {
  // update function, runs everytime the game state changes
})
```

### stop()
**Use: stop watching the game for changes**

#### Example
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const telemetry = truckSimTelemetry()

telemetry.game.once("time-change", function(current, previous) {
  // current  == current in-game time
  // previous == previous in-game time

  // Stop watching the game for changes
  telemetry.stop()
})

telemetry.watch()
```