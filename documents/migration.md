---
title: Migrating to 1.0
---
# Migrating from 0.x to 1.0
The 1.0 release includes breaking changes. This guide summarizes the main differences to help you update your code.
<br/>
<br/>

## Data structure
The data structure for the telemetry data has completely change, see a full definition of the new structure [`here`](../interfaces/main.SCSSDKTelemetryData.html)
<br/>
<br/>

## Getting data
```diff
- const tst = require('trucksim-telemetry');
+ import { getData } from 'trucksim-telemetry';

- const data = tst.getData();
+ const data = getData();
```
<br/>
<br/>

## Update loop
```diff
- const tst = require('trucksim-telemetry');
+ import { truckSimTelemetry } from 'trucksim-telemetry';

- const telemetry = tst();
- telemetry.watch({}, (data) => { console.log(data) });
+ const telemetry = truckSimTelemetry({
+   onUpdate: (data) => { console.log(data) }
+ });
```
<br/>
<br/>

## Events
All events have been completely reworked. \
See a detailed view of the new events and data they provided on the [`events page`](./events.md)

```diff
- const tst = require('trucksim-telemetry');
+ import { truckSimTelemetry } from 'trucksim-telemetry';

- const telemetry = tst();
- telemetry.watch();
- telemetry.game.on("connected", console.log);
- telemetry.game.on("disconnected", console.log);
+ const telemetry = truckSimTelemetry();
+ telemetry.on("connected", console.log);
+ telemetry.on("disconnected", console.log);
```
<br/>
<br/>

## Functions
Most function have been removed except for `getBuffer` and `getData`
```diff
- const tst = require('trucksim-telemetry');
+ import { getBuffer, getData } from 'trucksim-telemetry';

- const buffer     = tst.getBuffer();
- const data       = tst.getData();
- const game       = tst.getGame();
- const controls   = tst.getControls();
- const truck      = tst.getTruck();
- const trailers   = tst.getTrailers();
- const trailer    = tst.getTrailer();
- const job        = tst.getJob();
- const navigation = tst.getNavigation();
+ const buffer     = getBuffer();
+ const data       = getData();
```
<br/>
<br/>