# TruckSim-Telemetry
TruckSim-Telemetry provides telemetry data and events for Euro Truck Simulator 2 and American Truck Simulator via the [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin).

[![NPM](https://nodei.co/npm/trucksim-telemetry.png)](https://npmjs.org/package/trucksim-telemetry)

[![Node version](https://img.shields.io/node/v/trucksim-telemetry)](https://nodejs.org)
[![NPM Downloads](https://img.shields.io/npm/dw/trucksim-telemetry)](https://www.npmjs.com/package/trucksim-telemetry)
[![Github Licence](https://img.shields.io/github/license/kniffen/TruckSim-Telemetry)](https://github.com/kniffen/TruckSim-Telemetry/blob/master/README.md)
[![Discord](https://img.shields.io/discord/125702694538051584.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/S6NRp5P)

Current supported version of [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) \
<b>v1.12.1</b>

## Documentation
Read the full documentation over at https://kniffen.dev/TruckSim-Telemetry

## Features
- **Real-time data:** Access telemetry data from ETS2/ATS.
- **Event-driven:** Emits events for various in-game occurrences (job, truck, navigation, etc.).
- **Cross-platform:** Works on Windows, and unofficially on Linux/macOS through a community fork.
- **Lightweight:** Native C++ addon for efficient communication with the game.

## Installation

### Windows
1.  Download and install the [scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) by [RenCloud](https://github.com/RenCloud).
2.  Install Node.js and the C++ build tools. The recommended way is to install the "Desktop development with C++" workload from the [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/).
3.  Install the package via NPM:
    ```shell
    npm install trucksim-telemetry
    ```

### Linux/Mac OS
1.  Download and install the [scs-sdk-plugin fork](https://github.com/truckermudgeon/scs-sdk-plugin) by [truckermudgeon](https://github.com/truckermudgeon).
    *Note: You may have to build this from source.*
2.  Install the necessary build tools for your platform (e.g., `build-essential` on Debian/Ubuntu, Xcode Command Line Tools on macOS).
3.  Install the package via NPM:
    ```shell
    npm install trucksim-telemetry
    ```

## How to use
For additional examples and explanations, see the full documentation over at https://kniffen.dev/TruckSim-Telemetry
```typescript
import { truckSimTelemetry } from 'trucksim-telemetry';

const telemetry = truckSimTelemetry();

telemetry.on('connected', () => {
  console.log('SDK connected');
});

telemetry.on('job-started', (data) => {
  console.log('New job started', data);
});
```

## Known issues
### `refuel-paid` event not emitting
This seems to be a problem with the underlying SDK plugin. It appears to only trigger once per game session.

## Demo
To help visualize the data, you can use this [Demo app](https://github.com/kniffen/TruckSim-Telemetry-Demo).

![demo screenshot](https://raw.githubusercontent.com/kniffen/TruckSim-Telemetry-Demo/master/screenshot.jpg)

## License
This project is provided under the MIT License - see the [LICENSE](https://github.com/kniffen/TruckSim-Telemetry-Demo/blob/master/LICENSE) file for details
