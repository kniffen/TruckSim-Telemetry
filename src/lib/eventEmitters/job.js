import cloneDeep from "lodash.clonedeep"

export default function eventEmittersJob( telemetry, data ) {

  // Job finished
  if ( data[0]?.events?.job.finished.active && !data[1]?.events?.job.finished.active ) {
    telemetry.job.emit( "finished" )
  }

  // Job started
  if ( data[0]?.events?.job.started.active && !data[1]?.events?.job.started.active ) {
    const jobStartedEventData = cloneDeep( data[0].events.job.started )
    const jobData             = cloneDeep( data[0].job )

    const jobStartedData = {
      autoLoaded:      jobStartedEventData.autoLoaded,
      deliveryTime:    jobData.deliveryTime,
      plannedDistance: jobData.plannedDistance,
      cargo:           jobData.cargo,
      isSpecial:       jobData.isSpecial,
      source:          jobData.source,
      destination:     jobData.destination,
      market:          jobData.market,
      income:          jobData.income,
    }

    telemetry.job.emit( "started", jobStartedData )
  }

  // Job cancelled
  if ( data[0]?.events?.job.cancelled.active && !data[1]?.events?.job.cancelled.active ) {
    const jobCancelledEventData = cloneDeep( data[0].events.job.cancelled )
    const jobData               = cloneDeep( data[1].job )

    const jobCancelledData = {
      penalty:         jobCancelledEventData.penalty,
      startingTime:    jobCancelledEventData.startingTime,
      finishingTime:   jobCancelledEventData.finishingTime,
      deliveryTime:    jobData.deliveryTime,
      plannedDistance: jobData.plannedDistance,
      cargo:           jobData.cargo,
      isSpecial:       jobData.isSpecial,
      source:          jobData.source,
      destination:     jobData.destination,
      market:          jobData.market,
      income:          0,
    }
    
    telemetry.job.emit( "cancelled", jobCancelledData )
  }

  // Job delivered
  if ( data[0]?.events?.job.delivered.active && !data[1]?.events?.job.delivered.active ) {
    const jobDeliveredEventData = cloneDeep( data[0].events.job.delivered )
    const jobData               = cloneDeep( data[1].job )

    const jobDeliveredData = {
      deliveryTime:    jobDeliveredEventData.deliveryTime,
      startingTime:    jobDeliveredEventData.startingTime,
      finishingTime:   jobDeliveredEventData.finishingTime,
      earnedXP:        jobDeliveredEventData.earnedXP,
      cargoDamage:     jobDeliveredEventData.cargoDamage,
      distance:        jobDeliveredEventData.distance,
      autoParked:      jobDeliveredEventData.autoParked,
      revenue:         jobDeliveredEventData.revenue,
      plannedDistance: jobData.plannedDistance,
      cargo:           jobData.cargo,
      isSpecial:       jobData.isSpecial,
      source:          jobData.source,
      destination:     jobData.destination,
      market:          jobData.market,
    }

    telemetry.job.emit( "delivered", jobDeliveredData )
  }

}