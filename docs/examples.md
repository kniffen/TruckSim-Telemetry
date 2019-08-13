# Examples

### Getting data
```javascript
const data = telemetry.getData()

console.log(data.game.paused) // -> boolean true:false

```

### Game state change
```javascript
telemetry.game.on("change", function(current, previous) {
  // current  == current game object
  // previous == previous game object

  console.log(current.paused) // -> boolean true:false
})

telemetry.watch() // Start watching the game for changes
```

### Date and Time change
```javascript
telemetry.game.on("time-change", function(current, previous) {
  // current  == { value: 7309, unix: 784140000 }
  // previous == { value: 7308, unix: 784080000 }

  const date = new Date(current.unix) 
  console.log(date) // -> 1970-01-10T01:49:00.000Z
})

telemetry.watch() // Start watching the game for changes
```

### Truck data
```javascript
const truck = telemetry.getTruck() // Truck data object

console.log(truck.wipers.enabled) // -> boolean true:false
```

### Truck fuel data change
```javascript
telemetry.truck.fuel.on("change", function(current, previous) {
  // current  == current fuel object
  // previous == previous fuel object

  if (current.value >= current.capacity) {
    console.log("Fuel tank is full")
  }
})

telemetry.watch() // Start watching the game for changes
```