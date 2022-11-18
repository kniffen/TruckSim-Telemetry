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

module.exports = {
  bool,
  uint64le,
  int64le
}