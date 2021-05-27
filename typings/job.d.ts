declare module "trucksim-telemetry" {
  export interface Job {
    expectedDeliveryTimestamp: JobTimestamp;
    plannedDistance: JobPlannedDistance;
    cargo: JobCargo;
    isSpecial: boolean;
    destination: JobLocation;
    source: JobLocation;
    market: JobMarket;
    income: number;
  }

  export interface JobTimestamp {
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
  
  export interface JobLocation {
    city: JobCity;
    company: Company;
  }
  
  export interface JobMarket {
    id: string;
    name: string;
  }
}