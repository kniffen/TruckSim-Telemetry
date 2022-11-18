const {
  zone03,
  zone04,
  zone05,
  zone06,
  zone07,
  zone08,
  zone09,
  zone10,
  zone11,
  zone12,
  zone13,
} = require('../v11').zones

const zone01 = require('./zone01.js')
const zone02 = require('./zone02.js')
const zone14 = require('./zone14.js')

const zones = {
  zone01,
  zone02,
  zone03,
  zone04,
  zone05,
  zone06,
  zone07,
  zone08,
  zone09,
  zone10,
  zone11,
  zone12,
  zone13,
  zone14,
}

module.exports = {
  zones,
  all: Buffer.concat(
    Object.values(zones),
    Object.values(zones).reduce((tot, zone) => tot+zone.length, 0)
  )
}