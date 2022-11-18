const zones = {
  zone01: require('./zone01'),
  zone02: require('./zone02'),
  zone03: require('./zone03'),
  zone04: require('./zone04'),
  zone05: require('./zone05'),
  zone06: require('./zone06'),
  zone07: require('./zone07'),
  zone08: require('./zone08'),
  zone09: require('./zone09'),
  zone10: require('./zone10'),
  zone11: require('./zone11'),
  zone12: require('./zone12'),
  zone13: require('./zone13'),
  zone14: require('./zone14'),
}

module.exports = {
  zones,
  all: Buffer.concat(
    Object.values(zones),
    Object.values(zones).reduce((tot, zone) => tot+zone.length, 0)
  )
}