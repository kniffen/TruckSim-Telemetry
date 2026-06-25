import type { TruckSimTelemetry } from '../truckSimTelemetry';
import { handleEvents } from './handleEvents';
import { handleGameEvents } from './handleGameEvents';
import { handleNavigationEvents } from './handleNavigationEvents';
import { handleJobEvents } from './handleJobEvents';
import { handleTruckEvents } from './handleTruckEvents';
import { handleTrailerEvents } from './handleTrailerEvents';
import { describe, vi, beforeEach, test, expect } from 'vitest';

vi.mock('./handleGameEvents');
vi.mock('./handleNavigationEvents');
vi.mock('./handleJobEvents');
vi.mock('./handleTruckEvents');
vi.mock('./handleTrailerEvents');

describe('handleEvents()', () => {
  const handleGameEventsSpy = vi.mocked(handleGameEvents);
  const handleJobEventsSpy = vi.mocked(handleJobEvents);
  const handleNavigationEventsSpy = vi.mocked(handleNavigationEvents);
  const handleTruckEventsSpy = vi.mocked(handleTruckEvents);
  const handleTrailerEventsSpy = vi.mocked(handleTrailerEvents);

  const tst = {
    data: {
      current:  { },
      previous: { },
    },
    emit: vi.fn(),
  } as unknown as TruckSimTelemetry;

  beforeEach(() => {
    vi.clearAllMocks();

    tst.data.current.sdkActive  = false;
    tst.data.previous.sdkActive = false;
  });

  test('It should handle events', () => {
    tst.data.current.sdkActive  = true;

    handleEvents(tst,);

    expect(handleGameEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleJobEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleNavigationEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleTruckEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleTrailerEventsSpy).toHaveBeenCalledWith(tst);
  });

  test('It should initialize the event state when connecting', () => {
    tst.data.current.sdkActive  = true;
    handleEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('connected');

    expect(handleGameEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleJobEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleNavigationEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleTruckEventsSpy).toHaveBeenCalledWith(tst);
    expect(handleTrailerEventsSpy).toHaveBeenCalledWith(tst);
  });

  test('It should not handle events when SDK becomes inactive', () => {
    tst.data.current.sdkActive  = false;
    tst.data.previous.sdkActive = true;

    handleEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('disconnected');

    expect(handleGameEventsSpy).not.toHaveBeenCalled();
    expect(handleJobEventsSpy).not.toHaveBeenCalled();
    expect(handleNavigationEventsSpy).not.toHaveBeenCalled();
    expect(handleTruckEventsSpy).not.toHaveBeenCalled();
    expect(handleTrailerEventsSpy).not.toHaveBeenCalled();
  });
});