import _ from "struct-fu"

export default function getPluginVersion(buffer) {
  try {
    
    const entries = _.struct([
      _.padTo(8),
      _.uint32le('oldVersion'),
      _.padTo(40),
      _.uint32le("version"),
    ])

    const data = entries.unpack(buffer)

    return data.version || data.oldVersion

  } catch (err) {
    
    return -1
  
  }
}