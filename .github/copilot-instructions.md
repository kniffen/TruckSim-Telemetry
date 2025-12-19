# TruckSim-Telemetry AI Coding Conventions

This document provides guidance for AI agents working on the TruckSim-Telemetry codebase.

## Big Picture Architecture

This project is a Node.js module with a native C++ addon for reading telemetry data from the games Euro Truck Simulator 2 and American Truck Simulator. The data is provided by the `scs-sdk-plugin` via a memory-mapped file.

The general data flow is as follows:
1.  The C++ addon (`scsSDKTelemetry.cc`) reads data from a memory-mapped file into a Node.js Buffer. This is exposed via the `getBuffer()` function.
2.  The raw buffer is parsed in `lib/parser/parseData.js`.
3.  The parsed data is then converted into a structured format. The logic in `lib/converter/` handles different versions of the `scs-sdk-plugin`. For example, `scs_sdk_plugin_12.js` handles version 1.12 of the plugin data.
4.  The `lib/eventEmitters/` directory contains logic to detect changes in the data and emit corresponding events (e.g., `game.js`, `truck.js`, `job.js`).
5.  The main entry point is `lib/index.js`, which orchestrates the process of watching for data changes and emitting events.

Key files and directories:
- `scsSDKTelemetry.cc`: The core C++ code for reading from the memory-mapped file.
- `binding.gyp`: The build configuration for the native C++ addon.
- `lib/index.js`: The main JavaScript entry point.
- `lib/parser/parseData.js`: Handles parsing the raw buffer from the native addon.
- `lib/converter/`: Contains logic for different plugin data versions.
- `lib/eventEmitters/`: Contains the logic for emitting game-specific events.
- `typings/`: Contains all TypeScript type definitions. These are a great source of information about the data structures used in the project.
- `test-buffers/`: Contains sample buffer data for testing purposes.

## Developer Workflow

### Building
The project uses `node-gyp` to compile the C++ addon. To build the project, run:
```bash
npm install
```
On Windows, `windows-build-tools` is required.

### Testing
The project uses Jest for testing. Tests are located alongside the files they test (e.g., `lib/eventEmitters/game.test.js` tests `lib/eventEmitters/game.js`).
To run the tests:
```bash
npm test
```

TypeScript types are checked separately:
```bash
npm run typecheck
```

### Linting
ESLint is used for linting.
```bash
npm run lint
```

## Project-Specific Conventions

- **Data Conversion:** When adding support for a new version of the `scs-sdk-plugin`, a new file should be created in `lib/converter/`. This file will be responsible for converting the new data structure into the common format used by the rest of the application. See `lib/converter/scs_sdk_plugin_12.js` for an example.
- **Event Emitters:** Event emitters in `lib/eventEmitters/` are responsible for watching for specific data changes and emitting events. They should be self-contained and focus on a specific domain of the game (e.g., `truck`, `job`, `navigation`).
- **Types:** All data structures are defined in the `typings/` directory. When making changes to data structures, ensure the corresponding TypeScript definitions are updated.
- **Error Handling:** The native addon can throw errors if it fails to read the memory-mapped file. These errors are handled in the JavaScript code that calls the native functions.
