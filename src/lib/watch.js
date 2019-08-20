import equal     from "deep-equal"
import cloneDeep from "lodash.clonedeep"
import _getData  from "./getData"

import eventEmittersGame       from "./event-emitters/game"
import eventEmittersJob        from "./event-emitters/job"
import eventEmittersNavigation from "./event-emitters/navigation"
import eventEmittersTrailers   from "./event-emitters/trailers"
import eventEmittersTruck      from "./event-emitters/truck"

const _eventEmitters = [
  eventEmittersGame,
  eventEmittersJob,
  eventEmittersNavigation,
  eventEmittersTrailers,
  eventEmittersTruck,
]

export default function watch(
  telemetry,
  opts,
  update,
  _setInterval  = setInterval,
  getData       = _getData,
  eventEmitters = _eventEmitters
) {
  if (telemetry.watcher) return

  if (!opts) opts = {}

  if (!opts.interval || typeof opts.interval !== "number") opts.interval = 100

  if (opts.interval < 10) opts.interval = 10

  let previous = null

  const watcher = () => {
    const current = getData()

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
    for (let i = 0; i < eventEmitters.length; i++) {
      eventEmitters[i](telemetry, [cloneDeep(current), cloneDeep(previous)])
    }

    if (update && !equal(current, previous)) update()

    previous = cloneDeep(current)
  }

  watcher()

  telemetry.watcher = _setInterval(watcher, opts.interval)

}