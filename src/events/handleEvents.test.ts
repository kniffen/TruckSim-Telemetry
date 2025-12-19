import type { TruckSimTelemetry } from '../truckSimTelemetry';
import { handleEvents } from './handleEvents';
import * as handleGameEvents from './handleGameEvents';
import * as handleNavigationEvents from './handleNavigationEvents';
import * as handleJobEvents from './handleJobEvents';
import * as handleTruckEvents from './handleTruckEvents';
import * as handleTrailerEvents from './handleTrailerEvents';

describe('handleEvents()', () => {
  const handleGameEventsSpy = jest.spyOn(handleGameEvents, 'handleGameEvents').mockImplementation();
  const handleJobEventsSpy = jest.spyOn(handleJobEvents, 'handleJobEvents').mockImplementation();
  const handleNavigationEventsSpy = jest.spyOn(handleNavigationEvents, 'handleNavigationEvents').mockImplementation();
  const handleTruckEventsSpy = jest.spyOn(handleTruckEvents, 'handleTruckEvents').mockImplementation();
  const handleTrailerEventsSpy = jest.spyOn(handleTrailerEvents, 'handleTrailerEvents').mockImplementation();

  const tst = {
    data: {
      current:  { },
      previous: { },
    },
    emit: jest.fn(),
  } as unknown as TruckSimTelemetry;

  beforeEach(() => {
    jest.clearAllMocks();

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