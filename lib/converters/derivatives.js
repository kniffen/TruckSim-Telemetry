const _  = require('struct-fu')

const bool = _.derive(_.uint8(), null, function(val) {
  return !!val
})

const uint64le = _.derive(_.uint32le(2), null, function (arr) {
  const buff = Buffer.alloc(8)
  
  buff.writeUInt32LE(arr[0], 0)
  buff.writeUInt32LE(arr[1], 4)
  
  return Number(buff.readBigUInt64LE())
})

const int64le = _.derive(_.int32le(2), null, function (arr) {
  const buff = Buffer.alloc(8)
  
  buff.writeInt32LE(arr[0], 0)
  buff.writeInt32LE(arr[1], 4)
  
  return Number(buff.readBigInt64LE())
})

const version = _.derive(_.uint32le(2), null, function (arr) {
  return +(arr[0] + '.' + arr[1])
})

const game = _.derive(_.uint32le(), null, function(id) {
  return {
    id,
    name: ["unknown", "ets2", "ats"][id]
  }
})

const time = _.derive(_.uint32le(), null, function(value) {
  // TODO: Remove this and just use the value
  const epoch = new Date(null)
  const day   = Math.floor(value / 1440 % 7 + 5)

  epoch.setUTCDate(day)
  epoch.setUTCHours(Math.floor(value % 1440 / 60))
  epoch.setUTCMinutes(Math.floor(value % 1440 % 60))

  return {value, unix: epoch.valueOf()}
})

const speed = _.derive(_.float32le(), null, function(value) {
  // TODO: Remove this and just use the value
  return {
    value,
    kph: Math.round(Math.abs(value * 3.6)),
    mph: Math.round(Math.abs(value * 2.25))
  }
})

module.exports = {
  bool,
  uint64le,
  int64le,
  version,
  game,
  time,
  speed
}