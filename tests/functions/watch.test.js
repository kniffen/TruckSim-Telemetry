const tst = require('../../lib')
const { converter } = require('../../lib/converter')
const parseData = require('../../lib/parser/parseData')
const functions = require('../../lib/functions')
const getBufferMock = require('../../lib/utils/getBuffer')
const testBuffers = require('../testBuffers')

jest.mock('../../lib/utils/getBuffer', () => jest.fn())

describe('watch()', function() {
  let testBuffer = null
  const version = 12
  const getDataSpy = jest.spyOn(functions, 'getData')

  beforeAll(function() {
    jest.useFakeTimers()
    getBufferMock.mockImplementation(() => testBuffer)
  })

  beforeEach(function() {
    testBuffer = Buffer.from(testBuffers[version])
  })

  afterAll(function() {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  it('Should ensure the opts object exists and the interval property is 100ms or more', function() {
    const telemetry = tst()
    const update = jest.fn()

    const testCases = [
      {opts: undefined,            ticks: 100},
      {opts: null,                 ticks: 100},
      {opts: {},                   ticks: 100},
      {opts: 'foo',                ticks: 100},
      {opts: 200,                  ticks: 100},
      {opts: true,                 ticks: 100},
      {opts: [],                   ticks: 100},
      {opts: {interval: 200},      ticks: 200},
      {opts: {interval: '200'},    ticks: 200},
      {opts: {interval: 1},        ticks: 10}, 
      {opts: {interval: 'foobar'}, ticks: 100},
    ]

    for (const { opts, ticks } of testCases) {
      jest.setSystemTime(0)
      telemetry.watch(opts, update)
      jest.advanceTimersByTime(ticks)
      telemetry.stop()
    }

    for (let i = 1; i <= testCases.length; i++) {
      expect(getDataSpy).toHaveBeenNthCalledWith(i, null, {mmfName: 'Local\\SCSTelemetry'})
    }

    expect(update).toHaveBeenCalledTimes(0)
  })

  it('Should emit a connected and disconnected events when the SDK toggles', function() {
    const telemetry = tst()
    const gameEventSpy = jest.spyOn(telemetry.game, 'emit')

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testBuffer.writeUInt8(1, 0) // sskActive: true
    jest.advanceTimersByTime(1000)
    testBuffer.writeUInt8(0, 0) // sskActive: false
    jest.advanceTimersByTime(1000)
    testBuffer.writeUInt8(1, 0) // sskActive: true
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(gameEventSpy).toHaveBeenCalledTimes(3)
    expect(gameEventSpy).toHaveBeenNthCalledWith(1, 'connected')
    expect(gameEventSpy).toHaveBeenNthCalledWith(2, 'disconnected')
    expect(gameEventSpy).toHaveBeenNthCalledWith(3, 'connected')
  })

  it('Should quit early if a watcher already exists', function() {
    const telemetry = tst()
    const update = jest.fn()

    testBuffer.writeUInt8(1, 0) // sskActive: true
    testBuffer.writeUInt8(0, 4) // paused: false

    telemetry.watch(null, update)
    telemetry.watch(null, update)
    jest.advanceTimersByTime(500)
    testBuffer.writeUInt8(1, 4) // paused: true
    telemetry.watch(null, update)
    jest.advanceTimersByTime(500)
    testBuffer.writeUInt8(0, 4) // paused: false
    jest.advanceTimersByTime(500)
    telemetry.stop()
    jest.advanceTimersByTime(500)

    expect(update).toHaveBeenCalledTimes(2)
  })

  it('What happens in the update callback should not affect the data in event emitters', function() {
    const telemetry = tst()
    const gameEmitSpy = jest.spyOn(telemetry.game, 'emit')

    testBuffer.writeUInt8(0, 0) // sskActive: false
    testBuffer.writeUInt32LE(0, 64) // time_abs: 0

    telemetry.watch(null, function(data) {
      data.game.time.foo = 'foobar'
    })

    jest.advanceTimersByTime(100)
    testBuffer.writeUInt32LE(1, 64) // time_abs: 1
    jest.advanceTimersByTime(100)
    testBuffer.writeUInt32LE(2, 64) // time_abs: 2
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(gameEmitSpy).toHaveBeenCalledTimes(2)

    expect(gameEmitSpy).toHaveBeenNthCalledWith(
      1,
      'time-change',
      {value: 1, unix: 345660000},
      {value: 0, unix: 345600000}
    )

    expect(gameEmitSpy).toHaveBeenNthCalledWith(
      2,
      'time-change',
      {value: 2, unix: 345720000},
      {value: 1, unix: 345660000}
    )
  })

  it('What happens in event emitters should not affect the data in the update callback', function() {
    const telemetry = tst()
    const updateSpy = jest.fn()
    const testData = parseData(converter(version, testBuffer))

    testBuffer.writeUInt32LE(0, 64) // time_abs: 0

    telemetry.game.on('time-change', (a, b) => {
      a.bar = 'baz'
      b.baz = 'qux'
    })

    telemetry.watch(null, updateSpy)

    jest.advanceTimersByTime(100)
    testBuffer.writeUInt32LE(1, 64) // time_abs: 1
    jest.advanceTimersByTime(100)
    testBuffer.writeUInt32LE(2, 64) // time_abs: 2
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(updateSpy).toHaveBeenCalledTimes(2)

    expect(updateSpy).toHaveBeenNthCalledWith(
      1,
      {
        ...testData,
        game: {
          ...testData.game,
          time: {
            value: 1,
            unix: 345660000
          }
        }
      }
    )

    expect(updateSpy).toHaveBeenNthCalledWith(
      2,
      {
        ...testData,
        game: {
          ...testData.game,
          time: {
            value: 2,
            unix: 345720000
          }
        }
      }
    )
  })
})