const deepEqual = require("deep-equal")
const cloneDeep = require("lodash.clonedeep")

function watch(
  setInterval,
  scsSDKTelemetry,
  converters,
  eventEmitters,
  telemetry,
  getBuffer,
  getData,
  getPluginVersion,
  parseData,
  opts,
  update
) {
  if (telemetry.watcher) return

  if (!opts) opts = {}

  if (!opts.interval || typeof opts.interval !== "number") opts.interval = 100

  if (opts.interval < 10) opts.interval = 10

  let previous = null

  const watcher = () => {
    const current = getData(null, scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)

    if (current && current.game.sdkActive && (!previous || !previous.game.sdkActive)) {
      telemetry.game.emit("connected")
    }

    if ((!current || !current.game.sdkActive) && previous && previous.game.sdkActive) {
      telemetry.game.emit("disconnected")
    }

    if (!current) {
      previous = null
      return
    }

    if (!previous) previous = cloneDeep(current)

    // Update data
    for (const key in current) {
      if (telemetry.data[key]) telemetry.data[key] = cloneDeep(current[key])
    }

    // Event emitters
    for (const key of Object.keys(eventEmitters))
      eventEmitters[key](telemetry, [cloneDeep(current), cloneDeep(previous)])

    if (update && !deepEqual(current, previous)) update(current)

    previous = cloneDeep(current)
  }

  watcher()

  telemetry.watcher = setInterval(watcher, opts.interval)

}

module.exports = watch