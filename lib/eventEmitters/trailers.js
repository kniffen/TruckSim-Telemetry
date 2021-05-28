function eventEmittersTrailers(telemetry, currentState, previousState) {

  for (let trailerId = 0; trailerId < currentState.trailers.length; trailerId++) {

    // Coupling
    if (currentState.trailers[trailerId].attached !== previousState.trailers[trailerId].attached) {
      telemetry.trailers.emit('coupling', trailerId, currentState.trailers[trailerId].attached)
      
      if (trailerId == 0)
        telemetry.trailer.emit('coupling', currentState.trailers[0].attached)
    }

    // Damage
    const currentTotalDamage  = Math.floor(currentState.trailers[trailerId].damage?.total  * 100)
    const previousTotalDamage = Math.floor(previousState.trailers[trailerId].damage?.total * 100)
    if (currentTotalDamage > previousTotalDamage) {
      telemetry.trailers.emit(
        'damage', 
        trailerId, 
        currentState.trailers[trailerId].damage,
        previousState.trailers[trailerId].damage
     )
      
      if (trailerId == 0) {
        telemetry.trailer.emit(
          'damage', 
          currentState.trailers[0].damage, 
          previousState.trailers[0].damage,
       )
      }
    }
  }
  
}

module.exports = eventEmittersTrailers