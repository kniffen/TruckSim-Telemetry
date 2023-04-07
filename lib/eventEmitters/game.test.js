const cloneDeep = require('lodash.clonedeep')

const tst = require('..')

const testBuffers = require('../../test-buffers')
const { converter } = require('../converter')
const getDataMock = require('../functions/getData')
const parser = require('../parser/parseData.js')

jest.mock('../functions/getData', () => jest.fn())

describe('eventEmitters/game()', function() {
  const telemetry = tst()
  let testData = null

  beforeAll(function() {
    jest.useFakeTimers()
    jest.spyOn(telemetry.game, 'emit')

    getDataMock.mockImplementation(() => cloneDeep(testData))
  })

  beforeEach(function() {
    const version = 12
    testData = parser(converter(version, testBuffers[version]))
  })

  afterEach(function() {
    telemetry.game.emit.mockReset()
  })

  afterAll(function() {
    jest.restoreAllMocks()
    jest.useRealTimers()
  })

  it('Should emit "pause" events', function() {
    testData.game.paused = false

    telemetry.watch()
    
    jest.advanceTimersByTime(100)
    testData.game.paused = true
    jest.advanceTimersByTime(100)
    testData.game.paused = false
    jest.advanceTimersByTime(100)
    testData.game.paused = true
    jest.advanceTimersByTime(100)
    
    telemetry.stop()

    expect(telemetry.game.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(1, 'connected')
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(2, 'pause', true)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(3, 'pause', false)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(4, 'pause', true)
  })

  it('Should emit "time-change" events', function() {
    testData.game.time.value = 0
    testData.game.time.unix  = 0

    telemetry.watch()
    
    jest.advanceTimersByTime(100)
    testData.game.time.value++
    jest.advanceTimersByTime(100)
    testData.game.time.value++
    jest.advanceTimersByTime(100)
    testData.game.time.value++
    jest.advanceTimersByTime(100)
    
    telemetry.stop()

    expect(telemetry.game.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(1, 'connected')
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(2, 'time-change', {value: 1, unix: 0}, {value: 0, unix: 0})
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(3, 'time-change', {value: 2, unix: 0}, {value: 1, unix: 0})
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(4, 'time-change', {value: 3, unix: 0}, {value: 2, unix: 0})
  })

  it('Should emit "ferry" events', function() {
    testData.events.ferry.active = false
    
    telemetry.watch()
    
    jest.advanceTimersByTime(100)
    testData.events.ferry.active = true
    jest.advanceTimersByTime(100)
    testData.events.ferry.active = false
    jest.advanceTimersByTime(100)
    testData.events.ferry.active = true
    jest.advanceTimersByTime(100)
    
    telemetry.stop()
    
    const expected = {
      amount: 1400000000000000,
      destination: {id: 'ferryTargetId', name: 'ferryTargetName'},
      source:      {id: 'ferrySourceId', name: 'ferrySourceName'},
      target:      {id: 'ferryTargetId', name: 'ferryTargetName'},
    }

    expect(telemetry.game.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(1, 'connected')
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(2, 'ferry', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(3, 'ferry', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(4, 'ferry', expected)
  })

  
  it('Should emit "fine" events', function() {
    testData.events.fine.active = false

    telemetry.watch()
    
    jest.advanceTimersByTime(100)
    testData.events.fine.active = true
    jest.advanceTimersByTime(100)
    testData.events.fine.active = false
    jest.advanceTimersByTime(100)
    testData.events.fine.active = true
    jest.advanceTimersByTime(100)
    
    telemetry.stop()
    
    const expected = {
      amount: 1200000000000000,
      offence: {id: 'fine_offence', name: 'Fine Offence'}
    }

    expect(telemetry.game.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(1, 'connected')
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(2, 'fine', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(3, 'fine', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(4, 'fine', expected)
  })

  it('Should emit "refuel-paid" events', function() {
    testData.events.refuelPaid.active = false
    
    telemetry.watch()
    
    jest.advanceTimersByTime(100)
    testData.events.refuelPaid.active = true
    jest.advanceTimersByTime(100)
    testData.events.refuelPaid.active = false
    jest.advanceTimersByTime(100)
    testData.events.refuelPaid.active = true
    jest.advanceTimersByTime(100)
    
    telemetry.stop()

    const expected = {
      amount: 200.10000610351562
    }

    expect(telemetry.game.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(1, 'connected')
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(2, 'refuel-paid', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(3, 'refuel-paid', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(4, 'refuel-paid', expected)
  })


  it('Should emit "tollgate" events', function() {
    testData.events.tollgate.active = false
    
    telemetry.watch()
    
    jest.advanceTimersByTime(100)
    testData.events.tollgate.active = true
    jest.advanceTimersByTime(100)
    testData.events.tollgate.active = false
    jest.advanceTimersByTime(100)
    testData.events.tollgate.active = true
    jest.advanceTimersByTime(100)
    
    telemetry.stop()

     const expected = {
      amount: 1300000000000000,
    }

    expect(telemetry.game.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(1, 'connected')
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(2, 'tollgate', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(3, 'tollgate', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(4, 'tollgate', expected)
  })


  it('Should emit "train" events', function() {
    testData.events.train.active = false
    
    telemetry.watch()
    
    jest.advanceTimersByTime(100)
    testData.events.train.active = true
    jest.advanceTimersByTime(100)
    testData.events.train.active = false
    jest.advanceTimersByTime(100)
    testData.events.train.active = true
    jest.advanceTimersByTime(100)
    
    telemetry.stop()

    const expected = {
      amount: 1500000000000000,
      destination: {id: 'trainTargetId', name: 'trainTargetName'},
      source:      {id: 'trainSourceId', name: 'trainSourceName'},
      target:      {id: 'trainTargetId', name: 'trainTargetName'},
    }

    expect(telemetry.game.emit).toHaveBeenCalledTimes(4)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(1, 'connected')
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(2, 'train', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(3, 'train', expected)
    expect(telemetry.game.emit).toHaveBeenNthCalledWith(4, 'train', expected)
  })
})
