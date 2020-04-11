const truckSimTelemetry = require("./dist/lib").default
const getBuffer         = require("./dist/lib/getBuffer").default
const getData           = require("./dist/lib/getData").default

truckSimTelemetry.getBuffer = getBuffer
truckSimTelemetry.getData   = getData

truckSimTelemetry.getGame       = () => getData("game")
truckSimTelemetry.getControls   = () => getData("controls")
truckSimTelemetry.getNavigation = () => getData("navigation")
truckSimTelemetry.getJob        = () => getData("job")
truckSimTelemetry.getTrailers   = () => getData("trailers")
truckSimTelemetry.getTrailer    = () => getData("trailer")
truckSimTelemetry.getTruck      = () => getData("truck")

module.exports = truckSimTelemetry