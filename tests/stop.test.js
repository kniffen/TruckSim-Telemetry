const assert = require('assert')
const sinon = require('sinon')

const tst = require('../lib')

const getData = require('../lib/getData')

describe('stop()', function() {

  let clock = null

  const testData = {
    game:       {},
    events:     {},
    navigation: {},
    trailers:   [],
  }

  before(function() {
    clock = sinon.useFakeTimers();

    sinon.stub(getData, 'default').callsFake(() => testData)
  })

  after(function() {
    clock.restore()
    sinon.restore()
  })

  it('should actually stop and start the watcher', function() {
    const telemetry = tst()
    let count = 0
    
    function callback() {
      count++
      if (count == 11) {
        telemetry.stop()
      }
    }
    
    telemetry.watch({interval: 10}, callback)
    clock.tick(200)

    assert.strictEqual(count, 11)

    count = 0
    telemetry.watch({interval: 10}, callback)
    telemetry.watch({interval: 10}, callback)
    clock.tick(50)
    telemetry.stop()
    clock.tick(200)

    assert.strictEqual(count, 6)
  })

})