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
    deliveryTime: JobDeliveryTime;
    destination: JobLocation;
    income: number;
    isSpecial: boolean;
    market: JobMarket;
    plannedDistance: JobPlannedDistance;
    source: JobLocation;
  }

  export interface EventsJobCancelledVerbose {
    cargo: JobCargo;
    deliveryTime: JobDeliveryTime;
    destination: JobLocation;
    finishingTime: number;
    income: number;
    isSpecial: boolean;
    market: JobMarket;
    penalty: number;
    plannedDistance: JobPlannedDistance;
    source: JobLocation;
    startingTime: number;
  }

  export interface EventsJobDeliveredVerbose {
    autoParked: boolean;
    cargo: JobCargo;
    cargoDamage: number;
    deliveryTime: number;
    destination: JobLocation;
    distance: EventsJobDeliveredDistance;
    earnedXP: number;
    finishingTime: number;
    isSpecial: boolean;
    market: JobMarket;
    plannedDistance: JobPlannedDistance;
    revenue: number;
    source: JobLocation;
    startingTime: number;
  }

  export interface EventsCruiseControl {
    enabled: boolean;
    currentSpeed: Speed;
    speedLimit: Speed;
    cruiseControlSpeed: Speed;
  }

}