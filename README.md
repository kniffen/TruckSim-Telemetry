# TruckSim-Telemetry
Telemetry data from the scs-sdk-plugin

[![Discord](https://img.shields.io/discord/125702694538051584.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/S6NRp5P)

## Installing

### Step 1
Download and install the **[scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin)** by **[RenCloud](https://github.com/RenCloud)**


> ⚠️ **[ets2-sdk-plugin](https://github.com/nlhans/ets2-sdk-plugin) by [nlhans](https://github.com/nlhans) is no longer supported!**

### Step 2
`npm i trucksim-telemetry`

### Step 3
Load up the game and profit?


## Usage
```JS
const truckSimTelemetry = require('trucksim-telemetry')

const telemetry = truckSimTelemetry()
```
### Events
```JS
// Example
telemetry.game.on("change", function(to, from) {
  // to   -> new game data
  // from -> previous game data
})

telemetry.game.on("time-change", function(to, from) {
  // to   -> new in-game time object
  // from -> previous in-game time object
})

// Other "change" events
telemetry.truck
telemetry.truck.fuel
telemetry.truck.adBlue
telemetry.truck.engine
telemetry.truck.transmission
telemetry.truck.brakes
telemetry.truck.wheels
telemetry.truck.lights
telemetry.truck.cabin
telemetry.truck.chassis
telemetry.truck.position
telemetry.trailer
telemetry.job
telemetry.navigation
telemetry.controls

// Call to start watching the game for changes
telemetry.watch()

// Stop watching the game for changes
telemetry.stop()
```

### Functions
If you don't want to use events you can just get the data manually using these functions
```JS
telemetry.getBuffer()     // -> Original memory buffer from the plugin
telemetry.getData()       // -> Parsed data
telemetry.getGame()       // -> Parsed game data
telemetry.getControls()   // -> Parsed controls data
telemetry.getTruck()      // -> Parsed truck data
telemetry.getTrailer()    // -> Parsed trailer data
telemetry.getJob()        // -> Parsed job data
telemetry.getNavigation() // -> Parsed navigational data
```
Check out the [examples](https://github.com/kniffen/TruckSim-Telemetry/tree/master/examples) for data structure
