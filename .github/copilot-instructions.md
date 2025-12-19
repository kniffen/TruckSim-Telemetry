# TruckSim-Telemetry AI Coding Agent Instructions

This document provides essential information for AI coding agents working on the TruckSim-Telemetry codebase.

## Big Picture Architecture

This is a Node.js module that processes telemetry data for Euro Truck Simulator 2 and American Truck Simulator. It uses a native C++ addon to interface with the game's telemetry SDK.

The core logic resides in `src/telemetry.ts`. The `telemetry()` function initializes the process. It sets up a loop that runs at 60 FPS. In each iteration, it:
1.  Reads data from a shared memory buffer using `getBuffer()` (from `src/buffer/getBuffer.ts`). This buffer is provided by the SCS SDK plugin.
2.  The raw buffer is then parsed and structured into a `SCSSDKTelemetryData` object by `updateTelemetryData()` (from `src/data/updateTelemetryData.ts`). The data structures are defined in `src/data/types.ts`.
3.  `handleEvents()` (from `src/events/handleEvents.ts`) is called to check for changes in the telemetry data and emit corresponding events.

The C++ addon (`scsSDKTelemetry.cc`) is responsible for the low-level communication with the game's telemetry SDK. It's built using `node-gyp`.

## Developer Workflows

### Build

- To build the TypeScript code: `npm run build`
- The C++ addon is built automatically during `npm install` thanks to the `gypfile: true` property in `package.json`. To manually rebuild it, you can run `npx node-gyp rebuild`.

### Testing

- Run tests with `npm test`.
- Watch for changes and run tests with `npm test:watch`.
- Test data can be generated with `npm run generate-test-data`. This executes `src/test/generateTestData.ts`.

### Linting

- To check for linting errors: `npm run lint`
- To automatically fix linting errors: `npm run lint:fix`

## Linting Rules

The project uses ESLint to enforce a consistent code style. The rules are defined in `eslint.config.mjs`. Please adhere to these rules. Some of the key rules include:
- Single quotes for strings
- 2-space indentation
- Spacing around operators and in object braces
- Semicolons at the end of statements
- Explicit function return types
- `camelCase` for variables and functions, and `PascalCase` for classes and types.
- No unused variables
- Use of `===` and `!==`
- Braces around all control statements
- Consistent type imports

## Project-Specific Conventions

- The data flow is unidirectional: `C++ addon -> Buffer -> TypeScript -> Events`.
- Event handling is stateful. The previous state of the telemetry data is stored and compared against the current state to detect changes and emit events. See `src/events/createEventStates.ts` and `src/events/updateEventState.ts`.
- The module is designed to be used as an `EventEmitter`. The main `telemetry` function returns an instance of `TruckSimTelemetry` which extends `EventEmitter`.

## Key Files and Directories

- `scsSDKTelemetry.cc`: The native C++ addon for game communication.
- `binding.gyp`: The configuration file for building the C++ addon.
- `src/main.ts`: The main entry point of the module.
- `src/telemetry.ts`: Contains the core telemetry processing logic.
- `src/data/types.ts`: Defines the data structures for the telemetry information.
- `src/buffer/`: Contains logic for reading from the shared memory buffer.
- `src/data/`: Contains logic for allocating, updating, and getting telemetry data.
- `src/events/`: Contains all the event handling logic.
- `src/test/`: Contains test utilities and data generation scripts.
