import tst from 'trucksim-telemetry'

// types
import { TrailerDamage } from 'trucksim-telemetry'

const telemetry = tst()

// Trailers coupling event
function trailersCouplingCallback(id: number, isAttached: boolean) {}

telemetry.trailers.addListener('coupling', trailersCouplingCallback)
telemetry.trailers.on('coupling', trailersCouplingCallback)
telemetry.trailers.once('coupling', trailersCouplingCallback)
telemetry.trailers.prependListener('coupling', trailersCouplingCallback)
telemetry.trailers.prependOnceListener('coupling', trailersCouplingCallback)

// Trailers damage event
function trailersDamageCallback(id: number, current: TrailerDamage, previous: TrailerDamage) {}

telemetry.trailers.addListener('damage', trailersDamageCallback)
telemetry.trailers.on('damage', trailersDamageCallback)
telemetry.trailers.once('damage', trailersDamageCallback)
telemetry.trailers.prependListener('damage', trailersDamageCallback)
telemetry.trailers.prependOnceListener('damage', trailersDamageCallback)

// Trailer coupling event
function trailerCouplingCallback(isAttached: boolean) {}

telemetry.trailer.addListener('coupling', trailerCouplingCallback)
telemetry.trailer.on('coupling', trailerCouplingCallback)
telemetry.trailer.once('coupling', trailerCouplingCallback)
telemetry.trailer.prependListener('coupling', trailerCouplingCallback)
telemetry.trailer.prependOnceListener('coupling', trailerCouplingCallback)

// Trailer damage event
function trailerDamageCallback(current: TrailerDamage, previous: TrailerDamage) {}

telemetry.trailer.addListener('damage', trailerDamageCallback)
telemetry.trailer.on('damage', trailerDamageCallback)
telemetry.trailer.once('damage', trailerDamageCallback)
telemetry.trailer.prependListener('damage', trailerDamageCallback)
telemetry.trailer.prependOnceListener('damage', trailerDamageCallback)
