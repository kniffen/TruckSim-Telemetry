import tst from 'trucksim-telemetry'

const telemetry1 = tst()
const telemetry2 = tst({})
const telemetry3 = tst({mmfName: 'foo'})
// @ts-ignore
const telemetry4 = tst({foo: 'bar'}) // Should throw an error

const functions = [
  tst.getBuffer,
  tst.getData,
  tst.getGame,
  tst.getControls,
  tst.getJob,
  tst.getNavigation,
  tst.getTruck,
  tst.getTrailers,
  tst.getTrailer,
  telemetry1.getBuffer,
  telemetry1.getData,
  telemetry1.getGame,
  telemetry1.getControls,
  telemetry1.getJob,
  telemetry1.getNavigation,
  telemetry1.getTruck,
  telemetry1.getTrailers,
  telemetry1.getTrailer,
]

for ( const func of functions ) {
  const result1 = func()
  const result2 = func({})
  const result3 = func({mmfName: 'foo'})
  // @ts-ignore
  const result4 = func({foo: 'bar'}) // Should throw an error
}