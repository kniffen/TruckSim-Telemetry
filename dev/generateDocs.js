const path = require("path")
const fs   = require("fs")

const getDataFromPluginVersion10 = require("../lib/sdk-plugin-convert/sdk_1.10")
const parseData                  = require("../lib/parseData")

const buffer = fs.readFileSync(path.resolve(__dirname, "buffers/sdk_data_1_10"))
const data   = parseData(getDataFromPluginVersion10(buffer))

// Generate object doc files from example data
for (const prop in data) {
  createObjectDoc(`data.${prop}`, data[prop], path.resolve(__dirname, `../docs/data/${prop}.md`))

  if (["game", "events", "job", "trailer", "truck"].includes(prop)) {
    for (const subProp in data[prop]) {
      if (typeof data[prop][subProp] == "object")
        createObjectDoc(`data.${prop}.${subProp}`, data[prop][subProp], path.resolve(__dirname, `../docs/data/${prop}/${subProp}.md`))
    }
  }
}

createObjectDoc("data.trailer.wheels[0]", data.trailer.wheels[0], path.resolve(__dirname, `../docs/data/trailer/wheel.md`))
createObjectDoc("data.truck.wheels[0]", data.truck.wheels[0], path.resolve(__dirname, `../docs/data/truck/wheel.md`))

function createObjectDoc(name, data, filePath) {
  ensurePathExists(path.dirname(filePath))
  fs.writeFileSync(filePath, `# ${name}\n\n\`\`\`json\n${JSON.stringify(data, null, 3)}\`\`\``)
}

function ensurePathExists(desiredPath) {
  const parentPath = path.dirname(desiredPath)

  if (!fs.existsSync(parentPath)) ensurePathExists(parentPath)

  if (!fs.existsSync(desiredPath)) fs.mkdirSync(desiredPath)
}