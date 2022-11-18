const buffers = []

buffers[10] = require('./v10').all
buffers[11] = require('./v11').all
buffers[12] = require('./v12').all

module.exports = buffers