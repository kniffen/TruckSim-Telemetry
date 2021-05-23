const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

describe('eventEmitters/navigation()', function() {

  let clock = null
  
  let testData = {
    navigation: {
      speedLimit: {
        value: 0
      }
    },
    game:     {},
    events:   {},
    trailers: [],
  }
  
  const telemetry = tst()

  before(function() {
    clock = sinon.useFakeTimers()

    sinon.spy(telemetry.navigation, 'emit')

    sinon
      .stub(functions, 'getData')
      .callsFake(() => cloneDeep(testData))
    
    telemetry.watch()
    
    clock.tick(100)

    testData.navigation.speedLimit.value = 50
    clock.tick(100)

    testData.navigation.speedLimit.value = 0
    clock.tick(100)

    testData.navigation.speedLimit.value = 50
    clock.tick(100)

    testData.navigation.speedLimit.value = 80
    clock.tick(100)

    telemetry.stop()
  })

  after(function() {
    clock.restore()
    sinon.restore()
  })

  it('Should emit speed-limit events', function() {
    assert.deepStrictEqual(telemetry.navigation.emit.args, [
      ['speed-limit', {value: 50}, {value:  0}],
      ['speed-limit', {value:  0}, {value: 50}],
      ['speed-limit', {value: 50}, {value:  0}],
      ['speed-limit', {value: 80}, {value: 50}],
    ])
  })
  
})