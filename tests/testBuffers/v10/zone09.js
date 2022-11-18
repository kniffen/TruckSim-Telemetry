const createWriter = require('../createWriter.js')
const { stringSize } = require('./constants.js')

const start  = 2300
const end    = 4000
const writer = createWriter(Buffer.alloc(end-start))

writer.writeString('truckBrandId', stringSize) // truckBrandId
writer.writeString('truckBrand',   stringSize) // truckBrand
writer.writeString('truckId',      stringSize) // truckId

writer.writeString('truckName',   stringSize) // truckName
writer.writeString('cargoId',     stringSize) // cargoId
writer.writeString('cargo',       stringSize) // cargo
writer.writeString('cityDstId',   stringSize) // cityDstId
writer.writeString('cityDst',     stringSize) // cityDst
writer.writeString('compDstId',   stringSize) // compDstId
writer.writeString('compDst',     stringSize) // compDst
writer.writeString('citySrcId',   stringSize) // citySrcId
writer.writeString('citySrc',     stringSize) // citySrc
writer.writeString('compSrcId',   stringSize) // compSrcId
writer.writeString('compSrc',     stringSize) // compSrc
writer.writeString('shifterType', 16)         // shifterType

writer.writeString('truckLicensePlate',          stringSize) // truckLicensePlate
writer.writeString('truckLicensePlateCountryId', stringSize) // truckLicensePlateCountryId
writer.writeString('truckLicensePlateCountry',   stringSize) // truckLicensePlateCountry

writer.writeString('jobMarket', 32) // jobMarket

writer.writeString('fineOffence',     32)         // fineOffence
writer.writeString('ferrySourceName', stringSize) // ferrySourceName
writer.writeString('ferryTargetName', stringSize) // ferryTargetName
writer.writeString('ferrySourceId',   stringSize) // ferrySourceId
writer.writeString('ferryTargetId',   stringSize) // ferryTargetId
writer.writeString('trainSourceName', stringSize) // trainSourceName
writer.writeString('trainTargetName', stringSize) // trainTargetName
writer.writeString('trainSourceId',   stringSize) // trainSourceId
writer.writeString('trainTargetId',   stringSize) // trainTargetId

module.exports = writer.buffer