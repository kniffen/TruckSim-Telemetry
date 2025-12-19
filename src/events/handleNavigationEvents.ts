import type { TruckSimTelemetry } from '../truckSimTelemetry';

export const handleNavigationEvents = function(tst: TruckSimTelemetry): void {
  const { current, previous } = tst.data;

  if (current.speedLimit !== previous.speedLimit) {
    tst.emit('speed-limit', current.speedLimit);
  }
};