declare module "trucksim-telemetry" {
  export interface Game {
    sdkActive: boolean;
    paused: boolean;
    timestamp: GameTimestamp;
    simulationTimestamp: GameTimestamp;
    renderTimestamp: GameTimestamp;
    pluginVersion: number;
    version: number;
    game: GameNestedGame;
    telemetryVersion: number;
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
}