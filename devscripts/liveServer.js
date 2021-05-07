const liveServer = require('live-server')

liveServer.start({
  host: "0.0.0.0",
  root: "./docs",
  file: "index.html",
})