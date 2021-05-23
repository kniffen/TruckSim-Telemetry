const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

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

    sinon
      .stub(getData, 'default')
      .callsFake(() => cloneDeep(testData))
  })

  after(function() {
    clock.restore()
    sinon.restore()
  })

  it('should actually stop and start the watcher', function() {
    const telemetry = tst()
    
    testData.foo = 0
   
    const callback = sinon.spy(function(data) {
      if (callback.args.length == 11) {
        telemetry.stop()
      }
    })
    
    telemetry.watch({interval: 10}, callback)

    for (let i = 0; i < 20; i++) {
      clock.tick(10)
      testData.foo++
    }

    assert.strictEqual(callback.args.length, 11)
    
    testData.foo = 0
    callback.resetHistory()

    telemetry.watch({interval: 10}, callback)
    telemetry.watch({interval: 10}, callback)
    
    for (let i = 0; i < 5; i++) {
      clock.tick(10)
      testData.foo++
    }

    telemetry.stop()
    
    clock.tick(200)

    assert.strictEqual(callback.args.length, 4)
  })

})