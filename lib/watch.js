const isEqual = require('lodash.isequal')
const cloneDeep = require('lodash.clonedeep')

const getData = require('./getData')
const eventEmitters = require('./eventEmitters')

function watch(opts, update, telemetry) {

  if ( telemetry.watcher )
    return

  if ( !opts )
    opts = {interval: 100}
  
  opts.interval = parseInt(opts.interval)

  if ( !opts.interval )
    opts.interval = 100

  if ( opts.interval < 10 )
    opts.interval = 10

  let previous = null

  const watcher = () => {
    const current = getData(null, telemetry.opts)

    if ( current?.game.sdkActive && !previous?.game.sdkActive )
      telemetry.game.emit('connected')

    if ( !current?.game.sdkActive && previous?.game.sdkActive )
      telemetry.game.emit('disconnected')

    if ( !current ) {
      previous = null
      return
    }

    if ( !previous )
      previous = cloneDeep(current)

    // Update data
    for ( const key in current ) {
      if ( telemetry.data[key] )
        telemetry.data[key] = cloneDeep(current[key])
    }

    // Event emitters
    for ( const key of Object.keys(eventEmitters) )
      eventEmitters[key](telemetry, [cloneDeep(current), cloneDeep(previous)])

    if ( update && !isEqual(current, previous) )
      update(current)

    previous = cloneDeep(current)
  }

  watcher()

  telemetry.watcher = setInterval(watcher, opts.interval)

}

module.exports = watch