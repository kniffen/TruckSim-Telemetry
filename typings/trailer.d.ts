declare module "trucksim-telemetry" {
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
}