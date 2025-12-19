import type { TruckSimTelemetry } from '../truckSimTelemetry';
import type { SCSSDKTelemetry } from '../types';

export const  handleTruckEvents = function(tst: TruckSimTelemetry): void {
  const { current, previous } = tst.data;

  if (current.cruiseControl !== previous.cruiseControl) {
    if (current.cruiseControl) {
      tst.emit('cruise-control', {
        cruiseControl:      current.cruiseControl,
        cruiseControlSpeed: current.cruiseControlSpeed,
      } satisfies TSTCruiseControlEvent);
    }
  }

  if (current.cruiseControl && current.cruiseControlSpeed > previous.cruiseControlSpeed) {
    tst.emit('cruise-control-increase', {
      cruiseControl:      current.cruiseControl,
      cruiseControlSpeed: current.cruiseControlSpeed,
    } satisfies TSTCruiseControlEvent);
  }

  if (current.cruiseControl && current.cruiseControlSpeed < previous.cruiseControlSpeed) {
    tst.emit('cruise-control-decrease', {
      cruiseControl:      current.cruiseControl,
      cruiseControlSpeed: current.cruiseControlSpeed,
    } satisfies TSTCruiseControlEvent);
  }

  if (current.electricEnabled !== previous.electricEnabled) {
    tst.emit('electric', current.electricEnabled);
  }

  if (current.airPressureEmergency && !previous.airPressureEmergency) {
    // TODO: Ignore if angine is off?
    tst.emit('emergency', {
      airPressure:                current.airPressure,
      airPressureEmergency:       current.airPressureEmergency,
      airPressureEmergencyFactor: current.airPressureEmergencyFactor,
    } satisfies TSTAirPressureEmergencyEvent);
  }

  if (current.engineEnabled !== previous.engineEnabled) {
    tst.emit('engine', current.engineEnabled);
  }

  if (current.gear !== previous.gear) {
    tst.emit('gear-change', {
      gear:          current.gear,
      gearDashboard: current.gearDashboard,
    } satisfies TSTGearChangeEvent);
  }

  if (current.parkBrake !== previous.parkBrake) {
    tst.emit('park-brake', current.parkBrake);
  }

  if (current.refuel && !previous.refuel) {
    tst.emit('refuel-start', {
      fuel:               current.fuel,
      fuelAvgConsumption: current.fuelAvgConsumption,
      fuelCapacity:       current.fuelCapacity,
      fuelRange:          current.fuelRange,
    } satisfies TSTRefuelEvent);
  }

  if (!current.refuel && previous.refuel) {
    tst.emit('refuel-stop', {
      fuel:               current.fuel,
      fuelAvgConsumption: current.fuelAvgConsumption,
      fuelCapacity:       current.fuelCapacity,
      fuelRange:          current.fuelRange,
    } satisfies TSTRefuelEvent);
  }

  if (current.retarderBrake !== previous.retarderBrake) {
    tst.emit('retarder', {
      retarderStepCount: current.retarderStepCount,
      retarderBrake:     current.retarderBrake,
    } satisfies TSTRetarderEvent);
  }

  if (current.airPressureWarning && !previous.airPressureWarning) {
    // TODO: Ignore if angine is off?
    tst.emit('warning', {
      airPressure:              current.airPressure,
      airPressureWarning:       current.airPressureWarning,
      airPressureWarningFactor: current.airPressureWarningFactor,
    } satisfies TSTAirPressureWarningEvent);
  }

  if (current.fuelWarning && !previous.fuelWarning) {
    tst.emit('warning', {
      fuel:               current.fuel,
      fuelAvgConsumption: current.fuelAvgConsumption,
      fuelCapacity:       current.fuelCapacity,
      fuelRange:          current.fuelRange,
      fuelWarning:        current.fuelWarning,
      fuelWarningFactor:  current.fuelWarningFactor,
    } satisfies TSTFuelWarningEvent);
  }

  if (current.adblueWarning && !previous.adblueWarning) {
    tst.emit('warning', {
      adblue:              current.adblue,
      adblueCapacity:      current.adblueCapacity,
      adblueWarning:       current.adblueWarning,
      adblueWarningFactor: current.adblueWarningFactor,
    } satisfies TSTAdBlueWarningEvent);
  }

  if (current.oilPressureWarning && !previous.oilPressureWarning) {
    tst.emit('warning', {
      oilPressure:              current.oilPressure,
      oilPressureWarning:       current.oilPressureWarning,
      oilPressureWarningFactor: current.oilPressureWarningFactor,
      oilTemperature:           current.oilTemperature,
    } satisfies TSTOilPressureWarningEvent);
  }

  if (current.waterTemperatureWarning && !previous.waterTemperatureWarning) {
    tst.emit('warning', {
      waterTemperature:              current.waterTemperature,
      waterTemperatureWarning:       current.waterTemperatureWarning,
      waterTemperatureWarningFactor: current.waterTemperatureWarningFactor,
    } satisfies TSTWaterTempWarningEvent);
  }

  if (current.batteryVoltageWarning && !previous.batteryVoltageWarning) {
    tst.emit('warning', {
      batteryVoltage:              current.batteryVoltage,
      batteryVoltageWarning:       current.batteryVoltageWarning,
      batteryVoltageWarningFactor: current.batteryVoltageWarningFactor,
    } satisfies TSTBatteryVoltageWarningEvent);
  }

  if (current.wipers !== previous.wipers) {
    tst.emit('wipers', current.wipers);
  }
};

export interface TSTCruiseControlEvent extends Pick<
  SCSSDKTelemetry,
  | 'cruiseControl'
  | 'cruiseControlSpeed'
> {}

export interface TSTGearChangeEvent extends Pick<
  SCSSDKTelemetry,
  | 'gear'
  | 'gearDashboard'
> {}

export interface TSTRefuelEvent extends Pick<
  SCSSDKTelemetry,
  | 'fuel'
  | 'fuelAvgConsumption'
  | 'fuelCapacity'
  | 'fuelRange'
> {}

export interface TSTRetarderEvent extends Pick<
  SCSSDKTelemetry,
  | 'retarderStepCount'
  | 'retarderBrake'
> {}

export interface TSTAirPressureEmergencyEvent extends Pick<
  SCSSDKTelemetry,
  | 'airPressure'
  | 'airPressureEmergency'
  | 'airPressureEmergencyFactor'
> {}

export type TSTEmergencyEvent = TSTAirPressureEmergencyEvent;

export interface TSTAirPressureWarningEvent extends Pick<
  SCSSDKTelemetry,
  | 'airPressure'
  | 'airPressureWarning'
  | 'airPressureWarningFactor'
> {}

export interface TSTFuelWarningEvent extends Pick<
  SCSSDKTelemetry,
  | 'fuel'
  | 'fuelAvgConsumption'
  | 'fuelCapacity'
  | 'fuelRange'
  | 'fuelWarning'
  | 'fuelWarningFactor'
> {}

export interface TSTAdBlueWarningEvent extends Pick<
  SCSSDKTelemetry,
  | 'adblue'
  | 'adblueCapacity'
  | 'adblueWarning'
  | 'adblueWarning'
  | 'adblueWarningFactor'
> {}

export interface TSTOilPressureWarningEvent extends Pick<
  SCSSDKTelemetry,
  | 'oilPressure'
  | 'oilPressureWarning'
  | 'oilPressureWarning'
  | 'oilPressureWarningFactor'
  | 'oilTemperature'
> {}

export interface TSTWaterTempWarningEvent extends Pick<
  SCSSDKTelemetry,
  | 'waterTemperature'
  | 'waterTemperatureWarning'
  | 'waterTemperatureWarningFactor'
> {}

export interface TSTBatteryVoltageWarningEvent extends Pick<
  SCSSDKTelemetry,
  | 'batteryVoltage'
  | 'batteryVoltageWarning'
  | 'batteryVoltageWarningFactor'
> {}

export type TSTWarningEvent =
  | TSTAirPressureWarningEvent
  | TSTFuelWarningEvent
  | TSTAdBlueWarningEvent
  | TSTOilPressureWarningEvent
  | TSTWaterTempWarningEvent
  | TSTBatteryVoltageWarningEvent;