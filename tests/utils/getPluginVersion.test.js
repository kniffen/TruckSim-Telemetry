const getPluginVersion = require('../../lib/utils/getPluginVersion')
const testBuffers = require('../testBuffers')

describe('utils.getPluginVersion()', function() {
  
  it('Should get the plugin version from buffers', function() {
    expect(getPluginVersion(testBuffers[10])).toEqual(10)
    expect(getPluginVersion(testBuffers[11])).toEqual(11)
    expect(getPluginVersion(testBuffers[12])).toEqual(12)
  })

  it('Should return -1 if it can\'t find the version', function() {
    const buffer = new Buffer.alloc(0)

    expect(getPluginVersion(buffer)).toEqual(-1)
    expect(getPluginVersion(null)).toEqual(-1)
  })

})