const isEqual = require('lodash.isequal')
const cloneDeep = require('lodash.clonedeep')

const functions = require('./')
const eventEmitters = require('../eventEmitters')

let previousState = null

function watch(opts, update, telemetry) {
  if (null !== telemetry.watcher)
    return

  // TODO: Remove this before stable release
  // Just use 10ms or 1000/60 (16ms/60FPS)
  if (!opts || typeof opts !== 'object')
    opts = {interval: 100}

  opts.interval = parseInt(opts.interval)

  if (!opts.interval)
    opts.interval = 100

  if (opts.interval < 10)
    opts.interval = 10

  // Reset previous state to avoid potential update and event triggers
  previousState = null

  watcher(update, telemetry, opts)

  telemetry.watcher =
    setTimeout(() => watcher(update, telemetry, opts), opts.interval)
}

function watcher(update, telemetry, opts) {
  const currentState = functions.getData(null, telemetry.opts)

  if (currentState?.game?.sdkActive && !previousState?.game?.sdkActive)
    telemetry.game.emit('connected')

  if (!currentState?.game?.sdkActive && previousState?.game?.sdkActive)
    telemetry.game.emit('disconnected')

  if (!currentState) {
    previousState = null
  }

  if (currentState && !previousState) {
    previousState = currentState
  }

  // TODO: remove this before stable release, it doesn't have any practical use anymore
  for (const key in currentState) {
    if (telemetry.data[key]) {
      telemetry.data[key] = currentState[key]
    }
  }
  
  if (!isEqual(currentState, previousState)) {
    // Event emitters
    
    // Cloning and destructuring the current state here to avoid
    // the potential of the update callback affecting it.
    const currentStateClone = cloneDeep(currentState)

    eventEmitters.game(
      telemetry,
      {game: currentStateClone.game, events: currentStateClone.events},
      {game: previousState.game,     events: previousState.events},
    )

    eventEmitters.job(
      telemetry,
      {events: currentStateClone.events, job: currentStateClone.job, },
      {events: previousState.events,     job: previousState.job,},
    )

    eventEmitters.navigation(
      telemetry,
      {navigation: currentStateClone.navigation},
      {navigation: previousState.navigation},
    )
    
    eventEmitters.trailers(
      telemetry,
      {trailers: currentStateClone.trailers},
      {trailers: previousState.trailers},
    )

    eventEmitters.truck(
      telemetry,
      {truck: currentStateClone.truck, navigation: currentStateClone.navigation, events: currentStateClone.events},
      {truck: previousState.truck, events: previousState.events},
    )
    
    if (update) {
      // Cloning the current state here to prevent the event callback to affect it
      update(cloneDeep(currentState))
    }
  }

  previousState = currentState

  if (null != telemetry.watcher) {
    telemetry.watcher =
      setTimeout(() => watcher(update, telemetry, opts), opts.interval)
  }
}

module.exports = watch