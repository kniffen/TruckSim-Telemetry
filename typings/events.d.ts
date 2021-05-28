declare module "trucksim-telemetry" {
  export interface Events {
    job: EventsJob;
    refuelPaid: EventsRefuelPaid;
    fine: EventsFine;
    ferry: EventFerry;
    train: EventTrain;
    tollgate: EventTollgate;
    refuel: EventRefuel;
  }
  
  export interface EventsJob {
    delivered: EventsJobDelivered;
    started: EventsJobStarted;
    cancelled: EventsJobCancelled;
    finished: EventsJobFinished;
  }
  
  export interface EventsJobDelivered {
    timeTaken: number;
    startedTimestamp: JobTimestamp;
    deliveredTimestamp: JobTimestamp;
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
    startedTimestamp: JobTimestamp;
    cancelledTimestamp: JobTimestamp;
  }
  
  export interface EventsJobFinished {
    active: boolean;
  }
  
  export interface EventsRefuelPaid {
    amount: number;
    active?: boolean;
  }
  
  export interface EventsFine {
    offence: FineOffence;
    amount: number;
    active?: boolean;
  }
  
  export interface FineOffence {
    id: string;
    name: string;
  }
  
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
    active?: boolean;
  }
  
  export interface EventTrain {
    source: TravelSource;
    destination: TravelDestination;
    target: TravelDestination;
    amount: number;
    active?: boolean;
  }
  
  export interface EventTollgate {
    amount: number;
    active?: boolean;
  }
  
  export interface EventRefuel {
    active: boolean;
  }

  // The following is data given by event callbacks

  export interface EventsJobStartedVerbose {
    autoLoaded: boolean;
    cargo: JobCargo;
    expectedDeliveryTimestamp: JobTimestamp;
    destination: JobLocation;
    income: number;
    isSpecial: boolean;
    market: JobMarket;
    plannedDistance: JobPlannedDistance;
    source: JobLocation;
  }

  export interface EventsJobCancelledVerbose {
    cargo: JobCargo;
    expectedDeliveryTimestamp: JobTimestamp;
    destination: JobLocation;
    cancelledTimestamp: JobTimestamp;
    income: number;
    isSpecial: boolean;
    market: JobMarket;
    penalty: number;
    plannedDistance: JobPlannedDistance;
    source: JobLocation;
    startedTimestamp: JobTimestamp;
  }

  export interface EventsJobDeliveredVerbose {
    autoParked: boolean;
    isSpecial: boolean;
    cargo: JobCargo;
    market: JobMarket;
    cargoDamage: number;
    distance: EventsJobDeliveredDistance;
    earnedXP: number;
    expectedDeliveryTimestamp: JobTimestamp;
    deliveredTimestamp: JobTimestamp;
    plannedDistance: JobPlannedDistance;
    revenue: number;
    startedTimestamp: JobTimestamp;
    timeTaken: number;
    destination: JobLocation;
    source: JobLocation;
  }

  export interface EventsCruiseControl {
    enabled: boolean;
    currentSpeed: Speed;
    speedLimit: Speed;
    cruiseControlSpeed: Speed;
  }

}