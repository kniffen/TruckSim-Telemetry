function eventEmittersJob(telemetry, currentState, previousState) {

  // Job finished
  if (currentState.events.job?.finished.active && !previousState.events.job?.finished.active) {
    telemetry.job.emit('finished')
  }

  // Job started
  if (currentState.events.job?.started.active && !previousState.events.job?.started.active) {
    const jobStartedData = {}

    Object.assign(jobStartedData, currentState.job)
    Object.assign(jobStartedData, currentState.events.job.started)

    delete jobStartedData.active

    telemetry.job.emit('started', jobStartedData)
  }

  // Job cancelled
  if (currentState.events.job?.cancelled.active && !previousState.events.job?.cancelled.active) {
    const jobCancelledData = {}

    Object.assign(jobCancelledData, previousState.job)
    Object.assign(jobCancelledData, currentState.events.job.cancelled)
    
    jobCancelledData.income  = 0 // TODO: Deprecated, to be replaced with "revenue"
    delete jobCancelledData.active
    
    telemetry.job.emit('cancelled', jobCancelledData)
  }

  // Job delivered
  if (currentState.events.job?.delivered.active && !previousState.events.job?.delivered.active) {
    const jobDeliveredData = {}

    Object.assign(jobDeliveredData, previousState.job)
    Object.assign(jobDeliveredData, currentState.events.job.delivered)

    delete jobDeliveredData.income
    delete jobDeliveredData.active

    telemetry.job.emit('delivered', jobDeliveredData)
  }

}

module.exports = eventEmittersJob