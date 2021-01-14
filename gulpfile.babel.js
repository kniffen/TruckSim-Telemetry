import path       from "path"
import fs         from "fs"
import gulp       from "gulp"
import plumber    from "gulp-plumber"
import sourcemaps from "gulp-sourcemaps"
import babel      from "gulp-babel"
import mocha      from "gulp-mocha"
import liveServer from "live-server"

import getBuffer  from "./src/lib/getBuffer"
import converters from "./src/lib/converters"
import parseData  from "./src/lib/parseData"

function build() {
  return gulp.src("src/**/*.js")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ["@babel/env"]}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
}

function copy() {
  return gulp.src(["src/**/*", "!src/**/*.js"])
    .pipe(plumber())
    .pipe(gulp.dest("dist"))
}

function test() {
  return gulp.src("dist/tests/**/*.test.js", {read: false})
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'spec',
      timeout:   5000,
      require:   [
        '@babel/register',
        'source-map-support/register'
      ],
      exit: true
    }))
}

function watch() {
  gulp.watch("src/**/*.js", {cwd: "./"}, gulp.series(build, test))
}

function generateBuffer(done) {
  const buffer = getBuffer()
  const data   = parseData(converters[10](buffer))

  fs.writeFileSync(path.resolve(__dirname, `./src/tests/buffers/scs_sdk_plugin_buffer_${data.game.pluginVersion}`), buffer)
  
  done()
}

function generateData(done) {
  for (const version in converters) {
    const buffer = fs.readFileSync(path.resolve(__dirname, `./src/tests/buffers/scs_sdk_plugin_buffer_${version}`))
  
    const converted = converters[version](buffer)
    const parsed    = parseData(converted)

    fs.writeFileSync(path.resolve(__dirname, `./src/tests/data/scs_sdk_plugin_raw_data_${version}.json`),    JSON.stringify(converted, null, 3))
    fs.writeFileSync(path.resolve(__dirname, `./src/tests/data/scs_sdk_plugin_parsed_data_${version}.json`), JSON.stringify(parsed,    null, 3))
  }

  done()
}

function generateDataDocs(done) {
  const buffer     = fs.readFileSync(path.resolve(__dirname, "./src/tests/buffers/scs_sdk_plugin_buffer_10"))
  const parsedData = parseData(converters[10](buffer))
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

  const props = Object.keys(parsedData)
  props.sort()
  for (const prop of props) {
    output += `## ${prop}\n\n\`\`\`json\n${JSON.stringify(parsedData[prop], null, 3)}\n\`\`\`\n\n`
    
    if (!Array.isArray(parsedData[prop])) addSubObjects(parsedData[prop], prop)
  }

  fs.writeFileSync(filePath, output)

  return done()
}

function hostDocs() {
  liveServer.start({
    host: "0.0.0.0",
    root: "./docs",
    file: "index.html",
  })
}

exports.build          = build
exports.test           = gulp.series(build, copy, test)
exports.docs           = gulp.series(generateDataDocs, hostDocs)
exports.generateBuffer = generateBuffer
exports.generateData   = generateData
exports.default        = gulp.series(build, copy, test, watch)