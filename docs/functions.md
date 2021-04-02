# Functions

### getBuffer()
**Returns: [scs-sdk-plugin memory buffer](https://github.com/RenCloud/scs-sdk-plugin)**

### getData()
**Returns: [data object](data.md#controls)**

### getGame()
**Returns: [game data object](data.md#game)**

### getJob()
**Returns: [job data object](data.md#job)**

### getNavigation()
**Returns: [navigation data object](data.md#navigation)**

### getTrailers()
**Returns: [trailers data object](data.md#trailers)**

### getTrailer()
**Returns: [trailer data object](data.md#trailer)**

### getTruck()
**Returns: [truck data object](data.md#truck)**

### watch({options}, update)
**Use: starts watching the game for changes at every given interval**

| Option   | type     | Default | Minimum | Required |
| -------- | -------- | ------- | ------- | -------- |
| interval | number   | 100(ms) | 10(ms)  | no       |
| update   | function |         |         | no       |

#### Example
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const telemetry = truckSimTelemetry()

telemetry.game.on("time-change", function(current, previous) {
  // current  == current in-game time
  // previous == previous in-game time
})

telemetry.watch({interval: 200}, function() {
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