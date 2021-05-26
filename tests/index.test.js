const assert = require('assert')
const sinon  = require('sinon')
const fs     = require('fs')
const path   = require('path')

const tst = require('../lib')

const functions = require('../lib/functions')
const utils     = require('../lib/utils')

describe('truckSimTelemetry()', function() {
  let testBuffer = null
  let testData   = null

  before(function() {
    testBuffer =
      fs.readFileSync(path.resolve(__dirname, './buffers/scs_sdk_plugin_buffer_10'))
    
    testData =
      JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/scs_sdk_plugin_parsed_data_10.json')))
    
    sinon
      .stub(utils, 'getBuffer')
      .callsFake(() => testBuffer)

    sinon.spy(functions, 'getData')
  })

  after(function() {
    sinon.restore()
  })

  afterEach(function() {
    if (utils.getBuffer.resetHistory)
      utils.getBuffer.resetHistory()

    functions.getData.resetHistory()
  })

  it('Should contain various "get" functions', function() {
    const buffer = tst.getBuffer()
    const actualData = {}

    actualData.data       = tst.getData()
    actualData.controls   = tst.getControls()
    actualData.game       = tst.getGame({mmfName: 'foobar'})
    actualData.job        = tst.getJob()
    actualData.navigation = tst.getNavigation()
    actualData.trailer    = tst.getTrailer()
    actualData.trailers   = tst.getTrailers()
    actualData.truck      = tst.getTruck()

    assert.deepStrictEqual(utils.getBuffer.args[0], ['Local\\SCSTelemetry'])
    assert.deepStrictEqual(utils.getBuffer.args[1], ['Local\\SCSTelemetry'])
    assert.deepStrictEqual(utils.getBuffer.args[3], ['foobar'])

    assert.deepStrictEqual(functions.getData.args, [
      [null,         {mmfName: 'Local\\SCSTelemetry'}],
      ['controls',   {mmfName: 'Local\\SCSTelemetry'}],
      ['game',       {mmfName: 'foobar'}],
      ['job',        {mmfName: 'Local\\SCSTelemetry'}],
      ['navigation', {mmfName: 'Local\\SCSTelemetry'}],
      ['trailer',    {mmfName: 'Local\\SCSTelemetry'}],
      ['trailers',   {mmfName: 'Local\\SCSTelemetry'}],
      ['truck',      {mmfName: 'Local\\SCSTelemetry'}],
    ])

    assert.deepStrictEqual(actualData.data,       testData)
    assert.deepStrictEqual(actualData.controls,   testData.controls)
    assert.deepStrictEqual(actualData.game,       testData.game)
    assert.deepStrictEqual(actualData.navigation, testData.navigation)
    assert.deepStrictEqual(actualData.trailers,   testData.trailers)
    assert.deepStrictEqual(actualData.trailer,    testData.trailer)
    assert.deepStrictEqual(actualData.truck,      testData.truck)
  })

  describe('The telemetry object it returns', function() {
    it('Should contain telemetry data', function() {
      const telemetry = tst()

      assert.deepStrictEqual(telemetry.data, {
        controls:   {},
        game:       {},
        job:        {},
        navigation: {},
        trailers:   [],
        trailer:    {},
        truck:      {},
      })
    })
    
    it('Should contain various "get" functions', function() {
      const telemetry1 = tst()
      const telemetry2 = tst({mmfName: 'barfoo'})
      const actualData = {}

      actualData.data       = telemetry1.getData()
      actualData.controls   = telemetry1.getControls()
      actualData.game       = telemetry2.getGame()
      actualData.job        = telemetry2.getJob()
      actualData.navigation = telemetry2.getNavigation()
      actualData.trailer    = telemetry1.getTrailer()
      actualData.trailers   = telemetry2.getTrailers()
      actualData.truck      = telemetry1.getTruck()

      assert.deepStrictEqual(utils.getBuffer.args[0], ['Local\\SCSTelemetry'])
      assert.deepStrictEqual(utils.getBuffer.args[1], ['Local\\SCSTelemetry'])
      assert.deepStrictEqual(utils.getBuffer.args[3], ['barfoo'])

      assert.deepStrictEqual(functions.getData.args, [
        [null,         {mmfName: 'Local\\SCSTelemetry'}],
        ['controls',   {mmfName: 'Local\\SCSTelemetry'}],
        ['game',       {mmfName: 'barfoo'}],
        ['job',        {mmfName: 'barfoo'}],
        ['navigation', {mmfName: 'barfoo'}],
        ['trailer',    {mmfName: 'Local\\SCSTelemetry'}],
        ['trailers',   {mmfName: 'barfoo'}],
        ['truck',      {mmfName: 'Local\\SCSTelemetry'}],
      ])

      assert.deepStrictEqual(actualData.data,       testData)
      assert.deepStrictEqual(actualData.controls,   testData.controls)
      assert.deepStrictEqual(actualData.game,       testData.game)
      assert.deepStrictEqual(actualData.navigation, testData.navigation)
      assert.deepStrictEqual(actualData.trailers,   testData.trailers)
      assert.deepStrictEqual(actualData.trailer,    testData.trailer)
      assert.deepStrictEqual(actualData.truck,      testData.truck)
    })
  })

  describe('No buffer', function() {
    it('Should return "null" if the getFunction is called, but there is no buffer', function() {
      utils.getBuffer.restore()

      const telemetry = tst()

      assert.strictEqual(tst.getBuffer(), null)
      assert.strictEqual(telemetry.getBuffer(), null)
    })
  })

})