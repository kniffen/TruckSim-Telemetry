function eventEmittersNavigation(telemetry, current, previous) {

  // Speed limit
  if (current.navigation.speedLimit?.value !== previous.navigation.speedLimit?.value) {
    telemetry.navigation.emit(
      'speed-limit', 
      current.navigation.speedLimit, 
      previous.navigation.speedLimit,
    )
  }

}

module.exports = eventEmittersNavigation