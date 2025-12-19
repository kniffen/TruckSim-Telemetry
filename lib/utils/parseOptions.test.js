const parseOptions = require('./parseOptions')

describe('utils.parseOptions()', function () {

  it('Should parse option objects', function () {
    const originalPlatform = process.platform
    Object.defineProperty(process, 'platform', {
      value: 'win32'
    });

    const actual = [
      parseOptions(),
      parseOptions(null),
      parseOptions(undefined),
      parseOptions('foo'),
      parseOptions(1234),
      parseOptions([]),
      parseOptions({}),
      parseOptions({ mmfName: 'bar' }),
    ]

    const expected = [
      { mmfName: 'Local\\SCSTelemetry' },
      { mmfName: 'Local\\SCSTelemetry' },
      { mmfName: 'Local\\SCSTelemetry' },
      { mmfName: 'Local\\SCSTelemetry' },
      { mmfName: 'Local\\SCSTelemetry' },
      { mmfName: 'Local\\SCSTelemetry' },
      { mmfName: 'Local\\SCSTelemetry' },
      { mmfName: 'bar' },
    ]

    expect(actual).toEqual(expected)

    Object.defineProperty(process, 'platform', {
      value: originalPlatform
    });
  })

  it.skip('Should use a fallback mmfName for non-Windows platforms', function () {
    const originalPlatform = process.platform
    Object.defineProperty(process, 'platform', {
      value: 'mock OS'
    });

    const actual = [
      parseOptions(),
      parseOptions(null),
      parseOptions(undefined),
      parseOptions('foo'),
      parseOptions(1234),
      parseOptions([]),
      parseOptions({}),
      parseOptions({ mmfName: 'bar' }),
    ]

    const expected = [
      { mmfName: '/SCSTelemetry' },
      { mmfName: '/SCSTelemetry' },
      { mmfName: '/SCSTelemetry' },
      { mmfName: '/SCSTelemetry' },
      { mmfName: '/SCSTelemetry' },
      { mmfName: '/SCSTelemetry' },
      { mmfName: '/SCSTelemetry' },
      { mmfName: 'bar' },
    ]

    expect(actual).toEqual(expected)

    Object.defineProperty(process, 'platform', {
      value: originalPlatform
    });
  });
})