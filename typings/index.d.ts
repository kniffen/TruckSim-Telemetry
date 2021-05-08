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

  interface EventEmitter {
    addListener(eventName: string|symbol, listener: () => void): void;
    emit(eventName: string|symbol, args?: any[]): boolean;
    eventNames(): (string|symbol)[];
    getMaxListeners(): number;
    listenerCount(eventName: string|symbol): number;
    listeners(eventName: string|symbol): () => any[];
    off(eventName: string|symbol, listener: () => void): this;
    on(eventName: string|symbol, listener: () => void): this;
    once(eventName: string|symbol, listener: () => void): this;
    prependListener(eventName: string|symbol, listener: () => void): this;
    prependOnceListener(eventName: string|symbol, listener: () => void): this;
    removeAllListeners(eventName: string|symbol[]): this;
    removeListener(eventName: string|symbol, listener: () => void): this;
    setMaxListeners(n: number): this;
    rawListeners(eventName: string|symbol): () => any[];
  }

  interface GameEventEmitter extends EventEmitter{
    // Pause event
    addListener(eventName: 'pause', listener: (isPaused: boolean) => void): this;
    on(eventName: 'pause', listener: (isPaused: boolean) => void): this;
    once(eventName: 'pause', listener: (isPaused: boolean) => void): this;
    prependListener(eventName: 'pause', listener: (isPaused: boolean) => void): this;
    prependOnceListener(eventName: 'pause', listener: (isPaused: boolean) => void): this;

    // Time change event
    addListener(eventName: 'time-change', listener: (current: GameTime, previous: GameTime) => void): this;
    on(eventName: 'time-change', listener: (current: GameTime, previous: GameTime) => void): this;
    once(eventName: 'time-change', listener: (current: GameTime, previous: GameTime) => void): this;
    prependListener(eventName: 'time-change', listener: (current: GameTime, previous: GameTime) => void): this;
    prependOnceListener(eventName: 'time-change', listener: (current: GameTime, previous: GameTime) => void): this;
  
    // Fine event
    addListener(eventName: 'fine', listener: (data: FineEventData) => void): this;
    on(eventName: 'fine', listener: (data: FineEventData) => void): this;
    once(eventName: 'fine', listener: (data: FineEventData) => void): this;
    prependListener(eventName: 'fine', listener: (data: FineEventData) => void): this;
    prependOnceListener(eventName: 'fine', listener: (data: FineEventData) => void): this;

    // Tollgate event
    addListener(eventName: 'tollgate', listener: (data: TollgateEventData) => void): this;
    on(eventName: 'tollgate', listener: (data: TollgateEventData) => void): this;
    once(eventName: 'tollgate', listener: (data: TollgateEventData) => void): this;
    prependListener(eventName: 'tollgate', listener: (data: TollgateEventData) => void): this;
    prependOnceListener(eventName: 'tollgate', listener: (data: TollgateEventData) => void): this;

    // Ferry event
    addListener(eventName: 'ferry', listener: (data: FerryEventData) => void): this;
    on(eventName: 'ferry', listener: (data: FerryEventData) => void): this;
    once(eventName: 'ferry', listener: (data: FerryEventData) => void): this;
    prependListener(eventName: 'ferry', listener: (data: FerryEventData) => void): this;
    prependOnceListener(eventName: 'ferry', listener: (data: FerryEventData) => void): this;

    // Train event
    addListener(eventName: 'train', listener: (data: TrainEventData) => void): this;
    on(eventName: 'train', listener: (data: TrainEventData) => void): this;
    once(eventName: 'train', listener: (data: TrainEventData) => void): this;
    prependListener(eventName: 'train', listener: (data: TrainEventData) => void): this;
    prependOnceListener(eventName: 'train', listener: (data: TrainEventData) => void): this;

    // Refuel paid event
    addListener(eventName: 'refuel-paid', listener: (data: RefuelPaidEventData) => void): this;
    on(eventName: 'refuel-paid', listener: (data: RefuelPaidEventData) => void): this;
    once(eventName: 'refuel-paid', listener: (data: RefuelPaidEventData) => void): this;
    prependListener(eventName: 'refuel-paid', listener: (data: RefuelPaidEventData) => void): this;
    prependOnceListener(eventName: 'refuel-paid', listener: (data: RefuelPaidEventData) => void): this;
  }

  interface JobEventEmitter extends EventEmitter{
    // Job finished event
    addListener(eventName: 'finished', listener: () => void): this;
    on(eventName: 'finished', listener: () => void): this;
    once(eventName: 'finished', listener: () => void): this;
    prependListener(eventName: 'finished', listener: () => void): this;
    prependOnceListener(eventName: 'finished', listener: () => void): this;

    // Job started event
    addListener(eventName: 'started', listener: (data: JobStartedEventData) => void): this;
    on(eventName: 'started', listener: (data: JobStartedEventData) => void): this;
    once(eventName: 'started', listener: (data: JobStartedEventData) => void): this;
    prependListener(eventName: 'started', listener: (data: JobStartedEventData) => void): this;
    prependOnceListener(eventName: 'started', listener: (data: JobStartedEventData) => void): this;
    
    // Job cancelled event
    addListener(eventName: 'cancelled', listener: (data: JobCancelledEventData) => void): this;
    on(eventName: 'cancelled', listener: (data: JobCancelledEventData) => void): this;
    once(eventName: 'cancelled', listener: (data: JobCancelledEventData) => void): this;
    prependListener(eventName: 'cancelled', listener: (data: JobCancelledEventData) => void): this;
    prependOnceListener(eventName: 'cancelled', listener: (data: JobCancelledEventData) => void): this;

    // Job delivered event
    addListener(eventName: 'delivered', listener: (data: JobDeliveredEventData) => void): this;
    on(eventName: 'delivered', listener: (data: JobDeliveredEventData) => void): this;
    once(eventName: 'delivered', listener: (data: JobDeliveredEventData) => void): this;
    prependListener(eventName: 'delivered', listener: (data: JobDeliveredEventData) => void): this;
    prependOnceListener(eventName: 'delivered', listener: (data: JobDeliveredEventData) => void): this;
  }

  interface NavigationEventEmitter extends EventEmitter{
    // Speed limit changed event
    addListener(eventName: 'speed-limit', listener: (current: NavSpeedLimit, previous: NavSpeedLimit) => void): this;
    on(eventName: 'speed-limit', listener: (data: NavSpeedLimit, previous: NavSpeedLimit) => void): this;
    once(eventName: 'speed-limit', listener: (data: NavSpeedLimit, previous: NavSpeedLimit) => void): this;
    prependListener(eventName: 'speed-limit', listener: (data: NavSpeedLimit, previous: NavSpeedLimit) => void): this;
    prependOnceListener(eventName: 'speed-limit', listener: (data: NavSpeedLimit, previous: NavSpeedLimit) => void): this;
  }

  interface TrailersEventEmitter extends EventEmitter{
    // Trailers coupling event
    addListener(eventName: 'coupling', listener: (id: number, isAttached: boolean) => void): this;
    on(eventName: 'coupling', listener: (id: number, isAttached: boolean) => void): this;
    once(eventName: 'coupling', listener: (id: number, isAttached: boolean) => void): this;
    prependListener(eventName: 'coupling', listener: (id: number, isAttached: boolean) => void): this;
    prependOnceListener(eventName: 'coupling', listener: (id: number, isAttached: boolean) => void): this;

    // Trailer damage event
    addListener(eventName: 'damage', listener: (id: number, current: TrailerDamage, previous: TrailerDamage) => void): this;
    on(eventName: 'damage', listener: (id: number, current: TrailerDamage, previous: TrailerDamage) => void): this;
    once(eventName: 'damage', listener: (id: number, current: TrailerDamage, previous: TrailerDamage) => void): this;
    prependListener(eventName: 'damage', listener: (id: number, current: TrailerDamage, previous: TrailerDamage) => void): this;
    prependOnceListener(eventName: 'damage', listener: (id: number, current: TrailerDamage, previous: TrailerDamage) => void): this;
  }

  interface TrailerEventEmitter extends EventEmitter{
    // Trailer coupling event
    addListener(eventName: 'coupling', listener: (isAttached: boolean) => void): this;
    on(eventName: 'coupling', listener: (isAttached: boolean) => void): this;
    once(eventName: 'coupling', listener: (isAttached: boolean) => void): this;
    prependListener(eventName: 'coupling', listener: (isAttached: boolean) => void): this;
    prependOnceListener(eventName: 'coupling', listener: (isAttached: boolean) => void): this;

    // Trailer damage event
    addListener(eventName: 'damage', listener: (current: TrailerDamage, previous: TrailerDamage) => void): this;
    on(eventName: 'damage', listener: (current: TrailerDamage, previous: TrailerDamage) => void): this;
    once(eventName: 'damage', listener: (current: TrailerDamage, previous: TrailerDamage) => void): this;
    prependListener(eventName: 'damage', listener: (current: TrailerDamage, previous: TrailerDamage) => void): this;
    prependOnceListener(eventName: 'damage', listener: (current: TrailerDamage, previous: TrailerDamage) => void): this;
  }

  interface TruckEventEmitter extends EventEmitter{
    // Truck damage event
    addListener(eventName: 'damage', listener: (current: TruckDamage, previous: TruckDamage) => void): this;
    on(eventName: 'damage', listener: (current: TruckDamage, previous: TruckDamage) => void): this;
    once(eventName: 'damage', listener: (current: TruckDamage, previous: TruckDamage) => void): this;
    prependListener(eventName: 'damage', listener: (current: TruckDamage, previous: TruckDamage) => void): this;
    prependOnceListener(eventName: 'damage', listener: (current: TruckDamage, previous: TruckDamage) => void): this;
    
    // Truck cruise control toggle event
    addListener(eventName: 'cruise-control', listener: (data: CruiseControlEventData) => void): this;
    on(eventName: 'cruise-control', listener: (data: CruiseControlEventData) => void): this;
    once(eventName: 'cruise-control', listener: (data: CruiseControlEventData) => void): this;
    prependListener(eventName: 'cruise-control', listener: (data: CruiseControlEventData) => void): this;
    prependOnceListener(eventName: 'cruise-control', listener: (data: CruiseControlEventData) => void): this;
    
    // Truck cruise control increase event
    addListener(eventName: 'cruise-control-increase', listener: (data: CruiseControlEventData) => void): this;
    on(eventName: 'cruise-control-increase', listener: (data: CruiseControlEventData) => void): this;
    once(eventName: 'cruise-control-increase', listener: (data: CruiseControlEventData) => void): this;
    prependListener(eventName: 'cruise-control-increase', listener: (data: CruiseControlEventData) => void): this;
    prependOnceListener(eventName: 'cruise-control-increase', listener: (data: CruiseControlEventData) => void): this;
    
    // Truck cruise control decrease event
    addListener(eventName: 'cruise-control-decrease', listener: (data: CruiseControlEventData) => void): this;
    on(eventName: 'cruise-control-decrease', listener: (data: CruiseControlEventData) => void): this;
    once(eventName: 'cruise-control-decrease', listener: (data: CruiseControlEventData) => void): this;
    prependListener(eventName: 'cruise-control-decrease', listener: (data: CruiseControlEventData) => void): this;
    prependOnceListener(eventName: 'cruise-control-decrease', listener: (data: CruiseControlEventData) => void): this;
    
    // Truck warning event
    addListener(eventName: 'warning', listener: (id: string, enabled: boolean) => void): this;
    on(eventName: 'warning', listener: (id: string, enabled: boolean) => void): this;
    once(eventName: 'warning', listener: (id: string, enabled: boolean) => void): this;
    prependListener(eventName: 'warning', listener: (id: string, enabled: boolean) => void): this;
    prependOnceListener(eventName: 'warning', listener: (id: string, enabled: boolean) => void): this;

    // Truck emergency event
    addListener(eventName: 'emergency', listener: (id: string, enabled: boolean) => void): this;
    on(eventName: 'emergency', listener: (id: string, enabled: boolean) => void): this;
    once(eventName: 'emergency', listener: (id: string, enabled: boolean) => void): this;
    prependListener(eventName: 'emergency', listener: (id: string, enabled: boolean) => void): this;
    prependOnceListener(eventName: 'emergency', listener: (id: string, enabled: boolean) => void): this;
    
    // Truck engine event
    addListener(eventName: 'engine', listener: (enabled: boolean) => void): this;
    on(eventName: 'engine', listener: (enabled: boolean) => void): this;
    once(eventName: 'engine', listener: (enabled: boolean) => void): this;
    prependListener(eventName: 'engine', listener: (enabled: boolean) => void): this;
    prependOnceListener(eventName: 'engine', listener: (enabled: boolean) => void): this;
    
    // Truck electric event
    addListener(eventName: 'electric', listener: (enabled: boolean) => void): this;
    on(eventName: 'electric', listener: (enabled: boolean) => void): this;
    once(eventName: 'electric', listener: (enabled: boolean) => void): this;
    prependListener(eventName: 'electric', listener: (enabled: boolean) => void): this;
    prependOnceListener(eventName: 'electric', listener: (enabled: boolean) => void): this;
    
    // Truck gear-change event
    addListener(eventName: 'gear-change', listener: (current: TransmissionGear, previous: TransmissionGear) => void): this;
    on(eventName: 'gear-change', listener: (current: TransmissionGear, previous: TransmissionGear) => void): this;
    once(eventName: 'gear-change', listener: (current: TransmissionGear, previous: TransmissionGear) => void): this;
    prependListener(eventName: 'gear-change', listener: (current: TransmissionGear, previous: TransmissionGear) => void): this;
    prependOnceListener(eventName: 'gear-change', listener: (current: TransmissionGear, previous: TransmissionGear) => void): this;
    
    // Truck park event
    addListener(eventName: 'park', listener: (enabled: boolean) => void): this;
    on(eventName: 'park', listener: (enabled: boolean) => void): this;
    once(eventName: 'park', listener: (enabled: boolean) => void): this;
    prependListener(eventName: 'park', listener: (enabled: boolean) => void): this;
    prependOnceListener(eventName: 'park', listener: (enabled: boolean) => void): this;
    
    // Truck retarder event
    addListener(eventName: 'retarder', listener: (current: Retarder, previous: Retarder) => void): this;
    on(eventName: 'retarder', listener: (current: Retarder, previous: Retarder) => void): this;
    once(eventName: 'retarder', listener: (current: Retarder, previous: Retarder) => void): this;
    prependListener(eventName: 'retarder', listener: (current: Retarder, previous: Retarder) => void): this;
    prependOnceListener(eventName: 'retarder', listener: (current: Retarder, previous: Retarder) => void): this;
    
    // Truck wipers event
    addListener(eventName: 'wipers', listener: (enabled: boolean) => void): this;
    on(eventName: 'wipers', listener: (enabled: boolean) => void): this;
    once(eventName: 'wipers', listener: (enabled: boolean) => void): this;
    prependListener(eventName: 'wipers', listener: (enabled: boolean) => void): this;
    prependOnceListener(eventName: 'wipers', listener: (enabled: boolean) => void): this;
    
    // Truck refuel-started event
    addListener(eventName: 'refuel-started', listener: (data: Fuel) => void): this;
    on(eventName: 'refuel-started', listener: (data: Fuel) => void): this;
    once(eventName: 'refuel-started', listener: (data: Fuel) => void): this;
    prependListener(eventName: 'refuel-started', listener: (data: Fuel) => void): this;
    prependOnceListener(eventName: 'refuel-started', listener: (data: Fuel) => void): this;

    // Truck refuel-stopped event
    addListener(eventName: 'refuel-stopped', listener: (data: Fuel) => void): this;
    on(eventName: 'refuel-stopped', listener: (data: Fuel) => void): this;
    once(eventName: 'refuel-stopped', listener: (data: Fuel) => void): this;
    prependListener(eventName: 'refuel-stopped', listener: (data: Fuel) => void): this;
    prependOnceListener(eventName: 'refuel-stopped', listener: (data: Fuel) => void): this;
  }

  export interface Options {
    mmfName?: string;
  }

  export interface WatchOptions {
    interval?: number;
  }

  export interface Telemetry {
    opts: Options;

    data: TelemetryData;

    game: GameEventEmitter;
    job: JobEventEmitter;
    navigation: NavigationEventEmitter;
    trailers: TrailersEventEmitter;
    trailer: TrailerEventEmitter;
    truck: TruckEventEmitter;

    watch(options?: WatchOptions, callback?: (data: TelemetryData) => void): void;
    stop(): void;

    getBuffer(): any;
    getData(): TelemetryData;
    getGame(): Game;
    getControls(): Controls;
    getJob(): Job;
    getNavigation(): Navigation;
    getTruck(): Truck;
    getTrailers(): Trailer[];
    getTrailer(): Trailer;
  }

  export interface TelemetryData {
    controls: Controls;
    game: Game;
    job: Job;
    navigation: Navigation;
    trailer: Trailer;
    trailers: Trailer[];
    truck: Truck;
    substances?: Substances;
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
    game: ControlsGame;
  }
  export interface ControlsInput {
    steering: number;
    throttle: number;
    brake: number;
    clutch: number;
  }
  export interface ControlsGame {
    steering: number;
    throttle: number;
    brake: number;
    clutch: number;
  }
  
  /** Events */
  export interface Events {
    job: EventsJob;
    refuelPaid: EventsRefuelPaid;
    fine: EventsFine;
    ferry: EventFerry;
    train: EventTrain;
    tollgate: EventTollgate;
    refuel: EventRefuel;
  }
  
  /** Events job */
  export interface EventsJob {
    delivered: EventsJobDelivered;
    started: EventsJobStarted;
    cancelled: EventsJobCancelled;
    finished: EventsJobFinished;
  }
  export interface EventsJobDelivered {
    deliveryTime: number;
    startingTime: number;
    finishingTime: number;
    earnedXP: number;
    cargoDamage: number;
    distance: EventsJobDeliveredDistance;
    autoParked: boolean;
    revenue: number;
    active: boolean;
  }
  export interface EventsJobDeliveredDistance {
    km: number;
    miles: number;
  }
  export interface EventsJobStarted {
    autoLoaded: boolean;
    active: boolean;
  }
  export interface EventsJobCancelled {
    penalty: number;
    active: boolean;
    startingTime: number;
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
    id: string;
    name: string;
  }
  
  /** Travel (ferry & train) */
  export interface TravelSource {
    name: string;
    id: string;
  }
  export interface TravelDestination {
    name: string;
    id: string;
  }
  export interface EventFerry {
    source: TravelSource;
    destination: TravelDestination;
    target: TravelDestination;
    amount: number;
    active: boolean;
  }
  export interface EventTrain {
    source: TravelSource;
    destination: TravelDestination;
    target: TravelDestination;
    amount: number;
    active: boolean;
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
    sdkActive: boolean;
    paused: boolean;
    timestamp: GameTimestamp;
    simulationTimestamp: GameTimestamp;
    renderTimestamp: GameTimestamp;
    pluginVersion: number;
    version: string;
    game: GameNestedGame;
    telemetryVersion: string;
    time: GameTime;
    maxTrailerCount: number;
    scale: number;
  }
  export interface GameTimestamp {
    value: number;
  }
  export interface GameNestedGame {
    id: number;
    name: string;
  }
  export interface GameTime {
    value: number;
    unix: number;
  }
  
  /** Job */
  export interface Job {
    deliveryTime: JobDeliveryTime;
    plannedDistance: JobPlannedDistance;
    cargo: JobCargo;
    isSpecial: boolean;
    destination: JobLocation;
    source: JobLocation;
    market: JobMarket;
    income: number;
  }
  export interface JobDeliveryTime {
    value: number;
    unix: number;
  }
  export interface JobPlannedDistance {
    km: number;
    miles: number;
  }
  export interface JobCargo {
    mass: number;
    unitMass: number;
    damage: number;
    isLoaded: boolean;
    id: string;
    name: string;
  }
  export interface JobCity {
    id: string;
    name: string;
  }
  export interface Company {
    id: string;
    name: string;
  }
  
  /** JobLocation used for source & destination */
  export interface JobLocation {
    city: JobCity;
    company: Company;
  }
  export interface JobMarket {
    id: string;
    name: string;
  }
  
  /** Navigation */
  export interface Navigation {
    nextRestStop: number;
    distance: number;
    time: number;
    speedLimit: NavSpeedLimit;
  }
  export interface NavSpeedLimit {
    value: number;
    kph: number;
    mph: number;
  }
  
  /** Truck & Trailer Global */
  export interface Position {
    X: number;
    Y: number;
    Z: number;
  }
  export interface WheelSubstance {
    id: number;
    name: string;
  }
  
  export interface Acceleration {
    linearVelocity: Velocity;
    angularVelocity: Velocity;
    linearAcceleration: Velocity;
    angularAcceleration: Velocity;
  }
  export interface Velocity {
    X: number;
    Y: number;
    Z: number;
  }
  export interface Orientation {
    heading: number;
    pitch: number;
    roll: number;
  }
  export interface Hook {
    position: Position;
  }
  
  export interface Model {
    id: string;
    name: string;
  }
  export interface Make {
    id: string;
    name: string;
  }
  export interface LicensePlate {
    value: string;
    country: LicensePlateCountry;
  }
  export interface LicensePlateCountry {
    name: string;
    id: string;
  }
  
  
  /** Trailer */
  export interface Trailer {
    wheels: TrailerWheel[];
    attached: boolean;
    cargo: TrailerDamageValue;
    chassis: TrailerDamageValue;
    acceleration: Acceleration;
    hook: Hook;
    position: Position;
    orientation: Orientation;
    model: Model;
    accessoryId: string;
    bodyType: string;
    make: Make;
    brand: Make;
    chainType: string;
    licensePlate: LicensePlate;
    damage: TrailerDamage;
  }
  
  /** Trailer wheel */
  export interface TrailerWheel {
    substance: WheelSubstance;
    radius: number;
    suspDeflection: number;
    velocity: number;
    steering: number;
    rotation: number;
    steerable: boolean;
    simulated: boolean;
    powered: boolean;
    liftable: boolean;
    onGround: boolean;
    position: Position;
  }
  export interface TrailerWheelSubstance {
    id: number;
    name: string;
  }
  export interface TrailerDamageValue {
    damage: number;
  }
  export interface TrailerDamage {
    cargo: number;
    chassis: number;
    wheels: number;
    total: number;
  }
    
  /** Truck */
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
  
  /** Transmission */
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
  
  /** Breaks */
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
  
  /** Lights */
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
  
  /** Truck engine */
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
    enabled: false;
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
  
  
  /** Truck fuel */
  export interface Fuel {
    capacity: number;
    warning: EngineWarning;
    value: number;
    avgConsumption: number;
    range: number;
  }
  
  /** Truck adblue */
  export interface AdBlue {
    capacity: number;
    warning: EngineWarning;
    value: number;
  }
  
  /** Truck differential */
  export interface Differential {
    ratio: number;
  }
  
  /** Truck speed */
  export interface Speed {
    value: number;
    kph: number;
    mph: number;
  }
  
  /** Truck cruiseControl */
  export interface CruiseControl {
    value: number;
    enabled: boolean;
    kph: number;
    mph: number;
  }
  
  /** Truck cabin */
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
    offset: Offset;
  }
  
  /** Truck damage */
  export interface TruckDamage {
    cabin: number;
    chassis: number;
    engine: number;
    transmission: number;
    wheels: number;
    total: number;
  }

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
  }
}
