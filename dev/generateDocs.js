const path = require("path")
const fs   = require("fs")

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../examples/sdk_1.10.json")))


// Generate object doc files from example data
for (const prop in data) {
  createObjectDoc(`data.${prop}`, data[prop], path.resolve(__dirname, `../docs/data/${prop}.md`))

  if (["game", "events", "job", "trailer", "truck"].includes(prop)) {
    for (const subProp in data[prop]) {
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