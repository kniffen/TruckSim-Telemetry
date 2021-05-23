const utils = require('../utils')

function getBuffer(opts) {
  let buffer = null

  try {
    
    const arrayBuffer = utils.getArrayBuffer(opts.mmfName)

    buffer = new Buffer.from(arrayBuffer)
  
  } finally {

    return buffer

  }
}

module.exports = getBuffer