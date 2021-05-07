const path = require('path')
const fs = require('fs')

const converters = require('../lib/converters')
const parseData = require('../lib/parseData')

const buffer = fs.readFileSync(path.resolve(__dirname, "../tests/buffers/scs_sdk_plugin_buffer_10"))
const parsedData = parseData(converters[10](buffer))
const filePath = path.resolve(__dirname, "../docs/data.md")

/* Remove deprecated values*/
delete parsedData.truck.brand
delete parsedData.trailer.brand
delete parsedData.events.ferry.target
delete parsedData.events.train.target
for ( let i = 0; i < parsedData.trailers.length; i++ ) {
  delete parsedData.trailers[i].brand
}

let output = "# Data\n\n"

const addSubObjects = (subData, name, depth = 3) => {
  if (depth > 4) return

  const subKeys = Object.keys(subData)
  subKeys.sort()
  for (const prop of subKeys) {
    if (typeof subData[prop] == "object") {
      output += `${'#'.repeat(depth)} ${depth > 2 ? `${name}.${prop}` : prop}\n\n\`\`\`json\n${JSON.stringify(subData[prop], null, 3)}\n\`\`\`\n\n`
      addSubObjects(subData[prop], `${name}.${prop}`, depth + 1)
    }
  }
}

const props = Object.keys(parsedData)
props.sort()
for (const prop of props) {
  output += `## ${prop}\n\n\`\`\`json\n${JSON.stringify(parsedData[prop], null, 3)}\n\`\`\`\n\n`
  
  if (!Array.isArray(parsedData[prop])) addSubObjects(parsedData[prop], prop)
}

fs.writeFileSync(filePath, output)
