function stop(telemetry) {

  if (telemetry.watcher) clearInterval(telemetry.watcher)

}

module.exports = stop