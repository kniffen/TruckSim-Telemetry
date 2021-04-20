import isEqual   from "lodash.isequal"
import cloneDeep from "lodash.clonedeep"

export default function eventEmittersGame(telemetry, data) {

  // Game paused/unpaused
  if ( data[0]?.game.paused != data[1]?.game.paused ) {
    telemetry.game.emit( "pause", data[0].game.paused )
  }

  // Game time changed
  if ( !isEqual( data[0]?.game.time, data[1]?.game.time ) ) {
    telemetry.game.emit( "time-change", data[0].game.time, data[1].game.time )
  }

  // Fine
  if ( data[0]?.events?.fine.active && !data[1]?.events?.fine.active ) {
    const fineEventData = cloneDeep( data[0].events.fine )

    const fineData = {
      offence: fineEventData.offence,
      amount:  fineEventData.amount,
    }

    telemetry.game.emit( "fine", fineData )
  }

  // Tollgate
  if ( data[0]?.events?.tollgate.active && !data[1]?.events?.tollgate.active ) {
    const tollgateEventData = cloneDeep( data[0].events.tollgate )

    const tollgateData = {
      amount: tollgateEventData.amount,
    }

    telemetry.game.emit( "tollgate", tollgateData )
  }

  // Ferry
  if ( data[0]?.events?.ferry.active && !data[1]?.events?.ferry.active ) {
    const ferryEventData = cloneDeep( data[0].events.ferry )

    const ferryData = {
      source:      ferryEventData.source,
      destination: ferryEventData.destination,
      target:      ferryEventData.destination, // Deprecated, to be removed at some point
      amount:      ferryEventData.amount,
    }

    telemetry.game.emit( "ferry", ferryData )
  }

  // Train
  if ( data[0]?.events?.train.active && !data[1]?.events?.train.active ) {
    const trainEventData = cloneDeep(data[0].events.train)

    const trainData = {
      source:      trainEventData.source,
      destination: trainEventData.destination,
      target:      trainEventData.destination, // Deprecated, to be removed at some point
      amount:      trainEventData.amount,
    }

    telemetry.game.emit( "train", trainData )
  }

  // Refuel paid
  if ( data[0]?.events?.refuelPaid.active && !data[1]?.events?.refuelPaid.active ) {
    const refuelPaidEventData = cloneDeep( data[0].events.refuelPaid )

    const refuelPaidData = {
      amount: refuelPaidEventData.amount
    }

    telemetry.game.emit( "refuel-paid", refuelPaidData )
  }
}