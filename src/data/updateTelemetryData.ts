import type { BufferReader } from '../buffer/bufferReader';
import { FINE_OFFENCE_STRING_SIZE, JOB_MARKET_STRING_SIZE, SHIFTER_TYPE_STRING_SIZE, STRING_SIZE } from './constants';
import type { SCSSDKTelemetry } from '../types';

export const updateTelemetryData = function(data: SCSSDKTelemetry, bufferReader: BufferReader): void {
  const {
    setCursor,
    readBool,
    readUInt,
    readInt,
    readFloat,
    readDouble,
    readULongLong,
    readLongLong,
    readString,
    padding,
  } = bufferReader;

  // ------ 1st zone ------
  setCursor(0);
  data.sdkActive             = readBool();
  padding(3);
  data.paused                = readBool();
  padding(3);
  data.time                  = readULongLong();
  data.simulatedTime         = readULongLong();
  data.renderTime            = readULongLong();
  data.multiplayerTimeOffset = readLongLong();

  // ------ 2nd zone ------
  setCursor(40);
  data.telemetryPluginRevision      = readUInt();
  data.versionMajor                 = readUInt();
  data.versionMinor                 = readUInt();
  data.game                         = readUInt();
  data.telemetryVersionGameMajor    = readUInt();
  data.telemetryVersionGameMinor    = readUInt();
  data.timeAbs                      = readUInt();
  data.gears                        = readUInt();
  data.gearsReverse                 = readUInt();
  data.retarderStepCount            = readUInt();
  data.truckWheelCount              = readUInt();
  data.selectorCount                = readUInt();
  data.timeAbsDelivery              = readUInt();
  data.maxTrailerCount              = readUInt();
  data.unitCount                    = readUInt();
  data.plannedDistanceKm            = readUInt();
  data.shifterSlot                  = readUInt();
  data.retarderBrake                = readUInt();
  data.lightsAuxFront               = readUInt();
  data.lightsAuxRoof                = readUInt();
  data.truckWheelSubstance.forEach( (val, i) => data.truckWheelSubstance[i] = readUInt() );
  data.hshifterPosition.forEach(    (val, i) => data.hshifterPosition[i]    = readUInt() );
  data.hshifterBitmask.forEach(     (val, i) => data.hshifterBitmask[i]     = readUInt() );
  data.jobDeliveredDeliveryTime     = readUInt();
  data.jobStartingTime              = readUInt();
  data.jobFinishedTime              = readUInt();

  // ------ 3rd zone ------
  setCursor(500);
  data.restStop                 = readInt();
  data.gear                     = readInt();
  data.gearDashboard            = readInt();
  data.hshifterResulting.forEach( (val, i) => data.hshifterResulting[i] = readInt() );
  data.jobDeliveredEarnedXp     = readInt();

  // ------ 4th zone ------
  setCursor(700);
  data.scale                         = readFloat();
  data.fuelCapacity                  = readFloat();
  data.fuelWarningFactor             = readFloat();
  data.adblueCapacity                = readFloat();
  data.adblueWarningFactor           = readFloat();
  data.airPressureWarningFactor      = readFloat();
  data.airPressureEmergencyFactor    = readFloat();
  data.oilPressureWarningFactor      = readFloat();
  data.waterTemperatureWarningFactor = readFloat();
  data.batteryVoltageWarningFactor   = readFloat();
  data.engineRpmMax                  = readFloat();
  data.gearDifferential              = readFloat();
  data.cargoMass                     = readFloat();
  data.truckWheelRadius.forEach(  (val, i) => data.truckWheelRadius[i]  = readFloat() );
  data.gearRatiosForward.forEach( (val, i) => data.gearRatiosForward[i] = readFloat() );
  data.gearRatiosReverse.forEach( (val, i) => data.gearRatiosReverse[i] = readFloat() );
  data.unitMass                      = readFloat();
  data.speed                         = readFloat();
  data.engineRpm                     = readFloat();
  data.userSteer                     = readFloat();
  data.userThrottle                  = readFloat();
  data.userBrake                     = readFloat();
  data.userClutch                    = readFloat();
  data.gameSteer                     = readFloat();
  data.gameThrottle                  = readFloat();
  data.gameBrake                     = readFloat();
  data.gameClutch                    = readFloat();
  data.cruiseControlSpeed            = readFloat();
  data.airPressure                   = readFloat();
  data.brakeTemperature              = readFloat();
  data.fuel                          = readFloat();
  data.fuelAvgConsumption            = readFloat();
  data.fuelRange                     = readFloat();
  data.adblue                        = readFloat();
  data.oilPressure                   = readFloat();
  data.oilTemperature                = readFloat();
  data.waterTemperature              = readFloat();
  data.batteryVoltage                = readFloat();
  data.lightsDashboard               = readFloat();
  data.wearEngine                    = readFloat();
  data.wearTransmission              = readFloat();
  data.wearCabin                     = readFloat();
  data.wearChassis                   = readFloat();
  data.wearWheels                    = readFloat();
  data.truckOdometer                 = readFloat();
  data.routeDistance                 = readFloat();
  data.routeTime                     = readFloat();
  data.speedLimit                    = readFloat();
  data.truckWheelSuspDeflection.forEach( (val, i) => data.truckWheelSuspDeflection[i] = readFloat() );
  data.truckWheelVelocity.forEach(       (val, i) => data.truckWheelVelocity[i]       = readFloat() );
  data.truckWheelSteering.forEach(       (val, i) => data.truckWheelSteering[i]       = readFloat() );
  data.truckWheelRotation.forEach(       (val, i) => data.truckWheelRotation[i]       = readFloat() );
  data.truckWheelLift.forEach(           (val, i) => data.truckWheelLift[i]           = readFloat() );
  data.truckWheelLiftOffset.forEach(     (val, i) => data.truckWheelLiftOffset[i]     = readFloat() );
  data.jobDeliveredCargoDamage       = readFloat();
  data.jobDeliveredDistanceKm        = readFloat();
  data.refuelAmount                  = readFloat();
  data.cargoDamage                   = readFloat();

  // ------ 5th zone ------
  setCursor(1500);
  data.truckWheelSteerable.forEach( (val, i) => data.truckWheelSteerable[i] = readBool() );
  data.truckWheelSimulated.forEach( (val, i) => data.truckWheelSimulated[i] = readBool() );
  data.truckWheelPowered.forEach(   (val, i) => data.truckWheelPowered[i]   = readBool() );
  data.truckWheelLiftable.forEach(  (val, i) => data.truckWheelLiftable[i]  = readBool() );
  data.isCargoLoaded               = readBool();
  data.specialJob                  = readBool();
  data.parkBrake                   = readBool();
  data.motorBrake                  = readBool();
  data.airPressureWarning          = readBool();
  data.airPressureEmergency        = readBool();
  data.fuelWarning                 = readBool();
  data.adblueWarning               = readBool();
  data.oilPressureWarning          = readBool();
  data.waterTemperatureWarning     = readBool();
  data.batteryVoltageWarning       = readBool();
  data.electricEnabled             = readBool();
  data.engineEnabled               = readBool();
  data.wipers                      = readBool();
  data.blinkerLeftActive           = readBool();
  data.blinkerRightActive          = readBool();
  data.blinkerLeftOn               = readBool();
  data.blinkerRightOn              = readBool();
  data.lightsParking               = readBool();
  data.lightsBeamLow               = readBool();
  data.lightsBeamHigh              = readBool();
  data.lightsBeacon                = readBool();
  data.lightsBrake                 = readBool();
  data.lightsReverse               = readBool();
  data.lightsHazard                = readBool();
  data.cruiseControl               = readBool();
  data.truckWheelOnGround.forEach( (val, i) => data.truckWheelOnGround[i] = readBool() );
  data.shifterToggle.forEach(      (val, i) => data.shifterToggle[i]      = readBool() );
  data.differentialLock            = readBool();
  data.liftAxle                    = readBool();
  data.liftAxleIndicator           = readBool();
  data.trailerLiftAxle             = readBool();
  data.trailerLiftAxleIndicator    = readBool();
  data.jobDeliveredAutoparkUsed    = readBool();
  data.jobDeliveredAutoloadUsed    = readBool();

  // ------ 6th zone ------
  setCursor(1640);
  data.cabinPositionX     = readFloat();
  data.cabinPositionY     = readFloat();
  data.cabinPositionZ     = readFloat();
  data.headPositionX      = readFloat();
  data.headPositionY      = readFloat();
  data.headPositionZ      = readFloat();
  data.truckHookPositionX = readFloat();
  data.truckHookPositionY = readFloat();
  data.truckHookPositionZ = readFloat();
  data.truckWheelPositionX.forEach( (val, i) => data.truckWheelPositionX[i] = readFloat() );
  data.truckWheelPositionY.forEach( (val, i) => data.truckWheelPositionY[i] = readFloat() );
  data.truckWheelPositionZ.forEach( (val, i) => data.truckWheelPositionZ[i] = readFloat() );
  data.lvAccelerationX    = readFloat();
  data.lvAccelerationY    = readFloat();
  data.lvAccelerationZ    = readFloat();
  data.avAccelerationX    = readFloat();
  data.avAccelerationY    = readFloat();
  data.avAccelerationZ    = readFloat();
  data.accelerationX      = readFloat();
  data.accelerationY      = readFloat();
  data.accelerationZ      = readFloat();
  data.aaAccelerationX    = readFloat();
  data.aaAccelerationY    = readFloat();
  data.aaAccelerationZ    = readFloat();
  data.cabinAVX           = readFloat();
  data.cabinAVY           = readFloat();
  data.cabinAVZ           = readFloat();
  data.cabinAAX           = readFloat();
  data.cabinAAY           = readFloat();
  data.cabinAAZ           = readFloat();

  // ------ 7th zone ------
  setCursor(2000);
  data.cabinOffsetX          = readFloat();
  data.cabinOffsetY          = readFloat();
  data.cabinOffsetZ          = readFloat();
  data.cabinOffsetrotationX  = readFloat();
  data.cabinOffsetrotationY  = readFloat();
  data.cabinOffsetrotationZ  = readFloat();
  data.headOffsetX           = readFloat();
  data.headOffsetY           = readFloat();
  data.headOffsetZ           = readFloat();
  data.headOffsetrotationX   = readFloat();
  data.headOffsetrotationY   = readFloat();
  data.headOffsetrotationZ   = readFloat();

  // ------ 8th zone ------
  setCursor(2200);
  data.coordinateX = readDouble();
  data.coordinateY = readDouble();
  data.coordinateZ = readDouble();
  data.rotationX   = readDouble();
  data.rotationY   = readDouble();
  data.rotationZ   = readDouble();

  // ------ 9th zone ------
  setCursor(2300);
  data.truckBrandId                = readString(STRING_SIZE);
  data.truckBrand                  = readString(STRING_SIZE);
  data.truckId                     = readString(STRING_SIZE);
  data.truckName                   = readString(STRING_SIZE);
  data.cargoId                     = readString(STRING_SIZE);
  data.cargo                       = readString(STRING_SIZE);
  data.cityDstId                   = readString(STRING_SIZE);
  data.cityDst                     = readString(STRING_SIZE);
  data.compDstId                   = readString(STRING_SIZE);
  data.compDst                     = readString(STRING_SIZE);
  data.citySrcId                   = readString(STRING_SIZE);
  data.citySrc                     = readString(STRING_SIZE);
  data.compSrcId                   = readString(STRING_SIZE);
  data.compSrc                     = readString(STRING_SIZE);
  data.shifterType                 = readString(SHIFTER_TYPE_STRING_SIZE);
  data.truckLicensePlate           = readString(STRING_SIZE);
  data.truckLicensePlateCountryId  = readString(STRING_SIZE);
  data.truckLicensePlateCountry    = readString(STRING_SIZE);
  data.jobMarket                   = readString(JOB_MARKET_STRING_SIZE);
  data.fineOffence                 = readString(FINE_OFFENCE_STRING_SIZE);
  data.ferrySourceName             = readString(STRING_SIZE);
  data.ferryTargetName             = readString(STRING_SIZE);
  data.ferrySourceId               = readString(STRING_SIZE);
  data.ferryTargetId               = readString(STRING_SIZE);
  data.trainSourceName             = readString(STRING_SIZE);
  data.trainTargetName             = readString(STRING_SIZE);
  data.trainSourceId               = readString(STRING_SIZE);
  data.trainTargetId               = readString(STRING_SIZE);

  // ------ 10th zone ------
  setCursor(4000);
  data.jobIncome = readULongLong();

  // ------ 11th zone ------
  setCursor(4200);
  data.jobCancelledPenalty = readLongLong();
  data.jobDeliveredRevenue = readLongLong();
  data.fineAmount          = readLongLong();
  data.tollgatePayAmount   = readLongLong();
  data.ferryPayAmount      = readLongLong();
  data.trainPayAmount      = readLongLong();

  // ------ 12th zone ------
  setCursor(4300);
  data.onJob        = readBool();
  data.jobFinished  = readBool();
  data.jobCancelled = readBool();
  data.jobDelivered = readBool();
  data.fined        = readBool();
  data.tollgate     = readBool();
  data.ferry        = readBool();
  data.train        = readBool();
  data.refuel       = readBool();
  data.refuelPayed  = readBool();

  // ------ 13th zone ------
  setCursor(4400);
  data.substances.forEach( (val, i) => data.substances[i] = readString(STRING_SIZE) );

  // ------ 14th zone ------
  data.trailers.forEach((trailer, i) => {
    const trailerOffset = 6000 + i * 1560;
    setCursor(trailerOffset);

    // ------ 1st trailer zone ------
    trailer.wheelSteerable.forEach( (val, i) => trailer.wheelSteerable[i] = readBool() );
    trailer.wheelSimulated.forEach( (val, i) => trailer.wheelSimulated[i] = readBool() );
    trailer.wheelPowered.forEach(   (val, i) => trailer.wheelPowered[i]   = readBool() );
    trailer.wheelLiftable.forEach(  (val, i) => trailer.wheelLiftable[i]  = readBool() );
    trailer.wheelOnGround.forEach(  (val, i) => trailer.wheelOnGround[i]  = readBool() );
    trailer.attached = readBool();
    padding(3);

    // ------ 2nd trailer zone ------
    setCursor(trailerOffset + 84);
    trailer.wheelSubstance.forEach( (val, i) => trailer.wheelSubstance[i] = readUInt() );
    trailer.wheelCount = readUInt();

    // ------ 3rd trailer zone ------
    setCursor(trailerOffset + 152);
    trailer.cargoDamage           = readFloat();
    trailer.wearChassis           = readFloat();
    trailer.wearWheels            = readFloat();
    trailer.wearBody              = readFloat();
    trailer.wheelSuspDeflection.forEach( (val, i) => trailer.wheelSuspDeflection[i] = readFloat() );
    trailer.wheelVelocity.forEach(       (val, i) => trailer.wheelVelocity[i]       = readFloat() );
    trailer.wheelSteering.forEach(       (val, i) => trailer.wheelSteering[i]       = readFloat() );
    trailer.wheelRotation.forEach(       (val, i) => trailer.wheelRotation[i]       = readFloat() );
    trailer.wheelLift.forEach(           (val, i) => trailer.wheelLift[i]           = readFloat() );
    trailer.wheelLiftOffset.forEach(     (val, i) => trailer.wheelLiftOffset[i]     = readFloat() );
    trailer.wheelRadius.forEach(         (val, i) => trailer.wheelRadius[i]         = readFloat() );

    // ------ 4th trailer zone ------
    setCursor(trailerOffset + 616);
    trailer.linearVelocityX      = readFloat();
    trailer.linearVelocityY      = readFloat();
    trailer.linearVelocityZ      = readFloat();
    trailer.angularVelocityX     = readFloat();
    trailer.angularVelocityY     = readFloat();
    trailer.angularVelocityZ     = readFloat();
    trailer.linearAccelerationX  = readFloat();
    trailer.linearAccelerationY  = readFloat();
    trailer.linearAccelerationZ  = readFloat();
    trailer.angularAccelerationX = readFloat();
    trailer.angularAccelerationY = readFloat();
    trailer.angularAccelerationZ = readFloat();
    trailer.hookPositionX        = readFloat();
    trailer.hookPositionY        = readFloat();
    trailer.hookPositionZ        = readFloat();
    trailer.wheelPositionX.forEach( (val, i) => trailer.wheelPositionX[i] = readFloat() );
    trailer.wheelPositionY.forEach( (val, i) => trailer.wheelPositionY[i] = readFloat() );
    trailer.wheelPositionZ.forEach( (val, i) => trailer.wheelPositionZ[i] = readFloat() );

    // ------ 5th trailer zone ------
    setCursor(trailerOffset + 872);
    trailer.worldX    = readDouble();
    trailer.worldY    = readDouble();
    trailer.worldZ    = readDouble();
    trailer.rotationX = readDouble();
    trailer.rotationY = readDouble();
    trailer.rotationZ = readDouble();

    // ------ 6th trailer zone ------
    setCursor(trailerOffset + 920);
    trailer.id                      = readString(STRING_SIZE);
    trailer.cargoAcessoryId         = readString(STRING_SIZE);
    trailer.bodyType                = readString(STRING_SIZE);
    trailer.brandId                 = readString(STRING_SIZE);
    trailer.brand                   = readString(STRING_SIZE);
    trailer.name                    = readString(STRING_SIZE);
    trailer.chainType               = readString(STRING_SIZE);
    trailer.licensePlate            = readString(STRING_SIZE);
    trailer.licensePlateCountry     = readString(STRING_SIZE);
    trailer.licensePlateCountryId   = readString(STRING_SIZE);
  });
};
