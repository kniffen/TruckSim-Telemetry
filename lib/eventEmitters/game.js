const isEqual = require('lodash.isequal')

function eventEmittersGame(telemetry, currentState, previousState) {

  // Game paused/unpaused
  if (currentState.game.paused !== previousState.game.paused) {
    telemetry.game.emit('pause', currentState.game.paused)
  }

  // Game time changed
  if (!isEqual(currentState.game.time, previousState.game.time)) {
    telemetry.game.emit('time-change', currentState.game.time, previousState.game.time)
  }

  // Ferry
  if (currentState.events.ferry?.active !== previousState.events.ferry?.active) {
    const ferryEventData = {...currentState.events.ferry}

    ferryEventData.target = ferryEventData.destination // TODO: Deprecated, to be removed
    delete ferryEventData.active

    telemetry.game.emit('ferry', ferryEventData)
  }

  // Fine
  if (currentState.events.fine?.active !== previousState.events.fine?.active) {
    const fineEventData = {...currentState.events.fine}

    delete fineEventData.active

    telemetry.game.emit('fine', fineEventData)
  }

  // Refuel paid
  if (currentState.events.refuelPaid?.active !== previousState.events.refuelPaid?.active) {
    const refuelPaidEventData = {...currentState.events.refuelPaid}

    delete refuelPaidEventData.active

    telemetry.game.emit('refuel-paid', refuelPaidEventData)
  }

  // Tollgate
  if (currentState.events.tollgate?.active !== previousState.events.tollgate?.active) {
    const tollgateEventData = {...currentState.events.tollgate}

    delete tollgateEventData.active

    telemetry.game.emit('tollgate', tollgateEventData)
  }

  // Train
  if (currentState.events.train?.active !== previousState.events.train?.active) {
    const trainEventData = {...currentState.events.train}

    trainEventData.target = trainEventData.destination // TODO: Deprecated, to be removed
    delete trainEventData.active

    telemetry.game.emit('train', trainEventData)
  }
}

module.exports = eventEmittersGame