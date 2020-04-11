import equal     from "deep-equal"
import cloneDeep from "lodash.clonedeep"

export default function eventEmittersJob(telemetry, data) {

  // Job finished
  if (data[0]?.events?.job.finished.active && !data[1]?.events?.job.finished.active)
    telemetry.job.emit("finished")

  // Job started
  if (data[0]?.events?.job.started.active && !data[1]?.events?.job.started.active)
      telemetry.job.emit("started", cloneDeep(data[0].events.job.started))

  // SDK 1.10 and above
  if (data[0]?.game.pluginVersion < 10) return

  // Job delivered
  if (data[0]?.events?.job.cancelled.active && !data[1]?.events?.job.cancelled.active)
    telemetry.job.emit("cancelled", cloneDeep(data[0].events.job.cancelled))

  // Job delivered
  if (data[0]?.events?.job.delivered.active && !data[1]?.events?.job.delivered.active)
      telemetry.job.emit("delivered", cloneDeep(data[0].events.job.delivered))

}