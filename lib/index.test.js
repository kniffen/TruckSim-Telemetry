const tst = require('.')
const { converter } = require('./converter')
const functions = require('./functions')
const parseData = require('./parser/parseData.js')
const getBufferMock = require('./utils/getBuffer.js')

const testBuffers = require('../test-buffers')

jest.mock('./utils/getBuffer', () => jest.fn())

describe('truckSimTelemetry()', function() {
  const version = 12
  const testBuffer = testBuffers[version]
  const testData = parseData(converter(version, testBuffer))
  const getDataSpy = jest.spyOn(functions, 'getData')

  beforeAll(function() {
    getBufferMock.mockReturnValue(testBuffer)
  })

  afterAll(function() {
    jest.restoreAllMocks()
  })

  it('Should contain various "get" functions', function() {
    const opts = {
      mmfName: 'foobar'
    }

    const buffer         = [tst.getBuffer(),     tst.getBuffer(opts)]
    
    const data           = [tst.getData(),       tst.getData(opts)]
    const gameData       = [tst.getGame(),       tst.getGame(opts)]
    const constrolsData  = [tst.getControls(),   tst.getControls(opts)]
    const jobData        = [tst.getJob(),        tst.getJob(opts)]
    const navigationData = [tst.getNavigation(), tst.getNavigation(opts)]
    const trailerData    = [tst.getTrailer(),    tst.getTrailer(opts)]
    const trailersData   = [tst.getTrailers(),   tst.getTrailers(opts)]
    const truckData      = [tst.getTruck(),      tst.getTruck(opts)]

    expect(getBufferMock).toHaveBeenNthCalledWith(1, 'Local\\SCSTelemetry')
    expect(getBufferMock).toHaveBeenNthCalledWith(2, 'foobar')

    expect(getDataSpy).toHaveBeenNthCalledWith(1,  null,         {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(2,  null,         {mmfName: 'foobar'})
    expect(getDataSpy).toHaveBeenNthCalledWith(3,  'game',       {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(4,  'game',       {mmfName: 'foobar'})
    expect(getDataSpy).toHaveBeenNthCalledWith(5,  'controls',   {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(6,  'controls',   {mmfName: 'foobar'})
    expect(getDataSpy).toHaveBeenNthCalledWith(7,  'job',        {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(8,  'job',        {mmfName: 'foobar'})
    expect(getDataSpy).toHaveBeenNthCalledWith(9,  'navigation', {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(10, 'navigation', {mmfName: 'foobar'})
    expect(getDataSpy).toHaveBeenNthCalledWith(11, 'trailer',    {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(12, 'trailer',    {mmfName: 'foobar'})
    expect(getDataSpy).toHaveBeenNthCalledWith(13, 'trailers',   {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(14, 'trailers',   {mmfName: 'foobar'})
    expect(getDataSpy).toHaveBeenNthCalledWith(15, 'truck',      {mmfName: 'Local\\SCSTelemetry'})
    expect(getDataSpy).toHaveBeenNthCalledWith(16, 'truck',      {mmfName: 'foobar'})

    expect(buffer).toEqual([testBuffer, testBuffer])
    expect(data).toEqual([testData, testData])
    expect(gameData).toEqual([testData.game, testData.game])
    expect(constrolsData).toEqual([testData.controls, testData.controls])
    expect(jobData).toEqual([testData.job, testData.job])
    expect(navigationData).toEqual([testData.navigation, testData.navigation])
    expect(trailerData).toEqual([testData.trailer, testData.trailer])
    expect(trailersData).toEqual([testData.trailers, testData.trailers])
    expect(truckData).toEqual([testData.truck, testData.truck])
  })

  describe('The telemetry object it returns', function() {
    it('Should contain telemetry data', function() {
      const telemetry = tst()

      expect(telemetry.data).toEqual({
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
      const telemetry2 = tst({mmfName: 'foobar'})

      const opts = {
        mmfName: 'foobar'
      }

      const buffer         = [telemetry1.getBuffer(), telemetry2.getBuffer(opts)]
    
      const data           = [telemetry1.getData(),       telemetry2.getData(opts)]
      const gameData       = [telemetry1.getGame(),       telemetry2.getGame(opts)]
      const constrolsData  = [telemetry1.getControls(),   telemetry2.getControls(opts)]
      const jobData        = [telemetry1.getJob(),        telemetry2.getJob(opts)]
      const navigationData = [telemetry1.getNavigation(), telemetry2.getNavigation(opts)]
      const trailerData    = [telemetry1.getTrailer(),    telemetry2.getTrailer(opts)]
      const trailersData   = [telemetry1.getTrailers(),   telemetry2.getTrailers(opts)]
      const truckData      = [telemetry1.getTruck(),      telemetry2.getTruck(opts)]

      expect(getBufferMock).toHaveBeenNthCalledWith(1, 'Local\\SCSTelemetry')
      expect(getBufferMock).toHaveBeenNthCalledWith(2, 'foobar')

      expect(getDataSpy).toHaveBeenNthCalledWith(1,  null,         {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(2,  null,         {mmfName: 'foobar'})
      expect(getDataSpy).toHaveBeenNthCalledWith(3,  'game',       {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(4,  'game',       {mmfName: 'foobar'})
      expect(getDataSpy).toHaveBeenNthCalledWith(5,  'controls',   {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(6,  'controls',   {mmfName: 'foobar'})
      expect(getDataSpy).toHaveBeenNthCalledWith(7,  'job',        {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(8,  'job',        {mmfName: 'foobar'})
      expect(getDataSpy).toHaveBeenNthCalledWith(9,  'navigation', {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(10, 'navigation', {mmfName: 'foobar'})
      expect(getDataSpy).toHaveBeenNthCalledWith(11, 'trailer',    {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(12, 'trailer',    {mmfName: 'foobar'})
      expect(getDataSpy).toHaveBeenNthCalledWith(13, 'trailers',   {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(14, 'trailers',   {mmfName: 'foobar'})
      expect(getDataSpy).toHaveBeenNthCalledWith(15, 'truck',      {mmfName: 'Local\\SCSTelemetry'})
      expect(getDataSpy).toHaveBeenNthCalledWith(16, 'truck',      {mmfName: 'foobar'})

      expect(buffer).toEqual([testBuffer, testBuffer])
      expect(data).toEqual([testData, testData])
      expect(gameData).toEqual([testData.game, testData.game])
      expect(constrolsData).toEqual([testData.controls, testData.controls])
      expect(jobData).toEqual([testData.job, testData.job])
      expect(navigationData).toEqual([testData.navigation, testData.navigation])
      expect(trailerData).toEqual([testData.trailer, testData.trailer])
      expect(trailersData).toEqual([testData.trailers, testData.trailers])
      expect(truckData).toEqual([testData.truck, testData.truck])
    })
  })

  describe('No buffer', function() {
    it('Should return "null" if the getFunction is called, but there is no buffer', function() {
      getBufferMock.mockReturnValue(null)

      const telemetry = tst()

      expect(tst.getBuffer()).toEqual(null)
      expect(telemetry.getBuffer()).toEqual(null)
    })
  })
})