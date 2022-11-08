# TruckSim-Telemetry
TruckSim-Telemetry is a node module that takes telemetry data for Euro Truck Simulator 2 and American Truck Simulator provided by the [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) and outputs parsed data and events.

[![Node version](https://img.shields.io/node/v/trucksim-telemetry)](https://nodejs.org)
[![NPM version](https://img.shields.io/npm/v/trucksim-telemetry)](https://www.npmjs.com/package/trucksim-telemetry)
[![NPM Downloads](https://img.shields.io/npm/dw/trucksim-telemetry)](https://www.npmjs.com/package/trucksim-telemetry)
[![Github Licence](https://img.shields.io/github/license/kniffen/TruckSim-Telemetry)](https://github.com/kniffen/TruckSim-Telemetry/blob/master/README.md)
[![Discord](https://img.shields.io/discord/125702694538051584.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/S6NRp5P)

## Documentation
Read the full documentation over at https://tst.kniffen.dev

## Getting started

### Prerequisites
#### Download and install the 󠀠󠀠󠀠󠀠[scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) by [RenCloud](https://github.com/RenCloud)
Supported plugin versions (Limited meaning some data and/or events may be inaccurate)
- v1.11.1 (TruckSim-Telemetry >= 0.17.0)
- v1.11.0 (TruckSim-Telemetry <= 0.16.2)
- v1.10.6 (TruckSim-Telemetry <= 0.16.2)
- v1.10.5 (Limited)
- v1.10.4 (Limited)

#### Install the 󠀠󠀠󠀠󠀠[windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)

### Installing
Install the module via NPM
`npm install trucksim-telemetry`


## Examples

Check the [Documentation](https://tst.kniffen.dev) page for [examples](https://tst.kniffen.dev/#/examples)


## Known issues
### refuel-paid event not emitting
This seems to be a problem with the plugin.
It seems to only trigger once per game.

### Electron and React or Vue (webpack)
An common issue reported by people is getting the following error message when trying to use the module with React or Vue.<br />
`Module not found: Error: Can't resolve '../../build/Release/scsTelemetry' ...`<br/>
This seems to be webpack related, and adding the following alias to your webpack.config.js file should resolve it
```javascript
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      "../../build/Release/scsSDKTelemetry": "../../build/Release/scsSDKTelemetry.node"
    }
  }
}
```

For Electron you may or __may not__ additionally have to set the following preferences when creating your browser window
```javascript
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false,
}
```

### Trailer damage values
The current version of the **[scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin)** does not provide the damage value for the trailer's body, as such the total damage value is also incorrect.


## Demo
To help visualize the data you can use this [Demo app](https://github.com/kniffen/TruckSim-Telemetry-Demo)

![demo screenshot](https://raw.githubusercontent.com/kniffen/TruckSim-Telemetry-Demo/master/screenshot.jpg)

## License
This project is licensed under the MIT License - see the LICENSE file for details
