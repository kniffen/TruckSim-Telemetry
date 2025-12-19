export type { TSTConfig } from './createConfig';
export type {
  TSTFineEvent,
  TSTRefuelPaidEvent,
  TSTTollgateEvent,
  TSTFerryEvent,
  TSTTrainEvent
} from './events/handleGameEvents';
export type {
  TSTJobStartedEvent,
  TSTJobDeliveredEvent,
  TSTJobCancelledEvent
} from './events/handleJobEvents';
export type {
  TSTCruiseControlEvent,
  TSTRefuelEvent,
  TSTGearChangeEvent,
  TSTRetarderEvent,
  TSTEmergencyEvent,
  TSTAirPressureEmergencyEvent,
  TSTWarningEvent,
  TSTAirPressureWarningEvent,
  TSTFuelWarningEvent,
  TSTAdBlueWarningEvent,
  TSTOilPressureWarningEvent,
  TSTWaterTempWarningEvent,
  TSTBatteryVoltageWarningEvent,
} from './events/handleTruckEvents';

export interface SCSSDKTelemetry {
  // ------ 1st zone ------
  /** Indicates whether the SDK is active or not */
  sdkActive: boolean;
  /** Indicates whether the game is paused or not */
  paused: boolean;
  /** Game timestamp in microseconds */
  time: bigint;
  /** Game simulation timestamp in microseconds */
  simulatedTime: bigint;
  /** Game render timestamp in microseconds */
  renderTime: bigint;
  /** Offset from the game time simulated in the local economy to the game time of the Convoy multiplayer server, represented in in-game minutes. */
  multiplayerTimeOffset: bigint;

  // ------ 2nd zone ------
  /** Telemetry Plugin Version */
  telemetryPluginRevision: number;
  /** Game major version */
  versionMajor: number;
  /** Game minor version */
  versionMinor: number;
  /** Game identifier (0=Unknown, 1=ETS2, 2=ATS) */
  game: number;
  /** Game telemetry version major */
  telemetryVersionGameMajor: number;
  /** Game telemetry version minor */
  telemetryVersionGameMinor: number;
  /** In-game time in minutes */
  timeAbs: number;
  /** Number of forward gears on undamaged truck */
  gears: number;
  /** Number of reverse gears on undamaged truck */
  gearsReverse: number;
  /** Number of steps in the retarder */
  retarderStepCount: number;
  /** Number of wheels on the truck */
  truckWheelCount: number;
  /** Number of selectors (e.g. range/splitter toggles) */
  selectorCount: number;
  /** Absolute in-game time of end of job delivery window */
  timeAbsDelivery: number;
  /** The maximum number of trailers that can be returned by the telemetry SDK */
  maxTrailerCount: number;
  /** How many units of the cargo the job consist of */
  unitCount: number;
  /** Navigation planned distance in km */
  plannedDistanceKm: number;
  /** Gearbox slot the h-shifter handle is currently in */
  shifterSlot: number;
  /** Current level of the retarder */
  retarderBrake: number;
  /** Indicator if the auxiliary front lights are active (0=off, 1=dimmed, 2=full) */
  lightsAuxFront: number;
  /** Indicator if the auxiliary roof lights are active (0=off, 1=dimmed, 2=full) */
  lightsAuxRoof: number;
  /** Substance below the wheel */
  truckWheelSubstance: number[];
  /** Handle position index for each slot */
  hshifterPosition: number[];
  /** Bitmask of selectors for each slot */
  hshifterBitmask: number[];
  /** Total time spend on the job (in in-game minutes) */
  jobDeliveredDeliveryTime: number;
  /** Time the job started (in in-game minutes) */
  jobStartingTime: number;
  /** Time the job finished (in in-game minutes) */
  jobFinishedTime: number;

  // ------ 3rd zone ------
  /** Time until next rest stop (in in-game minutes) */
  restStop: number;
  /** Gear selected in the transmission */
  gear: number;
  /** Gear displayed on dashboard */
  gearDashboard: number;
  /** Resulting gear index for each slot */
  hshifterResulting: number[];
  /** XP earned when a job is delivered */
  jobDeliveredEarnedXp: number;

  // ------ 4th zone ------
  /** Scale applied to distance and time to compensate for the scale of the map */
  scale: number;
  /** Fuel tank capacity in litres */
  fuelCapacity: number;
  /** Fraction of the fuel capacity below which is activated the fuel warning. */
  fuelWarningFactor: number;
  /** AdBlue tank capacity in litres */
  adblueCapacity: number;
  /** Fraction of the adblue capacity below which is activated the adblue warning */
  adblueWarningFactor: number;
  /** Pressure of the air in the tank below which the warning activates */
  airPressureWarningFactor: number;
  /** Pressure of the air in the tank below which the emergency brakes activate */
  airPressureEmergencyFactor: number;
  /** Pressure of the oil below which the warning activates */
  oilPressureWarningFactor: number;
  /** Temperature of the water above which the warning activates */
  waterTemperatureWarningFactor: number;
  /** Voltage of the battery below which the warning activates */
  batteryVoltageWarningFactor: number;
  /** Maximum rpm value */
  engineRpmMax: number;
  /** Differential ratio of the truck */
  gearDifferential: number;
  /** Mass of the cargo in kilograms */
  cargoMass: number;
  /** Radius of the wheel */
  truckWheelRadius: number[];
  /** Forward transmission ratios */
  gearRatiosForward: number[];
  /** Reverse transmission ratios */
  gearRatiosReverse: number[];
  /** Mass of the single unit of the cargo in kilograms */
  unitMass: number;
  /** Speedometer speed in meters per second */
  speed: number;
  /** RPM of the engine */
  engineRpm: number;
  /** Steering received from input <-1;1> */
  userSteer: number;
  /** Throttle received from input <0;1> */
  userThrottle: number;
  /** Brake received from input <0;1> */
  userBrake: number;
  /** Clutch received from input <0;1> */
  userClutch: number;
  /** Steering as used by the simulation <-1;1> */
  gameSteer: number;
  /** Throttle pedal input as used by the simulation <0;1> */
  gameThrottle: number;
  /** Brake pedal input as used by the simulation <0;1> */
  gameBrake: number;
  /** Clutch pedal input as used by the simulation <0;1> */
  gameClutch: number;
  /** Speed selected for the cruise control in m/s */
  cruiseControlSpeed: number;
  /** Pressure in the brake air tank in psi */
  airPressure: number;
  /** Temperature of the brakes in degrees celsius */
  brakeTemperature: number;
  /** Amount of fuel in liters */
  fuel: number;
  /** Average consumption of the fuel in liters/km */
  fuelAvgConsumption: number;
  /** Estimated range of truck with current amount of fuel in km */
  fuelRange: number;
  /** Amount of AdBlue in liters */
  adblue: number;
  /** Pressure of the oil in psi */
  oilPressure: number;
  /** Temperature of the oil in degrees celsius */
  oilTemperature: number;
  /** Temperature of the water in degrees celsius */
  waterTemperature: number;
  /** Voltage of the battery in volts */
  batteryVoltage: number;
  /** Intensity of the dashboard backlight as factor <0;1> */
  lightsDashboard: number;
  /** Wear of the engine accessory as <0;1> */
  wearEngine: number;
  /** Wear of the transmission accessory as <0;1> */
  wearTransmission: number;
  /** Wear of the cabin accessory as <0;1> */
  wearCabin: number;
  /** Wear of the chassis accessory as <0;1> */
  wearChassis: number;
  /** Average wear across the wheel accessories as <0;1> */
  wearWheels: number;
  /** The value of the odometer in km */
  truckOdometer: number;
  /** The value of truck's navigation distance (in meters) */
  routeDistance: number;
  /** The value of truck's navigation eta (in second) */
  routeTime: number;
  /** The value of truck's navigation speed limit (in m/s) */
  speedLimit: number;

  // ------ 5th zone ------
  /** Vertical displacement of the wheel from its axis in meters */
  truckWheelSuspDeflection: number[];
  /** Angular velocity of the wheel in rotations per second */
  truckWheelVelocity: number[];
  /** Steering rotation of the wheel in rotations <-0.25,0.25> */
  truckWheelSteering: number[];
  /** Rolling rotation of the wheel in rotations <0.0,1.0> */
  truckWheelRotation: number[];
  /** Lift state of the wheel <0;1> */
  truckWheelLift: number[];
  /** Vertical displacement of the wheel axle from its normal position in meters as result of lifting */
  truckWheelLiftOffset: number[];
  /** Cargo damage when a job is delivered */
  jobDeliveredCargoDamage: number;
  /** Distance in kilometres used to deliver a job */
  jobDeliveredDistanceKm: number;
  /** Amount refueled in liters */
  refuelAmount: number;
  /** The total damage of the cargo in range 0.0 to 1.0 */
  cargoDamage: number;
  /** Indicates if the wheel is steerable */
  truckWheelSteerable: boolean[];
  /** Indicates if the wheel is simulated */
  truckWheelSimulated: boolean[];
  /** Indicates if the wheel is powered */
  truckWheelPowered: boolean[];
  /** Indicates if the wheel is liftable */
  truckWheelLiftable: boolean[];
  /** Indicates if the current job carbo is loaded on the trailer(s) */
  isCargoLoaded: boolean;
  /** Indicates if the current job is a special transport */
  specialJob: boolean;
  /** Indicates if the parking brake is enabled */
  parkBrake: boolean;
  /** Indicates if the engine brake is enabled */
  motorBrake: boolean;
  /** Indicates if the air pressure warning is active */
  airPressureWarning: boolean;
  /** Indicates if the emergency brakes active as result of low air pressure */
  airPressureEmergency: boolean;
  /** Indicates if the fuel warning is active */
  fuelWarning: boolean;
  /** Indicates if the adblue warning is active */
  adblueWarning: boolean;
  /** Indicates if the oil pressure warning is active */
  oilPressureWarning: boolean;
  /** Indicates if the water temperature warning is active */
  waterTemperatureWarning: boolean;
  /** Indicates if the battery voltage warning is active */
  batteryVoltageWarning: boolean;
  /** Indicates id the electric of the truck is enabled */
  electricEnabled: boolean;
  /** Indicates if the engine of the truck is running */
  engineEnabled: boolean;
  /** Indicates if the windshield wipers of the truck are enabled */
  wipers: boolean;
  /** Indicates if the left blinker is active */
  blinkerLeftActive: boolean;
  /** Indicates if the right blinker is active */
  blinkerRightActive: boolean;
  /** Indicates if the left blinker is enabled */
  blinkerLeftOn: boolean;
  /** Indicates if the right blinker is enabled */
  blinkerRightOn: boolean;
  /** Indicates if the parking lights are active */
  lightsParking: boolean;
  /** Indicates if the low beam lights are enabled */
  lightsBeamLow: boolean;
  /** Indicates if the high beam lights are enabled */
  lightsBeamHigh: boolean;
  /** Indicates if the beacon is enabled */
  lightsBeacon: boolean;
  /** Indicates if the brake lights are active */
  lightsBrake: boolean;
  /** Indicates if the reverse lights are active */
  lightsReverse: boolean;
  /** Indicates if the hazard lights are enabled */
  lightsHazard: boolean;
  /** Indicates if the cruise control is enabled */
  cruiseControl: boolean;
  /** Indicates if the wheel is on the ground or not */
  truckWheelOnGround: boolean[];
  /** Enabled state of range/splitter selector toggles */
  shifterToggle: boolean[];
  /** Indicates if the differential lock is enabled */
  differentialLock: boolean;
  /** Indicates if the lift axel control is set to a lifted state */
  liftAxle: boolean;
  /** Indicates if the lift axel indicator is lit */
  liftAxleIndicator: boolean;
  /** Indicates if the lift axel control for the trailer(s) is set to a lifted state */
  trailerLiftAxle: boolean;
  /** Indicates if the lift axel indicator for the trailer(s) is lit */
  trailerLiftAxleIndicator: boolean;
  /** Indicates is auto parking was used when delivering a job */
  jobDeliveredAutoparkUsed: boolean;
  /** Indicates is auto loading was used when delivering a job */
  jobDeliveredAutoloadUsed: boolean;

  // ------ 6th zone ------
  /** Position of the cabin in the vehicle space */
  cabinPositionX: number;
  /** Position of the cabin in the vehicle space */
  cabinPositionY: number;
  /** Position of the cabin in the vehicle space */
  cabinPositionZ: number;
  /** Default position of the head in the cabin space */
  headPositionX: number;
  /** Default position of the head in the cabin space */
  headPositionY: number;
  /** Default position of the head in the cabin space */
  headPositionZ: number;
  /** Position of the trailer connection hook in vehicle space */
  truckHookPositionX: number;
  /** Position of the trailer connection hook in vehicle space */
  truckHookPositionY: number;
  /** Position of the trailer connection hook in vehicle space */
  truckHookPositionZ: number;
  /** Position of respective wheels in the vehicle space */
  truckWheelPositionX: number[];
  /** Position of respective wheels in the vehicle space */
  truckWheelPositionY: number[];
  /** Position of respective wheels in the vehicle space */
  truckWheelPositionZ: number[];
  /** Linear velocity of the truck */
  lvAccelerationX: number;
  /** Linear velocity of the truck */
  lvAccelerationY: number;
  /** Linear velocity of the truck */
  lvAccelerationZ: number;
  /** Angular velocity of the truck */
  avAccelerationX: number;
  /** Angular velocity of the truck */
  avAccelerationY: number;
  /** Angular velocity of the truck */
  avAccelerationZ: number;
  /** Linear acceleration of the truck */
  accelerationX: number;
  /** Linear acceleration of the truck */
  accelerationY: number;
  /** Linear acceleration of the truck */
  accelerationZ: number;
  /** Angular acceleration of the truck */
  aaAccelerationX: number;
  /** Angular acceleration of the truck */
  aaAccelerationY: number;
  /** Angular acceleration of the truck */
  aaAccelerationZ: number;
  /** Represents cabin space angular velocity of the cabin measured in rotations per second */
  cabinAVX: number;
  /** Represents cabin space angular velocity of the cabin measured in rotations per second */
  cabinAVY: number;
  /** Represents cabin space angular velocity of the cabin measured in rotations per second */
  cabinAVZ: number;
  /** Represents cabin space angular acceleration of the cabin measured in rotations per second^2 */
  cabinAAX: number;
  /** Represents cabin space angular acceleration of the cabin measured in rotations per second^2 */
  cabinAAY: number;
  /** Represents cabin space angular acceleration of the cabin measured in rotations per second^2 */
  cabinAAZ: number;

  // ------ 7th zone ------
  cabinOffsetX: number;
  cabinOffsetY: number;
  cabinOffsetZ: number;
  cabinOffsetrotationX: number;
  cabinOffsetrotationY: number;
  cabinOffsetrotationZ: number;
  headOffsetX: number;
  headOffsetY: number;
  headOffsetZ: number;
  headOffsetrotationX: number;
  headOffsetrotationY: number;
  headOffsetrotationZ: number;

  // ------ 8th zone ------
  coordinateX: number;
  coordinateY: number;
  coordinateZ: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;

  // ------ 9th zone ------
  /** Truck brand id */
  truckBrandId: string;
  /** Truck brand display name */
  truckBrand: string;
  /** Truck id */
  truckId: string;
  /** Truck display name */
  truckName: string;
  /** Cargo id */
  cargoId: string;
  /** Cargo display name */
  cargo: string;
  /** Destination city id */
  cityDstId: string;
  /** Destination city display name */
  cityDst: string;
  /** Destination company id */
  compDstId: string;
  /** Destination company display name */
  compDst: string;
  /** Source city id */
  citySrcId: string;
  /** Source city display name */
  citySrc: string;
  /** Source company id */
  compSrcId: string;
  /** Source company display name */
  compSrc: string;
  /** Type of the shifter (arcase, automatic, manual, hshifter) */
  shifterType: string;
  /** Truck license plate number */
  truckLicensePlate: string;
  /** Truck license plate country id */
  truckLicensePlateCountryId: string;
  /** Truck license plate country display name */
  truckLicensePlateCountry: string;
  /** The job market the current job is from */
  jobMarket: string;
  /** Name of a fine */
  fineOffence: string;
  /** The name of the transportation source */
  ferrySourceName: string;
  /** The name of the transportation target */
  ferryTargetName: string;
  /** The id of the transportation source */
  ferrySourceId: string;
  /** The id of the transportation source */
  ferryTargetId: string;
  /** The name of the transportation source */
  trainSourceName: string;
  /** The name of the transportation target */
  trainTargetName: string;
  /** The id of the transportation source */
  trainSourceId: string;
  /** The id of the transportation source */
  trainTargetId: string;

  // ------ 10th zone ------
  /** Job estimated income amount in the game's native currency (ATS=USD, ETS2=Euro) */
  jobIncome: bigint;

  // ------ 11th zone ------
  /** Job cancellation penalty amount in the game's native currency (ATS=USD, ETS2=Euro) */
  jobCancelledPenalty: bigint;
  /** Job delivered revenue amount in the game's native currency (ATS=USD, ETS2=Euro) */
  jobDeliveredRevenue: bigint;
  /** Fine offence amount in the game's native currency (ATS=USD, ETS2=Euro) */
  fineAmount: bigint;
  /** Tollgate pay amount in the game's native currency (ATS=USD, ETS2=Euro) */
  tollgatePayAmount: bigint;
  /** Ferry pay amount in the game's native currency (ATS=USD, ETS2=Euro) */
  ferryPayAmount: bigint;
  /** Train pay amount in the game's native currency (ATS=USD, ETS2=Euro) */
  trainPayAmount: bigint;

  // ------ 12th zone ------
  /** Event called when job has started */
  onJob: boolean;
  /** Event called when job is finished */
  jobFinished: boolean;
  /** Event called when job is cancelled */
  jobCancelled: boolean;
  /** Event called when job is delivered */
  jobDelivered: boolean;
  /** Event called when a fine is issues */
  fined: boolean;
  /** Event called when a tollgate is activated */
  tollgate: boolean;
  /** Event called when a ferry is activated */
  ferry: boolean;
  /** Event called when a train is activated */
  train: boolean;
  /** Event called when refueling is activated */
  refuel: boolean;
  /** Event called when fuel has been paid for */
  refuelPayed: boolean;

  // ------ 13th zone ------
  /** List of substances in the game */
  substances: string[];

  // ------ 14th zone ------
  trailers: SCSSDKTrailerTelemetry[];
}

export interface SCSSDKTrailerTelemetry {
  // ------ 1st trailer zone ------
  wheelSteerable: boolean[];
  wheelSimulated: boolean[];
  wheelPowered: boolean[];
  wheelLiftable: boolean[];
  wheelOnGround: boolean[];
  /** Indicates if the trailer is connected to the truck */
  attached: boolean;

  // ------ 2nd trailer zone ------
  /** Substance below the wheel */
  wheelSubstance: number[];
  /** Number of wheels on the trailer */
  wheelCount: number;

  // ------ 3rd trailer zone ------
  /** How much is the cargo damaged that is loaded to this trailer in <0.0, 1.0> range */
  cargoDamage: number;
  /** Wear of the chassis accessory as <0;1> */
  wearChassis: number;
  /** Average wear across the wheel accessories as <0;1> */
  wearWheels: number;
  wearBody: number;
  wheelSuspDeflection: number[];
  wheelVelocity: number[];
  wheelSteering: number[];
  wheelRotation: number[];
  wheelLift: number[];
  wheelLiftOffset: number[];
  wheelRadius: number[];

  // ------ 4th trailer zone ------
  /** Represents vehicle space linear velocity of the truck measured in meters per second */
  linearVelocityX: number;
  /** Represents vehicle space linear velocity of the truck measured in meters per second */
  linearVelocityY: number;
  /** Represents vehicle space linear velocity of the truck measured in meters per second */
  linearVelocityZ: number;
  /** Represents vehicle space angular velocity of the truck measured in rotations per second */
  angularVelocityX: number;
  /** Represents vehicle space angular velocity of the truck measured in rotations per second */
  angularVelocityY: number;
  /** Represents vehicle space angular velocity of the truck measured in rotations per second */
  angularVelocityZ: number;
  /** Represents vehicle space linear acceleration of the truck measured in meters per second^2 */
  linearAccelerationX: number;
  /** Represents vehicle space linear acceleration of the truck measured in meters per second^2 */
  linearAccelerationY: number;
  /** Represents vehicle space linear acceleration of the truck measured in meters per second^2 */
  linearAccelerationZ: number;
  /** Represents vehicle space angular acceleration of the truck measured in rotations per second^2 */
  angularAccelerationX: number;
  /** Represents vehicle space angular acceleration of the truck measured in rotations per second^2 */
  angularAccelerationY: number;
  /** Represents vehicle space angular acceleration of the truck measured in rotations per second^2 */
  angularAccelerationZ: number;
  hookPositionX: number;
  hookPositionY: number;
  hookPositionZ: number;
  wheelPositionX: number[];
  wheelPositionY: number[];
  wheelPositionZ: number[];

  // ------ 5th trailer zone ------
  /** Position of the trailer in the world on the X axis */
  worldX: number;
  /** Position of the trailer in the world on the Y axis */
  worldY: number;
  /** Position of the trailer in the world on the Z axis */
  worldZ: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;

  // ------ 6th trailer zone ------
  /** Trailer model id */
  id: string;
  cargoAcessoryId: string;
  /** Trailer body type */
  bodyType: string;
  /** Trailer brand id */
  brandId: string;
  /** Trailer brand display name */
  brand: string;
  /** Trailer model display name */
  name: string;
  /** Name of trailer chain type */
  chainType: string;
  /** Trailer license plate number */
  licensePlate: string;
  /** Trailer license plate country id */
  licensePlateCountry: string;
  /** Trailer license plate country display name */
  licensePlateCountryId: string;
}
