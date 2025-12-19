import type { TruckSimTelemetry } from '../truckSimTelemetry';
import { handleGameEvents } from './handleGameEvents';
import { handleJobEvents } from './handleJobEvents';
import { handleNavigationEvents } from './handleNavigationEvents';
import { handleTrailerEvents } from './handleTrailerEvents';
import { handleTruckEvents } from './handleTruckEvents';

export const handleEvents = function(tst: TruckSimTelemetry): void {
  const { current, previous } = tst.data;

  if (current.sdkActive && !previous.sdkActive) {
    tst.emit('connected');
  }

  if (!current.sdkActive && previous.sdkActive) {
    tst.emit('disconnected');
  }

  if (!current.sdkActive) {
    return;
  }

  handleGameEvents(tst);
  handleNavigationEvents(tst);
  handleJobEvents(tst);
  handleTruckEvents(tst);
  handleTrailerEvents(tst);
};

