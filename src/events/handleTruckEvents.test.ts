import type { TruckSimTelemetry } from '../truckSimTelemetry';
import { handleTruckEvents } from './handleTruckEvents';
import type {
  SCSSDKTelemetry,
  TSTAdBlueWarningEvent,
  TSTAirPressureEmergencyEvent,
  TSTAirPressureWarningEvent,
  TSTBatteryVoltageWarningEvent,
  TSTCruiseControlEvent,
  TSTRefuelEvent,
  TSTFuelWarningEvent,
  TSTGearChangeEvent,
  TSTOilPressureWarningEvent,
  TSTWaterTempWarningEvent,
  TSTRetarderEvent
} from '../types';

describe('handleTruckEvents()', () => {
  const tst = {
    data: {
      current:  {},
      previous: {},
    },
    emit: jest.fn(),
  } as unknown as TruckSimTelemetry;

  beforeEach(() => {
    jest.clearAllMocks();

    tst.data.current  = {} as SCSSDKTelemetry;
    tst.data.previous = {} as SCSSDKTelemetry;
  });

  test('It should emit cruise-control events', () => {
    tst.data.previous.cruiseControl = false;
    tst.data.current.cruiseControl  = true;
    tst.data.current.cruiseControlSpeed = 85;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('cruise-control', {
      cruiseControl:      true,
      cruiseControlSpeed: 85,
    } satisfies TSTCruiseControlEvent);
  });

  test('It should emit cruise-control-increase events', () => {
    tst.data.previous.cruiseControl = true;
    tst.data.previous.cruiseControlSpeed = 80;
    tst.data.current.cruiseControl  = true;
    tst.data.current.cruiseControlSpeed = 90;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('cruise-control-increase', {
      cruiseControl:      true,
      cruiseControlSpeed: 90,
    } satisfies TSTCruiseControlEvent);
  });

  test('It should emit cruise-control-decrease events', () => {
    tst.data.previous.cruiseControl = true;
    tst.data.previous.cruiseControlSpeed = 90;
    tst.data.current.cruiseControl  = true;
    tst.data.current.cruiseControlSpeed = 80;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('cruise-control-decrease', {
      cruiseControl:      true,
      cruiseControlSpeed: 80,
    } satisfies TSTCruiseControlEvent);
  });

  test('It should emit electric events', () => {
    tst.data.previous.electricEnabled = false;
    tst.data.current.electricEnabled  = true;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('electric', true);
  });

  test('It should emit emergency events', () => {
    tst.data.previous.airPressureEmergency = false;
    tst.data.current.airPressureEmergency  = true;
    tst.data.current.airPressure                = 150;
    tst.data.current.airPressureEmergencyFactor = 0.15;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('emergency', {
      airPressure:                150,
      airPressureEmergency:       true,
      airPressureEmergencyFactor: 0.15,
    } satisfies TSTAirPressureEmergencyEvent);
  });

  test('It should emit engine events', () => {
    tst.data.previous.engineEnabled = false;
    tst.data.current.engineEnabled  = true;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('engine', true);
  });

  test('It should emit gear-change events', () => {
    tst.data.previous.gear = 2;
    tst.data.current.gear  = 3;
    tst.data.current.gearDashboard = 4;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('gear-change', {
      gear:          3,
      gearDashboard: 4,
    } satisfies TSTGearChangeEvent);
  });

  test('It should emit park-brake events', () => {
    tst.data.previous.parkBrake = false;
    tst.data.current.parkBrake  = true;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('park-brake', true);
  });

  test('It should emit refuel-start events', () => {
    tst.data.previous.refuel = false;
    tst.data.current.refuel  = true;
    tst.data.current.fuel               = 900;
    tst.data.current.fuelAvgConsumption = 300;
    tst.data.current.fuelCapacity       = 1_200;
    tst.data.current.fuelRange          = 600;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('refuel-start', {
      fuel:               900,
      fuelAvgConsumption: 300,
      fuelCapacity:       1_200,
      fuelRange:          600,
    } satisfies TSTRefuelEvent);
  });

  test('It should emit refuel-stop events', () => {
    tst.data.previous.refuel = true;
    tst.data.current.refuel  = false;
    tst.data.current.fuel               = 1_100;
    tst.data.current.fuelAvgConsumption = 320;
    tst.data.current.fuelCapacity       = 1_200;
    tst.data.current.fuelRange          = 700;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('refuel-stop', {
      fuel:               1_100,
      fuelAvgConsumption: 320,
      fuelCapacity:       1_200,
      fuelRange:          700,
    } satisfies TSTRefuelEvent);
  });

  test('It should emit retarder events', () => {
    tst.data.previous.retarderBrake = 3;
    tst.data.current.retarderBrake  = 5;
    tst.data.current.retarderStepCount = 7;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('retarder', {
      retarderStepCount: 7,
      retarderBrake:     5,
    } satisfies TSTRetarderEvent);
  });

  test('It should emit warning events', () => {
    tst.data.previous.airPressureWarning      = false;
    tst.data.previous.fuelWarning             = false;
    tst.data.previous.adblueWarning           = false;
    tst.data.previous.oilPressureWarning      = false;
    tst.data.previous.waterTemperatureWarning = false;
    tst.data.previous.batteryVoltageWarning   = false;

    tst.data.current.airPressureWarning      = true;
    tst.data.current.fuelWarning             = true;
    tst.data.current.adblueWarning           = true;
    tst.data.current.oilPressureWarning      = true;
    tst.data.current.waterTemperatureWarning = true;
    tst.data.current.batteryVoltageWarning   = true;

    tst.data.current.airPressure                   = 180;
    tst.data.current.airPressureWarningFactor      = 0.2;
    tst.data.current.fuel                          = 800;
    tst.data.current.fuelAvgConsumption            = 280;
    tst.data.current.fuelCapacity                  = 1_200;
    tst.data.current.fuelRange                     = 500;
    tst.data.current.fuelWarningFactor             = 0.25;
    tst.data.current.adblue                        = 500;
    tst.data.current.adblueCapacity                = 1_000;
    tst.data.current.adblueWarningFactor           = 0.3;
    tst.data.current.oilPressure                   = 40;
    tst.data.current.oilPressureWarningFactor      = 0.15;
    tst.data.current.waterTemperature              = 110;
    tst.data.current.waterTemperatureWarningFactor = 0.1;
    tst.data.current.batteryVoltage                = 11.5;
    tst.data.current.batteryVoltageWarningFactor   = 0.05;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(6);
    expect(tst.emit).toHaveBeenCalledWith('warning', {
      airPressure:              180,
      airPressureWarning:       true,
      airPressureWarningFactor: 0.2,
    } satisfies TSTAirPressureWarningEvent);
    expect(tst.emit).toHaveBeenCalledWith('warning', {
      fuel:               800,
      fuelAvgConsumption: 280,
      fuelCapacity:       1_200,
      fuelRange:          500,
      fuelWarning:        true,
      fuelWarningFactor:  0.25,
    } satisfies TSTFuelWarningEvent);
    expect(tst.emit).toHaveBeenCalledWith('warning', {
      adblue:              500,
      adblueCapacity:      1_000,
      adblueWarning:       true,
      adblueWarningFactor: 0.3,
    } satisfies TSTAdBlueWarningEvent);
    expect(tst.emit).toHaveBeenCalledWith('warning', {
      oilPressure:              40,
      oilPressureWarning:       true,
      oilPressureWarningFactor: 0.15,
      oilTemperature:           tst.data.current.oilTemperature,
    } satisfies TSTOilPressureWarningEvent);
    expect(tst.emit).toHaveBeenCalledWith('warning', {
      waterTemperature:              110,
      waterTemperatureWarning:       true,
      waterTemperatureWarningFactor: 0.1,
    } satisfies TSTWaterTempWarningEvent);
    expect(tst.emit).toHaveBeenCalledWith('warning', {
      batteryVoltage:              11.5,
      batteryVoltageWarning:       true,
      batteryVoltageWarningFactor: 0.05,
    } satisfies TSTBatteryVoltageWarningEvent);
  });

  test('It should emit wipers events', () => {
    tst.data.previous.wipers = false;
    tst.data.current.wipers  = true;

    handleTruckEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('wipers', true);
  });

  test('It should not emit eny events if there are no changes', () => {
    handleTruckEvents(tst);

    expect(tst.emit).not.toHaveBeenCalled();
  });
});
