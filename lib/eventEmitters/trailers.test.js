const cloneDeep = require('lodash.clonedeep')

const tst = require('..')

const testBuffers = require('../../test-buffers')
const { converter } = require('../converter')
const getDataMock = require('../functions/getData')
const parser = require('../parser/parseData.js')

jest.mock('../functions/getData', () => jest.fn())

describe('eventEmitters/trailers()', function() {
  const telemetry = tst()
  let testData = null

  beforeAll(function() {
    jest.useFakeTimers()
    jest.spyOn(telemetry.trailers, 'emit')
    jest.spyOn(telemetry.trailer, 'emit')

    getDataMock.mockImplementation(() => cloneDeep(testData))
  })

  beforeEach(function() {
    const version = 12
    testData = parser(converter(version, testBuffers[version]))
  })

  afterEach(function() {
    telemetry.trailers.emit.mockReset()
    telemetry.trailer.emit.mockReset()
  })

  afterAll(function() {
    jest.restoreAllMocks()
    jest.useRealTimers()
  })

  it('Should emit "coupling" events', function() {
    testData.trailers[0].attached = false
    testData.trailers[1].attached = true

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.trailers[0].attached = true
    testData.trailers[1].attached = false
    jest.advanceTimersByTime(100)
    testData.trailers[0].attached = true
    testData.trailers[1].attached = false
    jest.advanceTimersByTime(100)
    testData.trailers[0].attached = false
    testData.trailers[1].attached = true
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.trailers.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.trailers.emit).toHaveBeenNthCalledWith(1, 'coupling', 0, true)
    expect(telemetry.trailers.emit).toHaveBeenNthCalledWith(2, 'coupling', 1, false)
    expect(telemetry.trailers.emit).toHaveBeenNthCalledWith(3, 'coupling', 0, false)
    expect(telemetry.trailers.emit).toHaveBeenNthCalledWith(4, 'coupling', 1, true)

    expect(telemetry.trailer.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.trailer.emit).toHaveBeenNthCalledWith(1, 'coupling', true)
    expect(telemetry.trailer.emit).toHaveBeenNthCalledWith(2, 'coupling', false)
  })

  it('Should emit "damage" events', function() {
    testData.trailers[0].damage.total = 0.00
    testData.trailers[1].damage.total = 0.01

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.trailers[0].damage.total = 0.01
    testData.trailers[1].damage.total = 0.02
    jest.advanceTimersByTime(100)
    testData.trailers[0].damage.total = 0.00
    testData.trailers[1].damage.total = 0.00
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      cargo:   0.20000000298023224,
      chassis: 0.30000001192092896,
      wheels:  0.4000000059604645,
      body:    0.5,
      total:   0.00
    }

    expect(telemetry.trailers.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.trailers.emit).toHaveBeenNthCalledWith(
      1, 'damage', 0, {...expected, total: 0.01}, expected
    )
    expect(telemetry.trailers.emit).toHaveBeenNthCalledWith(
      2, 'damage', 1, {...expected, total: 0.02}, {...expected, total: 0.01}
    )

    expect(telemetry.trailer.emit).toHaveBeenCalledTimes(1)
    expect(telemetry.trailer.emit).toHaveBeenNthCalledWith(1, 'damage', {...expected, total: 0.01}, expected)
  })

})
