function stop(telemetry) {
  clearTimeout(telemetry.watcher)
  
  telemetry.watcher = null
}

module.exports = stop