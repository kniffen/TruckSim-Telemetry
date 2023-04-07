const cloneDeep = require('lodash.clonedeep')

const tst = require('..')

const testBuffers = require('../../test-buffers')
const { converter } = require('../converter')
const getDataMock = require('../functions/getData')
const parser = require('../parser/parseData.js')

jest.mock('../functions/getData', () => jest.fn())

describe('eventEmitters/navigation()', function() {
  const telemetry = tst()
  let testData = null

  beforeAll(function() {
    jest.useFakeTimers()
    jest.spyOn(telemetry.navigation, 'emit')

    getDataMock.mockImplementation(() => cloneDeep(testData))
  })

  beforeEach(function() {
    const version = 12
    testData = parser(converter(version, testBuffers[version]))
  })

  afterEach(function() {
    telemetry.navigation.emit.mockReset()
  })

  afterAll(function() {
    jest.restoreAllMocks()
    jest.useRealTimers()
  })
 
  it('Should emit speed-limit events', function() {
    testData.navigation.speedLimit.value = 0

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.navigation.speedLimit.value = 60
    jest.advanceTimersByTime(100)
    testData.navigation.speedLimit.value = 0
    jest.advanceTimersByTime(100)
    testData.navigation.speedLimit.value = 60
    jest.advanceTimersByTime(100)
    testData.navigation.speedLimit.value = 100
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.navigation.emit).toHaveBeenCalledTimes(4)

    expect(telemetry.navigation.emit).toHaveBeenNthCalledWith(
      1, 'speed-limit', {value: 60, kph: 80, mph: 50}, {value:  0, kph: 80, mph: 50}
    )
    expect(telemetry.navigation.emit).toHaveBeenNthCalledWith(
      2, 'speed-limit', {value:  0, kph: 80, mph: 50}, {value: 60, kph: 80, mph: 50}
    )
    expect(telemetry.navigation.emit).toHaveBeenNthCalledWith(
      3, 'speed-limit', {value: 60, kph: 80, mph: 50}, {value:  0, kph: 80, mph: 50}
    )
    expect(telemetry.navigation.emit).toHaveBeenNthCalledWith(
      4, 'speed-limit', {value: 100, kph: 80, mph: 50}, {value: 60, kph: 80, mph: 50}
    )
  })
})