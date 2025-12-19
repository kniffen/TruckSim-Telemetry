import type { TruckSimTelemetry } from '../truckSimTelemetry';
import type { SCSSDKTelemetry } from '../types';
import { handleGameEvents } from './handleGameEvents';

describe('handleGameEvents()', () => {
  const tst = {
    data: {
      current:  {},
      previous: {},
    },
    emit: jest.fn(),
  } as unknown as TruckSimTelemetry;

  beforeEach(() => {
    jest.clearAllMocks();

    tst.data.previous = {
      paused:      false,
      timeAbs:     0,
      ferry:       false,
      fined:       false,
      refuelPayed: false,
      tollgate:    false,
      train:       false,
    } as SCSSDKTelemetry;;

    tst.data.current = {
      paused:      false,
      timeAbs:     0,
      ferry:       false,
      fined:       false,
      refuelPayed: false,
      tollgate:    false,
      train:       false,
    } as SCSSDKTelemetry;
  });

  test('It should trigger pause events', () => {
    tst.data.current.paused = true;

    handleGameEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('pause', true);
  });

  test('It should trigger time events', () => {
    tst.data.current.timeAbs = 12345;

    handleGameEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('time', 12345);
  });

  test('It should trigger fine events', () => {
    tst.data.current.fined       = true;
    tst.data.current.fineOffence = 'Speeding';
    tst.data.current.fineAmount  = 5_000n;

    handleGameEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('fine', {
      fineOffence: 'Speeding',
      fineAmount:  5_000n,
    });
  });

  test('It should trigger refuel-paid events', () => {
    tst.data.current.refuelPayed = true;
    tst.data.current.refuelAmount = 150;

    handleGameEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('refuel-paid', {
      refuelAmount: 150,
    });
  });

  test('It should trigger tollgate events', () => {
    tst.data.current.tollgate     = true;
    tst.data.current.tollgatePayAmount = 10_000n;

    handleGameEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('tollgate', {
      tollgatePayAmount: 10_000n,
    });
  });

  test('It should trigger ferry events', () => {
    tst.data.current.ferry           = true;
    tst.data.current.ferrySourceId   = '1';
    tst.data.current.ferrySourceName = 'Port A';
    tst.data.current.ferryTargetId   = '2';
    tst.data.current.ferryTargetName = 'Port B';
    tst.data.current.ferryPayAmount  = 11_000n;

    handleGameEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('ferry', {
      ferrySourceId:   '1',
      ferrySourceName: 'Port A',
      ferryTargetId:   '2',
      ferryTargetName: 'Port B',
      ferryPayAmount:  11_000n,
    });
  });

  test('It should trigger train events', () => {
    tst.data.current.train           = true;
    tst.data.current.trainSourceId   = '1';
    tst.data.current.trainSourceName = 'Station A';
    tst.data.current.trainTargetId   = '2';
    tst.data.current.trainTargetName = 'Station B';
    tst.data.current.trainPayAmount  = 12_000n;

    handleGameEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('train', {
      trainSourceId:   '1',
      trainSourceName: 'Station A',
      trainTargetId:   '2',
      trainTargetName: 'Station B',
      trainPayAmount:  12_000n,
    });
  });

  test('It should not emit eny events if there are no changes', () => {
    handleGameEvents(tst);

    expect(tst.emit).not.toHaveBeenCalled();
  });
});