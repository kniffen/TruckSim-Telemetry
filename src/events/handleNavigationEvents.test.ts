import type { TruckSimTelemetry } from '../truckSimTelemetry';
import { handleNavigationEvents } from './handleNavigationEvents';

describe('handleNavigationEvents()', () => {
  const tst = {
    data: {
      current:  {},
      previous: {},
    },
    emit: jest.fn(),
  } as unknown as TruckSimTelemetry;

  beforeEach(() => {
    jest.clearAllMocks();

    tst.data.previous.speedLimit = 0;
    tst.data.current.speedLimit  = 0;
  });

  test('It should trigger speed-limit events', () => {
    tst.data.current.speedLimit = 80;

    handleNavigationEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('speed-limit', 80);
  });

  test('It should not emit eny events if there are no changes', () => {
    handleNavigationEvents(tst);

    expect(tst.emit).not.toHaveBeenCalled();
  });
});