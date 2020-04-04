# Data

## controls

```json
{
   "input": {
      "steering": 1,
      "throttle": 0.33334749937057495,
      "brake": 0,
      "clutch": 0
   },
   "game": {
      "steering": 0.2610137164592743,
      "throttle": 0.2918427884578705,
      "brake": 0,
      "clutch": 0
   }
}
```

### controls.game

```json
{
   "steering": 0.2610137164592743,
   "throttle": 0.2918427884578705,
   "brake": 0,
   "clutch": 0
}
```

### controls.input

```json
{
   "steering": 1,
   "throttle": 0.33334749937057495,
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
         "startingTime": 0,
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
         "startingTime": 0,
         "finishingTime": 0
      },
      "finished": {
         "active": false
      }
   },
   "refuel": {
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
   "refuelPayed": {
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
      "startingTime": 0,
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
      "startingTime": 0,
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
   "startingTime": 0,
   "finishingTime": 0
}
```

#### events.job.delivered

```json
{
   "deliveryTime": 0,
   "startingTime": 0,
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
   "amount": 0,
   "active": false
}
```

### events.refuelPayed

```json
{
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
   "timestamp": {
      "value": 601859.258
   },
   "paused": false,
   "pluginVersion": 10,
   "version": "1.16",
   "game": {
      "id": 1,
      "name": "ets2"
   },
   "telemetryVersion": "1.15",
   "time": {
      "value": 780,
      "unix": 392400000
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

### game.time

```json
{
   "value": 780,
   "unix": 392400000
}
```

### game.timestamp

```json
{
   "value": 601859.258
}
```

## job

```json
{
   "deliveryTime": {
      "value": 1049,
      "unix": 408540000
   },
   "plannedDistance": {
      "km": 1,
      "miles": 1
   },
   "cargo": {
      "mass": 3576.300048828125,
      "unitMass": 238.4199981689453,
      "damage": 0,
      "isLoaded": true,
      "id": "used_plast_c",
      "name": "Used Plastics"
   },
   "isSpecial": false,
   "destination": {
      "city": {
         "id": "kobenhavn",
         "name": "København"
      },
      "company": {
         "id": "renar",
         "name": "Renar Logistik"
      }
   },
   "source": {
      "city": {
         "id": "kobenhavn",
         "name": "København"
      },
      "company": {
         "id": "norr_food",
         "name": "Norrfood"
      }
   },
   "market": {
      "id": "quick_job",
      "name": "Quick Job"
   },
   "income": 354
}
```

### job.cargo

```json
{
   "mass": 3576.300048828125,
   "unitMass": 238.4199981689453,
   "damage": 0,
   "isLoaded": true,
   "id": "used_plast_c",
   "name": "Used Plastics"
}
```

### job.deliveryTime

```json
{
   "value": 1049,
   "unix": 408540000
}
```

### job.destination

```json
{
   "city": {
      "id": "kobenhavn",
      "name": "København"
   },
   "company": {
      "id": "renar",
      "name": "Renar Logistik"
   }
}
```

#### job.destination.city

```json
{
   "id": "kobenhavn",
   "name": "København"
}
```

#### job.destination.company

```json
{
   "id": "renar",
   "name": "Renar Logistik"
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
   "km": 1,
   "miles": 1
}
```

### job.source

```json
{
   "city": {
      "id": "kobenhavn",
      "name": "København"
   },
   "company": {
      "id": "norr_food",
      "name": "Norrfood"
   }
}
```

#### job.source.city

```json
{
   "id": "kobenhavn",
   "name": "København"
}
```

#### job.source.company

```json
{
   "id": "norr_food",
   "name": "Norrfood"
}
```

## navigation

```json
{
   "nextRestStop": 37740000,
   "distance": 754.2119140625,
   "time": 117480.46112060547,
   "speedLimit": {
      "value": 0,
      "kph": 0,
      "mph": 0
   }
}
```

### navigation.speedLimit

```json
{
   "value": 0,
   "kph": 0,
   "mph": 0
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
            "id": 0,
            "name": "static"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": 0.011085576377809048,
         "velocity": 2.672335147857666,
         "steering": 0,
         "rotation": 0.02081902325153351,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": -0.8299999833106995,
            "Y": 0.5363953709602356,
            "Z": 4.782358646392822
         }
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": -0.014565023593604565,
         "velocity": 2.791815757751465,
         "steering": 0,
         "rotation": 0.8265714049339294,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": 0.8299999833106995,
            "Y": 0.5363953709602356,
            "Z": 4.782358646392822
         }
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": 0.013248639181256294,
         "velocity": 2.673236608505249,
         "steering": 0,
         "rotation": 0.9424297213554382,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": -0.8299999833106995,
            "Y": 0.5363953709602356,
            "Z": 3.4716885089874268
         }
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": -0.012401961721479893,
         "velocity": 2.7928123474121094,
         "steering": 0,
         "rotation": 0.7436085939407349,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": 0.8299999833106995,
            "Y": 0.5363953709602356,
            "Z": 3.4716885089874268
         }
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": 0.015568828210234642,
         "velocity": 2.6725502014160156,
         "steering": 0,
         "rotation": 0.8082288503646851,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": true,
         "onGround": true,
         "position": {
            "X": -0.8299999833106995,
            "Y": 0.5363953709602356,
            "Z": 2.0658223628997803
         }
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": -0.010081758722662926,
         "velocity": 2.7920570373535156,
         "steering": 0,
         "rotation": 0.6123186349868774,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": true,
         "onGround": true,
         "position": {
            "X": 0.8299999833106995,
            "Y": 0.5363953709602356,
            "Z": 2.0658223628997803
         }
      }
   ],
   "attached": true,
   "cargo": {
      "damage": 0
   },
   "chassis": {
      "damage": 0
   },
   "acceleration": {
      "linearVelocity": {
         "X": -0.7520157694816589,
         "Y": 0.025314822793006897,
         "Z": -9.20535659790039
      },
      "angularVelocity": {
         "X": 0.0005447171279229224,
         "Y": 0.038614094257354736,
         "Z": 0.000029433185773086734
      },
      "linearAcceleration": {
         "X": -0.7142657041549683,
         "Y": 0.009613700211048126,
         "Z": 0.5458364486694336
      },
      "angularAcceleration": {
         "X": 0.00017187304911203682,
         "Y": 0.03927218168973923,
         "Z": 0.0018393417121842504
      }
   },
   "hook": {
      "position": {
         "X": 0,
         "Y": 1,
         "Z": -4.430164813995361
      }
   },
   "position": {
      "X": 6988.686431884766,
      "Y": 7.56157112121582,
      "Z": -27698.609294891357
   },
   "orientation": {
      "heading": 0.880923330783844,
      "pitch": -0.00026262077153660357,
      "roll": 0.002051371382549405
   },
   "model": {
      "id": "krone.boxliner.chassis_20x2esii",
      "name": ""
   },
   "accessoryId": "scs_container.container_20_green",
   "bodyType": "container",
   "brand": {
      "id": "",
      "name": ""
   },
   "chainType": "single",
   "licensePlate": {
      "value": "NP 91 65",
      "country": {
         "name": "Denmark",
         "id": "denmark"
      }
   },
   "damage": {
      "cargo": 0,
      "chassis": 0
   }
}
```

### trailer.acceleration

```json
{
   "linearVelocity": {
      "X": -0.7520157694816589,
      "Y": 0.025314822793006897,
      "Z": -9.20535659790039
   },
   "angularVelocity": {
      "X": 0.0005447171279229224,
      "Y": 0.038614094257354736,
      "Z": 0.000029433185773086734
   },
   "linearAcceleration": {
      "X": -0.7142657041549683,
      "Y": 0.009613700211048126,
      "Z": 0.5458364486694336
   },
   "angularAcceleration": {
      "X": 0.00017187304911203682,
      "Y": 0.03927218168973923,
      "Z": 0.0018393417121842504
   }
}
```

#### trailer.acceleration.angularAcceleration

```json
{
   "X": 0.00017187304911203682,
   "Y": 0.03927218168973923,
   "Z": 0.0018393417121842504
}
```

#### trailer.acceleration.angularVelocity

```json
{
   "X": 0.0005447171279229224,
   "Y": 0.038614094257354736,
   "Z": 0.000029433185773086734
}
```

#### trailer.acceleration.linearAcceleration

```json
{
   "X": -0.7142657041549683,
   "Y": 0.009613700211048126,
   "Z": 0.5458364486694336
}
```

#### trailer.acceleration.linearVelocity

```json
{
   "X": -0.7520157694816589,
   "Y": 0.025314822793006897,
   "Z": -9.20535659790039
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
   "damage": 0
}
```

### trailer.chassis

```json
{
   "damage": 0
}
```

### trailer.damage

```json
{
   "cargo": 0,
   "chassis": 0
}
```

### trailer.hook

```json
{
   "position": {
      "X": 0,
      "Y": 1,
      "Z": -4.430164813995361
   }
}
```

#### trailer.hook.position

```json
{
   "X": 0,
   "Y": 1,
   "Z": -4.430164813995361
}
```

### trailer.licensePlate

```json
{
   "value": "NP 91 65",
   "country": {
      "name": "Denmark",
      "id": "denmark"
   }
}
```

#### trailer.licensePlate.country

```json
{
   "name": "Denmark",
   "id": "denmark"
}
```

### trailer.model

```json
{
   "id": "krone.boxliner.chassis_20x2esii",
   "name": ""
}
```

### trailer.orientation

```json
{
   "heading": 0.880923330783844,
   "pitch": -0.00026262077153660357,
   "roll": 0.002051371382549405
}
```

### trailer.position

```json
{
   "X": 6988.686431884766,
   "Y": 7.56157112121582,
   "Z": -27698.609294891357
}
```

### trailer.wheels

```json
[
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": 0.011085576377809048,
      "velocity": 2.672335147857666,
      "steering": 0,
      "rotation": 0.02081902325153351,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": -0.8299999833106995,
         "Y": 0.5363953709602356,
         "Z": 4.782358646392822
      }
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": -0.014565023593604565,
      "velocity": 2.791815757751465,
      "steering": 0,
      "rotation": 0.8265714049339294,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": 0.8299999833106995,
         "Y": 0.5363953709602356,
         "Z": 4.782358646392822
      }
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": 0.013248639181256294,
      "velocity": 2.673236608505249,
      "steering": 0,
      "rotation": 0.9424297213554382,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": -0.8299999833106995,
         "Y": 0.5363953709602356,
         "Z": 3.4716885089874268
      }
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": -0.012401961721479893,
      "velocity": 2.7928123474121094,
      "steering": 0,
      "rotation": 0.7436085939407349,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": 0.8299999833106995,
         "Y": 0.5363953709602356,
         "Z": 3.4716885089874268
      }
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": 0.015568828210234642,
      "velocity": 2.6725502014160156,
      "steering": 0,
      "rotation": 0.8082288503646851,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": true,
      "onGround": true,
      "position": {
         "X": -0.8299999833106995,
         "Y": 0.5363953709602356,
         "Z": 2.0658223628997803
      }
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": -0.010081758722662926,
      "velocity": 2.7920570373535156,
      "steering": 0,
      "rotation": 0.6123186349868774,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": true,
      "onGround": true,
      "position": {
         "X": 0.8299999833106995,
         "Y": 0.5363953709602356,
         "Z": 2.0658223628997803
      }
   }
]
```

#### trailer.wheels.0

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5360000133514404,
   "suspDeflection": 0.011085576377809048,
   "velocity": 2.672335147857666,
   "steering": 0,
   "rotation": 0.02081902325153351,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": -0.8299999833106995,
      "Y": 0.5363953709602356,
      "Z": 4.782358646392822
   }
}
```

#### trailer.wheels.1

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5360000133514404,
   "suspDeflection": -0.014565023593604565,
   "velocity": 2.791815757751465,
   "steering": 0,
   "rotation": 0.8265714049339294,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": 0.8299999833106995,
      "Y": 0.5363953709602356,
      "Z": 4.782358646392822
   }
}
```

#### trailer.wheels.2

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5360000133514404,
   "suspDeflection": 0.013248639181256294,
   "velocity": 2.673236608505249,
   "steering": 0,
   "rotation": 0.9424297213554382,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": -0.8299999833106995,
      "Y": 0.5363953709602356,
      "Z": 3.4716885089874268
   }
}
```

#### trailer.wheels.3

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5360000133514404,
   "suspDeflection": -0.012401961721479893,
   "velocity": 2.7928123474121094,
   "steering": 0,
   "rotation": 0.7436085939407349,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": 0.8299999833106995,
      "Y": 0.5363953709602356,
      "Z": 3.4716885089874268
   }
}
```

#### trailer.wheels.4

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5360000133514404,
   "suspDeflection": 0.015568828210234642,
   "velocity": 2.6725502014160156,
   "steering": 0,
   "rotation": 0.8082288503646851,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": true,
   "onGround": true,
   "position": {
      "X": -0.8299999833106995,
      "Y": 0.5363953709602356,
      "Z": 2.0658223628997803
   }
}
```

#### trailer.wheels.5

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5360000133514404,
   "suspDeflection": -0.010081758722662926,
   "velocity": 2.7920570373535156,
   "steering": 0,
   "rotation": 0.6123186349868774,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": true,
   "onGround": true,
   "position": {
      "X": 0.8299999833106995,
      "Y": 0.5363953709602356,
      "Z": 2.0658223628997803
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
               "id": 0,
               "name": "static"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": 0.011085576377809048,
            "velocity": 2.672335147857666,
            "steering": 0,
            "rotation": 0.02081902325153351,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": -0.8299999833106995,
               "Y": 0.5363953709602356,
               "Z": 4.782358646392822
            }
         },
         {
            "substance": {
               "id": 0,
               "name": "static"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": -0.014565023593604565,
            "velocity": 2.791815757751465,
            "steering": 0,
            "rotation": 0.8265714049339294,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": 0.8299999833106995,
               "Y": 0.5363953709602356,
               "Z": 4.782358646392822
            }
         },
         {
            "substance": {
               "id": 0,
               "name": "static"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": 0.013248639181256294,
            "velocity": 2.673236608505249,
            "steering": 0,
            "rotation": 0.9424297213554382,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": -0.8299999833106995,
               "Y": 0.5363953709602356,
               "Z": 3.4716885089874268
            }
         },
         {
            "substance": {
               "id": 0,
               "name": "static"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": -0.012401961721479893,
            "velocity": 2.7928123474121094,
            "steering": 0,
            "rotation": 0.7436085939407349,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": 0.8299999833106995,
               "Y": 0.5363953709602356,
               "Z": 3.4716885089874268
            }
         },
         {
            "substance": {
               "id": 0,
               "name": "static"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": 0.015568828210234642,
            "velocity": 2.6725502014160156,
            "steering": 0,
            "rotation": 0.8082288503646851,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": true,
            "onGround": true,
            "position": {
               "X": -0.8299999833106995,
               "Y": 0.5363953709602356,
               "Z": 2.0658223628997803
            }
         },
         {
            "substance": {
               "id": 0,
               "name": "static"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": -0.010081758722662926,
            "velocity": 2.7920570373535156,
            "steering": 0,
            "rotation": 0.6123186349868774,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": true,
            "onGround": true,
            "position": {
               "X": 0.8299999833106995,
               "Y": 0.5363953709602356,
               "Z": 2.0658223628997803
            }
         }
      ],
      "attached": true,
      "cargo": {
         "damage": 0
      },
      "chassis": {
         "damage": 0
      },
      "acceleration": {
         "linearVelocity": {
            "X": -0.7520157694816589,
            "Y": 0.025314822793006897,
            "Z": -9.20535659790039
         },
         "angularVelocity": {
            "X": 0.0005447171279229224,
            "Y": 0.038614094257354736,
            "Z": 0.000029433185773086734
         },
         "linearAcceleration": {
            "X": -0.7142657041549683,
            "Y": 0.009613700211048126,
            "Z": 0.5458364486694336
         },
         "angularAcceleration": {
            "X": 0.00017187304911203682,
            "Y": 0.03927218168973923,
            "Z": 0.0018393417121842504
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 1,
            "Z": -4.430164813995361
         }
      },
      "position": {
         "X": 6988.686431884766,
         "Y": 7.56157112121582,
         "Z": -27698.609294891357
      },
      "orientation": {
         "heading": 0.880923330783844,
         "pitch": -0.00026262077153660357,
         "roll": 0.002051371382549405
      },
      "model": {
         "id": "krone.boxliner.chassis_20x2esii",
         "name": ""
      },
      "accessoryId": "scs_container.container_20_green",
      "bodyType": "container",
      "brand": {
         "id": "",
         "name": ""
      },
      "chainType": "single",
      "licensePlate": {
         "value": "NP 91 65",
         "country": {
            "name": "Denmark",
            "id": "denmark"
         }
      },
      "damage": {
         "cargo": 0,
         "chassis": 0
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
         "cargo": 0,
         "chassis": 0
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
         "cargo": 0,
         "chassis": 0
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
         "cargo": 0,
         "chassis": 0
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
         "cargo": 0,
         "chassis": 0
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
         "cargo": 0,
         "chassis": 0
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
         "cargo": 0,
         "chassis": 0
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
         "selected": 9,
         "displayed": 9
      },
      "gearRatiosForward": [
         14.9399995803833,
         11.729999542236328,
         9.039999961853027,
         7.090000152587891,
         5.539999961853027,
         4.349999904632568,
         3.440000057220459,
         2.700000047683716,
         2.0799999237060547,
         1.6299999952316284,
         1.2699999809265137,
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
         -17.479999542236328,
         -13.729999542236328,
         -4.019999980926514,
         -3.1600000858306885,
         0,
         0,
         0,
         0
      ],
      "damage": 0,
      "selector": [
         false,
         false
      ],
      "shifterType": "arcade"
   },
   "brakes": {
      "retarder": {
         "steps": 4,
         "level": 0
      },
      "airPressure": {
         "warning": {
            "factor": 69.5999984741211,
            "enabled": false
         },
         "emergency": {
            "factor": 34.79999923706055,
            "enabled": false
         },
         "value": 123.2735366821289
      },
      "temperature": {
         "value": 31.632246017456055
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
            "id": 0,
            "name": "static"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": -0.007532251067459583,
         "velocity": 2.8579611778259277,
         "steering": 0.02890092134475708,
         "rotation": 0.2969536781311035,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": -1.0499999523162842,
            "Y": 0.5059999823570251,
            "Z": -1.810332179069519
         },
         "steerable": true,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "damage": 0
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": 0.00898733176290989,
         "velocity": 3.1351113319396973,
         "steering": 0.02632000297307968,
         "rotation": 0.9150500297546387,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": 1.0499999523162842,
            "Y": 0.5059999823570251,
            "Z": -1.810332179069519
         },
         "steerable": true,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "damage": 0
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": -0.011164143681526184,
         "velocity": 2.8291561603546143,
         "steering": 0,
         "rotation": 0.4926978051662445,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": -0.9168882369995117,
            "Y": 0.5059999823570251,
            "Z": 2.0425631999969482
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": false,
         "onGround": true,
         "damage": 0
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": 0.0037742529530078173,
         "velocity": 3.0748093128204346,
         "steering": 0,
         "rotation": 0.19500264525413513,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": 0.9168882369995117,
            "Y": 0.5059999823570251,
            "Z": 2.0425631999969482
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": false,
         "onGround": true,
         "damage": 0
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
      "capacity": 1400,
      "warning": {
         "factor": 0.15000000596046448,
         "enabled": false
      },
      "value": 990.6223754882812,
      "avgConsumption": 0.6594856977462769,
      "range": 2012.20166015625
   },
   "adBlue": {
      "capacity": 80,
      "warning": {
         "factor": 0.15000000596046448,
         "enabled": false
      },
      "value": 59.53112030029297
   },
   "engine": {
      "oilPressure": {
         "warning": {
            "factor": 10.149999618530273,
            "enabled": false
         },
         "value": 51.909976959228516
      },
      "waterTemperature": {
         "warning": {
            "factor": 105,
            "enabled": false
         },
         "value": 35.438533782958984
      },
      "batteryVoltage": {
         "warning": {
            "factor": 23.760000228881836,
            "enabled": false
         },
         "value": 27.58809471130371
      },
      "rpm": {
         "max": 2300,
         "value": 975.545166015625
      },
      "oilTemperature": {
         "value": 37.30851364135742
      },
      "damage": 0,
      "enabled": true
   },
   "differential": {
      "ratio": 2.640000104904175
   },
   "speed": {
      "value": 9.394007682800293,
      "kph": 34,
      "mph": 21
   },
   "cruiseControl": {
      "value": 0,
      "enabled": false,
      "kph": 0,
      "mph": 0
   },
   "cabin": {
      "damage": 0,
      "position": {
         "X": 0,
         "Y": 1.3630750179290771,
         "Z": -2.387122869491577
      },
      "acceleration": {
         "angularVelocity": {
            "X": -0.0013273038202896714,
            "Y": 0.06782843172550201,
            "Z": -0.0004752987588290125
         },
         "angularAcceleration": {
            "X": -0.0018069964135065675,
            "Y": 0.02506464347243309,
            "Z": 0.000005306716047925875
         }
      },
      "offset": {
         "position": {
            "X": 0.011427490971982479,
            "Y": -0.0006417036056518555,
            "Z": 0.00044083595275878906
         },
         "orientation": {
            "heading": 0.00006426678010029718,
            "pitch": -0.00019189035810995847,
            "roll": -0.001383037306368351
         }
      }
   },
   "chassis": {
      "damage": 0
   },
   "odometer": 681163.5,
   "electric": {
      "enabled": true
   },
   "wipers": {
      "enabled": false
   },
   "head": {
      "position": {
         "X": -0.7097118496894836,
         "Y": 1.255061149597168,
         "Z": 0.33089709281921387
      },
      "offset": {
         "position": {
            "X": 0,
            "Y": 0,
            "Z": 0.11999999731779099
         },
         "orientation": {
            "heading": 0.957099974155426,
            "pitch": -0.017880713567137718,
            "roll": 0
         }
      }
   },
   "hook": {
      "position": {
         "X": 0,
         "Y": 1,
         "Z": 1.3308583498001099
      }
   },
   "acceleration": {
      "linearVelocity": {
         "X": -1.1933386325836182,
         "Y": 0.004659643862396479,
         "Z": -9.383707046508789
      },
      "angularVelocity": {
         "X": -0.0006287384312599897,
         "Y": 0.0677923709154129,
         "Z": -0.00030850162147544324
      },
      "linearAcceleration": {
         "X": -0.42574748396873474,
         "Y": 0.006118857767432928,
         "Z": 0.19645236432552338
      },
      "angularAcceleration": {
         "X": -0.00002956792013719678,
         "Y": 0.026156919077038765,
         "Z": -0.0014450877206400037
      }
   },
   "position": {
      "X": 6992.404357910156,
      "Y": 7.569162845611572,
      "Z": -27702.9903755188
   },
   "orientation": {
      "heading": 0.9078420996665955,
      "pitch": -0.00023457904171664268,
      "roll": -0.0012825197773054242
   },
   "brand": {
      "id": "volvo",
      "name": "Volvo"
   },
   "model": {
      "id": "vehicle.volvo.fh16",
      "name": "FH16 Classic"
   },
   "licensePlate": {
      "value": "BP 26 985",
      "country": {
         "id": "denmark",
         "name": "Denmark"
      }
   },
   "damage": {
      "cabin": 0,
      "chassis": 0,
      "engine": 0,
      "transmission": 0,
      "wheels": 0
   }
}
```

### truck.acceleration

```json
{
   "linearVelocity": {
      "X": -1.1933386325836182,
      "Y": 0.004659643862396479,
      "Z": -9.383707046508789
   },
   "angularVelocity": {
      "X": -0.0006287384312599897,
      "Y": 0.0677923709154129,
      "Z": -0.00030850162147544324
   },
   "linearAcceleration": {
      "X": -0.42574748396873474,
      "Y": 0.006118857767432928,
      "Z": 0.19645236432552338
   },
   "angularAcceleration": {
      "X": -0.00002956792013719678,
      "Y": 0.026156919077038765,
      "Z": -0.0014450877206400037
   }
}
```

#### truck.acceleration.angularAcceleration

```json
{
   "X": -0.00002956792013719678,
   "Y": 0.026156919077038765,
   "Z": -0.0014450877206400037
}
```

#### truck.acceleration.angularVelocity

```json
{
   "X": -0.0006287384312599897,
   "Y": 0.0677923709154129,
   "Z": -0.00030850162147544324
}
```

#### truck.acceleration.linearAcceleration

```json
{
   "X": -0.42574748396873474,
   "Y": 0.006118857767432928,
   "Z": 0.19645236432552338
}
```

#### truck.acceleration.linearVelocity

```json
{
   "X": -1.1933386325836182,
   "Y": 0.004659643862396479,
   "Z": -9.383707046508789
}
```

### truck.adBlue

```json
{
   "capacity": 80,
   "warning": {
      "factor": 0.15000000596046448,
      "enabled": false
   },
   "value": 59.53112030029297
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
         "factor": 69.5999984741211,
         "enabled": false
      },
      "emergency": {
         "factor": 34.79999923706055,
         "enabled": false
      },
      "value": 123.2735366821289
   },
   "temperature": {
      "value": 31.632246017456055
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
      "factor": 69.5999984741211,
      "enabled": false
   },
   "emergency": {
      "factor": 34.79999923706055,
      "enabled": false
   },
   "value": 123.2735366821289
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
   "value": 31.632246017456055
}
```

### truck.brand

```json
{
   "id": "volvo",
   "name": "Volvo"
}
```

### truck.cabin

```json
{
   "damage": 0,
   "position": {
      "X": 0,
      "Y": 1.3630750179290771,
      "Z": -2.387122869491577
   },
   "acceleration": {
      "angularVelocity": {
         "X": -0.0013273038202896714,
         "Y": 0.06782843172550201,
         "Z": -0.0004752987588290125
      },
      "angularAcceleration": {
         "X": -0.0018069964135065675,
         "Y": 0.02506464347243309,
         "Z": 0.000005306716047925875
      }
   },
   "offset": {
      "position": {
         "X": 0.011427490971982479,
         "Y": -0.0006417036056518555,
         "Z": 0.00044083595275878906
      },
      "orientation": {
         "heading": 0.00006426678010029718,
         "pitch": -0.00019189035810995847,
         "roll": -0.001383037306368351
      }
   }
}
```

#### truck.cabin.acceleration

```json
{
   "angularVelocity": {
      "X": -0.0013273038202896714,
      "Y": 0.06782843172550201,
      "Z": -0.0004752987588290125
   },
   "angularAcceleration": {
      "X": -0.0018069964135065675,
      "Y": 0.02506464347243309,
      "Z": 0.000005306716047925875
   }
}
```

#### truck.cabin.offset

```json
{
   "position": {
      "X": 0.011427490971982479,
      "Y": -0.0006417036056518555,
      "Z": 0.00044083595275878906
   },
   "orientation": {
      "heading": 0.00006426678010029718,
      "pitch": -0.00019189035810995847,
      "roll": -0.001383037306368351
   }
}
```

#### truck.cabin.position

```json
{
   "X": 0,
   "Y": 1.3630750179290771,
   "Z": -2.387122869491577
}
```

### truck.chassis

```json
{
   "damage": 0
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
   "cabin": 0,
   "chassis": 0,
   "engine": 0,
   "transmission": 0,
   "wheels": 0
}
```

### truck.differential

```json
{
   "ratio": 2.640000104904175
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
      "value": 51.909976959228516
   },
   "waterTemperature": {
      "warning": {
         "factor": 105,
         "enabled": false
      },
      "value": 35.438533782958984
   },
   "batteryVoltage": {
      "warning": {
         "factor": 23.760000228881836,
         "enabled": false
      },
      "value": 27.58809471130371
   },
   "rpm": {
      "max": 2300,
      "value": 975.545166015625
   },
   "oilTemperature": {
      "value": 37.30851364135742
   },
   "damage": 0,
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
   "value": 27.58809471130371
}
```

#### truck.engine.oilPressure

```json
{
   "warning": {
      "factor": 10.149999618530273,
      "enabled": false
   },
   "value": 51.909976959228516
}
```

#### truck.engine.oilTemperature

```json
{
   "value": 37.30851364135742
}
```

#### truck.engine.rpm

```json
{
   "max": 2300,
   "value": 975.545166015625
}
```

#### truck.engine.waterTemperature

```json
{
   "warning": {
      "factor": 105,
      "enabled": false
   },
   "value": 35.438533782958984
}
```

### truck.fuel

```json
{
   "capacity": 1400,
   "warning": {
      "factor": 0.15000000596046448,
      "enabled": false
   },
   "value": 990.6223754882812,
   "avgConsumption": 0.6594856977462769,
   "range": 2012.20166015625
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
      "X": -0.7097118496894836,
      "Y": 1.255061149597168,
      "Z": 0.33089709281921387
   },
   "offset": {
      "position": {
         "X": 0,
         "Y": 0,
         "Z": 0.11999999731779099
      },
      "orientation": {
         "heading": 0.957099974155426,
         "pitch": -0.017880713567137718,
         "roll": 0
      }
   }
}
```

#### truck.head.offset

```json
{
   "position": {
      "X": 0,
      "Y": 0,
      "Z": 0.11999999731779099
   },
   "orientation": {
      "heading": 0.957099974155426,
      "pitch": -0.017880713567137718,
      "roll": 0
   }
}
```

#### truck.head.position

```json
{
   "X": -0.7097118496894836,
   "Y": 1.255061149597168,
   "Z": 0.33089709281921387
}
```

### truck.hook

```json
{
   "position": {
      "X": 0,
      "Y": 1,
      "Z": 1.3308583498001099
   }
}
```

#### truck.hook.position

```json
{
   "X": 0,
   "Y": 1,
   "Z": 1.3308583498001099
}
```

### truck.licensePlate

```json
{
   "value": "BP 26 985",
   "country": {
      "id": "denmark",
      "name": "Denmark"
   }
}
```

#### truck.licensePlate.country

```json
{
   "id": "denmark",
   "name": "Denmark"
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
   "id": "vehicle.volvo.fh16",
   "name": "FH16 Classic"
}
```

### truck.orientation

```json
{
   "heading": 0.9078420996665955,
   "pitch": -0.00023457904171664268,
   "roll": -0.0012825197773054242
}
```

### truck.position

```json
{
   "X": 6992.404357910156,
   "Y": 7.569162845611572,
   "Z": -27702.9903755188
}
```

### truck.speed

```json
{
   "value": 9.394007682800293,
   "kph": 34,
   "mph": 21
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
      "selected": 9,
      "displayed": 9
   },
   "gearRatiosForward": [
      14.9399995803833,
      11.729999542236328,
      9.039999961853027,
      7.090000152587891,
      5.539999961853027,
      4.349999904632568,
      3.440000057220459,
      2.700000047683716,
      2.0799999237060547,
      1.6299999952316284,
      1.2699999809265137,
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
      -17.479999542236328,
      -13.729999542236328,
      -4.019999980926514,
      -3.1600000858306885,
      0,
      0,
      0,
      0
   ],
   "damage": 0,
   "selector": [
      false,
      false
   ],
   "shifterType": "arcade"
}
```

#### truck.transmission.gear

```json
{
   "selected": 9,
   "displayed": 9
}
```

#### truck.transmission.gearRatiosForward

```json
[
   14.9399995803833,
   11.729999542236328,
   9.039999961853027,
   7.090000152587891,
   5.539999961853027,
   4.349999904632568,
   3.440000057220459,
   2.700000047683716,
   2.0799999237060547,
   1.6299999952316284,
   1.2699999809265137,
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
   -17.479999542236328,
   -13.729999542236328,
   -4.019999980926514,
   -3.1600000858306885,
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
         "id": 0,
         "name": "static"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": -0.007532251067459583,
      "velocity": 2.8579611778259277,
      "steering": 0.02890092134475708,
      "rotation": 0.2969536781311035,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": -1.0499999523162842,
         "Y": 0.5059999823570251,
         "Z": -1.810332179069519
      },
      "steerable": true,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "damage": 0
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": 0.00898733176290989,
      "velocity": 3.1351113319396973,
      "steering": 0.02632000297307968,
      "rotation": 0.9150500297546387,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": 1.0499999523162842,
         "Y": 0.5059999823570251,
         "Z": -1.810332179069519
      },
      "steerable": true,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "damage": 0
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": -0.011164143681526184,
      "velocity": 2.8291561603546143,
      "steering": 0,
      "rotation": 0.4926978051662445,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": -0.9168882369995117,
         "Y": 0.5059999823570251,
         "Z": 2.0425631999969482
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": false,
      "onGround": true,
      "damage": 0
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": 0.0037742529530078173,
      "velocity": 3.0748093128204346,
      "steering": 0,
      "rotation": 0.19500264525413513,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": 0.9168882369995117,
         "Y": 0.5059999823570251,
         "Z": 2.0425631999969482
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": false,
      "onGround": true,
      "damage": 0
   }
]
```

#### truck.wheels.0

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": -0.007532251067459583,
   "velocity": 2.8579611778259277,
   "steering": 0.02890092134475708,
   "rotation": 0.2969536781311035,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": -1.0499999523162842,
      "Y": 0.5059999823570251,
      "Z": -1.810332179069519
   },
   "steerable": true,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "damage": 0
}
```

#### truck.wheels.1

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": 0.00898733176290989,
   "velocity": 3.1351113319396973,
   "steering": 0.02632000297307968,
   "rotation": 0.9150500297546387,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": 1.0499999523162842,
      "Y": 0.5059999823570251,
      "Z": -1.810332179069519
   },
   "steerable": true,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "damage": 0
}
```

#### truck.wheels.2

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": -0.011164143681526184,
   "velocity": 2.8291561603546143,
   "steering": 0,
   "rotation": 0.4926978051662445,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": -0.9168882369995117,
      "Y": 0.5059999823570251,
      "Z": 2.0425631999969482
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": false,
   "onGround": true,
   "damage": 0
}
```

#### truck.wheels.3

```json
{
   "substance": {
      "id": 0,
      "name": "static"
   },
   "radius": 0.5059999823570251,
   "suspDeflection": 0.0037742529530078173,
   "velocity": 3.0748093128204346,
   "steering": 0,
   "rotation": 0.19500264525413513,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": 0.9168882369995117,
      "Y": 0.5059999823570251,
      "Z": 2.0425631999969482
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": false,
   "onGround": true,
   "damage": 0
}
```

### truck.wipers

```json
{
   "enabled": false
}
```

