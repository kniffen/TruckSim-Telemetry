declare module "trucksim-telemetry" {
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
}