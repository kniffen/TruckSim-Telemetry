import type { TruckSimTelemetry } from '../truckSimTelemetry';
import type { SCSSDKTelemetry, TSTJobCancelledEvent, TSTJobDeliveredEvent, TSTJobStartedEvent } from '../types';
import { handleJobEvents } from './handleJobEvents';

describe('handleJobEvents()', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    tst.data.previous.onJob        = false;
    tst.data.previous.jobDelivered = false;
    tst.data.previous.jobFinished  = false;
    tst.data.previous.jobCancelled = false;

    tst.data.current.onJob        = false;
    tst.data.current.jobDelivered = false;
    tst.data.current.jobFinished  = false;
    tst.data.current.jobCancelled = false;
  });

  test('It should trigger job-started events', () => {
    tst.data.current.onJob = true;

    handleJobEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('job-started', {
      cargo:             'Cargo',
      cargoId:           '123',
      cargoMass:         20_000,
      cityDst:           'City A',
      cityDstId:         'city_a',
      citySrc:           'City B',
      citySrcId:         'city_b',
      compDst:           'Company A',
      compDstId:         'comp_a',
      compSrc:           'Company B',
      compSrcId:         'comp_b',
      jobIncome:         5_000n,
      jobMarket:         'Domestic',
      jobStartingTime:   1_620_000_000,
      plannedDistanceKm: 300,
      specialJob:        false,
      timeAbsDelivery:   1_620_003_600,
      unitCount:         1,
      unitMass:          20_000,
    } satisfies TSTJobStartedEvent);
  });

  test('It should trigger job-delivered events', () => {
    tst.data.current.jobDelivered = true;

    handleJobEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('job-delivered', {
      cargo:                    'Cargo 2',
      cargoId:                  '456',
      cargoMass:                30_000,
      cityDst:                  'City C',
      cityDstId:                'city_c',
      citySrc:                  'City D',
      citySrcId:                'city_d',
      compDst:                  'Company C',
      compDstId:                'comp_c',
      compSrc:                  'Company D',
      compSrcId:                'comp_d',
      jobDeliveredAutoloadUsed: true,
      jobDeliveredAutoparkUsed: false,
      jobDeliveredCargoDamage:  0,
      jobDeliveredDeliveryTime: 3_600,
      jobDeliveredDistanceKm:   300,
      jobDeliveredEarnedXp:     150,
      jobDeliveredRevenue:      6_000n,
      jobFinishedTime:          1_620_003_600,
      jobMarket:                'International',
      jobStartingTime:          1_621_000_000,
      plannedDistanceKm:        400,
      specialJob:               true,
      timeAbsDelivery:          1_621_003_600,
      unitCount:                2,
      unitMass:                 40_000,
    } satisfies TSTJobDeliveredEvent);
  });

  test('It should trigger job-finished events', () => {
    tst.data.current.jobFinished = true;

    handleJobEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('job-finished');
  });

  test('It should trigger job-cancelled events', () => {
    tst.data.current.jobCancelled = true;

    handleJobEvents(tst);

    expect(tst.emit).toHaveBeenCalledTimes(1);
    expect(tst.emit).toHaveBeenCalledWith('job-cancelled', {
      cargo:               'Cargo 2',
      cargoId:             '456',
      cargoMass:           30_000,
      cityDst:             'City C',
      cityDstId:           'city_c',
      citySrc:             'City D',
      citySrcId:           'city_d',
      compDst:             'Company C',
      compDstId:           'comp_c',
      compSrc:             'Company D',
      compSrcId:           'comp_d',
      jobCancelledPenalty: 1_000n,
      jobMarket:           'International',
      jobStartingTime:     1_621_000_000,
      plannedDistanceKm:   400,
      specialJob:          true,
      unitCount:           2,
      unitMass:            40_000,
    } satisfies TSTJobCancelledEvent);
  });

  test('It should not emit eny events if there are no changes', () => {
    handleJobEvents(tst);

    expect(tst.emit).not.toHaveBeenCalled();
  });
});

const currentDataMock = {
  cargo:                    'Cargo',
  cargoId:                  '123',
  cargoMass:                20_000,
  cityDst:                  'City A',
  cityDstId:                'city_a',
  citySrc:                  'City B',
  citySrcId:                'city_b',
  compDst:                  'Company A',
  compDstId:                'comp_a',
  compSrc:                  'Company B',
  compSrcId:                'comp_b',
  jobCancelledPenalty:      1_000n,
  jobDeliveredAutoloadUsed: true,
  jobDeliveredAutoparkUsed: false,
  jobDeliveredCargoDamage:  0,
  jobDeliveredDeliveryTime: 3_600,
  jobDeliveredDistanceKm:   300,
  jobDeliveredEarnedXp:     150,
  jobDeliveredRevenue:      6_000n,
  jobFinishedTime:          1_620_003_600,
  jobIncome:                5_000n,
  jobMarket:                'Domestic',
  jobStartingTime:          1_620_000_000,
  plannedDistanceKm:        300,
  specialJob:               false,
  timeAbsDelivery:          1_620_003_600,
  unitCount:                1,
  unitMass:                 20_000,
} satisfies Partial<SCSSDKTelemetry>;

const previousDataMock = {
  cargo:             'Cargo 2',
  cargoId:           '456',
  cargoMass:         30_000,
  cityDst:           'City C',
  cityDstId:         'city_c',
  citySrc:           'City D',
  citySrcId:         'city_d',
  compDst:           'Company C',
  compDstId:         'comp_c',
  compSrc:           'Company D',
  compSrcId:         'comp_d',
  jobMarket:         'International',
  jobStartingTime:   1_621_000_000,
  plannedDistanceKm: 400,
  specialJob:        true,
  timeAbsDelivery:   1_621_003_600,
  unitCount:         2,
  unitMass:          40_000,
} satisfies Partial<SCSSDKTelemetry>;

const tst = {
  data: {
    current:  currentDataMock,
    previous: previousDataMock,
  },
  emit: jest.fn(),
} as unknown as TruckSimTelemetry;