const getData = require('./getData.js')
const getPluginVersionMock = require('../utils/getPluginVersion.js')
const getBufferMock = require('../utils/getBuffer.js')
const testBuffers = require('../../test-buffers')

jest.mock('../utils/getPluginVersion.js', () => jest.fn())
jest.mock('../utils/getBuffer.js', () => jest.fn())

describe('functions.getData()', function() {
  const opts = {
    mmfName: 'foobar'
  }

  beforeEach(function() {
    getPluginVersionMock.mockReturnValue(12)
    getBufferMock.mockReturnValue(testBuffers[12])
  })

  afterAll(function() {
    jest.restoreAllMocks()
  })

  it('Should get parsed data from supported SDK versions', function() {
    getPluginVersionMock.mockReturnValue(10)
    getBufferMock.mockReturnValue(testBuffers[10])
    expect(getData(null, opts)).toBeTruthy()

    getPluginVersionMock.mockReturnValue(11)
    getBufferMock.mockReturnValue(testBuffers[11])
    expect(getData(null, opts)).toBeTruthy()

    getPluginVersionMock.mockReturnValue(12)
    getBufferMock.mockReturnValue(testBuffers[12])
    expect(getData(null, opts)).toBeTruthy()
  })

  it('Should return data for a specified property', function() {
    const data = getData(null, opts)
    const gameData = getData('game', opts)

    expect(data).not.toEqual(gameData)
    expect(gameData).toEqual(data.game)
  })

  it('Should throw an error for unsupported SDK versions', function() {
    getPluginVersionMock.mockReturnValue(99)
    expect(() => {
      getData(null, opts)
    }).toThrow('SCS-SDK-Plugin version 99 is not supported')
  })

  it('Should return "null" if version number is 0 or less than 0', function() {
    getPluginVersionMock.mockReturnValue(0)
    expect(getData(null, opts)).toEqual(null)

    getPluginVersionMock.mockReturnValue(-1)
    expect(getData(null, opts)).toEqual(null)
  })

  it('Should return "null" if there is no buffer', function() {
    getBufferMock.mockReturnValue(null)
    expect(getData(null, opts)).toEqual(null)
  })

})