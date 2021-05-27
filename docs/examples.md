# Examples

### Getting data
```javascript
const tst = require("trucksim-telemetry")

const data = tst.getData()

console.log(data.game.paused) // -> boolean true:false
```

### Events
```javascript
const tst = require("trucksim-telemetry")

const telemetry = tst()

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
const tst = require("trucksim-telemetry")

const telemetry = tst()

function update(data) {
  console.log(data.truck.speed) // => current truck speed object
}

telemetry.watch({interval: 50}, update)
```

### Functions
If you don't need to use events or the update loop you can just get what you need by calling one of these functions
```javascript
const tst = require("trucksim-telemetry")

tst.getBuffer()     // -> Original memory buffer from the plugin
tst.getData()       // -> Parsed data
tst.getGame()       // -> Parsed game data
tst.getControls()   // -> Parsed controls data
tst.getTruck()      // -> Parsed truck data
tst.getTrailers()   // -> Parsed trailers data
tst.getTrailer()    // -> Parsed trailer data
tst.getJob()        // -> Parsed job data
tst.getNavigation() // -> Parsed navigational data
```

### Mapped memory file name
If you have your own compiled version of the [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) you may also have different mapped memory file name than the default.
You can set this as an optional parameter, but do keep in mind that you may have to parse the data yourself if you have altered the structure of the plugin.

#### Option 1
```javascript
const tst = require("trucksim-telemetry")

const options = {
  mmfName: "Local\\MyTelemetry" // Default is "Local\\SCSTelemetry"
}

// Get raw buffer from the plugin
const buffer = tst.getBuffer(options)

// Get parsed data
const data = tst.getData(options)
```

#### Option 2
```javascript
const tst = require("trucksim-telemetry")

const options = {
  mmfName: "Local\\MyTelemetry" // Default is "Local\\SCSTelemetry"
}

const telemetry = tst(options)

// Get parsed data
const data = telemetry.getData()

// Events
telemetry.game.on("time-change", function(current, previous) {
  // current  == current time object
  // previous == previous time object
})

telemetry.watch()
```