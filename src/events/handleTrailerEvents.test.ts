import type { TruckSimTelemetry } from '../truckSimTelemetry';
import { handleTrailerEvents } from './handleTrailerEvents';

describe('handleTrailerEvents()', () => {
  const tst = {
    data: {
      current: {
        trailers: [
          { attached: false },
          { attached: false },
        ],
      },
      previous: {
        trailers: [
          { attached: false },
          { attached: false },
        ],
      },
    },
    emit: jest.fn(),
  } as unknown as TruckSimTelemetry;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should trigger attached events', () => {
    // Detach first trailer
    tst.data.previous.trailers[0].attached = true;
    tst.data.current.trailers[0].attached  = false;

    // Attach second trailer
    tst.data.previous.trailers[1].attached = false;
    tst.data.current.trailers[1].attached  = true;

    handleTrailerEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(2);
    expect(tst.emit).toHaveBeenCalledWith('trailer-detached', 0);
    expect(tst.emit).toHaveBeenCalledWith('trailer-attached', 1);
  });
});