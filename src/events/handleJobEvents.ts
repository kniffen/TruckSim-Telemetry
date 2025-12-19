import type { TruckSimTelemetry } from '../truckSimTelemetry';
import type { SCSSDKTelemetry } from '../types';

export const handleJobEvents = function(tst: TruckSimTelemetry): void {
  const { current, previous } = tst.data;

  if (current.onJob && !previous.onJob) {
    tst.emit('job-started', {
      cargo:             current.cargo,
      cargoId:           current.cargoId,
      cargoMass:         current.cargoMass,
      cityDst:           current.cityDst,
      cityDstId:         current.cityDstId,
      citySrc:           current.citySrc,
      citySrcId:         current.citySrcId,
      compDst:           current.compDst,
      compDstId:         current.compDstId,
      compSrc:           current.compSrc,
      compSrcId:         current.compSrcId,
      jobIncome:         current.jobIncome,
      jobMarket:         current.jobMarket,
      jobStartingTime:   current.jobStartingTime,
      plannedDistanceKm: current.plannedDistanceKm,
      specialJob:        current.specialJob,
      timeAbsDelivery:   current.timeAbsDelivery,
      unitCount:         current.unitCount,
      unitMass:          current.unitMass,
    } satisfies TSTJobStartedEvent);
  }

  if (current.jobDelivered !== previous.jobDelivered) {
    tst.emit('job-delivered', {
      cargo:                    previous.cargo,
      cargoId:                  previous.cargoId,
      cargoMass:                previous.cargoMass,
      cityDst:                  previous.cityDst,
      cityDstId:                previous.cityDstId,
      citySrc:                  previous.citySrc,
      citySrcId:                previous.citySrcId,
      compDst:                  previous.compDst,
      compDstId:                previous.compDstId,
      compSrc:                  previous.compSrc,
      compSrcId:                previous.compSrcId,
      jobDeliveredAutoloadUsed: current.jobDeliveredAutoloadUsed,
      jobDeliveredAutoparkUsed: current.jobDeliveredAutoparkUsed,
      jobDeliveredCargoDamage:  current.jobDeliveredCargoDamage,
      jobDeliveredDeliveryTime: current.jobDeliveredDeliveryTime,
      jobDeliveredDistanceKm:   current.jobDeliveredDistanceKm,
      jobDeliveredEarnedXp:     current.jobDeliveredEarnedXp,
      jobDeliveredRevenue:      current.jobDeliveredRevenue,
      jobFinishedTime:          current.jobFinishedTime,
      jobMarket:                previous.jobMarket,
      jobStartingTime:          previous.jobStartingTime,
      plannedDistanceKm:        previous.plannedDistanceKm,
      specialJob:               previous.specialJob,
      timeAbsDelivery:          previous.timeAbsDelivery,
      unitCount:                previous.unitCount,
      unitMass:                 previous.unitMass,
    } satisfies TSTJobDeliveredEvent);
  }

  if (current.jobFinished !== previous.jobFinished) {
    tst.emit('job-finished');
  }

  if (current.jobCancelled !== previous.jobCancelled) {
    tst.emit('job-cancelled', {
      cargo:               previous.cargo,
      cargoId:             previous.cargoId,
      cargoMass:           previous.cargoMass,
      cityDst:             previous.cityDst,
      cityDstId:           previous.cityDstId,
      citySrc:             previous.citySrc,
      citySrcId:           previous.citySrcId,
      compDst:             previous.compDst,
      compDstId:           previous.compDstId,
      compSrc:             previous.compSrc,
      compSrcId:           previous.compSrcId,
      jobCancelledPenalty: current.jobCancelledPenalty,
      jobMarket:           previous.jobMarket,
      jobStartingTime:     previous.jobStartingTime,
      plannedDistanceKm:   previous.plannedDistanceKm,
      specialJob:          previous.specialJob,
      unitCount:           previous.unitCount,
      unitMass:            previous.unitMass,
    } satisfies TSTJobCancelledEvent);
  }
};


export interface TSTJobStartedEvent extends Pick<
  SCSSDKTelemetry,
  | 'cargo'
  | 'cargoId'
  | 'cargoMass'
  | 'cityDst'
  | 'cityDstId'
  | 'citySrc'
  | 'citySrcId'
  | 'compDst'
  | 'compDstId'
  | 'compSrc'
  | 'compSrcId'
  | 'jobIncome'
  | 'jobMarket'
  | 'jobStartingTime'
  | 'plannedDistanceKm'
  | 'specialJob'
  | 'timeAbsDelivery'
  | 'unitCount'
  | 'unitMass'
> {}

export interface TSTJobDeliveredEvent extends Pick<
  SCSSDKTelemetry,
  | 'cargo'
  | 'cargoId'
  | 'cargoMass'
  | 'cityDst'
  | 'cityDstId'
  | 'citySrc'
  | 'citySrcId'
  | 'compDst'
  | 'compDstId'
  | 'compSrc'
  | 'compSrcId'
  | 'jobDeliveredAutoloadUsed'
  | 'jobDeliveredAutoparkUsed'
  | 'jobDeliveredCargoDamage'
  | 'jobDeliveredDeliveryTime'
  | 'jobDeliveredDistanceKm'
  | 'jobDeliveredEarnedXp'
  | 'jobDeliveredRevenue'
  | 'jobFinishedTime'
  | 'jobMarket'
  | 'jobStartingTime'
  | 'plannedDistanceKm'
  | 'specialJob'
  | 'timeAbsDelivery'
  | 'unitCount'
  | 'unitMass'
> {}


export interface TSTJobCancelledEvent extends Pick<
  SCSSDKTelemetry,
  | 'unitCount'
  | 'cargoMass'
  | 'cargo'
  | 'cargoId'
  | 'cityDst'
  | 'cityDstId'
  | 'citySrc'
  | 'citySrcId'
  | 'compDst'
  | 'compDstId'
  | 'compSrc'
  | 'compSrcId'
  | 'jobCancelledPenalty'
  | 'jobMarket'
  | 'jobStartingTime'
  | 'plannedDistanceKm'
  | 'specialJob'
  | 'unitMass'
> {}