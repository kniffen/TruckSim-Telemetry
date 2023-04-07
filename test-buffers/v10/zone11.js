const createWriter = require('../createWriter.js')

const start  = 4200
const end    = 4300
const writer = createWriter(Buffer.alloc(end-start))

writer.writeBigInt64LE(1000000000000000n) // jobCancelledPenalty (ets2=EUR, ats=USD)
writer.writeBigInt64LE(1100000000000000n) // jobDeliveredRevenue (ets2=EUR, ats=USD)
writer.writeBigInt64LE(1200000000000000n) // fineAmount (ets2=EUR, ats=USD)
writer.writeBigInt64LE(1300000000000000n) // tollgatePayAmount (ets2=EUR, ats=USD)
writer.writeBigInt64LE(1400000000000000n) // ferryPayAmount (ets2=EUR, ats=USD)
writer.writeBigInt64LE(1500000000000000n) // trainPayAmount (ets2=EUR, ats=USD)

module.exports = writer.buffer