# TruckSim-Telemetry
TruckSim-Telemetry is a node module that takes telemetry data for Euro Truck Simulator 2 and American Truck Simulator provided by the [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) and outputs parsed data and events.

[![Discord](https://img.shields.io/discord/125702694538051584.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/S6NRp5P)

## Documentation
Read the full documentation over at http://trucksimtelemetry.knifftech.org/

## Getting started

### Prerequisites
#### Download and install the **[scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin)** by **[RenCloud](https://github.com/RenCloud)**
Supported versions
- v.1.10.6

#### Install the [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)

### Installing
Install the module via NPM
`npm install trucksim-telemetry`


## Examples

### Events
```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const telemetry = truckSimTelemetry()

telemetry.game.on("time-change", function(to, from) {
  // to   -> new in-game time object
  // from -> previous in-game time object
})

// Call to start watching the game for changes
telemetry.watch()

// Stop watching the game for changes
telemetry.stop()
```

### Update loop
**The update function runs everytime the state of the game changes**

```javascript
const truckSimTelemetry = require("trucksim-telemetry")

const telemetry = truckSimTelemetry()

function update(data) {
  console.log(data.truck.speed) // => current speed object
}

telemetry.watch({}, update)
```

### Functions
If you don't want to use events you can just get the data manually using these functions
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

Fot more details about events and functions see the [documentation](http://trucksimtelemetry.knifftech.org/) page

### Demo
To help visualize the data you can use this [Demo app](https://github.com/kniffen/TruckSim-Telemetry-Demo)

![demo screenshot](https://raw.githubusercontent.com/kniffen/TruckSim-Telemetry-Demo/master/screenshot.jpg)

## License
This project is licensed under the MIT License - see the LICENSE file for details
