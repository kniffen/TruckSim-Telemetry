/// <reference path="generic.d.ts" />
/// <reference path="events.d.ts" />
/// <reference path="game.d.ts" />
/// <reference path="controls.d.ts" />
/// <reference path="navigation.d.ts" />
/// <reference path="substances.d.ts" />
/// <reference path="job.d.ts" />
/// <reference path="trailer.d.ts" />
/// <reference path="truck.d.ts" />

declare module "trucksim-telemetry" {
  function truckSimTelemetry(opts?: Options): Telemetry;
  
  namespace truckSimTelemetry {
    function getBuffer(opts?: Options): any;
    function getData(opts?: Options): TelemetryData;
    function getGame(opts?: Options): Game;
    function getControls(opts?: Options): Controls;
    function getNavigation(opts?: Options): Navigation;
    function getJob(opts?: Options): Job;
    function getTrailers(opts?: Options): Trailer[];
    function getTrailer(opts?: Options): Trailer;
    function getTruck(opts?: Options): Truck;
  }

  export default truckSimTelemetry;

  export interface Options {
    mmfName?: string;
  }

  export interface WatchOptions {
    interval?: number;
  }

  export interface Telemetry {
    opts: Options;

    data: TelemetryData;

    game: any;
    job: any;
    navigation: any;
    trailers: any;
    trailer: any;
    truck: any;

    watch(options?: WatchOptions, callback?: (data: TelemetryData) => void): void;
    stop(): void;

    getBuffer(): any;
    getData(): TelemetryData;
    getGame(): Game;
    getControls(): Controls;
    getJob(): Job;
    getNavigation(): Navigation;
    getTruck(): Truck;
    getTrailers(): Trailer[];
    getTrailer(): Trailer;
  }

  export interface TelemetryData {
    controls: Controls;
    events?: Events;
    game: Game;
    job: Job;
    navigation: Navigation;
    substances?: Substances;
    trailer: Trailer;
    trailers: Trailer[];
    truck: Truck;
  }

}
