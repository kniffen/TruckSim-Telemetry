function parseOptions(opts) {

  if (!opts || "object" !== typeof opts || Array.isArray(opts))
    opts = {}

  if (!opts.mmfName)
    opts.mmfName = "Local\\SCSTelemetry"

  return opts

}

module.exports = parseOptions