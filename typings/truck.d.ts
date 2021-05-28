declare module "trucksim-telemetry" {
  export interface Truck {
    transmission: Transmission;
    brakes: Brakes;
    wheels: TruckWheel[];
    lights: Lights;
    fuel: Fuel;
    adBlue: AdBlue;
    engine: Engine;
    differential: Differential;
    speed: Speed;
    cruiseControl: CruiseControl;
    cabin: Cabin;
    chassis: Chassis;
    odometer: number;
    electric: Electric;
    wipers: Wipers;
    head: Head;
    hook: Hook;
    acceleration: Acceleration;
    position: Position;
    orientation: Orientation;
    make: Make;
    brand: Make;
    model: Model;
    licensePlate: LicensePlate;
    damage: TruckDamage;
  }
  
  export interface Transmission {
    forwardGears: number;
    reverseGears: number;
    selectors: number;
    slot: number;
    slots: TransmissionSlot[];
    gear: TransmissionGear;
    gearRatiosForward: number[];
    gearRatiosReverse: number[];
    damage: number;
    selector: boolean[];
    shifterType: string;
  }
  
  export interface TransmissionSlot {
    handlePosition: number;
    selector: number;
    gear: number;
  }
  
  export interface TransmissionGear {
    selected: number;
    displayed: number;
  }
  
  export interface Brakes {
    retarder: Retarder;
    airPressure: AirPressure;
    temperature: Temperature;
    parking: Parking;
    motor: Motor;
  }
  
  export interface Retarder {
    steps: number;
    level: number;
  }
  
  export interface AirPressure {
    warning: AirPressureWarning;
    emergency: AirPressureEmergency;
    value: number;
  }
  
  export interface AirPressureWarning {
    factor:  number;
    enabled: boolean;
  }
  
  export interface AirPressureEmergency {
    factor: number;
    enabled: boolean;
  }
  
  export interface Temperature {
    value: number;
  }
  
  export interface Parking {
    enabled: boolean;
  }
  
  export interface Motor {
    enabled: boolean;
  }
  
  export interface TruckWheel {
    substance: WheelSubstance;
    radius: number;
    suspDeflection: number;
    velocity: number;
    steering: number;
    rotation: number;
    lift: number;
    liftOffset: number;
    position: Position;
    steerable: boolean;
    simulated: boolean;
    powered: boolean;
    liftable: boolean;
    onGround: boolean;
    damage: number;
  }
  
  export interface Lights {
    auxFront: AuxLight;
    auxRoof: AuxLight;
    dashboardBacklight: number;
    blinker: Blinker;
    parking: Parking;
    beamLow: LightStatus;
    beamHigh: LightStatus;
    beacon: LightStatus;
    brake: LightStatus;
    reverse: LightStatus;
  }
  
  export interface AuxLight {
    value: number;
  }
  
  export interface Blinker {
    left: BlinkerStatus;
    right: BlinkerStatus;
  }
  
  export interface BlinkerStatus {
    enabled: boolean;
    active: boolean;
  }
  
  export interface LightStatus {
    enabled: boolean;
  }
  
  export interface Engine {
    oilPressure: EngineStatus;
    waterTemperature: EngineStatus;
    batteryVoltage: EngineStatus;
    rpm: Rpm;
    oilTemperature: OilTemperature;
    damage: number;
    enabled: boolean;
  }
  
  export interface EngineWarning {
    factor: number;
    enabled: boolean;
  }
  
  export interface EngineStatus {
    warning: EngineWarning;
    value: number;
  }
  
  export interface Rpm {
    max: number;
    value: number;
  }
  
  export interface OilTemperature {
    value: number;
  }
  
  export interface Fuel {
    capacity: number;
    warning: EngineWarning;
    value: number;
    avgConsumption: number;
    range: number;
  }
  
  export interface AdBlue {
    capacity: number;
    warning: EngineWarning;
    value: number;
  }
  
  export interface Differential {
    ratio: number;
  }
  
  export interface Speed {
    value: number;
    kph: number;
    mph: number;
  }
  
  export interface CruiseControl {
    value: number;
    enabled: boolean;
    kph: number;
    mph: number;
  }
  
  export interface Cabin {
    damage: number;
    position: Position;
    acceleration: Acceleration;
    offset: Offset;
  }
  
  export interface Offset {
    position: Position;
    orientation: Orientation;
  }
  
  export interface Chassis {
    damage: number;
  }
  
  export interface Electric {
    enabled: boolean;
  }
  
  export interface Wipers {
    enabled: boolean;
  }
  
  export interface Head {
    position: Position;
    offset: Offset;
  }
  
  export interface TruckDamage {
    cabin: number;
    chassis: number;
    engine: number;
    transmission: number;
    wheels: number;
    total: number;
  }
}