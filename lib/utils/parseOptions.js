function parseOptions(opts) {

  if (!opts || "object" !== typeof opts || Array.isArray(opts))
    opts = {}

  if (!opts.mmfName) {
    if ("win32" === process.platform)
      opts.mmfName = "Local\\SCSTelemetry"
    else
      opts.mmfName = "/SCSTelemetry"
  }

  return opts

}

module.exports = parseOptions