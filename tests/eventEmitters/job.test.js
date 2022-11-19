const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const testBuffers = require('../testBuffers')
const { converter } = require('../../lib/converter')
const getDataMock = require('../../lib/functions/getData')
const parser = require('../../lib/parser/parseData.js')

jest.mock('../../lib/functions/getData', () => jest.fn())

describe('eventEmitters/job()', function() {
  const telemetry = tst()
  let testData = null

  beforeAll(function() {
    jest.useFakeTimers()
    jest.spyOn(telemetry.job, 'emit')

    getDataMock.mockImplementation(() => cloneDeep(testData))
  })

  beforeEach(function() {
    const version = 12
    testData = parser(converter(version, testBuffers[version]))
  })

  afterEach(function() {
    telemetry.job.emit.mockReset()
  })

  afterAll(function() {
    jest.restoreAllMocks()
    jest.useRealTimers()
  })

  it('Should emit "finished" events', function() {
    testData.events.job.finished.active = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.events.job.finished.active  = true
    jest.advanceTimersByTime(100)
    testData.events.job.finished.active  = false
    jest.advanceTimersByTime(100)
    testData.events.job.finished.active  = true
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.job.emit).toHaveBeenCalledTimes(3)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(1, 'finished')
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(2, 'finished')
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(3, 'finished')
  })
  
  it('Should emit "started" events', function() {
    testData.events.job.started.active = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.events.job.started.active  = true
    jest.advanceTimersByTime(100)
    testData.events.job.started.active  = false
    jest.advanceTimersByTime(100)
    testData.events.job.started.active  = true
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      autoLoaded: true,
      isSpecial: true,
      income: 957530112,
      expectedDeliveryTimestamp: {
        value: 120,
        unix: 352800000
      },
      plannedDistance: {
        km: 100,
        miles: 62
      },
      market: {
        id: 'job_market',
        name: 'Job Market',
      },
      source: {
        city: {id: 'citySrcId', name: 'citySrc'},
        company: {id: 'compSrcId', name: 'compSrc'},
      },
      destination: {
        city: {id: 'cityDstId', name: 'cityDst'},
        company: {id: 'compDstId', name: 'compDst'},
      },
      cargo: {
        damage: 0.30000001192092896,
        id: "cargoId",
        isLoaded: true,
        mass: 20000.599609375,
        name: "cargo",
        unitMass: 645.5999755859375,
      },
    }

    expect(telemetry.job.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(1, 'started', expected)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(2, 'started', expected)
  })
  
  it('Should emit "cancelled" events', function() {
    testData.events.job.cancelled.active = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.events.job.cancelled.active  = true
    jest.advanceTimersByTime(100)
    testData.events.job.cancelled.active  = false
    jest.advanceTimersByTime(100)
    testData.events.job.cancelled.active  = true
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      isSpecial: true,
      income: 0,
      penalty: 1000000000000000,
      startedTimestamp: {
        value: 230,
        unix: 359400000
      },
      cancelledTimestamp: {
        value: 310,
        unix: 364200000
      },
      expectedDeliveryTimestamp: {
        value: 120,
        unix: 352800000
      },
      plannedDistance: {
        km: 100,
        miles: 62
      },
      market: {
        id: 'job_market',
        name: 'Job Market',
      },
      source: {
        city: {id: 'citySrcId', name: 'citySrc'},
        company: {id: 'compSrcId', name: 'compSrc'},
      },
      destination: {
        city: {id: 'cityDstId', name: 'cityDst'},
        company: {id: 'compDstId', name: 'compDst'},
      },
      cargo: {
        damage: 0.30000001192092896,
        id: "cargoId",
        isLoaded: true,
        mass: 20000.599609375,
        name: "cargo",
        unitMass: 645.5999755859375,
      },
    }

    expect(telemetry.job.emit).toHaveBeenCalledTimes(3)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(1, 'cancelled', expected)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(2, 'cancelled', expected)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(3, 'cancelled', expected)
  })

  it('Should emit "delivered" events', function() {
    testData.events.job.delivered.active = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.events.job.delivered.active  = true
    jest.advanceTimersByTime(100)
    testData.events.job.delivered.active  = false
    jest.advanceTimersByTime(100)
    testData.events.job.delivered.active  = true
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      autoParked: true,
      isSpecial: true,
      revenue: 1100000000000000,
      earnedXP: 50,
      timeTaken: 10800000,
      cargoDamage: 0.6000000238418579,
      distance: {
        km: 1500.0999755859375,
        miles: 932.1189103050235
      },
      startedTimestamp: {
        value: 230,
        unix: 359400000
      },
      deliveredTimestamp: {
        value: 310,
        unix: 364200000
      },
      expectedDeliveryTimestamp: {
        value: 120,
        unix: 352800000
      },
      plannedDistance: {
        km: 100,
        miles: 62
      },
      market: {
        id: 'job_market',
        name: 'Job Market',
      },
      source: {
        city: {id: 'citySrcId', name: 'citySrc'},
        company: {id: 'compSrcId', name: 'compSrc'},
      },
      destination: {
        city: {id: 'cityDstId', name: 'cityDst'},
        company: {id: 'compDstId', name: 'compDst'},
      },
      cargo: {
        damage: 0.30000001192092896,
        id: "cargoId",
        isLoaded: true,
        mass: 20000.599609375,
        name: "cargo",
        unitMass: 645.5999755859375,
      },
    }

    expect(telemetry.job.emit).toHaveBeenCalledTimes(3)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(1, 'delivered', expected)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(2, 'delivered', expected)
    expect(telemetry.job.emit).toHaveBeenNthCalledWith(3, 'delivered', expected)
  })
})
