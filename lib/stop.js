function stop(telemetry) {
  
  clearInterval(telemetry.watcher)

}

module.exports = stop