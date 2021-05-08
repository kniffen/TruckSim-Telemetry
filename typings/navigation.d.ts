declare module "trucksim-telemetry" {
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
}