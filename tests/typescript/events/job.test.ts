import tst from 'trucksim-telemetry'

// types
import {
  JobStartedEventData,
  JobCancelledEventData,
  JobDeliveredEventData,
} from 'trucksim-telemetry'

const telemetry = tst()

// Job finished event
function jobFinishedCallback() {}

telemetry.job.addListener('finished', jobFinishedCallback)
telemetry.job.on('finished', jobFinishedCallback)
telemetry.job.once('finished', jobFinishedCallback)
telemetry.job.prependListener('finished', jobFinishedCallback)
telemetry.job.prependOnceListener('finished', jobFinishedCallback)

// Job started event
function jobStartedCallback(data: JobStartedEventData) {}

telemetry.job.addListener('started', jobStartedCallback)
telemetry.job.on('started', jobStartedCallback)
telemetry.job.once('started', jobStartedCallback)
telemetry.job.prependListener('started', jobStartedCallback)
telemetry.job.prependOnceListener('started', jobStartedCallback)

// Job cancelled event
function jobCancelledCallback(data: JobCancelledEventData) {}

telemetry.job.addListener('cancelled', jobCancelledCallback)
telemetry.job.on('cancelled', jobCancelledCallback)
telemetry.job.once('cancelled', jobCancelledCallback)
telemetry.job.prependListener('cancelled', jobCancelledCallback)
telemetry.job.prependOnceListener('cancelled', jobCancelledCallback)

// Job delivered event
function jobDeliveredCallback(data: JobDeliveredEventData) {}

telemetry.job.addListener('delivered', jobDeliveredCallback)
telemetry.job.on('delivered', jobDeliveredCallback)
telemetry.job.once('delivered', jobDeliveredCallback)
telemetry.job.prependListener('delivered', jobDeliveredCallback)
telemetry.job.prependOnceListener('delivered', jobDeliveredCallback)