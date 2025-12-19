import { allocateTelemetryData } from './allocateTelemetryData';

describe('allocateTelemetryData', () => {
  const data = allocateTelemetryData();

  test('It should allocate telemetry data correctly', () => {
    // ------ 1st zone ------
    expect(data).toEqual(expect.objectContaining({
      sdkActive:             false,
      paused:                false,
      time:                  0n,
      simulatedTime:         0n,
      renderTime:            0n,
      multiplayerTimeOffset: 0n,
    }));

    // ------ 2nd zone ------
    expect(data).toEqual(expect.objectContaining({
      telemetryPluginRevision:   0,
      versionMajor:              0,
      versionMinor:              0,
      game:                      0,
      telemetryVersionGameMajor: 0,
      telemetryVersionGameMinor: 0,
      timeAbs:                   0,
      gears:                     0,
      gearsReverse:              0,
      retarderStepCount:         0,
      truckWheelCount:           0,
      selectorCount:             0,
      timeAbsDelivery:           0,
      maxTrailerCount:           0,
      unitCount:                 0,
      plannedDistanceKm:         0,
      shifterSlot:               0,
      retarderBrake:             0,
      lightsAuxFront:            0,
      lightsAuxRoof:             0,
      truckWheelSubstance:       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      hshifterPosition:          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      hshifterBitmask:           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      jobDeliveredDeliveryTime:  0,
      jobStartingTime:           0,
      jobFinishedTime:           0,
    }));

    // ------ 3rd zone ------
    expect(data).toEqual(expect.objectContaining({
      restStop:             0,
      gear:                 0,
      gearDashboard:        0,
      hshifterResulting:    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      jobDeliveredEarnedXp: 0,
    }));

    // ------ 4th zone ------
    expect(data).toEqual(expect.objectContaining({
      scale:                         0,
      fuelCapacity:                  0,
      fuelWarningFactor:             0,
      adblueCapacity:                0,
      adblueWarningFactor:           0,
      airPressureWarningFactor:      0,
      airPressureEmergencyFactor:    0,
      oilPressureWarningFactor:      0,
      waterTemperatureWarningFactor: 0,
      batteryVoltageWarningFactor:   0,
      engineRpmMax:                  0,
      gearDifferential:              0,
      cargoMass:                     0,
      truckWheelRadius:              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      gearRatiosForward:             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      gearRatiosReverse:             [0,0,0,0,0,0,0,0],
      unitMass:                      0,
      speed:                         0,
      engineRpm:                     0,
      userSteer:                     0,
      userThrottle:                  0,
      userBrake:                     0,
      userClutch:                    0,
      gameSteer:                     0,
      gameThrottle:                  0,
      gameBrake:                     0,
      gameClutch:                    0,
      cruiseControlSpeed:            0,
      airPressure:                   0,
      brakeTemperature:              0,
      fuel:                          0,
      fuelAvgConsumption:            0,
      fuelRange:                     0,
      adblue:                        0,
      oilPressure:                   0,
      oilTemperature:                0,
      waterTemperature:              0,
      batteryVoltage:                0,
      lightsDashboard:               0,
      wearEngine:                    0,
      wearTransmission:              0,
      wearCabin:                     0,
      wearChassis:                   0,
      wearWheels:                    0,
      truckOdometer:                 0,
      routeDistance:                 0,
      routeTime:                     0,
      speedLimit:                    0,
      truckWheelSuspDeflection:      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      truckWheelVelocity:            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      truckWheelSteering:            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      truckWheelRotation:            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      truckWheelLift:                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      truckWheelLiftOffset:          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      jobDeliveredCargoDamage:       0,
      jobDeliveredDistanceKm:        0,
      refuelAmount:                  0,
      cargoDamage:                   0,
    }));

    // ------ 5th zone ------
    expect(data).toEqual(expect.objectContaining({
      truckWheelSteerable:      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      truckWheelSimulated:      [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      truckWheelPowered:        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      truckWheelLiftable:       [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      isCargoLoaded:            false,
      specialJob:               false,
      parkBrake:                false,
      motorBrake:               false,
      airPressureWarning:       false,
      airPressureEmergency:     false,
      fuelWarning:              false,
      adblueWarning:            false,
      oilPressureWarning:       false,
      waterTemperatureWarning:  false,
      batteryVoltageWarning:    false,
      electricEnabled:          false,
      engineEnabled:            false,
      wipers:                   false,
      blinkerLeftActive:        false,
      blinkerRightActive:       false,
      blinkerLeftOn:            false,
      blinkerRightOn:           false,
      lightsParking:            false,
      lightsBeamLow:            false,
      lightsBeamHigh:           false,
      lightsBeacon:             false,
      lightsBrake:              false,
      lightsReverse:            false,
      lightsHazard:             false,
      cruiseControl:            false,
      truckWheelOnGround:       [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      shifterToggle:            [false,false],
      differentialLock:         false,
      liftAxle:                 false,
      liftAxleIndicator:        false,
      trailerLiftAxle:          false,
      trailerLiftAxleIndicator: false,
      jobDeliveredAutoparkUsed: false,
      jobDeliveredAutoloadUsed: false,
    }));

    // ------ 6th zone ------
    expect(data).toEqual(expect.objectContaining({
      cabinPositionX:      0,
      cabinPositionY:      0,
      cabinPositionZ:      0,
      headPositionX:       0,
      headPositionY:       0,
      headPositionZ:       0,
      truckHookPositionX:  0,
      truckHookPositionY:  0,
      truckHookPositionZ:  0,
      truckWheelPositionX: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      truckWheelPositionY: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      truckWheelPositionZ: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      lvAccelerationX:     0,
      lvAccelerationY:     0,
      lvAccelerationZ:     0,
      avAccelerationX:     0,
      avAccelerationY:     0,
      avAccelerationZ:     0,
      accelerationX:       0,
      accelerationY:       0,
      accelerationZ:       0,
      aaAccelerationX:     0,
      aaAccelerationY:     0,
      aaAccelerationZ:     0,
      cabinAVX:            0,
      cabinAVY:            0,
      cabinAVZ:            0,
      cabinAAX:            0,
      cabinAAY:            0,
      cabinAAZ:            0,
    }));

    // ------ 7th zone ------
    expect(data).toEqual(expect.objectContaining({
      cabinOffsetX:         0,
      cabinOffsetY:         0,
      cabinOffsetZ:         0,
      cabinOffsetrotationX: 0,
      cabinOffsetrotationY: 0,
      cabinOffsetrotationZ: 0,
      headOffsetX:          0,
      headOffsetY:          0,
      headOffsetZ:          0,
      headOffsetrotationX:  0,
      headOffsetrotationY:  0,
      headOffsetrotationZ:  0,
    }));

    // ------ 8th zone ------
    expect(data).toEqual(expect.objectContaining({
      coordinateX: 0,
      coordinateY: 0,
      coordinateZ: 0,
      rotationX:   0,
      rotationY:   0,
      rotationZ:   0,
    }));

    // ------ 9th zone ------
    expect(data).toEqual(expect.objectContaining({
      truckBrandId:               '',
      truckBrand:                 '',
      truckId:                    '',
      truckName:                  '',
      cargoId:                    '',
      cargo:                      '',
      cityDstId:                  '',
      cityDst:                    '',
      compDstId:                  '',
      compDst:                    '',
      citySrcId:                  '',
      citySrc:                    '',
      compSrcId:                  '',
      compSrc:                    '',
      shifterType:                '',
      truckLicensePlate:          '',
      truckLicensePlateCountryId: '',
      truckLicensePlateCountry:   '',
      jobMarket:                  '',
      fineOffence:                '',
      ferrySourceName:            '',
      ferryTargetName:            '',
      ferrySourceId:              '',
      ferryTargetId:              '',
      trainSourceName:            '',
      trainTargetName:            '',
      trainSourceId:              '',
      trainTargetId:              '',
    }));

    // ------ 10th zone ------
    expect(data).toEqual(expect.objectContaining({
      jobIncome: 0n,
    }));

    // ------ 11th zone ------
    expect(data).toEqual(expect.objectContaining({
      jobCancelledPenalty: 0n,
      jobDeliveredRevenue: 0n,
      fineAmount:          0n,
      tollgatePayAmount:   0n,
      ferryPayAmount:      0n,
      trainPayAmount:      0n,
    }));

    // ------ 12th zone ------
    expect(data).toEqual(expect.objectContaining({
      onJob:        false,
      jobFinished:  false,
      jobCancelled: false,
      jobDelivered: false,
      fined:        false,
      tollgate:     false,
      ferry:        false,
      train:        false,
      refuel:       false,
      refuelPayed:  false,
    }));

    // ------ 13th zone ------
    expect(data).toEqual(expect.objectContaining({
      substances: ['','','','','','','','','','','','','','','','','','','','','','','','',''],
    }));

    // ------ 14th zone ------
    expect(data.trailers).toHaveLength(10);
  });

  test('It should allocate trailer telemetry data', () => {
    for (const trailer of data.trailers) {
      // ------ 1st zone ------
      expect(trailer).toEqual(expect.objectContaining({
        wheelSteerable: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        wheelSimulated: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        wheelPowered:   [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        wheelLiftable:  [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        wheelOnGround:  [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        attached:       false,
      }));

      // ------ 2nd zone ------
      expect(trailer).toEqual(expect.objectContaining({
        wheelSubstance: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelCount:     0,
      }));

      // ------ 3rd zone ------
      expect(trailer).toEqual(expect.objectContaining({
        cargoDamage:         0,
        wearChassis:         0,
        wearWheels:          0,
        wearBody:            0,
        wheelSuspDeflection: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelVelocity:       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelSteering:       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelRotation:       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelLift:           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelLiftOffset:     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelRadius:         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      }));

      // ------ 4th zone ------
      expect(trailer).toEqual(expect.objectContaining({
        linearVelocityX:      0,
        linearVelocityY:      0,
        linearVelocityZ:      0,
        angularVelocityX:     0,
        angularVelocityY:     0,
        angularVelocityZ:     0,
        linearAccelerationX:  0,
        linearAccelerationY:  0,
        linearAccelerationZ:  0,
        angularAccelerationX: 0,
        angularAccelerationY: 0,
        angularAccelerationZ: 0,
        hookPositionX:        0,
        hookPositionY:        0,
        hookPositionZ:        0,
        wheelPositionX:       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelPositionY:       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        wheelPositionZ:       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      }));

      // ------ 5th zone ------
      expect(trailer).toEqual(expect.objectContaining({
        worldX:    0,
        worldY:    0,
        worldZ:    0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
      }));

      // ------ 6th zone ------
      expect(trailer).toEqual(expect.objectContaining({
        id:                    '',
        cargoAcessoryId:       '',
        bodyType:              '',
        brandId:               '',
        brand:                 '',
        name:                  '',
        chainType:             '',
        licensePlate:          '',
        licensePlateCountry:   '',
        licensePlateCountryId: '',
      }));
    }
  });
});