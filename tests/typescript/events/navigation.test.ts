import tst from 'trucksim-telemetry'

// types
import { NavSpeedLimit } from 'trucksim-telemetry'

const telemetry = tst()

// Speed limit changed event
function speedLimitCallback(current: NavSpeedLimit, previous: NavSpeedLimit) {}

telemetry.navigation.addListener('speed-limit', speedLimitCallback)
telemetry.navigation.on('speed-limit', speedLimitCallback)
telemetry.navigation.once('speed-limit', speedLimitCallback)
telemetry.navigation.prependListener('speed-limit', speedLimitCallback)
telemetry.navigation.prependOnceListener('speed-limit', speedLimitCallback)