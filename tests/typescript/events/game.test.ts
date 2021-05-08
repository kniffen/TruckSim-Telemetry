import tst from 'trucksim-telemetry'

// types
import {
  GameTime,
  FineEventData,
  TollgateEventData,
  FerryEventData,
  TrainEventData,
  RefuelPaidEventData,
} from 'trucksim-telemetry'

const telemetry = tst()

// Pause event
function pauseCallback(isPaused: boolean) {}

telemetry.game.addListener('pause', pauseCallback)
telemetry.game.on('pause', pauseCallback)
telemetry.game.once('pause', pauseCallback)
telemetry.game.prependListener('pause', pauseCallback)
telemetry.game.prependOnceListener('pause', pauseCallback)

// Time change event
function timeChangeCallback(current: GameTime, previous: GameTime) {}

telemetry.game.addListener('time-change', timeChangeCallback)
telemetry.game.on('time-change', timeChangeCallback)
telemetry.game.once('time-change', timeChangeCallback)
telemetry.game.prependListener('time-change', timeChangeCallback)
telemetry.game.prependOnceListener('time-change', timeChangeCallback)

// Fine event
function fineCallback(data: FineEventData) {}

telemetry.game.addListener('fine', fineCallback)
telemetry.game.on('fine', fineCallback)
telemetry.game.once('fine', fineCallback)
telemetry.game.prependListener('fine', fineCallback)
telemetry.game.prependOnceListener('fine', fineCallback)

// Tollgate event
function tollgateCallback(data: TollgateEventData) {}

telemetry.game.addListener('tollgate', tollgateCallback)
telemetry.game.on('tollgate', tollgateCallback)
telemetry.game.once('tollgate', tollgateCallback)
telemetry.game.prependListener('tollgate', tollgateCallback)
telemetry.game.prependOnceListener('tollgate', tollgateCallback)

// Ferry event
function ferryCallback(data: FerryEventData) {}

telemetry.game.addListener('ferry', ferryCallback)
telemetry.game.on('ferry', ferryCallback)
telemetry.game.once('ferry', ferryCallback)
telemetry.game.prependListener('ferry', ferryCallback)
telemetry.game.prependOnceListener('ferry', ferryCallback)

// Train event
function trainCallback(data: TrainEventData) {}

telemetry.game.addListener('train', trainCallback)
telemetry.game.on('train', trainCallback)
telemetry.game.once('train', trainCallback)
telemetry.game.prependListener('train', trainCallback)
telemetry.game.prependOnceListener('train', trainCallback)

// Refuel paid event
function refuelPaidCallback(data: RefuelPaidEventData) {}

telemetry.game.addListener('refuel-paid', refuelPaidCallback)
telemetry.game.on('refuel-paid', refuelPaidCallback)
telemetry.game.once('refuel-paid', refuelPaidCallback)
telemetry.game.prependListener('refuel-paid', refuelPaidCallback)
telemetry.game.prependOnceListener('refuel-paid', refuelPaidCallback)