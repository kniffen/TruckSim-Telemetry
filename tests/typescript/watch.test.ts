import tst from 'trucksim-telemetry'

const telemetry = tst()

telemetry.watch()
telemetry.watch(null, function() {})
telemetry.watch({}, function() {})
telemetry.watch({interval: 5}, function() {})
telemetry.watch(null, function(data) {})

// @ts-ignore
telemetry.watch({foo: 'bar'}, function() {}) // Should throw an error

// @ts-ignore
telemetry.watch(null, function({foo}) {}) // Should throw an error