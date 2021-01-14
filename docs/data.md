# Data

## controls

```json
{
   "input": {
      "steering": 0.01416037231683731,
      "throttle": 0,
      "brake": 0,
      "clutch": 0
   },
   "game": {
      "steering": 0.01416037231683731,
      "throttle": 0.06316018849611282,
      "brake": 0,
      "clutch": 0
   }
}
```

### controls.game

```json
{
   "steering": 0.01416037231683731,
   "throttle": 0.06316018849611282,
   "brake": 0,
   "clutch": 0
}
```

### controls.input

```json
{
   "steering": 0.01416037231683731,
   "throttle": 0,
   "brake": 0,
   "clutch": 0
}
```

## events

```json
{
   "job": {
      "delivered": {
         "deliveryTime": 0,
         "startingTime": 952885740000,
         "finishingTime": 0,
         "earnedXP": 0,
         "cargoDamage": 0,
         "distance": {
            "km": 0,
            "miles": 0
         },
         "autoParked": false,
         "revenue": 0,
         "active": false
      },
      "started": {
         "autoLoaded": false,
         "active": true
      },
      "cancelled": {
         "penalty": 0,
         "active": false,
         "startingTime": 952885740000,
         "finishingTime": 0
      },
      "finished": {
         "active": false
      }
   },
   "refuelPaid": {
      "amount": 0,
      "active": false
   },
   "fine": {
      "offence": {
         "id": "",
         "name": ""
      },
      "amount": 0,
      "active": false
   },
   "ferry": {
      "source": {
         "name": "",
         "id": ""
      },
      "target": {
         "name": "",
         "id": ""
      },
      "amount": 0,
      "active": false
   },
   "train": {
      "source": {
         "name": "",
         "id": ""
      },
      "target": {
         "name": "",
         "id": ""
      },
      "amount": 0,
      "active": false
   },
   "tollgate": {
      "amount": 0,
      "active": false
   },
   "refuel": {
      "active": false
   }
}
```

### events.ferry

```json
{
   "source": {
      "name": "",
      "id": ""
   },
   "target": {
      "name": "",
      "id": ""
   },
   "amount": 0,
   "active": false
}
```

#### events.ferry.source

```json
{
   "name": "",
   "id": ""
}
```

#### events.ferry.target

```json
{
   "name": "",
   "id": ""
}
```

### events.fine

```json
{
   "offence": {
      "id": "",
      "name": ""
   },
   "amount": 0,
   "active": false
}
```

#### events.fine.offence

```json
{
   "id": "",
   "name": ""
}
```

### events.job

```json
{
   "delivered": {
      "deliveryTime": 0,
      "startingTime": 952885740000,
      "finishingTime": 0,
      "earnedXP": 0,
      "cargoDamage": 0,
      "distance": {
         "km": 0,
         "miles": 0
      },
      "autoParked": false,
      "revenue": 0,
      "active": false
   },
   "started": {
      "autoLoaded": false,
      "active": true
   },
   "cancelled": {
      "penalty": 0,
      "active": false,
      "startingTime": 952885740000,
      "finishingTime": 0
   },
   "finished": {
      "active": false
   }
}
```

#### events.job.cancelled

```json
{
   "penalty": 0,
   "active": false,
   "startingTime": 952885740000,
   "finishingTime": 0
}
```

#### events.job.delivered

```json
{
   "deliveryTime": 0,
   "startingTime": 952885740000,
   "finishingTime": 0,
   "earnedXP": 0,
   "cargoDamage": 0,
   "distance": {
      "km": 0,
      "miles": 0
   },
   "autoParked": false,
   "revenue": 0,
   "active": false
}
```

#### events.job.finished

```json
{
   "active": false
}
```

#### events.job.started

```json
{
   "autoLoaded": false,
   "active": true
}
```

### events.refuel

```json
{
   "active": false
}
```

### events.refuelPaid

```json
{
   "amount": 0,
   "active": false
}
```

### events.tollgate

```json
{
   "amount": 0,
   "active": false
}
```

### events.train

```json
{
   "source": {
      "name": "",
      "id": ""
   },
   "target": {
      "name": "",
      "id": ""
   },
   "amount": 0,
   "active": false
}
```

#### events.train.source

```json
{
   "name": "",
   "id": ""
}
```

#### events.train.target

```json
{
   "name": "",
   "id": ""
}
```

## game

```json
{
   "sdkActive": true,
   "paused": true,
   "timestamp": {
      "value": 1183635
   },
   "simulationTimestamp": {
      "value": 3726400
   },
   "renderTimestamp": {
      "value": 3726376
   },
   "pluginVersion": 10,
   "version": "1.16",
   "game": {
      "id": 1,
      "name": "ets2"
   },
   "telemetryVersion": "1.16",
   "time": {
      "value": 15881488,
      "unix": 6719280000
   },
   "maxTrailerCount": 10,
   "scale": 3
}
```

### game.game

```json
{
   "id": 1,
   "name": "ets2"
}
```

### game.renderTimestamp

```json
{
   "value": 3726376
}
```

### game.simulationTimestamp

```json
{
   "value": 3726400
}
```

### game.time

```json
{
   "value": 15881488,
   "unix": 6719280000
}
```

### game.timestamp

```json
{
   "value": 1183635
}
```

## job

```json
{
   "deliveryTime": {
      "value": 15883117,
      "unix": 6817020000
   },
   "plannedDistance": {
      "km": 9,
      "miles": 6
   },
   "cargo": {
      "mass": 3620.099853515625,
      "unitMass": 109.69999694824219,
      "damage": 0.012286542914807796,
      "isLoaded": true,
      "id": "pot_flowers",
      "name": "Potted Flowers"
   },
   "isSpecial": false,
   "destination": {
      "city": {
         "id": "cagliari",
         "name": "Cagliari"
      },
      "company": {
         "id": "eolo_lines",
         "name": "Eolo Lines"
      }
   },
   "source": {
      "city": {
         "id": "napoli",
         "name": "Napoli"
      },
      "company": {
         "id": "ika_bohag",
         "name": "Ika Bohag"
      }
   },
   "market": {
      "id": "quick_job",
      "name": "Quick Job"
   },
   "income": 625
}
```

### job.cargo

```json
{
   "mass": 3620.099853515625,
   "unitMass": 109.69999694824219,
   "damage": 0.012286542914807796,
   "isLoaded": true,
   "id": "pot_flowers",
   "name": "Potted Flowers"
}
```

### job.deliveryTime

```json
{
   "value": 15883117,
   "unix": 6817020000
}
```

### job.destination

```json
{
   "city": {
      "id": "cagliari",
      "name": "Cagliari"
   },
   "company": {
      "id": "eolo_lines",
      "name": "Eolo Lines"
   }
}
```

#### job.destination.city

```json
{
   "id": "cagliari",
   "name": "Cagliari"
}
```

#### job.destination.company

```json
{
   "id": "eolo_lines",
   "name": "Eolo Lines"
}
```

### job.market

```json
{
   "id": "quick_job",
   "name": "Quick Job"
}
```

### job.plannedDistance

```json
{
   "km": 9,
   "miles": 6
}
```

### job.source

```json
{
   "city": {
      "id": "napoli",
      "name": "Napoli"
   },
   "company": {
      "id": "ika_bohag",
      "name": "Ika Bohag"
   }
}
```

#### job.source.city

```json
{
   "id": "napoli",
   "name": "Napoli"
}
```

#### job.source.company

```json
{
   "id": "ika_bohag",
   "name": "Ika Bohag"
}
```

## navigation

```json
{
   "nextRestStop": 36060000,
   "distance": 507127.71875,
   "time": 51296003.90625,
   "speedLimit": {
      "value": 13.88888931274414,
      "kph": 50,
      "mph": 31
   }
}
```

### navigation.speedLimit

```json
{
   "value": 13.88888931274414,
   "kph": 50,
   "mph": 31
}
```

## substances

```json
[
   "static",
   "road",
   "road_snow",
   "dirt",
   "snow",
   "grass",
   "road_dirt",
   "invis",
   "ice",
   "metal",
   "rubber",
   "rumble_stripe",
   "plastic",
   "glass",
   "wood",
   "soft"
]
```

## trailer

```json
{
   "wheels": [
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.4977928102016449,
         "suspDeflection": 0.005765118636190891,
         "velocity": 7.130144119262695,
         "steering": 0,
         "rotation": 0.19902439415454865,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": -0.8199999928474426,
            "Y": 0.5120000243186951,
            "Z": 4.161406993865967
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.4977928102016449,
         "suspDeflection": -0.00528606865555048,
         "velocity": 7.154378890991211,
         "steering": 0,
         "rotation": 0.5382549166679382,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": 0.8199999928474426,
            "Y": 0.5120000243186951,
            "Z": 4.161406993865967
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.4977928102016449,
         "suspDeflection": 0.0056397197768092155,
         "velocity": 7.130401611328125,
         "steering": 0,
         "rotation": 0.41731026768684387,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": -0.8199999928474426,
            "Y": 0.5120000243186951,
            "Z": 2.857391834259033
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.4977928102016449,
         "suspDeflection": -0.0045411731116473675,
         "velocity": 7.154657363891602,
         "steering": 0,
         "rotation": 0.699735701084137,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": 0.8199999928474426,
            "Y": 0.5120000243186951,
            "Z": 2.857391834259033
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.4977928102016449,
         "suspDeflection": 0.005883364472538233,
         "velocity": 7.130166053771973,
         "steering": 0,
         "rotation": 0.00928486417979002,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": -0.8199999928474426,
            "Y": 0.5120000243186951,
            "Z": 1.5416467189788818
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.4977928102016449,
         "suspDeflection": -0.004139657132327557,
         "velocity": 7.154401779174805,
         "steering": 0,
         "rotation": 0.34700703620910645,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": 0.8199999928474426,
            "Y": 0.5120000243186951,
            "Z": 1.5416467189788818
         }
      }
   ],
   "attached": true,
   "cargo": {
      "damage": 0.012286542914807796
   },
   "chassis": {
      "damage": 0.03265746310353279
   },
   "acceleration": {
      "linearVelocity": {
         "X": -0.1502225548028946,
         "Y": 0.010645399801433086,
         "Z": -22.340585708618164
      },
      "angularVelocity": {
         "X": 0.00038741269963793457,
         "Y": 0.007362768054008484,
         "Z": 0.000044053183955838904
      },
      "linearAcceleration": {
         "X": -0.016477234661579132,
         "Y": -0.023886295035481453,
         "Z": -0.04035533592104912
      },
      "angularAcceleration": {
         "X": -0.0006496991845779121,
         "Y": 0.001603596261702478,
         "Z": 0.007708026561886072
      }
   },
   "hook": {
      "position": {
         "X": 0,
         "Y": 1,
         "Z": -5.0657806396484375
      }
   },
   "position": {
      "X": 13885.359828948975,
      "Y": 5.048755645751953,
      "Z": 55469.45361328125
   },
   "orientation": {
      "heading": 0.5463100671768188,
      "pitch": -0.0041887653060257435,
      "roll": -0.0016133665340021253
   },
   "model": {
      "id": "scs_box.reefer.chassis_aerox2esii",
      "name": ""
   },
   "accessoryId": "",
   "bodyType": "refrigerated",
   "brand": {
      "id": "",
      "name": ""
   },
   "chainType": "single",
   "licensePlate": {
      "value": "XA 929PV   ",
      "country": {
         "name": "Italy",
         "id": "italy"
      }
   },
   "damage": {
      "cargo": 0.012286542914807796,
      "chassis": 0.03265746310353279,
      "wheels": 0.004918619524687529
   }
}
```

### trailer.acceleration

```json
{
   "linearVelocity": {
      "X": -0.1502225548028946,
      "Y": 0.010645399801433086,
      "Z": -22.340585708618164
   },
   "angularVelocity": {
      "X": 0.00038741269963793457,
      "Y": 0.007362768054008484,
      "Z": 0.000044053183955838904
   },
   "linearAcceleration": {
      "X": -0.016477234661579132,
      "Y": -0.023886295035481453,
      "Z": -0.04035533592104912
   },
   "angularAcceleration": {
      "X": -0.0006496991845779121,
      "Y": 0.001603596261702478,
      "Z": 0.007708026561886072
   }
}
```

#### trailer.acceleration.angularAcceleration

```json
{
   "X": -0.0006496991845779121,
   "Y": 0.001603596261702478,
   "Z": 0.007708026561886072
}
```

#### trailer.acceleration.angularVelocity

```json
{
   "X": 0.00038741269963793457,
   "Y": 0.007362768054008484,
   "Z": 0.000044053183955838904
}
```

#### trailer.acceleration.linearAcceleration

```json
{
   "X": -0.016477234661579132,
   "Y": -0.023886295035481453,
   "Z": -0.04035533592104912
}
```

#### trailer.acceleration.linearVelocity

```json
{
   "X": -0.1502225548028946,
   "Y": 0.010645399801433086,
   "Z": -22.340585708618164
}
```

### trailer.brand

```json
{
   "id": "",
   "name": ""
}
```

### trailer.cargo

```json
{
   "damage": 0.012286542914807796
}
```

### trailer.chassis

```json
{
   "damage": 0.03265746310353279
}
```

### trailer.damage

```json
{
   "cargo": 0.012286542914807796,
   "chassis": 0.03265746310353279,
   "wheels": 0.004918619524687529
}
```

### trailer.hook

```json
{
   "position": {
      "X": 0,
      "Y": 1,
      "Z": -5.0657806396484375
   }
}
```

#### trailer.hook.position

```json
{
   "X": 0,
   "Y": 1,
   "Z": -5.0657806396484375
}
```

### trailer.licensePlate

```json
{
   "value": "XA 929PV   ",
   "country": {
      "name": "Italy",
      "id": "italy"
   }
}
```

#### trailer.licensePlate.country

```json
{
   "name": "Italy",
   "id": "italy"
}
```

### trailer.model

```json
{
   "id": "scs_box.reefer.chassis_aerox2esii",
   "name": ""
}
```

### trailer.orientation

```json
{
   "heading": 0.5463100671768188,
   "pitch": -0.0041887653060257435,
   "roll": -0.0016133665340021253
}
```

### trailer.position

```json
{
   "X": 13885.359828948975,
   "Y": 5.048755645751953,
   "Z": 55469.45361328125
}
```

### trailer.wheels

```json
[
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.4977928102016449,
      "suspDeflection": 0.005765118636190891,
      "velocity": 7.130144119262695,
      "steering": 0,
      "rotation": 0.19902439415454865,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": -0.8199999928474426,
         "Y": 0.5120000243186951,
         "Z": 4.161406993865967
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.4977928102016449,
      "suspDeflection": -0.00528606865555048,
      "velocity": 7.154378890991211,
      "steering": 0,
      "rotation": 0.5382549166679382,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": 0.8199999928474426,
         "Y": 0.5120000243186951,
         "Z": 4.161406993865967
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.4977928102016449,
      "suspDeflection": 0.0056397197768092155,
      "velocity": 7.130401611328125,
      "steering": 0,
      "rotation": 0.41731026768684387,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": -0.8199999928474426,
         "Y": 0.5120000243186951,
         "Z": 2.857391834259033
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.4977928102016449,
      "suspDeflection": -0.0045411731116473675,
      "velocity": 7.154657363891602,
      "steering": 0,
      "rotation": 0.699735701084137,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": 0.8199999928474426,
         "Y": 0.5120000243186951,
         "Z": 2.857391834259033
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.4977928102016449,
      "suspDeflection": 0.005883364472538233,
      "velocity": 7.130166053771973,
      "steering": 0,
      "rotation": 0.00928486417979002,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": -0.8199999928474426,
         "Y": 0.5120000243186951,
         "Z": 1.5416467189788818
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.4977928102016449,
      "suspDeflection": -0.004139657132327557,
      "velocity": 7.154401779174805,
      "steering": 0,
      "rotation": 0.34700703620910645,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": 0.8199999928474426,
         "Y": 0.5120000243186951,
         "Z": 1.5416467189788818
      }
   }
]
```

#### trailer.wheels.0

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.4977928102016449,
   "suspDeflection": 0.005765118636190891,
   "velocity": 7.130144119262695,
   "steering": 0,
   "rotation": 0.19902439415454865,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": -0.8199999928474426,
      "Y": 0.5120000243186951,
      "Z": 4.161406993865967
   }
}
```

#### trailer.wheels.1

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.4977928102016449,
   "suspDeflection": -0.00528606865555048,
   "velocity": 7.154378890991211,
   "steering": 0,
   "rotation": 0.5382549166679382,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": 0.8199999928474426,
      "Y": 0.5120000243186951,
      "Z": 4.161406993865967
   }
}
```

#### trailer.wheels.2

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.4977928102016449,
   "suspDeflection": 0.0056397197768092155,
   "velocity": 7.130401611328125,
   "steering": 0,
   "rotation": 0.41731026768684387,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": -0.8199999928474426,
      "Y": 0.5120000243186951,
      "Z": 2.857391834259033
   }
}
```

#### trailer.wheels.3

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.4977928102016449,
   "suspDeflection": -0.0045411731116473675,
   "velocity": 7.154657363891602,
   "steering": 0,
   "rotation": 0.699735701084137,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": 0.8199999928474426,
      "Y": 0.5120000243186951,
      "Z": 2.857391834259033
   }
}
```

#### trailer.wheels.4

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.4977928102016449,
   "suspDeflection": 0.005883364472538233,
   "velocity": 7.130166053771973,
   "steering": 0,
   "rotation": 0.00928486417979002,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": -0.8199999928474426,
      "Y": 0.5120000243186951,
      "Z": 1.5416467189788818
   }
}
```

#### trailer.wheels.5

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.4977928102016449,
   "suspDeflection": -0.004139657132327557,
   "velocity": 7.154401779174805,
   "steering": 0,
   "rotation": 0.34700703620910645,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": 0.8199999928474426,
      "Y": 0.5120000243186951,
      "Z": 1.5416467189788818
   }
}
```

## trailers

```json
[
   {
      "wheels": [
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.4977928102016449,
            "suspDeflection": 0.005765118636190891,
            "velocity": 7.130144119262695,
            "steering": 0,
            "rotation": 0.19902439415454865,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": -0.8199999928474426,
               "Y": 0.5120000243186951,
               "Z": 4.161406993865967
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.4977928102016449,
            "suspDeflection": -0.00528606865555048,
            "velocity": 7.154378890991211,
            "steering": 0,
            "rotation": 0.5382549166679382,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": 0.8199999928474426,
               "Y": 0.5120000243186951,
               "Z": 4.161406993865967
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.4977928102016449,
            "suspDeflection": 0.0056397197768092155,
            "velocity": 7.130401611328125,
            "steering": 0,
            "rotation": 0.41731026768684387,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": -0.8199999928474426,
               "Y": 0.5120000243186951,
               "Z": 2.857391834259033
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.4977928102016449,
            "suspDeflection": -0.0045411731116473675,
            "velocity": 7.154657363891602,
            "steering": 0,
            "rotation": 0.699735701084137,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": 0.8199999928474426,
               "Y": 0.5120000243186951,
               "Z": 2.857391834259033
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.4977928102016449,
            "suspDeflection": 0.005883364472538233,
            "velocity": 7.130166053771973,
            "steering": 0,
            "rotation": 0.00928486417979002,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": -0.8199999928474426,
               "Y": 0.5120000243186951,
               "Z": 1.5416467189788818
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.4977928102016449,
            "suspDeflection": -0.004139657132327557,
            "velocity": 7.154401779174805,
            "steering": 0,
            "rotation": 0.34700703620910645,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": 0.8199999928474426,
               "Y": 0.5120000243186951,
               "Z": 1.5416467189788818
            }
         }
      ],
      "attached": true,
      "cargo": {
         "damage": 0.012286542914807796
      },
      "chassis": {
         "damage": 0.03265746310353279
      },
      "acceleration": {
         "linearVelocity": {
            "X": -0.1502225548028946,
            "Y": 0.010645399801433086,
            "Z": -22.340585708618164
         },
         "angularVelocity": {
            "X": 0.00038741269963793457,
            "Y": 0.007362768054008484,
            "Z": 0.000044053183955838904
         },
         "linearAcceleration": {
            "X": -0.016477234661579132,
            "Y": -0.023886295035481453,
            "Z": -0.04035533592104912
         },
         "angularAcceleration": {
            "X": -0.0006496991845779121,
            "Y": 0.001603596261702478,
            "Z": 0.007708026561886072
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 1,
            "Z": -5.0657806396484375
         }
      },
      "position": {
         "X": 13885.359828948975,
         "Y": 5.048755645751953,
         "Z": 55469.45361328125
      },
      "orientation": {
         "heading": 0.5463100671768188,
         "pitch": -0.0041887653060257435,
         "roll": -0.0016133665340021253
      },
      "model": {
         "id": "scs_box.reefer.chassis_aerox2esii",
         "name": ""
      },
      "accessoryId": "",
      "bodyType": "refrigerated",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "single",
      "licensePlate": {
         "value": "XA 929PV   ",
         "country": {
            "name": "Italy",
            "id": "italy"
         }
      },
      "damage": {
         "cargo": 0.012286542914807796,
         "chassis": 0.03265746310353279,
         "wheels": 0.004918619524687529
      }
   },
   {
      "wheels": [],
      "attached": false,
      "cargo": {
         "damage": 0
      },
      "chassis": {
         "damage": 0
      },
      "acceleration": {
         "linearVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "linearAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "position": {
         "X": 0,
         "Y": 0,
         "Z": 0
      },
      "orientation": {
         "heading": 0,
         "pitch": 0,
         "roll": 0
      },
      "model": {
         "id": "",
         "name": ""
      },
      "accessoryId": "",
      "bodyType": "",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "",
      "licensePlate": {
         "value": "",
         "country": {
            "name": "",
            "id": ""
         }
      },
      "damage": {
         "cargo": null,
         "chassis": null,
         "wheels": null
      }
   },
   {
      "wheels": [],
      "attached": false,
      "cargo": {
         "damage": 0
      },
      "chassis": {
         "damage": 0
      },
      "acceleration": {
         "linearVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "linearAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "position": {
         "X": 0,
         "Y": 0,
         "Z": 0
      },
      "orientation": {
         "heading": 0,
         "pitch": 0,
         "roll": 0
      },
      "model": {
         "id": "",
         "name": ""
      },
      "accessoryId": "",
      "bodyType": "",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "",
      "licensePlate": {
         "value": "",
         "country": {
            "name": "",
            "id": ""
         }
      },
      "damage": {
         "cargo": null,
         "chassis": null,
         "wheels": null
      }
   },
   {
      "wheels": [],
      "attached": false,
      "cargo": {
         "damage": 0
      },
      "chassis": {
         "damage": 0
      },
      "acceleration": {
         "linearVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "linearAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "position": {
         "X": 0,
         "Y": 0,
         "Z": 0
      },
      "orientation": {
         "heading": 0,
         "pitch": 0,
         "roll": 0
      },
      "model": {
         "id": "",
         "name": ""
      },
      "accessoryId": "",
      "bodyType": "",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "",
      "licensePlate": {
         "value": "",
         "country": {
            "name": "",
            "id": ""
         }
      },
      "damage": {
         "cargo": null,
         "chassis": null,
         "wheels": null
      }
   },
   {
      "wheels": [],
      "attached": false,
      "cargo": {
         "damage": 0
      },
      "chassis": {
         "damage": 0
      },
      "acceleration": {
         "linearVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "linearAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "position": {
         "X": 0,
         "Y": 0,
         "Z": 0
      },
      "orientation": {
         "heading": 0,
         "pitch": 0,
         "roll": 0
      },
      "model": {
         "id": "",
         "name": ""
      },
      "accessoryId": "",
      "bodyType": "",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "",
      "licensePlate": {
         "value": "",
         "country": {
            "name": "",
            "id": ""
         }
      },
      "damage": {
         "cargo": null,
         "chassis": null,
         "wheels": null
      }
   },
   {
      "wheels": [],
      "attached": false,
      "cargo": {
         "damage": 0
      },
      "chassis": {
         "damage": 0
      },
      "acceleration": {
         "linearVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "linearAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "position": {
         "X": 0,
         "Y": 0,
         "Z": 0
      },
      "orientation": {
         "heading": 0,
         "pitch": 0,
         "roll": 0
      },
      "model": {
         "id": "",
         "name": ""
      },
      "accessoryId": "",
      "bodyType": "",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "",
      "licensePlate": {
         "value": "",
         "country": {
            "name": "",
            "id": ""
         }
      },
      "damage": {
         "cargo": null,
         "chassis": null,
         "wheels": null
      }
   },
   {
      "wheels": [],
      "attached": false,
      "cargo": {
         "damage": 0
      },
      "chassis": {
         "damage": 0
      },
      "acceleration": {
         "linearVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularVelocity": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "linearAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         },
         "angularAcceleration": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 0,
            "Z": 0
         }
      },
      "position": {
         "X": 0,
         "Y": 0,
         "Z": 0
      },
      "orientation": {
         "heading": 0,
         "pitch": 0,
         "roll": 0
      },
      "model": {
         "id": "",
         "name": ""
      },
      "accessoryId": "",
      "bodyType": "",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "",
      "licensePlate": {
         "value": "",
         "country": {
            "name": "",
            "id": ""
         }
      },
      "damage": {
         "cargo": null,
         "chassis": null,
         "wheels": null
      }
   }
]
```

## truck

```json
{
   "transmission": {
      "forwardGears": 12,
      "reverseGears": 4,
      "selectors": 2,
      "slot": 0,
      "slots": [
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 1,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 2,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 3,
            "gear": 0
         },
         {
            "handlePosition": 1,
            "selector": 0,
            "gear": -1
         },
         {
            "handlePosition": 1,
            "selector": 1,
            "gear": -3
         },
         {
            "handlePosition": 1,
            "selector": 2,
            "gear": -2
         },
         {
            "handlePosition": 1,
            "selector": 3,
            "gear": -4
         },
         {
            "handlePosition": 2,
            "selector": 0,
            "gear": 1
         },
         {
            "handlePosition": 2,
            "selector": 1,
            "gear": 2
         },
         {
            "handlePosition": 2,
            "selector": 2,
            "gear": 1
         },
         {
            "handlePosition": 2,
            "selector": 3,
            "gear": 2
         },
         {
            "handlePosition": 3,
            "selector": 0,
            "gear": 3
         },
         {
            "handlePosition": 3,
            "selector": 1,
            "gear": 4
         },
         {
            "handlePosition": 3,
            "selector": 2,
            "gear": 3
         },
         {
            "handlePosition": 3,
            "selector": 3,
            "gear": 4
         },
         {
            "handlePosition": 4,
            "selector": 0,
            "gear": 5
         },
         {
            "handlePosition": 4,
            "selector": 1,
            "gear": 6
         },
         {
            "handlePosition": 4,
            "selector": 2,
            "gear": 5
         },
         {
            "handlePosition": 4,
            "selector": 3,
            "gear": 6
         },
         {
            "handlePosition": 5,
            "selector": 0,
            "gear": 7
         },
         {
            "handlePosition": 5,
            "selector": 1,
            "gear": 8
         },
         {
            "handlePosition": 5,
            "selector": 2,
            "gear": 7
         },
         {
            "handlePosition": 5,
            "selector": 3,
            "gear": 8
         },
         {
            "handlePosition": 6,
            "selector": 0,
            "gear": 9
         },
         {
            "handlePosition": 6,
            "selector": 1,
            "gear": 10
         },
         {
            "handlePosition": 6,
            "selector": 2,
            "gear": 9
         },
         {
            "handlePosition": 6,
            "selector": 3,
            "gear": 10
         },
         {
            "handlePosition": 7,
            "selector": 0,
            "gear": 11
         },
         {
            "handlePosition": 7,
            "selector": 1,
            "gear": 12
         },
         {
            "handlePosition": 7,
            "selector": 2,
            "gear": 11
         },
         {
            "handlePosition": 7,
            "selector": 3,
            "gear": 12
         }
      ],
      "gear": {
         "selected": 12,
         "displayed": 12
      },
      "gearRatiosForward": [
         14.930000305175781,
         11.637999534606934,
         9.02400016784668,
         7.034999847412109,
         5.644000053405762,
         4.400000095367432,
         3.3929998874664307,
         2.6449999809265137,
         2.0510001182556152,
         1.5989999771118164,
         1.2829999923706055,
         1,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0
      ],
      "gearRatiosReverse": [
         -16.38599967956543,
         -12.77400016784668,
         -3.7239999771118164,
         -2.9030001163482666,
         0,
         0,
         0,
         0
      ],
      "damage": 0.011562191881239414,
      "selector": [
         false,
         false
      ],
      "shifterType": "automatic"
   },
   "brakes": {
      "retarder": {
         "steps": 4,
         "level": 0
      },
      "airPressure": {
         "warning": {
            "factor": 80.04000091552734,
            "enabled": false
         },
         "emergency": {
            "factor": 40.02000045776367,
            "enabled": false
         },
         "value": 161.69284057617188
      },
      "temperature": {
         "value": 38.86251449584961
      },
      "parking": {
         "enabled": false
      },
      "motor": {
         "enabled": false
      }
   },
   "wheels": [
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": -0.001552581787109375,
         "velocity": 7.01157808303833,
         "steering": 0.001501315739005804,
         "rotation": 0.10295512527227402,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": -1.0800000429153442,
            "Y": 0.5059999823570251,
            "Z": -1.7431533336639404
         },
         "steerable": true,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "damage": 0.005800096318125725
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": 0.00333808665163815,
         "velocity": 7.044799327850342,
         "steering": 0.001488066976889968,
         "rotation": 0.5011361837387085,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": 1.0800000429153442,
            "Y": 0.5059999823570251,
            "Z": -1.7431533336639404
         },
         "steerable": true,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "damage": 0.005800096318125725
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": -0.0015733108157292008,
         "velocity": 7.01312255859375,
         "steering": 0,
         "rotation": 0.37697938084602356,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": -0.9399999976158142,
            "Y": 0.5059999823570251,
            "Z": 3.2018587589263916
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": true,
         "onGround": true,
         "damage": 0.005800096318125725
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": 0.0009970302926376462,
         "velocity": 7.042023181915283,
         "steering": 0,
         "rotation": 0.07064536213874817,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": 0.9399999976158142,
            "Y": 0.5059999823570251,
            "Z": 3.2018587589263916
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": true,
         "onGround": true,
         "damage": 0.005800096318125725
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": -0.0017971763154491782,
         "velocity": 7.0131402015686035,
         "steering": 0,
         "rotation": 0.2024376094341278,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": -0.9399999976158142,
            "Y": 0.5059999823570251,
            "Z": 1.8172075748443604
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": false,
         "onGround": true,
         "damage": 0.005800096318125725
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": 0.0011243314947932959,
         "velocity": 7.0420427322387695,
         "steering": 0,
         "rotation": 0.8930296897888184,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": 0.9399999976158142,
            "Y": 0.5059999823570251,
            "Z": 1.8172075748443604
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": false,
         "onGround": true,
         "damage": 0.005800096318125725
      }
   ],
   "lights": {
      "auxFront": {
         "value": 0
      },
      "auxRoof": {
         "value": 0
      },
      "dashboardBacklight": 1,
      "blinker": {
         "left": {
            "enabled": false,
            "active": false
         },
         "right": {
            "enabled": false,
            "active": false
         }
      },
      "parking": {
         "enabled": false
      },
      "beamLow": {
         "enabled": false
      },
      "beamHigh": {
         "enabled": false
      },
      "beacon": {
         "enabled": false
      },
      "brake": {
         "enabled": false
      },
      "reverse": {
         "enabled": false
      }
   },
   "fuel": {
      "capacity": 890,
      "warning": {
         "factor": 0.15000000596046448,
         "enabled": false
      },
      "value": 485.2419738769531,
      "avgConsumption": 0.6436440944671631,
      "range": 1516.3812255859375
   },
   "adBlue": {
      "capacity": 90,
      "warning": {
         "factor": 0.15000000596046448,
         "enabled": false
      },
      "value": 69.76210021972656
   },
   "engine": {
      "oilPressure": {
         "warning": {
            "factor": 10.149999618530273,
            "enabled": false
         },
         "value": 62.148075103759766
      },
      "waterTemperature": {
         "warning": {
            "factor": 105,
            "enabled": false
         },
         "value": 49.938499450683594
      },
      "batteryVoltage": {
         "warning": {
            "factor": 23.760000228881836,
            "enabled": false
         },
         "value": 27.470989227294922
      },
      "rpm": {
         "max": 2300,
         "value": 1151.374267578125
      },
      "oilTemperature": {
         "value": 52.570125579833984
      },
      "damage": 0.019268987700343132,
      "enabled": true
   },
   "differential": {
      "ratio": 2.7330000400543213
   },
   "speed": {
      "value": 22.345924377441406,
      "kph": 80,
      "mph": 50
   },
   "cruiseControl": {
      "value": 0,
      "enabled": false,
      "kph": 0,
      "mph": 0
   },
   "cabin": {
      "damage": 0.030827179551124573,
      "position": {
         "X": 8.110428349628203e-16,
         "Y": 1.218508243560791,
         "Z": -2.5016722679138184
      },
      "acceleration": {
         "angularVelocity": {
            "X": 0.0005384649848565459,
            "Y": 0.0078236423432827,
            "Z": 0.0014034437481313944
         },
         "angularAcceleration": {
            "X": 0.0015425382880493999,
            "Y": -0.0029451679438352585,
            "Z": 0.010471916757524014
         }
      },
      "offset": {
         "position": {
            "X": 0.0034351858776062727,
            "Y": -0.0001270771026611328,
            "Z": 0.001405477523803711
         },
         "orientation": {
            "heading": 0.000022098431145423092,
            "pitch": -0.00003802138598985039,
            "roll": -0.00033293376327492297
         }
      }
   },
   "chassis": {
      "damage": 0.038533974438905716
   },
   "odometer": 204520.796875,
   "electric": {
      "enabled": true
   },
   "wipers": {
      "enabled": false
   },
   "head": {
      "position": {
         "X": -0.7175154685974121,
         "Y": 1.60378098487854,
         "Z": 0.5479934215545654
      },
      "offset": {
         "position": {
            "X": -0.019999999552965164,
            "Y": -0.009999999776482582,
            "Z": 0.10000000149011612
         },
         "orientation": {
            "heading": 0,
            "pitch": -0.015215687453746796,
            "roll": 0
         }
      }
   },
   "hook": {
      "position": {
         "X": 0,
         "Y": 1,
         "Z": 2.3557956218719482
      }
   },
   "acceleration": {
      "linearVelocity": {
         "X": -0.12161893397569656,
         "Y": 0.0077315703965723515,
         "Z": -22.34438705444336
      },
      "angularVelocity": {
         "X": 0.0005062947748228908,
         "Y": 0.007781922817230225,
         "Z": 0.0003414476232137531
      },
      "linearAcceleration": {
         "X": 0.023626219481229782,
         "Y": -0.01474964153021574,
         "Z": -0.051409780979156494
      },
      "angularAcceleration": {
         "X": 0.0013207613956183195,
         "Y": -0.002966394182294607,
         "Z": -0.002796672750264406
      }
   },
   "position": {
      "X": 13887.533023834229,
      "Y": 4.876882553100586,
      "Z": 55476.54887390137
   },
   "orientation": {
      "heading": 0.5488433837890625,
      "pitch": -0.003974676597863436,
      "roll": -0.002503795549273491
   },
   "brand": {
      "id": "mercedes",
      "name": "Mercedes-Benz"
   },
   "model": {
      "id": "vehicle.mercedes.actros2014",
      "name": "New Actros"
   },
   "licensePlate": {
      "value": "FZ 474CP   ",
      "country": {
         "id": "italy",
         "name": "Italy"
      }
   },
   "damage": {
      "cabin": 0.030827179551124573,
      "chassis": 0.038533974438905716,
      "engine": 0.019268987700343132,
      "transmission": 0.011562191881239414,
      "wheels": 0.005800096318125725
   }
}
```

### truck.acceleration

```json
{
   "linearVelocity": {
      "X": -0.12161893397569656,
      "Y": 0.0077315703965723515,
      "Z": -22.34438705444336
   },
   "angularVelocity": {
      "X": 0.0005062947748228908,
      "Y": 0.007781922817230225,
      "Z": 0.0003414476232137531
   },
   "linearAcceleration": {
      "X": 0.023626219481229782,
      "Y": -0.01474964153021574,
      "Z": -0.051409780979156494
   },
   "angularAcceleration": {
      "X": 0.0013207613956183195,
      "Y": -0.002966394182294607,
      "Z": -0.002796672750264406
   }
}
```

#### truck.acceleration.angularAcceleration

```json
{
   "X": 0.0013207613956183195,
   "Y": -0.002966394182294607,
   "Z": -0.002796672750264406
}
```

#### truck.acceleration.angularVelocity

```json
{
   "X": 0.0005062947748228908,
   "Y": 0.007781922817230225,
   "Z": 0.0003414476232137531
}
```

#### truck.acceleration.linearAcceleration

```json
{
   "X": 0.023626219481229782,
   "Y": -0.01474964153021574,
   "Z": -0.051409780979156494
}
```

#### truck.acceleration.linearVelocity

```json
{
   "X": -0.12161893397569656,
   "Y": 0.0077315703965723515,
   "Z": -22.34438705444336
}
```

### truck.adBlue

```json
{
   "capacity": 90,
   "warning": {
      "factor": 0.15000000596046448,
      "enabled": false
   },
   "value": 69.76210021972656
}
```

#### truck.adBlue.warning

```json
{
   "factor": 0.15000000596046448,
   "enabled": false
}
```

### truck.brakes

```json
{
   "retarder": {
      "steps": 4,
      "level": 0
   },
   "airPressure": {
      "warning": {
         "factor": 80.04000091552734,
         "enabled": false
      },
      "emergency": {
         "factor": 40.02000045776367,
         "enabled": false
      },
      "value": 161.69284057617188
   },
   "temperature": {
      "value": 38.86251449584961
   },
   "parking": {
      "enabled": false
   },
   "motor": {
      "enabled": false
   }
}
```

#### truck.brakes.airPressure

```json
{
   "warning": {
      "factor": 80.04000091552734,
      "enabled": false
   },
   "emergency": {
      "factor": 40.02000045776367,
      "enabled": false
   },
   "value": 161.69284057617188
}
```

#### truck.brakes.motor

```json
{
   "enabled": false
}
```

#### truck.brakes.parking

```json
{
   "enabled": false
}
```

#### truck.brakes.retarder

```json
{
   "steps": 4,
   "level": 0
}
```

#### truck.brakes.temperature

```json
{
   "value": 38.86251449584961
}
```

### truck.brand

```json
{
   "id": "mercedes",
   "name": "Mercedes-Benz"
}
```

### truck.cabin

```json
{
   "damage": 0.030827179551124573,
   "position": {
      "X": 8.110428349628203e-16,
      "Y": 1.218508243560791,
      "Z": -2.5016722679138184
   },
   "acceleration": {
      "angularVelocity": {
         "X": 0.0005384649848565459,
         "Y": 0.0078236423432827,
         "Z": 0.0014034437481313944
      },
      "angularAcceleration": {
         "X": 0.0015425382880493999,
         "Y": -0.0029451679438352585,
         "Z": 0.010471916757524014
      }
   },
   "offset": {
      "position": {
         "X": 0.0034351858776062727,
         "Y": -0.0001270771026611328,
         "Z": 0.001405477523803711
      },
      "orientation": {
         "heading": 0.000022098431145423092,
         "pitch": -0.00003802138598985039,
         "roll": -0.00033293376327492297
      }
   }
}
```

#### truck.cabin.acceleration

```json
{
   "angularVelocity": {
      "X": 0.0005384649848565459,
      "Y": 0.0078236423432827,
      "Z": 0.0014034437481313944
   },
   "angularAcceleration": {
      "X": 0.0015425382880493999,
      "Y": -0.0029451679438352585,
      "Z": 0.010471916757524014
   }
}
```

#### truck.cabin.offset

```json
{
   "position": {
      "X": 0.0034351858776062727,
      "Y": -0.0001270771026611328,
      "Z": 0.001405477523803711
   },
   "orientation": {
      "heading": 0.000022098431145423092,
      "pitch": -0.00003802138598985039,
      "roll": -0.00033293376327492297
   }
}
```

#### truck.cabin.position

```json
{
   "X": 8.110428349628203e-16,
   "Y": 1.218508243560791,
   "Z": -2.5016722679138184
}
```

### truck.chassis

```json
{
   "damage": 0.038533974438905716
}
```

### truck.cruiseControl

```json
{
   "value": 0,
   "enabled": false,
   "kph": 0,
   "mph": 0
}
```

### truck.damage

```json
{
   "cabin": 0.030827179551124573,
   "chassis": 0.038533974438905716,
   "engine": 0.019268987700343132,
   "transmission": 0.011562191881239414,
   "wheels": 0.005800096318125725
}
```

### truck.differential

```json
{
   "ratio": 2.7330000400543213
}
```

### truck.electric

```json
{
   "enabled": true
}
```

### truck.engine

```json
{
   "oilPressure": {
      "warning": {
         "factor": 10.149999618530273,
         "enabled": false
      },
      "value": 62.148075103759766
   },
   "waterTemperature": {
      "warning": {
         "factor": 105,
         "enabled": false
      },
      "value": 49.938499450683594
   },
   "batteryVoltage": {
      "warning": {
         "factor": 23.760000228881836,
         "enabled": false
      },
      "value": 27.470989227294922
   },
   "rpm": {
      "max": 2300,
      "value": 1151.374267578125
   },
   "oilTemperature": {
      "value": 52.570125579833984
   },
   "damage": 0.019268987700343132,
   "enabled": true
}
```

#### truck.engine.batteryVoltage

```json
{
   "warning": {
      "factor": 23.760000228881836,
      "enabled": false
   },
   "value": 27.470989227294922
}
```

#### truck.engine.oilPressure

```json
{
   "warning": {
      "factor": 10.149999618530273,
      "enabled": false
   },
   "value": 62.148075103759766
}
```

#### truck.engine.oilTemperature

```json
{
   "value": 52.570125579833984
}
```

#### truck.engine.rpm

```json
{
   "max": 2300,
   "value": 1151.374267578125
}
```

#### truck.engine.waterTemperature

```json
{
   "warning": {
      "factor": 105,
      "enabled": false
   },
   "value": 49.938499450683594
}
```

### truck.fuel

```json
{
   "capacity": 890,
   "warning": {
      "factor": 0.15000000596046448,
      "enabled": false
   },
   "value": 485.2419738769531,
   "avgConsumption": 0.6436440944671631,
   "range": 1516.3812255859375
}
```

#### truck.fuel.warning

```json
{
   "factor": 0.15000000596046448,
   "enabled": false
}
```

### truck.head

```json
{
   "position": {
      "X": -0.7175154685974121,
      "Y": 1.60378098487854,
      "Z": 0.5479934215545654
   },
   "offset": {
      "position": {
         "X": -0.019999999552965164,
         "Y": -0.009999999776482582,
         "Z": 0.10000000149011612
      },
      "orientation": {
         "heading": 0,
         "pitch": -0.015215687453746796,
         "roll": 0
      }
   }
}
```

#### truck.head.offset

```json
{
   "position": {
      "X": -0.019999999552965164,
      "Y": -0.009999999776482582,
      "Z": 0.10000000149011612
   },
   "orientation": {
      "heading": 0,
      "pitch": -0.015215687453746796,
      "roll": 0
   }
}
```

#### truck.head.position

```json
{
   "X": -0.7175154685974121,
   "Y": 1.60378098487854,
   "Z": 0.5479934215545654
}
```

### truck.hook

```json
{
   "position": {
      "X": 0,
      "Y": 1,
      "Z": 2.3557956218719482
   }
}
```

#### truck.hook.position

```json
{
   "X": 0,
   "Y": 1,
   "Z": 2.3557956218719482
}
```

### truck.licensePlate

```json
{
   "value": "FZ 474CP   ",
   "country": {
      "id": "italy",
      "name": "Italy"
   }
}
```

#### truck.licensePlate.country

```json
{
   "id": "italy",
   "name": "Italy"
}
```

### truck.lights

```json
{
   "auxFront": {
      "value": 0
   },
   "auxRoof": {
      "value": 0
   },
   "dashboardBacklight": 1,
   "blinker": {
      "left": {
         "enabled": false,
         "active": false
      },
      "right": {
         "enabled": false,
         "active": false
      }
   },
   "parking": {
      "enabled": false
   },
   "beamLow": {
      "enabled": false
   },
   "beamHigh": {
      "enabled": false
   },
   "beacon": {
      "enabled": false
   },
   "brake": {
      "enabled": false
   },
   "reverse": {
      "enabled": false
   }
}
```

#### truck.lights.auxFront

```json
{
   "value": 0
}
```

#### truck.lights.auxRoof

```json
{
   "value": 0
}
```

#### truck.lights.beacon

```json
{
   "enabled": false
}
```

#### truck.lights.beamHigh

```json
{
   "enabled": false
}
```

#### truck.lights.beamLow

```json
{
   "enabled": false
}
```

#### truck.lights.blinker

```json
{
   "left": {
      "enabled": false,
      "active": false
   },
   "right": {
      "enabled": false,
      "active": false
   }
}
```

#### truck.lights.brake

```json
{
   "enabled": false
}
```

#### truck.lights.parking

```json
{
   "enabled": false
}
```

#### truck.lights.reverse

```json
{
   "enabled": false
}
```

### truck.model

```json
{
   "id": "vehicle.mercedes.actros2014",
   "name": "New Actros"
}
```

### truck.orientation

```json
{
   "heading": 0.5488433837890625,
   "pitch": -0.003974676597863436,
   "roll": -0.002503795549273491
}
```

### truck.position

```json
{
   "X": 13887.533023834229,
   "Y": 4.876882553100586,
   "Z": 55476.54887390137
}
```

### truck.speed

```json
{
   "value": 22.345924377441406,
   "kph": 80,
   "mph": 50
}
```

### truck.transmission

```json
{
   "forwardGears": 12,
   "reverseGears": 4,
   "selectors": 2,
   "slot": 0,
   "slots": [
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 1,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 2,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 3,
         "gear": 0
      },
      {
         "handlePosition": 1,
         "selector": 0,
         "gear": -1
      },
      {
         "handlePosition": 1,
         "selector": 1,
         "gear": -3
      },
      {
         "handlePosition": 1,
         "selector": 2,
         "gear": -2
      },
      {
         "handlePosition": 1,
         "selector": 3,
         "gear": -4
      },
      {
         "handlePosition": 2,
         "selector": 0,
         "gear": 1
      },
      {
         "handlePosition": 2,
         "selector": 1,
         "gear": 2
      },
      {
         "handlePosition": 2,
         "selector": 2,
         "gear": 1
      },
      {
         "handlePosition": 2,
         "selector": 3,
         "gear": 2
      },
      {
         "handlePosition": 3,
         "selector": 0,
         "gear": 3
      },
      {
         "handlePosition": 3,
         "selector": 1,
         "gear": 4
      },
      {
         "handlePosition": 3,
         "selector": 2,
         "gear": 3
      },
      {
         "handlePosition": 3,
         "selector": 3,
         "gear": 4
      },
      {
         "handlePosition": 4,
         "selector": 0,
         "gear": 5
      },
      {
         "handlePosition": 4,
         "selector": 1,
         "gear": 6
      },
      {
         "handlePosition": 4,
         "selector": 2,
         "gear": 5
      },
      {
         "handlePosition": 4,
         "selector": 3,
         "gear": 6
      },
      {
         "handlePosition": 5,
         "selector": 0,
         "gear": 7
      },
      {
         "handlePosition": 5,
         "selector": 1,
         "gear": 8
      },
      {
         "handlePosition": 5,
         "selector": 2,
         "gear": 7
      },
      {
         "handlePosition": 5,
         "selector": 3,
         "gear": 8
      },
      {
         "handlePosition": 6,
         "selector": 0,
         "gear": 9
      },
      {
         "handlePosition": 6,
         "selector": 1,
         "gear": 10
      },
      {
         "handlePosition": 6,
         "selector": 2,
         "gear": 9
      },
      {
         "handlePosition": 6,
         "selector": 3,
         "gear": 10
      },
      {
         "handlePosition": 7,
         "selector": 0,
         "gear": 11
      },
      {
         "handlePosition": 7,
         "selector": 1,
         "gear": 12
      },
      {
         "handlePosition": 7,
         "selector": 2,
         "gear": 11
      },
      {
         "handlePosition": 7,
         "selector": 3,
         "gear": 12
      }
   ],
   "gear": {
      "selected": 12,
      "displayed": 12
   },
   "gearRatiosForward": [
      14.930000305175781,
      11.637999534606934,
      9.02400016784668,
      7.034999847412109,
      5.644000053405762,
      4.400000095367432,
      3.3929998874664307,
      2.6449999809265137,
      2.0510001182556152,
      1.5989999771118164,
      1.2829999923706055,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
   ],
   "gearRatiosReverse": [
      -16.38599967956543,
      -12.77400016784668,
      -3.7239999771118164,
      -2.9030001163482666,
      0,
      0,
      0,
      0
   ],
   "damage": 0.011562191881239414,
   "selector": [
      false,
      false
   ],
   "shifterType": "automatic"
}
```

#### truck.transmission.gear

```json
{
   "selected": 12,
   "displayed": 12
}
```

#### truck.transmission.gearRatiosForward

```json
[
   14.930000305175781,
   11.637999534606934,
   9.02400016784668,
   7.034999847412109,
   5.644000053405762,
   4.400000095367432,
   3.3929998874664307,
   2.6449999809265137,
   2.0510001182556152,
   1.5989999771118164,
   1.2829999923706055,
   1,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0
]
```

#### truck.transmission.gearRatiosReverse

```json
[
   -16.38599967956543,
   -12.77400016784668,
   -3.7239999771118164,
   -2.9030001163482666,
   0,
   0,
   0,
   0
]
```

#### truck.transmission.selector

```json
[
   false,
   false
]
```

#### truck.transmission.slots

```json
[
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 1,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 2,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 3,
      "gear": 0
   },
   {
      "handlePosition": 1,
      "selector": 0,
      "gear": -1
   },
   {
      "handlePosition": 1,
      "selector": 1,
      "gear": -3
   },
   {
      "handlePosition": 1,
      "selector": 2,
      "gear": -2
   },
   {
      "handlePosition": 1,
      "selector": 3,
      "gear": -4
   },
   {
      "handlePosition": 2,
      "selector": 0,
      "gear": 1
   },
   {
      "handlePosition": 2,
      "selector": 1,
      "gear": 2
   },
   {
      "handlePosition": 2,
      "selector": 2,
      "gear": 1
   },
   {
      "handlePosition": 2,
      "selector": 3,
      "gear": 2
   },
   {
      "handlePosition": 3,
      "selector": 0,
      "gear": 3
   },
   {
      "handlePosition": 3,
      "selector": 1,
      "gear": 4
   },
   {
      "handlePosition": 3,
      "selector": 2,
      "gear": 3
   },
   {
      "handlePosition": 3,
      "selector": 3,
      "gear": 4
   },
   {
      "handlePosition": 4,
      "selector": 0,
      "gear": 5
   },
   {
      "handlePosition": 4,
      "selector": 1,
      "gear": 6
   },
   {
      "handlePosition": 4,
      "selector": 2,
      "gear": 5
   },
   {
      "handlePosition": 4,
      "selector": 3,
      "gear": 6
   },
   {
      "handlePosition": 5,
      "selector": 0,
      "gear": 7
   },
   {
      "handlePosition": 5,
      "selector": 1,
      "gear": 8
   },
   {
      "handlePosition": 5,
      "selector": 2,
      "gear": 7
   },
   {
      "handlePosition": 5,
      "selector": 3,
      "gear": 8
   },
   {
      "handlePosition": 6,
      "selector": 0,
      "gear": 9
   },
   {
      "handlePosition": 6,
      "selector": 1,
      "gear": 10
   },
   {
      "handlePosition": 6,
      "selector": 2,
      "gear": 9
   },
   {
      "handlePosition": 6,
      "selector": 3,
      "gear": 10
   },
   {
      "handlePosition": 7,
      "selector": 0,
      "gear": 11
   },
   {
      "handlePosition": 7,
      "selector": 1,
      "gear": 12
   },
   {
      "handlePosition": 7,
      "selector": 2,
      "gear": 11
   },
   {
      "handlePosition": 7,
      "selector": 3,
      "gear": 12
   }
]
```

### truck.wheels

```json
[
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": -0.001552581787109375,
      "velocity": 7.01157808303833,
      "steering": 0.001501315739005804,
      "rotation": 0.10295512527227402,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": -1.0800000429153442,
         "Y": 0.5059999823570251,
         "Z": -1.7431533336639404
      },
      "steerable": true,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "damage": 0.005800096318125725
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": 0.00333808665163815,
      "velocity": 7.044799327850342,
      "steering": 0.001488066976889968,
      "rotation": 0.5011361837387085,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": 1.0800000429153442,
         "Y": 0.5059999823570251,
         "Z": -1.7431533336639404
      },
      "steerable": true,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "damage": 0.005800096318125725
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": -0.0015733108157292008,
      "velocity": 7.01312255859375,
      "steering": 0,
      "rotation": 0.37697938084602356,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": -0.9399999976158142,
         "Y": 0.5059999823570251,
         "Z": 3.2018587589263916
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": true,
      "onGround": true,
      "damage": 0.005800096318125725
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": 0.0009970302926376462,
      "velocity": 7.042023181915283,
      "steering": 0,
      "rotation": 0.07064536213874817,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": 0.9399999976158142,
         "Y": 0.5059999823570251,
         "Z": 3.2018587589263916
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": true,
      "onGround": true,
      "damage": 0.005800096318125725
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": -0.0017971763154491782,
      "velocity": 7.0131402015686035,
      "steering": 0,
      "rotation": 0.2024376094341278,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": -0.9399999976158142,
         "Y": 0.5059999823570251,
         "Z": 1.8172075748443604
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": false,
      "onGround": true,
      "damage": 0.005800096318125725
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": 0.0011243314947932959,
      "velocity": 7.0420427322387695,
      "steering": 0,
      "rotation": 0.8930296897888184,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": 0.9399999976158142,
         "Y": 0.5059999823570251,
         "Z": 1.8172075748443604
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": false,
      "onGround": true,
      "damage": 0.005800096318125725
   }
]
```

#### truck.wheels.0

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": -0.001552581787109375,
   "velocity": 7.01157808303833,
   "steering": 0.001501315739005804,
   "rotation": 0.10295512527227402,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": -1.0800000429153442,
      "Y": 0.5059999823570251,
      "Z": -1.7431533336639404
   },
   "steerable": true,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "damage": 0.005800096318125725
}
```

#### truck.wheels.1

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": 0.00333808665163815,
   "velocity": 7.044799327850342,
   "steering": 0.001488066976889968,
   "rotation": 0.5011361837387085,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": 1.0800000429153442,
      "Y": 0.5059999823570251,
      "Z": -1.7431533336639404
   },
   "steerable": true,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "damage": 0.005800096318125725
}
```

#### truck.wheels.2

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": -0.0015733108157292008,
   "velocity": 7.01312255859375,
   "steering": 0,
   "rotation": 0.37697938084602356,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": -0.9399999976158142,
      "Y": 0.5059999823570251,
      "Z": 3.2018587589263916
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": true,
   "onGround": true,
   "damage": 0.005800096318125725
}
```

#### truck.wheels.3

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": 0.0009970302926376462,
   "velocity": 7.042023181915283,
   "steering": 0,
   "rotation": 0.07064536213874817,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": 0.9399999976158142,
      "Y": 0.5059999823570251,
      "Z": 3.2018587589263916
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": true,
   "onGround": true,
   "damage": 0.005800096318125725
}
```

#### truck.wheels.4

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": -0.0017971763154491782,
   "velocity": 7.0131402015686035,
   "steering": 0,
   "rotation": 0.2024376094341278,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": -0.9399999976158142,
      "Y": 0.5059999823570251,
      "Z": 1.8172075748443604
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": false,
   "onGround": true,
   "damage": 0.005800096318125725
}
```

#### truck.wheels.5

```json
{
   "substance": {
      "id": 1,
      "name": "road"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": 0.0011243314947932959,
   "velocity": 7.0420427322387695,
   "steering": 0,
   "rotation": 0.8930296897888184,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": 0.9399999976158142,
      "Y": 0.5059999823570251,
      "Z": 1.8172075748443604
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": false,
   "onGround": true,
   "damage": 0.005800096318125725
}
```

### truck.wipers

```json
{
   "enabled": false
}
```

