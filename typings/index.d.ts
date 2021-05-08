declare module "trucksim-telemetry" {
  function truckSimTelemetry(opts?: Options): Telemetry;
  
  namespace truckSimTelemetry {
    function getBuffer(opts?: Options): any;
    function getData(opts?: Options): TelemetryData;
    function getGame(opts?: Options): Game;
    function getControls(opts?: Options): Controls;
    function getNavigation(opts?: Options): Navigation;
    function getJob(opts?: Options): Job;
    function getTrailers(opts?: Options): Trailer[];
    function getTrailer(opts?: Options): Trailer;
    function getTruck(opts?: Options): Truck;
  }

  export default truckSimTelemetry;

  }

  export interface Options {
    mmfName?: string;
  }

  export interface WatchOptions {
    interval?: number;
  }

  export interface Telemetry {
    opts: Options;

    game:       any;
    job:        any;
    navigation: any;
    trailers:   any;
    truck:      any;

    data: TelemetryData;

    watch(options?: WatchOptions, callback?: (data: TelemetryData) => void): void;
    stop():         void;

    getBuffer():     any;
    getData():       TelemetryData;
    getGame():       Game;
    getControls():   Controls;
    getJob():        Job;
    getNavigation(): Navigation;
    getTruck():      Truck;
    getTrailers():   Trailer[];
    getTrailer():    Trailer;
  }

  export interface TelemetryData {
    controls:   Controls;
    game:       Game;
    job:        Job;
    navigation: Navigation;
    substances: Substances;
    trailer:    Trailer;
    trailers:   Trailer[];
    truck:      Truck;
  }
  
  export type Substances = [
    "static",
    "road",
    "road_snow",
    "dirt",
    "snow",
    "grass",
    "road_dirt",
    "invis",
    "ice",
    "metal",
    "rubber",
    "rumble_stripe",
    "plastic",
    "glass",
    "wood",
    "soft"
  ]
  
  /** Controls */
  export interface Controls {
    input: ControlsInput;
    game:  ControlsGame;
  }
  export interface ControlsInput {
    steering: number;
    throttle: number;
    brake:    number;
    clutch:   number;
  }
  export interface ControlsGame {
    steering: number;
    throttle: number;
    brake:    number;
    clutch:   number;
  }
  
  /** Events */
  export interface Events {
    job:        EventsJob;
    refuelPaid: EventsRefuelPaid;
    fine:       EventsFine;
    ferry:      EventFerry;
    train:      EventTrain;
    tollgate:   EventTollgate;
    refuel:     EventRefuel;
  }
  
  /** Events job */
  export interface EventsJob {
    delivered: EventsJobDelivered;
    started:   EventsJobStarted;
    cancelled: EventsJobCancelled;
    finished:  EventsJobFinished;
  }
  export interface EventsJobDelivered {
    deliveryTime:  number;
    startingTime:  number;
    finishingTime: number;
    earnedXP:      number;
    cargoDamage:   number;
    distance:      EventsJobDeliveredDistance;
    autoParked:    boolean;
    revenue:       number;
    active:        boolean;
  }
  export interface EventsJobDeliveredDistance {
    km:    number;
    miles: number;
  }
  export interface EventsJobStarted {
    autoLoaded: boolean;
    active:     boolean;
  }
  export interface EventsJobCancelled {
    penalty:       number;
    active:        boolean;
    startingTime:  number;
    finishingTime: number;
  }
  export interface EventsJobFinished {
    active: boolean;
  }
  
  /** Events refuelPaid */
  export interface EventsRefuelPaid {
    amount: number;
    active: boolean;
  }
  
  /** Events fine */
  export interface EventsFine {
    offence: FineOffence;
    amount: number;
    active: boolean;
  }
  export interface FineOffence {
    id:   string;
    name: string;
  }
  
  /** Travel (ferry & train) */
  export interface TravelSource {
    name: string;
    id:   string;
  }
  export interface TravelDestination {
    name: string;
    id:   string;
  }
  export interface EventFerry {
    source:      TravelSource;
    destination: TravelDestination;
    target:      TravelDestination;
    amount:      number;
    active:      boolean;
  }
  export interface EventTrain {
    source:      TravelSource;
    destination: TravelDestination;
    target:      TravelDestination;
    amount:      number;
    active:      boolean;
  }
  
  /** Event tollgate */
  export interface EventTollgate {
    amount: number;
    active: boolean;
  }
  
  /** Event refuel */
  export interface EventRefuel {
    active: boolean;
  }
  
  /** Game */
  export interface Game {
    sdkActive:           boolean;
    paused:              boolean;
    timestamp:           GameTimestamp;
    simulationTimestamp: GameTimestamp;
    renderTimestamp:     GameTimestamp;
    pluginVersion:       number;
    version:             string;
    game:                GameNestedGame;
    telemetryVersion:    string;
    time:                GameTime;
    maxTrailerCount:     number;
    scale:               number;
  }
  export interface GameTimestamp {
    value: number;
  }
  export interface GameNestedGame {
    id:   number;
    name: string;
  }
  export interface GameTime {
    value: number;
    unix:  number;
  }
  
  /** Job */
  export interface Job {
    deliveryTime:    JobDeliveryTime;
    plannedDistance: JobPlannedDistance;
    cargo:           JobCargo;
    isSpecial:       boolean;
    destination:     JobLocation;
    source:          JobLocation;
    market:          JobMarket;
    income:          number;
  }
  export interface JobDeliveryTime {
    value: number;
    unix:  number;
  }
  export interface JobPlannedDistance {
    km:    number;
    miles: number;
  }
  export interface JobCargo {
    mass:     number;
    unitMass: number;
    damage:   number;
    isLoaded: boolean;
    id:       string;
    name:     string;
  }
  export interface JobCity {
    id:   string;
    name: string;
  }
  export interface Company {
    id:   string;
    name: string;
  }
  
  /** JobLocation used for source & destination */
  export interface JobLocation {
    city:    JobCity;
    company: Company;
  }
  export interface JobMarket {
    id:   string;
    name: string;
  }
  
  /** Navigation */
  export interface Navigation {
    nextRestStop: number;
    distance:     number;
    time:         number;
    speedLimit:   NavSpeedLimit;
  }
  export interface NavSpeedLimit {
    value: number;
    kph:   number;
    mph:   number;
  }
  
  /** Truck & Trailer Global */
  export interface Position {
    X: number;
    Y: number;
    Z: number;
  }
  export interface WheelSubstance {
    id:   number;
    name: string;
  }
  
  export interface Acceleration {
    linearVelocity:      Velocity;
    angularVelocity:     Velocity;
    linearAcceleration:  Velocity;
    angularAcceleration: Velocity;
  }
  export interface Velocity {
    X: number;
    Y: number;
    Z: number;
  }
  export interface Orientation {
    heading: number;
    pitch:   number;
    roll:    number;
  }
  export interface Hook {
    position: Position;
  }
  
  export interface Model {
    id:   string;
    name: string;
  }
  export interface Make {
    id:   string;
    name: string;
  }
  export interface LicensePlate {
    value:   string;
    country: LicensePlateCountry;
  }
  export interface LicensePlateCountry {
    name: string;
    id:   string;
  }
  
  
  /** Trailer */
  export interface Trailer {
    wheels:       TrailerWheel[];
    attached:     boolean;
    cargo:        TrailerDamageValue;
    chassis:      TrailerDamageValue;
    acceleration: Acceleration;
    hook:         Hook;
    position:     Position;
    orientation:  Orientation;
    model:        Model;
    accessoryId:  string;
    bodyType:     string;
    make:         Make;
    brand:        Make;
    chainType:    string;
    licensePlate: LicensePlate;
    damage:       TrailerDamage;
  }
  
  /** Trailer wheel */
  export interface TrailerWheel {
    substance:      WheelSubstance;
    radius:         number;
    suspDeflection: number;
    velocity:       number;
    steering:       number;
    rotation:       number;
    steerable:      boolean;
    simulated:      boolean;
    powered:        boolean;
    liftable:       boolean;
    onGround:       boolean;
    position:       Position;
  }
  export interface TrailerWheelSubstance {
    id:   number;
    name: string;
  }
  export interface TrailerDamageValue {
    damage: number;
  }
  export interface TrailerDamage {
    cargo:   number;
    chassis: number;
    wheels:  number;
    total:   number;
  }
  
  
  /** Truck */
  export interface Truck {
    transmission:  Transmission;
    brakes:        Brakes;
    wheels:        TruckWheel[];
    lights:        Lights;
    fuel:          Fuel;
    adBlue:        AdBlue;
    engine:        Engine;
    differential:  Differential;
    speed:         Speed;
    cruiseControl: CruiseControl;
    cabin:         Cabin;
    chassis:       Chassis;
    odometer:      number;
    electric:      Electric;
    wipers:        Wipers;
    head:          Head;
    hook:          Hook;
    acceleration:  Acceleration;
    position:      Position;
    orientation:   Orientation;
    make:          Make;
    brand:         Make;
    model:         Model;
    licensePlate:  LicensePlate;
    damage:        TruckDamage;
  }
  
  /** Transmission */
  export interface Transmission {
    forwardGears:      number;
    reverseGears:      number;
    selectors:         number;
    slot:              number;
    slots:             TransmissionSlot[];
    gear:              TransmissionGear;
    gearRatiosForward: number[];
    gearRatiosReverse: number[];
    damage:            number;
    selector:          boolean[];
    shifterType:       string;
  }
  export interface TransmissionSlot {
    handlePosition: number;
    selector:       number;
    gear:           number;
  }
  export interface TransmissionGear {
    selected:  number;
    displayed: number;
  }
  
  /** Breaks */
  export interface Brakes {
    retarder:    Retarder;
    airPressure: AirPressure;
    temperature: Temperature;
    parking:     Parking;
    motor:       Motor;
  }
  export interface Retarder {
    steps: number;
    level: number;
  }
  export interface AirPressure {
    warning:   AirPressureWarning;
    emergency: AirPressureEmergency;
    value:     number;
  }
  export interface AirPressureWarning {
    factor:  number;
    enabled: boolean;
  }
  
  export interface AirPressureEmergency {
    factor:  number;
    enabled: boolean;
  }
  export interface Temperature {
    value: number;
  }
  /** Parking is unused in breaks & in lights */
  export interface Parking {
    enabled: boolean;
  }
  export interface Motor {
    enabled: boolean;
  }
  
  /** Wheel */
  export interface TruckWheel {
    substance: WheelSubstance;
    radius: number;
    suspDeflection: number;
    velocity:       number;
    steering:       number;
    rotation:       number;
    lift:           number;
    liftOffset:     number;
    position:       Position;
    steerable:      boolean;
    simulated:      boolean;
    powered:        boolean;
    liftable:       boolean;
    onGround:       boolean;
    damage:         number;
  }
  
  /** Lights */
  export interface Lights {
    auxFront:           AuxLight;
    auxRoof:            AuxLight;
    dashboardBacklight: number;
    blinker:            Blinker;
    parking:            Parking;
    beamLow:            LightStatus;
    beamHigh:           LightStatus;
    beacon:             LightStatus;
    brake:              LightStatus;
    reverse:            LightStatus;
  }
  export interface AuxLight {
    value: number;
  }
  export interface Blinker {
    left:  BlinkerStatus;
    right: BlinkerStatus;
  }
  export interface BlinkerStatus {
    enabled: boolean;
    active:  boolean;
  }
  export interface LightStatus {
    enabled: boolean;
  }
  
  /** Truck engine */
  export interface Engine {
    oilPressure:      EngineStatus;
    waterTemperature: EngineStatus;
    batteryVoltage:   EngineStatus;
    rpm:              Rpm;
    oilTemperature:   OilTemperature;
    damage:           number;
    enabled:          boolean;
  }
  export interface EngineWarning {
    factor:  number;
    enabled: false;
  }
  export interface EngineStatus {
    warning: EngineWarning;
    value:   number;
  }
  export interface Rpm {
    max:   number;
    value: number;
  }
  export interface OilTemperature {
    value: number;
  }
  
  
  /** Truck fuel */
  export interface Fuel {
    capacity:       number;
    warning:        EngineWarning;
    value:          number;
    avgConsumption: number;
    range:          number;
  }
  
  /** Truck adblue */
  export interface AdBlue {
    capacity: number;
    warning:  EngineWarning;
    value:    number;
  }
  
  /** Truck differential */
  export interface Differential {
    ratio: number;
  }
  
  /** Truck speed */
  export interface Speed {
    value: number;
    kph:   number;
    mph:   number;
  }
  
  /** Truck cruiseControl */
  export interface CruiseControl {
    value:   number;
    enabled: boolean;
    kph:     number;
    mph:     number;
  }
  
  /** Truck cabin */
  export interface Cabin {
    damage:       number;
    position:     Position;
    acceleration: Acceleration;
    offset:       Offset;
  }
  export interface Offset {
    position:    Position;
    orientation: Orientation;
  }
  
  /** Truck chassis */
  export interface Chassis {
    damage: number;
  }
  
  /** Truck electric */
  export interface Electric {
    enabled: boolean;
  }
  
  /** Truck wipers */
  export interface Wipers {
    enabled: boolean;
  }
  
  /** Truck head */
  export interface Head {
    position: Position;
    offset:   Offset;
  }
  
  /** Truck damage */
  export interface TruckDamage {
    cabin:        number;
    chassis:      number;
    engine:       number;
    transmission: number;
<<<<<<< HEAD
    wheels: number;
    total: number;
  }
<<<<<<< HEAD

  /* Game events*/
  export interface FineEventData {
    offence: string;
    amount: number;
  }

  export interface TollgateEventData {
    amount: number;
  }

  export interface FerryEventData {
    source: string;
    destination: string;
    target: string;
    amount: number;
  }

  export interface TrainEventData {
    source: string;
    destination: string;
    target: string;
    amount: number;
  }

  export interface RefuelPaidEventData {
    amount: number;
  }

  export interface JobStartedEventData {
    autoLoaded: boolean;
    deliveryTime: number;
    plannedDistance: number;
    cargo: string;
    isSpecial: boolean;
    source: string;
    destination: string;
    market: string;
    income: number;
  }

  export interface JobCancelledEventData {
    penalty: number;
    startingTime: number;
    finishingTime: number;
    deliveryTime: number;
    plannedDistance: number;
    cargo: string;
    isSpecial: boolean;
    source: string;
    destination: string;
    market: string;
    income: number;
  }

  export interface JobDeliveredEventData {
    deliveryTime: number;
    startingTime: number;
    finishingTime: number;
    earnedXP: number;
    cargoDamage: number;
    distance: number;
    autoParked: boolean;
    revenue: number;
    plannedDistance: number;
    cargo: string;
    isSpecial: boolean;
    source: string;
    destination: string;
    market: string;
  }

  export interface CruiseControlSpeed {
    value: number;
    kph: number;
    mph: number;
  }

  export interface CruiseControlEventData {
    enabled: boolean;
    currentSpeed: number;
    speedLimit: number;
    cruiseControlSpeed: CruiseControlSpeed;
=======
    wheels:       number;
    total:        number;
>>>>>>> parent of 1da9e5d (Fixed indentation)
=======
>>>>>>> parent of cf3babb (Added event data declarations)
  }
}
