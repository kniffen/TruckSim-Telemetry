import type { TruckSimTelemetry } from '../truckSimTelemetry';
import type { SCSSDKTelemetry } from '../types';

export const handleGameEvents = function(tst: TruckSimTelemetry): void {
  const { current, previous } = tst.data;

  if (current.paused !== previous.paused) {
    tst.emit('pause', current.paused);
  }

  if (current.timeAbs !== previous.timeAbs) {
    tst.emit('time', current.timeAbs);
  }

  if (current.fined !== previous.fined) {
    tst.emit('fine', {
      fineOffence: current.fineOffence,
      fineAmount:  current.fineAmount
    } satisfies TSTFineEvent);
  }

  if (current.refuelPayed !== previous.refuelPayed) {
    tst.emit('refuel-paid', {
      refuelAmount: current.refuelAmount
    } satisfies TSTRefuelPaidEvent);
  }

  if (current.tollgate !== previous.tollgate) {
    tst.emit('tollgate', {
      tollgatePayAmount: current.tollgatePayAmount
    } satisfies TSTTollgateEvent);
  }

  if (current.ferry !== previous.ferry) {
    tst.emit('ferry', {
      ferrySourceId:   current.ferrySourceId,
      ferrySourceName: current.ferrySourceName,
      ferryTargetName: current.ferryTargetName,
      ferryTargetId:   current.ferryTargetId,
      ferryPayAmount:  current.ferryPayAmount
    } satisfies TSTFerryEvent);
  }

  if (current.train !== previous.train) {
    tst.emit('train', {
      trainSourceId:   current.trainSourceId,
      trainSourceName: current.trainSourceName,
      trainTargetName: current.trainTargetName,
      trainTargetId:   current.trainTargetId,
      trainPayAmount:  current.trainPayAmount
    } satisfies TSTTrainEvent);
  }
};

export interface TSTFineEvent extends Pick<
  SCSSDKTelemetry,
  | 'fineOffence'
  | 'fineAmount'
> {}

export interface TSTRefuelPaidEvent extends Pick<
  SCSSDKTelemetry,
  | 'refuelAmount'
> {}

export interface TSTTollgateEvent extends Pick<
  SCSSDKTelemetry,
  | 'tollgatePayAmount'
> {}

export interface TSTFerryEvent extends Pick<
  SCSSDKTelemetry,
  | 'ferrySourceId'
  | 'ferrySourceName'
  | 'ferryTargetId'
  | 'ferryTargetName'
  | 'ferryPayAmount'
> {}

export interface TSTTrainEvent extends Pick<
  SCSSDKTelemetry,
  | 'trainSourceId'
  | 'trainSourceName'
  | 'trainTargetId'
  | 'trainTargetName'
  | 'trainPayAmount'
> {}

