function parseOptions(opts) {

  if (!opts || typeof opts !== "object" || Array.isArray(opts))
    opts = {}

  if (!opts.mmfName)
    opts.mmfName = "Local\\SCSTelemetry"

  return opts

}

module.exports = parseOptions