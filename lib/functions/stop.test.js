const getBufferMock = require('../utils/getBuffer.js')
const tst = require('..')
const testBuffers = require('../../test-buffers')

jest.mock('../utils/getBuffer.js', () => jest.fn())

describe('functions.stop()', function() {
  const testBuffer = Buffer.from(testBuffers[12])

  beforeAll(function() {
    jest.useFakeTimers()
    getBufferMock.mockReturnValue(testBuffer)
  })

  afterAll(function() {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  it('should actually stop and start the watcher', function() {
    const telemetry = tst()
    let count = 0
  
    const callback = jest.fn((data) => {
      if (9 <= count) telemetry.stop()
      count++
    })
    
    telemetry.watch({interval: 10}, callback)

    for (let i = 0; i < 20; i++) {
      testBuffer.writeUInt8(i % 2)
      jest.advanceTimersByTime(10)
    }

    expect(callback).toHaveBeenCalledTimes(10)

    count = 0
    callback.mockClear()

    telemetry.watch({interval: 10}, callback)
    telemetry.watch({interval: 10}, callback)

    for (let i = 0; i < 5; i++) {
      testBuffer.writeUInt8(i % 2)
      jest.advanceTimersByTime(10)
    }

    telemetry.stop()
    
    jest.advanceTimersByTime(200)

    expect(callback).toHaveBeenCalledTimes(5)
  })

})