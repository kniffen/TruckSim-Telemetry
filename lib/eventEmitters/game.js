const isEqual = require('lodash.isequal')
const cloneDeep = require('lodash.clonedeep')

function eventEmittersGame(telemetry, data) {

  // Game paused/unpaused
  if ( data[0]?.game.paused != data[1]?.game.paused ) {
    telemetry.game.emit( 'pause', data[0].game.paused )
  }

  // Game time changed
  if ( !isEqual( data[0]?.game.time, data[1]?.game.time ) ) {
    telemetry.game.emit( 'time-change', data[0].game.time, data[1].game.time )
  }

  // Fine
  if ( data[0]?.events?.fine.active && !data[1]?.events?.fine.active ) {
    const fineData = cloneDeep( data[0].events.fine )

    delete fineData.active

    telemetry.game.emit( 'fine', fineData )
  }

  // Tollgate
  if ( data[0]?.events?.tollgate.active && !data[1]?.events?.tollgate.active ) {
    const tollgateData = cloneDeep( data[0].events.tollgate )

    delete tollgateData.active

    telemetry.game.emit( 'tollgate', tollgateData )
  }

  // Ferry
  if ( data[0]?.events?.ferry.active && !data[1]?.events?.ferry.active ) {
    const ferryData = cloneDeep( data[0].events.ferry )

    ferryData.target = ferryData.destination // Deprecated, to be removed at some point
    delete ferryData.active

    telemetry.game.emit( 'ferry', ferryData )
  }

  // Train
  if ( data[0]?.events?.train.active && !data[1]?.events?.train.active ) {
    const trainData = cloneDeep(data[0].events.train)

    trainData.target = trainData.destination // Deprecated, to be removed at some point
    delete trainData.active

    telemetry.game.emit( 'train', trainData )
  }

  // Refuel paid
  if ( data[0]?.events?.refuelPaid.active && !data[1]?.events?.refuelPaid.active ) {
    const refuelPaidData = cloneDeep( data[0].events.refuelPaid )

    delete refuelPaidData.active
    
    telemetry.game.emit( 'refuel-paid', refuelPaidData )
  }
}

module.exports = function() {
  return module.exports.default.apply(this, arguments)
}
module.exports.default = eventEmittersGame