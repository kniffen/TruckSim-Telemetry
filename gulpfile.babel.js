import path       from "path"
import fs         from "fs"
import gulp       from "gulp"
import plumber    from "gulp-plumber"
import sourcemaps from "gulp-sourcemaps"
import babel      from "gulp-babel"
import mocha      from "gulp-mocha"

import parseData from "./src/lib/parseData"

const buffers    = []
const converters = []

buffers[9]  = fs.readFileSync(path.resolve(__dirname, "./src/buffers/scs_sdk_plugin_buffer_1_9"))
buffers[10] = fs.readFileSync(path.resolve(__dirname, "./src/buffers/scs_sdk_plugin_buffer_1_10"))

converters[9]  = require("./src/lib/converters/scs_sdk_plugin_1_9").default
converters[10] = require("./src/lib/converters/scs_sdk_plugin_1_10").default

function watch() {
  gulp.watch("src/**/*.js",                {cwd: "./"}, gulp.series(build, test))
  gulp.watch(["src/**/*", "!src/**/*.js"], {cwd: "./"}, gulp.series(copy, test))
}

function copy() {
  return gulp.src(["src/**/*", "!src/**/*.js"])
    .pipe(plumber())
    .pipe(gulp.dest("dist"))
}

function build() {
  return gulp.src("src/**/*.js")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ["@babel/env"]}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
}

function test() {
  return gulp.src("dist/tests/**/*.test.js", {read: false})
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'spec',
      timeout:   5000,
      require:   ['source-map-support/register'],
    }))
}

function generateData(done) {
  //fs.mkdirSync(path.resolve(__dirname, "./dist/data/"))

  for (const index in buffers) {
    const rawData    = converters[index](buffers[index])
    const parsedData = parseData(rawData)

    fs.writeFileSync(path.resolve(__dirname, `./dist/data/scs_sdk_plugin_raw_data_1_${index}.json`), JSON.stringify(rawData, null, 3))
    fs.writeFileSync(path.resolve(__dirname, `./dist/data/scs_sdk_plugin_parsed_data_1_${index}.json`), JSON.stringify(parsedData, null, 3))
  }

  return done()
}

function generateDataDocs(done) {
  const rawData    = converters[10](buffers[10])
  const data       = parseData(rawData)
  const filePath   = path.resolve(__dirname, "./docs/data.md")

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

  const props = Object.keys(data)
  props.sort()
  for (const prop of props) {
    output += `## ${prop}\n\n\`\`\`json\n${JSON.stringify(data[prop], null, 3)}\n\`\`\`\n\n`
    
    if (!Array.isArray(data[prop])) addSubObjects(data[prop], prop)
  }

  fs.writeFileSync(filePath, output)

  return done()
}

exports.watch            = watch
exports.copy             = copy
exports.build            = build
exports.test             = test
exports.generateData     = generateData
exports.generateDataDocs = generateDataDocs

exports.default = gulp.series(build, copy, generateData, test, watch)