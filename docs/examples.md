# Examples

### Getting data
```javascript
import truckSimTelemetry from "trucksim-telemetry"

const data = truckSimTelemetry.getData()

console.log(data.game.paused) // -> boolean true:false
```

### In-game time change
```javascript
import truckSimTelemetry from "trucksim-telemetry"

const telemetry = truckSimTelemetry()

telemetry.game.on("time-change", function(current, previous) {
  // current  == { value: 7309, unix: 784140000 }
  // previous == { value: 7308, unix: 784080000 }

  const date = new Date(current.unix) 
  console.log(date) // -> 1970-01-10T01:49:00.000Z
})

telemetry.watch() // Start watching the game for changes
```