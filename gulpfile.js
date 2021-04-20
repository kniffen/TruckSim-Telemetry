const path       = require('path')
const fs         = require('fs')
const gulp       = require('gulp')
const plumber    = require('gulp-plumber')
const babel      = require('gulp-babel')
const mocha      = require('gulp-mocha')
const liveServer = require('live-server')

const getBuffer  = require('./dist/getBuffer').default
const converters = require('./dist/converters').default
const parseData  = require('./dist/parseData').default

function build() {
  return gulp.src('src/**/*.js')
             .pipe(plumber())
             .pipe(babel({
                presets: ['@babel/env']
              }))
             .pipe(gulp.dest('dist'))
}

function test() {
  return gulp.src('tests/**/*.test.js', {read: false, sourcemaps: true})
             .pipe(plumber())
             .pipe(mocha({
               reporter: 'spec',
               timeout:   5000,
               require:   [
                 '@babel/register',
               ],
               exit: true
            }))
}

function generateBuffer(done) {
  const buffer = getBuffer()
  const data   = parseData(converters[10](buffer))

  fs.writeFileSync(path.resolve(__dirname, `./tests/buffers/scs_sdk_plugin_buffer_${data.game.pluginVersion}`), buffer)
  
  done()
}

function generateData(done) {
  const version = 10
  const buffer  = fs.readFileSync(path.resolve(__dirname, `./tests/buffers/scs_sdk_plugin_buffer_${version}`))
  
  const converted = converters[version](buffer)
  const parsed    = parseData(converted)

  fs.writeFileSync(path.resolve(__dirname, `./tests/data/scs_sdk_plugin_raw_data_${version}.json`),    JSON.stringify(converted, null, 3))
  fs.writeFileSync(path.resolve(__dirname, `./tests/data/scs_sdk_plugin_parsed_data_${version}.json`), JSON.stringify(parsed,    null, 3))

  done()
}

function generateDataDocs(done) {
  const buffer     = fs.readFileSync(path.resolve(__dirname, "./tests/buffers/scs_sdk_plugin_buffer_10"))
  const parsedData = parseData(converters[10](buffer))
  const filePath   = path.resolve(__dirname, "./docs/data.md")

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

  return done()
}

function watch() {
  gulp.watch(['src/**/*.js', 'tests/**/*'], {cwd: './'}, test)
}

function hostDocs() {
  liveServer.start({
    host: "0.0.0.0",
    root: "./docs",
    file: "index.html",
  })
}

module.exports.build          = build
module.exports.test           = test
module.exports.generateBuffer = generateBuffer
module.exports.generateData   = generateData
module.exports.docs           = gulp.series(generateDataDocs, hostDocs)
module.exports.default        = gulp.series(test, watch)

