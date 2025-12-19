import type { TruckSimTelemetry } from '../truckSimTelemetry';

export const handleTrailerEvents = function(tst: TruckSimTelemetry): void {
  const { current, previous } = tst.data;

  for (let i = 0; i < current.trailers.length; i++) {
    const currTrailerState = current.trailers[i];
    const prevTrailerState = previous.trailers[i];

    if (currTrailerState.attached && !prevTrailerState.attached) {
      tst.emit('trailer-attached', i);
    }

    if (!currTrailerState.attached && prevTrailerState.attached) {
      tst.emit('trailer-detached', i);
    }
  }
};