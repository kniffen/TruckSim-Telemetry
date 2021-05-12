/**
  * Generic types used in multiple places
  */

declare module "trucksim-telemetry" {
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
    linearVelocity?: Velocity;
    angularVelocity: Velocity;
    linearAcceleration?: Velocity;
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
  
  export interface Make {
    id: string;
    name: string;
  }

  export interface Model {
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
}