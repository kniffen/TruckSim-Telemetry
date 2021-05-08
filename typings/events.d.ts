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
    active: boolean;
  }
  
  export interface EventsFine {
    offence: FineOffence;
    amount: number;
    active: boolean;
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
    active: boolean;
  }
  
  export interface EventTrain {
    source: TravelSource;
    destination: TravelDestination;
    target: TravelDestination;
    amount: number;
    active: boolean;
  }
  
  export interface EventTollgate {
    amount: number;
    active: boolean;
  }
  
  export interface EventRefuel {
    active: boolean;
  }

  // The following is data given by event callbacks

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