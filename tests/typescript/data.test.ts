/// <reference path="../../typings/index.d.ts" />
import {
  TelemetryData,
  Controls,
  Events,
  Game,
  Job,
  Navigation,
  Substances,
  Trailer,
  Truck,
  EventsJobStartedVerbose,
  EventsJobCancelledVerbose,
  EventsJobDeliveredVerbose,
  EventsCruiseControl,
} from "trucksim-telemetry"

import * as data from '../data/scs_sdk_plugin_parsed_data_10.json'

const controls: Controls = data.controls
const events: Events = data.events
const game: Game = data.game
const job: Job = data.job
const navigation: Navigation = data.navigation

// Throws an error cause the data is imported via a JSON file, so it thinks it's a string array
// const substances: Substances = data.substances

const substances: Substances = [
  "static",
  "road",
  "road_snow",
  "dirt",
  "snow",
  "grass",
  "road_dirt",
  "invis",
  "ice",
  "metal",
  "rubber",
  "rumble_stripe",
  "plastic",
  "glass",
  "wood",
  "soft"
]

const trailer: Trailer = data.trailer
const trailers: Trailer[] = data.trailers
const truck: Truck = data.truck

const testData: TelemetryData = {
  controls,
  events,
  game,
  job,
  navigation,
  substances,
  trailer,
  trailers,
  truck,
}

// Event callback data
const eventsJobStartedVerbose: EventsJobStartedVerbose =
  Object.assign(
    {
      autoLoaded: events.job.started.autoLoaded
    },
    job
  )

const eventsJobCancelledVerbose: EventsJobCancelledVerbose =
  Object.assign(
    {
      penalty:       events.job.cancelled.penalty,
      startingTime:  events.job.cancelled.startingTime,
      finishingTime: events.job.cancelled.finishingTime,
    },
    job
  )

const eventsJobDeliveredVerbose: EventsJobDeliveredVerbose =
  Object.assign(
    {
      deliveryTime:  events.job.delivered.deliveryTime,
      startingTime:  events.job.delivered.startingTime,
      finishingTime: events.job.delivered.finishingTime,
      earnedXP:      events.job.delivered.earnedXP,
      cargoDamage:   events.job.delivered.cargoDamage,
      distance:      events.job.delivered.distance,
      autoParked:    events.job.delivered.autoParked,
      revenue:       events.job.delivered.revenue,
    },
    job
  )

const EventsCruiseControl: EventsCruiseControl = {
  enabled:      truck.cruiseControl.enabled,
  currentSpeed: truck.speed,
  speedLimit:   navigation.speedLimit,
  cruiseControlSpeed: {
    value: truck.cruiseControl.value,
    kph:   truck.cruiseControl.kph,
    mph:   truck.cruiseControl.mph,
  }
}