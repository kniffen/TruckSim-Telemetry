import equal     from "deep-equal"
import cloneDeep from "lodash.clonedeep"

export default function eventEmittersGame(telemetry, data) {

  // Game paused/unpaused
  if (data[0].game.paused != data[1].game.paused)
    telemetry.game.emit("pause", data[0].game.paused)

  // Game time changed
  if (!equal(data[0].game.time, data[1].game.time))
    telemetry.game.emit("time-change", data[0].game.time, data[1].game.time )
  
  // Fine
  if (data[0].events.fine.active && !data[1].events.fine.active)
    telemetry.game.emit("fine", cloneDeep(data[0].events.fine))

  // Tollgate
  if (data[0].events.tollgate.active && !data[1].events.tollgate.active)
    telemetry.game.emit("tollgate", cloneDeep(data[0].events.tollgate))

  // Ferry
  if (data[0].events.ferry.active && !data[1].events.ferry.active)
    telemetry.game.emit("ferry", cloneDeep(data[0].events.ferry))

  // Train
  if (data[0].events.train.active && !data[1].events.train.active)
    telemetry.game.emit("train", cloneDeep(data[0].events.train))
}