# TruckSim-Telemetry
Telemetry data from the ets2-sdk-plugin

## Installing

### Step 1
Download and install the [ets2-sdk-plugin](https://github.com/nlhans/ets2-sdk-plugin) by [nlhans](https://github.com/nlhans)

### Step 2
`npm i trucksim-telemetry`

### Step 3
Load up the game and profit?


## Usage
```JS
const telemetry = require('trucksim-telemetry')

const data = telemetry.getAll()

console.log(data)
```
Check out [example.json](https://github.com/kniffen/TruckSim-Telemetry/blob/master/example.json) for data structure

## Methods
```JS
telemetry.getBuffer()     // -> Original memory buffer from the plugin
telemetry.getRaw()        // -> Raw data
telemetry.getGame()       // -> Parsed game data
telemetry.getUserInput()  // -> Parsed user input data
telemetry.getTruck()      // -> Parsed truck data
telemetry.getTrailer()    // -> Parsed trailer data
telemetry.getJob()        // -> Parsed job data
telemetry.getNavigation() // -> Parsed navigational data
telemetry.getAll()        // -> All parsed data
```
