# Functions

### getBuffer()
**Returns: [scs-sdk-plugin memory buffer](google.com)**

### getData()
**Returns: [data object](data.md)**

### getControls()
**Returns: [controls object](data/controls.md)**

### getTruck()
**Returns: [truck object](data/truck.md)**

### getTrailers()
**Returns: [trailers array](data/trailers.md)**

### getTrailer()
**Returns: [trailer object](data/trailer.md)**

### getJob()
**Returns: [job object](data/job.md)**

### getNavigation()
**Returns: [navigation object](data/navigation.md)**

### watch({options})
**Use: starts watching the game for changes at every given interval**

| Option   | type   | Default | Minimum | Required |
| -------- | ------ | ------- | ------- |          |
| interval | number | 100     | 100     | no       |

#### Example
```javascript
telemetry.game.on("change", function(current, previous) {
  /* use data */
})

telemetry.watch({interval: 200})
```

### stop()
**Use: stop watching the game for changes**

#### Example
```javascript
telemetry.game.on("change", function(current, previous) {
  /* use data */
})

telemetry.watch()

// Stop watching after 5 seconds
setTimeout(function() {
  telemetry.stop()  
}, 5000)
```