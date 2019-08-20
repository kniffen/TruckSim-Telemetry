# Functions

### getBuffer()
**Returns: [scs-sdk-plugin memory buffer](https://github.com/RenCloud/scs-sdk-plugin)**

### getData()
**Returns: [data object](data.md#controls)**

### getGame()
**Returns: [data object](data.md#game)**

### getJob()
**Returns: [data object](data.md#job)**

### getNavigation()
**Returns: [data object](data.md#navigation)**

### getTrailers()
**Returns: [data object](data.md#trailers)**

### getTrailer()
**Returns: [data object](data.md#trailer)**

### getTruck()
**Returns: [data object](data.md#truck)**

### watch({options}, update)
**Use: starts watching the game for changes at every given interval**

| Option   | type     | Default | Minimum | Required |
| -------- | -------- | ------- | ------- | -------- |
| interval | number   | 100(ms) | 10(ms)  | no       |
| update   | function |         |         | no       |

#### Example
```javascript
import truckSimTelemetry from "trucksim-telemetry"

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
import truckSimTelemetry from "trucksim-telemetry"

const telemetry = truckSimTelemetry()

telemetry.game.on("time-change", function(current, previous) {
  // current  == current in-game time
  // previous == previous in-game time
})

telemetry.watch()

// Stop watching after 5 seconds
setTimeout(function() {
  telemetry.stop()  
}, 5000)
```