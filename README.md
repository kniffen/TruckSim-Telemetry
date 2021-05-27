# TruckSim-Telemetry
TruckSim-Telemetry is a node module that takes telemetry data for Euro Truck Simulator 2 and American Truck Simulator provided by the [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) and outputs parsed data and events.

[![Node version](https://img.shields.io/node/v/trucksim-telemetry)](https://nodejs.org)
[![NPM version](https://img.shields.io/npm/v/trucksim-telemetry)](https://www.npmjs.com/package/trucksim-telemetry)
[![NPM Downloads](https://img.shields.io/npm/dw/trucksim-telemetry)](https://www.npmjs.com/package/trucksim-telemetry)
[![Github Licence](https://img.shields.io/github/license/kniffen/TruckSim-Telemetry)](https://github.com/kniffen/TruckSim-Telemetry/blob/master/README.md)
[![Discord](https://img.shields.io/discord/125702694538051584.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/S6NRp5P)

## Documentation
Read the full documentation over at http://trucksimtelemetry.knifftech.org/

## Getting started

### Prerequisites
#### Download and install the **[scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin)** by **[RenCloud](https://github.com/RenCloud)**
Supported plugin versions (Limited meaning some data and/or events may be inaccurate)
- v1.10.6
- v1.10.5 (Limited)
- v1.10.4 (Limited)

#### Install the [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)

### Installing
Install the module via NPM
`npm install trucksim-telemetry`


## Examples

Check the [Documentation](https://trucksimtelemetry.knifftech.org) page for [examples](https://trucksimtelemetry.knifftech.org/#/examples)


## Known issues
**High memory usage**<br/>
This is due converting a lot of buffer data to JSON at a high interval.<br/>
To help with this you can use the `--expose-gc` flag with the node process you are running TruckSim-Telemetry on.<br/>
This will expose the node/V8 garbage collector and if TruckSim-Telemetry detect it, it will force the garbage collector to run every time the data is converted.<br/>
However this is not recommended as it can cause performance issues.


## Demo
To help visualize the data you can use this [Demo app](https://github.com/kniffen/TruckSim-Telemetry-Demo)

![demo screenshot](https://raw.githubusercontent.com/kniffen/TruckSim-Telemetry-Demo/master/screenshot.jpg)

## License
This project is licensed under the MIT License - see the LICENSE file for details
