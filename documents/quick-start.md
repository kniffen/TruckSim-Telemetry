---
title: Quick start
---
# Quick start

## Get data

The `getData` function returns the latest telemetry data as a structured object.\
This is useful for when you only need to get the data once.

```typescript
import { getData } from 'trucksim-telemetry';

const data = getData();
```
<br/>
<br/>

## Get raw buffer

The `getBuffer` function returns the raw shared memory buffer. \
This is useful if you want to process the data yourself.

```typescript
import { getBuffer } from 'trucksim-telemetry';

const buffer = getBuffer();
```
<br/>
<br/>

## Events

The `truckSimTelemetry` function returns an event emitter that emits various events, such as when a job is started, or when the SDK is connected. \
See the [Events](events.md) page for a list of all possible events. 

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
<br/>
<br/>

## Update loop

You can also use the `truckSimTelemetry` function as an update loop.\
The `onUpdate` callback function will be called on each update (60 times per second).

```typescript
import { truckSimTelemetry } from 'trucksim-telemetry';

const telemetry = truckSimTelemetry({
  onUpdate: (data) => {
    // Process data
  }
});
```