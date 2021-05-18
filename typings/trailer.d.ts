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
    lift: number;
    liftable: boolean;
    liftOffset: number;
    onGround: boolean;
    position: Position;
    powered: boolean;
    radius: number;
    rotation: number;
    simulated: boolean;
    steerable: boolean;
    steering: number;
    substance: WheelSubstance;
    suspDeflection: number;
    velocity: number;
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