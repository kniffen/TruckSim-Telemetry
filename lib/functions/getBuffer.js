const utils = require('../utils')

function getBuffer(opts) {
  let buffer = null

  try {
    
    buffer = utils.getBuffer(opts.mmfName)
  
  } finally {

    return buffer

  }
}

module.exports = getBuffer