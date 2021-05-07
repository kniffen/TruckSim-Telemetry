const cloneDeep = require('lodash.clonedeep')

function eventEmittersNavigation( telemetry, data ) {

  // Speed limit
  if ( data[0]?.navigation?.speedLimit.value != data[1]?.navigation?.speedLimit.value ) {
    telemetry.navigation.emit(
      'speed-limit', 
      cloneDeep( data[0].navigation.speedLimit ), 
      cloneDeep( data[1].navigation.speedLimit )
    )
  }
}

module.exports = function() {
  return module.exports.default.apply(this, arguments)
}
module.exports.default = eventEmittersNavigation