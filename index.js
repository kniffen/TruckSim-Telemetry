const truckSimTelemetry = require("./dist").default
const getBuffer         = require("./dist/getBuffer").default
const getData           = require("./dist/getData").default
const parseOptions      = require("./dist/parseOptions").default

truckSimTelemetry.getBuffer     = (opts) => getBuffer(parseOptions(opts))

truckSimTelemetry.getData       = (opts) => getData(null,         parseOptions(opts))
truckSimTelemetry.getGame       = (opts) => getData("game",       parseOptions(opts))
truckSimTelemetry.getControls   = (opts) => getData("controls",   parseOptions(opts))
truckSimTelemetry.getNavigation = (opts) => getData("navigation", parseOptions(opts))
truckSimTelemetry.getJob        = (opts) => getData("job",        parseOptions(opts))
truckSimTelemetry.getTrailers   = (opts) => getData("trailers",   parseOptions(opts))
truckSimTelemetry.getTrailer    = (opts) => getData("trailer",    parseOptions(opts))
truckSimTelemetry.getTruck      = (opts) => getData("truck",      parseOptions(opts))

module.exports = truckSimTelemetry