# Examples

### Getting data
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const data = truckSimTelemetry.getData()

console.log(data.game.paused) // -> boolean true:false
```

### Events
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const telemetry = truckSimTelemetry()

telemetry.game.on("time-change", function(current, previous) {
  // current  == { value: 7309, unix: 784140000 }
  // previous == { value: 7308, unix: 784080000 }

  const date = new Date(current.unix) 
  console.log(date) // -> 1970-01-10T01:49:00.000Z
})

// Start watching the game for changes
telemetry.watch()

// Stop watching the game for changes
telemetry.stop()
```

### Update loop
**The update callback runs every time the state of the game changes**

```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const telemetry = truckSimTelemetry()

function update(data) {
  console.log(data.truck.speed) // => current truck speed object
}

telemetry.watch({interval: 50}, update)
```

### Functions
If you don't need to use events or the update loop you can just get what you need by calling one of these functions
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

truckSimTelemetry.getBuffer()     // -> Original memory buffer from the plugin
truckSimTelemetry.getData()       // -> Parsed data
truckSimTelemetry.getGame()       // -> Parsed game data
truckSimTelemetry.getControls()   // -> Parsed controls data
truckSimTelemetry.getTruck()      // -> Parsed truck data
truckSimTelemetry.getTrailers()   // -> Parsed trailers data
truckSimTelemetry.getTrailer()    // -> Parsed trailer data
truckSimTelemetry.getJob()        // -> Parsed job data
truckSimTelemetry.getNavigation() // -> Parsed navigational data
```

### Mapped memory file name
If you have your own compiled version of the [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) you may also have different mapped memory file name than the default.
You can set this as an optional parameter, but do keep in mind that you may have to parse the data yourself if you have altered the structure of the plugin.

#### Option 1
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const options = {
  mmfName: "Local\\MyTelemetry" // Default is "Local\\SCSTelemetry"
}

// Get raw buffer from the plugin
const buffer = truckSimTelemetry.getBuffer(options)

// Get parsed data
const data = truckSimTelemetry.getData(options)
```

#### Option 2
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const options = {
  mmfName: "Local\\MyTelemetry" // Default is "Local\\SCSTelemetry"
}

const telemetry = truckSimTelemetry(options)

// Get parsed data
const data = telemetry.getData()

// Events
telemetry.game.on("time-change", function(current, previous) {
  // current  == current time object
  // previous == previous time object
})

telemetry.watch()
```