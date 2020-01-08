# Data

## controls

```json
{
   "input": {
      "steering": 0,
      "throttle": 0,
      "brake": 0,
      "clutch": 0
   },
   "game": {
      "steering": 0,
      "throttle": 0,
      "brake": 1,
      "clutch": 0
   }
}
```

### controls.game

```json
{
   "steering": 0,
   "throttle": 0,
   "brake": 1,
   "clutch": 0
}
```

### controls.input

```json
{
   "steering": 0,
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
         "active": false
      },
      "finished": {
         "active": false
      }
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
      "active": false
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
   "active": false
}
```

#### events.job.delivered

```json
{
   "deliveryTime": 0,
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
      "value": 533.312
   },
   "paused": true,
   "pluginVersion": 10,
   "version": "1.14",
   "game": {
      "id": 1,
      "name": "ets2"
   },
   "telemetryVersion": "1.14",
   "time": {
      "value": 7238,
      "unix": 779880000
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
   "value": 7238,
   "unix": 779880000
}
```

### game.timestamp

```json
{
   "value": 533.312
}
```

## job

```json
{
   "deliveryTime": {
      "value": 7537,
      "unix": 797820000
   },
   "cargo": {
      "mass": 18918.900390625,
      "unitMass": 573.2999877929688,
      "damage": 0.0006701607489958405,
      "isLoaded": true,
      "id": "canned_tuna",
      "name": "Canned Tuna"
   },
   "isSpecial": false,
   "destination": {
      "city": {
         "id": "bergen",
         "name": "Bergen"
      },
      "company": {
         "id": "drekkar",
         "name": "Drekkar Trans"
      }
   },
   "source": {
      "city": {
         "id": "bergen",
         "name": "Bergen"
      },
      "company": {
         "id": "polar_fish",
         "name": "Polar Fish"
      }
   },
   "market": {
      "id": "quick_job",
      "name": "Quick Job"
   },
   "income": 362
}
```

### job.cargo

```json
{
   "mass": 18918.900390625,
   "unitMass": 573.2999877929688,
   "damage": 0.0006701607489958405,
   "isLoaded": true,
   "id": "canned_tuna",
   "name": "Canned Tuna"
}
```

### job.deliveryTime

```json
{
   "value": 7537,
   "unix": 797820000
}
```

### job.destination

```json
{
   "city": {
      "id": "bergen",
      "name": "Bergen"
   },
   "company": {
      "id": "drekkar",
      "name": "Drekkar Trans"
   }
}
```

#### job.destination.city

```json
{
   "id": "bergen",
   "name": "Bergen"
}
```

#### job.destination.company

```json
{
   "id": "drekkar",
   "name": "Drekkar Trans"
}
```

### job.market

```json
{
   "id": "quick_job",
   "name": "Quick Job"
}
```

### job.source

```json
{
   "city": {
      "id": "bergen",
      "name": "Bergen"
   },
   "company": {
      "id": "polar_fish",
      "name": "Polar Fish"
   }
}
```

#### job.source.city

```json
{
   "id": "bergen",
   "name": "Bergen"
}
```

#### job.source.company

```json
{
   "id": "polar_fish",
   "name": "Polar Fish"
}
```

## navigation

```json
{
   "nextRestStop": 39540000,
   "distance": 273.49658203125,
   "time": 39562.0231628418,
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
         "radius": 0.5360000133514404,
         "suspDeflection": -0.008939752355217934,
         "velocity": -0.0002898520906455815,
         "steering": 0,
         "rotation": 0.9981868863105774,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": -0.8413429856300354,
            "Y": 0.5415486693382263,
            "Z": 3.5108704566955566
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": -0.01698184385895729,
         "velocity": 0.0002593270328361541,
         "steering": 0,
         "rotation": 0.9426337480545044,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": 0.8413429856300354,
            "Y": 0.5415486693382263,
            "Z": 3.5108704566955566
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": 0.007614211644977331,
         "velocity": -0.0003720353706739843,
         "steering": 0,
         "rotation": 0.8869115114212036,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": -0.8413429856300354,
            "Y": 0.5406518578529358,
            "Z": 2.221005439758301
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": 0.0029096745420247316,
         "velocity": 0.00027780470554716885,
         "steering": 0,
         "rotation": 0.831326961517334,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "position": {
            "X": 0.8413429856300354,
            "Y": 0.5406518578529358,
            "Z": 2.221005439758301
         }
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": 0.007554301992058754,
         "velocity": -0.0003599947667680681,
         "steering": 0,
         "rotation": 0.7758244276046753,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": true,
         "onGround": true,
         "position": {
            "X": -0.8413429856300354,
            "Y": 0.5377593636512756,
            "Z": 0.9414224624633789
         }
      },
      {
         "substance": {
            "id": 1,
            "name": "road"
         },
         "radius": 0.5360000133514404,
         "suspDeflection": 0.022389234974980354,
         "velocity": 0.00030750795849598944,
         "steering": 0,
         "rotation": 0.720158040523529,
         "steerable": false,
         "simulated": true,
         "powered": false,
         "liftable": true,
         "onGround": true,
         "position": {
            "X": 0.8413429856300354,
            "Y": 0.5377593636512756,
            "Z": 0.9414224624633789
         }
      }
   ],
   "attached": true,
   "cargo": {
      "damage": 0.0006701607489958405
   },
   "chassis": {
      "damage": 0.00824151374399662
   },
   "acceleration": {
      "linearVelocity": {
         "X": 0.008739281445741653,
         "Y": 0.0008155117393471301,
         "Z": 0.0006451276130974293
      },
      "angularVelocity": {
         "X": 0.00017785612726584077,
         "Y": 0.0004528241406660527,
         "Z": -0.005526624154299498
      },
      "linearAcceleration": {
         "X": -0.02382512018084526,
         "Y": 0.11556900292634964,
         "Z": -0.04338977113366127
      },
      "angularAcceleration": {
         "X": 0.0035117140505462885,
         "Y": 0.0022492464631795883,
         "Z": -0.014959881082177162
      }
   },
   "hook": {
      "position": {
         "X": 0,
         "Y": 1.0035500526428223,
         "Z": -5.060946464538574
      }
   },
   "position": {
      "X": -10182.099548339844,
      "Y": 2.8594589233398438,
      "Z": -56971.34114074707
   },
   "orientation": {
      "heading": 0.987075924873352,
      "pitch": -0.0016184132546186447,
      "roll": 0.00004561048262985423
   },
   "model": {
      "id": "krone.coolliner",
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
      "value": "HN 4022",
      "country": {
         "name": "Norway",
         "id": "norway"
      }
   },
   "damage": {
      "cargo": 0.0006701607489958405,
      "chassis": 0.00824151374399662
   }
}
```

### trailer.acceleration

```json
{
   "linearVelocity": {
      "X": 0.008739281445741653,
      "Y": 0.0008155117393471301,
      "Z": 0.0006451276130974293
   },
   "angularVelocity": {
      "X": 0.00017785612726584077,
      "Y": 0.0004528241406660527,
      "Z": -0.005526624154299498
   },
   "linearAcceleration": {
      "X": -0.02382512018084526,
      "Y": 0.11556900292634964,
      "Z": -0.04338977113366127
   },
   "angularAcceleration": {
      "X": 0.0035117140505462885,
      "Y": 0.0022492464631795883,
      "Z": -0.014959881082177162
   }
}
```

#### trailer.acceleration.angularAcceleration

```json
{
   "X": 0.0035117140505462885,
   "Y": 0.0022492464631795883,
   "Z": -0.014959881082177162
}
```

#### trailer.acceleration.angularVelocity

```json
{
   "X": 0.00017785612726584077,
   "Y": 0.0004528241406660527,
   "Z": -0.005526624154299498
}
```

#### trailer.acceleration.linearAcceleration

```json
{
   "X": -0.02382512018084526,
   "Y": 0.11556900292634964,
   "Z": -0.04338977113366127
}
```

#### trailer.acceleration.linearVelocity

```json
{
   "X": 0.008739281445741653,
   "Y": 0.0008155117393471301,
   "Z": 0.0006451276130974293
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
   "damage": 0.0006701607489958405
}
```

### trailer.chassis

```json
{
   "damage": 0.00824151374399662
}
```

### trailer.damage

```json
{
   "cargo": 0.0006701607489958405,
   "chassis": 0.00824151374399662
}
```

### trailer.hook

```json
{
   "position": {
      "X": 0,
      "Y": 1.0035500526428223,
      "Z": -5.060946464538574
   }
}
```

#### trailer.hook.position

```json
{
   "X": 0,
   "Y": 1.0035500526428223,
   "Z": -5.060946464538574
}
```

### trailer.licensePlate

```json
{
   "value": "HN 4022",
   "country": {
      "name": "Norway",
      "id": "norway"
   }
}
```

#### trailer.licensePlate.country

```json
{
   "name": "Norway",
   "id": "norway"
}
```

### trailer.model

```json
{
   "id": "krone.coolliner",
   "name": ""
}
```

### trailer.orientation

```json
{
   "heading": 0.987075924873352,
   "pitch": -0.0016184132546186447,
   "roll": 0.00004561048262985423
}
```

### trailer.position

```json
{
   "X": -10182.099548339844,
   "Y": 2.8594589233398438,
   "Z": -56971.34114074707
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
      "radius": 0.5360000133514404,
      "suspDeflection": -0.008939752355217934,
      "velocity": -0.0002898520906455815,
      "steering": 0,
      "rotation": 0.9981868863105774,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": -0.8413429856300354,
         "Y": 0.5415486693382263,
         "Z": 3.5108704566955566
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": -0.01698184385895729,
      "velocity": 0.0002593270328361541,
      "steering": 0,
      "rotation": 0.9426337480545044,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": 0.8413429856300354,
         "Y": 0.5415486693382263,
         "Z": 3.5108704566955566
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": 0.007614211644977331,
      "velocity": -0.0003720353706739843,
      "steering": 0,
      "rotation": 0.8869115114212036,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": -0.8413429856300354,
         "Y": 0.5406518578529358,
         "Z": 2.221005439758301
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": 0.0029096745420247316,
      "velocity": 0.00027780470554716885,
      "steering": 0,
      "rotation": 0.831326961517334,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "position": {
         "X": 0.8413429856300354,
         "Y": 0.5406518578529358,
         "Z": 2.221005439758301
      }
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": 0.007554301992058754,
      "velocity": -0.0003599947667680681,
      "steering": 0,
      "rotation": 0.7758244276046753,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": true,
      "onGround": true,
      "position": {
         "X": -0.8413429856300354,
         "Y": 0.5377593636512756,
         "Z": 0.9414224624633789
      }
   },
   {
      "substance": {
         "id": 1,
         "name": "road"
      },
      "radius": 0.5360000133514404,
      "suspDeflection": 0.022389234974980354,
      "velocity": 0.00030750795849598944,
      "steering": 0,
      "rotation": 0.720158040523529,
      "steerable": false,
      "simulated": true,
      "powered": false,
      "liftable": true,
      "onGround": true,
      "position": {
         "X": 0.8413429856300354,
         "Y": 0.5377593636512756,
         "Z": 0.9414224624633789
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
   "radius": 0.5360000133514404,
   "suspDeflection": -0.008939752355217934,
   "velocity": -0.0002898520906455815,
   "steering": 0,
   "rotation": 0.9981868863105774,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": -0.8413429856300354,
      "Y": 0.5415486693382263,
      "Z": 3.5108704566955566
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
   "radius": 0.5360000133514404,
   "suspDeflection": -0.01698184385895729,
   "velocity": 0.0002593270328361541,
   "steering": 0,
   "rotation": 0.9426337480545044,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": 0.8413429856300354,
      "Y": 0.5415486693382263,
      "Z": 3.5108704566955566
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
   "radius": 0.5360000133514404,
   "suspDeflection": 0.007614211644977331,
   "velocity": -0.0003720353706739843,
   "steering": 0,
   "rotation": 0.8869115114212036,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": -0.8413429856300354,
      "Y": 0.5406518578529358,
      "Z": 2.221005439758301
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
   "radius": 0.5360000133514404,
   "suspDeflection": 0.0029096745420247316,
   "velocity": 0.00027780470554716885,
   "steering": 0,
   "rotation": 0.831326961517334,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "position": {
      "X": 0.8413429856300354,
      "Y": 0.5406518578529358,
      "Z": 2.221005439758301
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
   "suspDeflection": 0.007554301992058754,
   "velocity": -0.0003599947667680681,
   "steering": 0,
   "rotation": 0.7758244276046753,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": true,
   "onGround": true,
   "position": {
      "X": -0.8413429856300354,
      "Y": 0.5377593636512756,
      "Z": 0.9414224624633789
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
   "radius": 0.5360000133514404,
   "suspDeflection": 0.022389234974980354,
   "velocity": 0.00030750795849598944,
   "steering": 0,
   "rotation": 0.720158040523529,
   "steerable": false,
   "simulated": true,
   "powered": false,
   "liftable": true,
   "onGround": true,
   "position": {
      "X": 0.8413429856300354,
      "Y": 0.5377593636512756,
      "Z": 0.9414224624633789
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
            "radius": 0.5360000133514404,
            "suspDeflection": -0.008939752355217934,
            "velocity": -0.0002898520906455815,
            "steering": 0,
            "rotation": 0.9981868863105774,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": -0.8413429856300354,
               "Y": 0.5415486693382263,
               "Z": 3.5108704566955566
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": -0.01698184385895729,
            "velocity": 0.0002593270328361541,
            "steering": 0,
            "rotation": 0.9426337480545044,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": 0.8413429856300354,
               "Y": 0.5415486693382263,
               "Z": 3.5108704566955566
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": 0.007614211644977331,
            "velocity": -0.0003720353706739843,
            "steering": 0,
            "rotation": 0.8869115114212036,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": -0.8413429856300354,
               "Y": 0.5406518578529358,
               "Z": 2.221005439758301
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": 0.0029096745420247316,
            "velocity": 0.00027780470554716885,
            "steering": 0,
            "rotation": 0.831326961517334,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": false,
            "onGround": true,
            "position": {
               "X": 0.8413429856300354,
               "Y": 0.5406518578529358,
               "Z": 2.221005439758301
            }
         },
         {
            "substance": {
               "id": 0,
               "name": "static"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": 0.007554301992058754,
            "velocity": -0.0003599947667680681,
            "steering": 0,
            "rotation": 0.7758244276046753,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": true,
            "onGround": true,
            "position": {
               "X": -0.8413429856300354,
               "Y": 0.5377593636512756,
               "Z": 0.9414224624633789
            }
         },
         {
            "substance": {
               "id": 1,
               "name": "road"
            },
            "radius": 0.5360000133514404,
            "suspDeflection": 0.022389234974980354,
            "velocity": 0.00030750795849598944,
            "steering": 0,
            "rotation": 0.720158040523529,
            "steerable": false,
            "simulated": true,
            "powered": false,
            "liftable": true,
            "onGround": true,
            "position": {
               "X": 0.8413429856300354,
               "Y": 0.5377593636512756,
               "Z": 0.9414224624633789
            }
         }
      ],
      "attached": true,
      "cargo": {
         "damage": 0.0006701607489958405
      },
      "chassis": {
         "damage": 0.00824151374399662
      },
      "acceleration": {
         "linearVelocity": {
            "X": 0.008739281445741653,
            "Y": 0.0008155117393471301,
            "Z": 0.0006451276130974293
         },
         "angularVelocity": {
            "X": 0.00017785612726584077,
            "Y": 0.0004528241406660527,
            "Z": -0.005526624154299498
         },
         "linearAcceleration": {
            "X": -0.02382512018084526,
            "Y": 0.11556900292634964,
            "Z": -0.04338977113366127
         },
         "angularAcceleration": {
            "X": 0.0035117140505462885,
            "Y": 0.0022492464631795883,
            "Z": -0.014959881082177162
         }
      },
      "hook": {
         "position": {
            "X": 0,
            "Y": 1.0035500526428223,
            "Z": -5.060946464538574
         }
      },
      "position": {
         "X": -10182.099548339844,
         "Y": 2.8594589233398438,
         "Z": -56971.34114074707
      },
      "orientation": {
         "heading": 0.987075924873352,
         "pitch": -0.0016184132546186447,
         "roll": 0.00004561048262985423
      },
      "model": {
         "id": "krone.coolliner",
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
         "value": "HN 4022",
         "country": {
            "name": "Norway",
            "id": "norway"
         }
      },
      "damage": {
         "cargo": 0.0006701607489958405,
         "chassis": 0.00824151374399662
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
      "reverseGears": 2,
      "selectors": 1,
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
            "handlePosition": 1,
            "selector": 0,
            "gear": -1
         },
         {
            "handlePosition": 1,
            "selector": 1,
            "gear": -2
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
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         },
         {
            "handlePosition": 0,
            "selector": 0,
            "gear": 0
         }
      ],
      "gear": {
         "selected": 0,
         "displayed": 0
      },
      "gearRatiosForward": [
         9.163999557495117,
         7.330999851226807,
         5.822999954223633,
         4.658999919891357,
         3.75,
         3,
         2.444000005722046,
         1.9550000429153442,
         1.5529999732971191,
         1.2419999837875366,
         1,
         0.800000011920929,
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
         -11.95300006866455,
         -9.562999725341797,
         0,
         0,
         0,
         0,
         0,
         0
      ],
      "damage": 0.0004944907850585878,
      "selector": [
         false,
         false
      ],
      "shifterType": "arcade"
   },
   "brakes": {
      "retarder": {
         "steps": 5,
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
         "value": 124.40995788574219
      },
      "temperature": {
         "value": 21.060251235961914
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
         "suspDeflection": 0.012256443500518799,
         "velocity": -0.00016334700922016054,
         "steering": 0,
         "rotation": 0.9994822144508362,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": -1.0449999570846558,
            "Y": 0.5,
            "Z": -1.6399999856948853
         },
         "steerable": true,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "damage": 0.0002472453925292939
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": -0.012421095743775368,
         "velocity": -0.00006447999476222321,
         "steering": 0,
         "rotation": 0.9440193176269531,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": 1.0449999570846558,
            "Y": 0.5,
            "Z": -1.6399999856948853
         },
         "steerable": true,
         "simulated": true,
         "powered": false,
         "liftable": false,
         "onGround": true,
         "damage": 0.0002472453925292939
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": -0.03638547658920288,
         "velocity": -0.00013093079905956984,
         "steering": 0,
         "rotation": 0.8885490894317627,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": -0.9300000071525574,
            "Y": 0.5,
            "Z": 2.094278573989868
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": false,
         "onGround": true,
         "damage": 0.0002472453925292939
      },
      {
         "substance": {
            "id": 0,
            "name": "static"
         },
         "radius": 0.5059999823570251,
         "suspDeflection": 0.03708859905600548,
         "velocity": -0.0002234351122751832,
         "steering": 0,
         "rotation": 0.8327707052230835,
         "lift": 0,
         "liftOffset": 0,
         "position": {
            "X": 0.9300000071525574,
            "Y": 0.5,
            "Z": 2.094278573989868
         },
         "steerable": false,
         "simulated": true,
         "powered": true,
         "liftable": false,
         "onGround": true,
         "damage": 0.0002472453925292939
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
      "capacity": 1290,
      "warning": {
         "factor": 0.15000000596046448,
         "enabled": false
      },
      "value": 1136.724853515625,
      "avgConsumption": 1.0358302593231201,
      "range": 2308.972412109375
   },
   "adBlue": {
      "capacity": 105,
      "warning": {
         "factor": 0.15000000596046448,
         "enabled": false
      },
      "value": 95.8034896850586
   },
   "engine": {
      "oilPressure": {
         "warning": {
            "factor": 10.149999618530273,
            "enabled": true
         },
         "value": 0
      },
      "waterTemperature": {
         "warning": {
            "factor": 105,
            "enabled": false
         },
         "value": 16.014619827270508
      },
      "batteryVoltage": {
         "warning": {
            "factor": 23.799999237060547,
            "enabled": true
         },
         "value": 27.476198196411133
      },
      "rpm": {
         "max": 2500,
         "value": 0
      },
      "oilTemperature": {
         "value": 16.01543426513672
      },
      "damage": 0.0008241513278335333,
      "enabled": false
   },
   "differential": {
      "ratio": 3.0799999237060547
   },
   "speed": {
      "value": 0,
      "kph": 0,
      "mph": 0
   },
   "cruiseControl": {
      "value": 0,
      "enabled": false,
      "kph": 0,
      "mph": 0
   },
   "cabin": {
      "damage": 0.0013186422875151038,
      "position": {
         "X": 0,
         "Y": 1.2947975397109985,
         "Z": -2.2461023330688477
      },
      "acceleration": {
         "angularVelocity": {
            "X": -0.00038687902269884944,
            "Y": -0.000041278646676801145,
            "Z": 0.001435337821021676
         },
         "angularAcceleration": {
            "X": 0.0035878876224160194,
            "Y": -0.001774521660991013,
            "Z": 0.0021061147563159466
         }
      },
      "offset": {
         "position": {
            "X": -0.00008421088568866253,
            "Y": 0.00029718875885009766,
            "Z": 0.006613731384277344
         },
         "orientation": {
            "heading": 0.9999334216117859,
            "pitch": -0.0000026941299893223913,
            "roll": -0.00012723123654723167
         }
      }
   },
   "chassis": {
      "damage": 0.0016483026556670666
   },
   "odometer": 83617.2578125,
   "electric": {
      "enabled": false
   },
   "wipers": {
      "enabled": false
   },
   "head": {
      "position": {
         "X": -0.6832099556922913,
         "Y": 1.4106093645095825,
         "Z": 0.38374221324920654
      },
      "offset": {
         "position": {
            "X": 0,
            "Y": 0.009999999776482582,
            "Z": 0.029999999329447746
         },
         "orientation": {
            "heading": 0,
            "pitch": -0.025000009685754776,
            "roll": 0
         }
      }
   },
   "hook": {
      "position": {
         "X": 0,
         "Y": 1,
         "Z": 1.42624032497406
      }
   },
   "acceleration": {
      "linearVelocity": {
         "X": 0.0010731453076004982,
         "Y": 0.0009856170509010553,
         "Z": 0.0011698190355673432
      },
      "angularVelocity": {
         "X": -0.00018936704145744443,
         "Y": -0.000012564576536533423,
         "Z": 0.000434524001320824
      },
      "linearAcceleration": {
         "X": 0.0013104218523949385,
         "Y": 0.16259200870990753,
         "Z": 0.00845605693757534
      },
      "angularAcceleration": {
         "X": -0.0018508766079321504,
         "Y": -0.0014540289994329214,
         "Z": 0.011740298941731453
      }
   },
   "position": {
      "X": -10181.01889038086,
      "Y": 2.825601577758789,
      "Z": -56977.644958496094
   },
   "orientation": {
      "heading": 0.9232192039489746,
      "pitch": -0.0020853704772889614,
      "roll": 0.0018318187212571502
   },
   "brand": {
      "id": "scania",
      "name": "Scania"
   },
   "model": {
      "id": "vehicle.scania.s_2016",
      "name": "S"
   },
   "licensePlate": {
      "value": "AK 55328",
      "country": {
         "id": "norway",
         "name": "Norway"
      }
   },
   "damage": {
      "cabin": 0.0013186422875151038,
      "chassis": 0.0016483026556670666,
      "engine": 0.0008241513278335333,
      "transmission": 0.0004944907850585878,
      "wheels": 0.0002472453925292939
   }
}
```

### truck.acceleration

```json
{
   "linearVelocity": {
      "X": 0.0010731453076004982,
      "Y": 0.0009856170509010553,
      "Z": 0.0011698190355673432
   },
   "angularVelocity": {
      "X": -0.00018936704145744443,
      "Y": -0.000012564576536533423,
      "Z": 0.000434524001320824
   },
   "linearAcceleration": {
      "X": 0.0013104218523949385,
      "Y": 0.16259200870990753,
      "Z": 0.00845605693757534
   },
   "angularAcceleration": {
      "X": -0.0018508766079321504,
      "Y": -0.0014540289994329214,
      "Z": 0.011740298941731453
   }
}
```

#### truck.acceleration.angularAcceleration

```json
{
   "X": -0.0018508766079321504,
   "Y": -0.0014540289994329214,
   "Z": 0.011740298941731453
}
```

#### truck.acceleration.angularVelocity

```json
{
   "X": -0.00018936704145744443,
   "Y": -0.000012564576536533423,
   "Z": 0.000434524001320824
}
```

#### truck.acceleration.linearAcceleration

```json
{
   "X": 0.0013104218523949385,
   "Y": 0.16259200870990753,
   "Z": 0.00845605693757534
}
```

#### truck.acceleration.linearVelocity

```json
{
   "X": 0.0010731453076004982,
   "Y": 0.0009856170509010553,
   "Z": 0.0011698190355673432
}
```

### truck.adBlue

```json
{
   "capacity": 105,
   "warning": {
      "factor": 0.15000000596046448,
      "enabled": false
   },
   "value": 95.8034896850586
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
      "steps": 5,
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
      "value": 124.40995788574219
   },
   "temperature": {
      "value": 21.060251235961914
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
   "value": 124.40995788574219
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
   "steps": 5,
   "level": 0
}
```

#### truck.brakes.temperature

```json
{
   "value": 21.060251235961914
}
```

### truck.brand

```json
{
   "id": "scania",
   "name": "Scania"
}
```

### truck.cabin

```json
{
   "damage": 0.0013186422875151038,
   "position": {
      "X": 0,
      "Y": 1.2947975397109985,
      "Z": -2.2461023330688477
   },
   "acceleration": {
      "angularVelocity": {
         "X": -0.00038687902269884944,
         "Y": -0.000041278646676801145,
         "Z": 0.001435337821021676
      },
      "angularAcceleration": {
         "X": 0.0035878876224160194,
         "Y": -0.001774521660991013,
         "Z": 0.0021061147563159466
      }
   },
   "offset": {
      "position": {
         "X": -0.00008421088568866253,
         "Y": 0.00029718875885009766,
         "Z": 0.006613731384277344
      },
      "orientation": {
         "heading": 0.9999334216117859,
         "pitch": -0.0000026941299893223913,
         "roll": -0.00012723123654723167
      }
   }
}
```

#### truck.cabin.acceleration

```json
{
   "angularVelocity": {
      "X": -0.00038687902269884944,
      "Y": -0.000041278646676801145,
      "Z": 0.001435337821021676
   },
   "angularAcceleration": {
      "X": 0.0035878876224160194,
      "Y": -0.001774521660991013,
      "Z": 0.0021061147563159466
   }
}
```

#### truck.cabin.offset

```json
{
   "position": {
      "X": -0.00008421088568866253,
      "Y": 0.00029718875885009766,
      "Z": 0.006613731384277344
   },
   "orientation": {
      "heading": 0.9999334216117859,
      "pitch": -0.0000026941299893223913,
      "roll": -0.00012723123654723167
   }
}
```

#### truck.cabin.position

```json
{
   "X": 0,
   "Y": 1.2947975397109985,
   "Z": -2.2461023330688477
}
```

### truck.chassis

```json
{
   "damage": 0.0016483026556670666
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
   "cabin": 0.0013186422875151038,
   "chassis": 0.0016483026556670666,
   "engine": 0.0008241513278335333,
   "transmission": 0.0004944907850585878,
   "wheels": 0.0002472453925292939
}
```

### truck.differential

```json
{
   "ratio": 3.0799999237060547
}
```

### truck.electric

```json
{
   "enabled": false
}
```

### truck.engine

```json
{
   "oilPressure": {
      "warning": {
         "factor": 10.149999618530273,
         "enabled": true
      },
      "value": 0
   },
   "waterTemperature": {
      "warning": {
         "factor": 105,
         "enabled": false
      },
      "value": 16.014619827270508
   },
   "batteryVoltage": {
      "warning": {
         "factor": 23.799999237060547,
         "enabled": true
      },
      "value": 27.476198196411133
   },
   "rpm": {
      "max": 2500,
      "value": 0
   },
   "oilTemperature": {
      "value": 16.01543426513672
   },
   "damage": 0.0008241513278335333,
   "enabled": false
}
```

#### truck.engine.batteryVoltage

```json
{
   "warning": {
      "factor": 23.799999237060547,
      "enabled": true
   },
   "value": 27.476198196411133
}
```

#### truck.engine.oilPressure

```json
{
   "warning": {
      "factor": 10.149999618530273,
      "enabled": true
   },
   "value": 0
}
```

#### truck.engine.oilTemperature

```json
{
   "value": 16.01543426513672
}
```

#### truck.engine.rpm

```json
{
   "max": 2500,
   "value": 0
}
```

#### truck.engine.waterTemperature

```json
{
   "warning": {
      "factor": 105,
      "enabled": false
   },
   "value": 16.014619827270508
}
```

### truck.fuel

```json
{
   "capacity": 1290,
   "warning": {
      "factor": 0.15000000596046448,
      "enabled": false
   },
   "value": 1136.724853515625,
   "avgConsumption": 1.0358302593231201,
   "range": 2308.972412109375
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
      "X": -0.6832099556922913,
      "Y": 1.4106093645095825,
      "Z": 0.38374221324920654
   },
   "offset": {
      "position": {
         "X": 0,
         "Y": 0.009999999776482582,
         "Z": 0.029999999329447746
      },
      "orientation": {
         "heading": 0,
         "pitch": -0.025000009685754776,
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
      "Y": 0.009999999776482582,
      "Z": 0.029999999329447746
   },
   "orientation": {
      "heading": 0,
      "pitch": -0.025000009685754776,
      "roll": 0
   }
}
```

#### truck.head.position

```json
{
   "X": -0.6832099556922913,
   "Y": 1.4106093645095825,
   "Z": 0.38374221324920654
}
```

### truck.hook

```json
{
   "position": {
      "X": 0,
      "Y": 1,
      "Z": 1.42624032497406
   }
}
```

#### truck.hook.position

```json
{
   "X": 0,
   "Y": 1,
   "Z": 1.42624032497406
}
```

### truck.licensePlate

```json
{
   "value": "AK 55328",
   "country": {
      "id": "norway",
      "name": "Norway"
   }
}
```

#### truck.licensePlate.country

```json
{
   "id": "norway",
   "name": "Norway"
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
   "id": "vehicle.scania.s_2016",
   "name": "S"
}
```

### truck.orientation

```json
{
   "heading": 0.9232192039489746,
   "pitch": -0.0020853704772889614,
   "roll": 0.0018318187212571502
}
```

### truck.position

```json
{
   "X": -10181.01889038086,
   "Y": 2.825601577758789,
   "Z": -56977.644958496094
}
```

### truck.speed

```json
{
   "value": 0,
   "kph": 0,
   "mph": 0
}
```

### truck.transmission

```json
{
   "forwardGears": 12,
   "reverseGears": 2,
   "selectors": 1,
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
         "handlePosition": 1,
         "selector": 0,
         "gear": -1
      },
      {
         "handlePosition": 1,
         "selector": 1,
         "gear": -2
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
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      },
      {
         "handlePosition": 0,
         "selector": 0,
         "gear": 0
      }
   ],
   "gear": {
      "selected": 0,
      "displayed": 0
   },
   "gearRatiosForward": [
      9.163999557495117,
      7.330999851226807,
      5.822999954223633,
      4.658999919891357,
      3.75,
      3,
      2.444000005722046,
      1.9550000429153442,
      1.5529999732971191,
      1.2419999837875366,
      1,
      0.800000011920929,
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
      -11.95300006866455,
      -9.562999725341797,
      0,
      0,
      0,
      0,
      0,
      0
   ],
   "damage": 0.0004944907850585878,
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
   "selected": 0,
   "displayed": 0
}
```

#### truck.transmission.gearRatiosForward

```json
[
   9.163999557495117,
   7.330999851226807,
   5.822999954223633,
   4.658999919891357,
   3.75,
   3,
   2.444000005722046,
   1.9550000429153442,
   1.5529999732971191,
   1.2419999837875366,
   1,
   0.800000011920929,
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
   -11.95300006866455,
   -9.562999725341797,
   0,
   0,
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
      "handlePosition": 1,
      "selector": 0,
      "gear": -1
   },
   {
      "handlePosition": 1,
      "selector": 1,
      "gear": -2
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
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
   },
   {
      "handlePosition": 0,
      "selector": 0,
      "gear": 0
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
      "suspDeflection": 0.012256443500518799,
      "velocity": -0.00016334700922016054,
      "steering": 0,
      "rotation": 0.9994822144508362,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": -1.0449999570846558,
         "Y": 0.5,
         "Z": -1.6399999856948853
      },
      "steerable": true,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "damage": 0.0002472453925292939
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": -0.012421095743775368,
      "velocity": -0.00006447999476222321,
      "steering": 0,
      "rotation": 0.9440193176269531,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": 1.0449999570846558,
         "Y": 0.5,
         "Z": -1.6399999856948853
      },
      "steerable": true,
      "simulated": true,
      "powered": false,
      "liftable": false,
      "onGround": true,
      "damage": 0.0002472453925292939
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": -0.03638547658920288,
      "velocity": -0.00013093079905956984,
      "steering": 0,
      "rotation": 0.8885490894317627,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": -0.9300000071525574,
         "Y": 0.5,
         "Z": 2.094278573989868
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": false,
      "onGround": true,
      "damage": 0.0002472453925292939
   },
   {
      "substance": {
         "id": 0,
         "name": "static"
      },
      "radius": 0.5059999823570251,
      "suspDeflection": 0.03708859905600548,
      "velocity": -0.0002234351122751832,
      "steering": 0,
      "rotation": 0.8327707052230835,
      "lift": 0,
      "liftOffset": 0,
      "position": {
         "X": 0.9300000071525574,
         "Y": 0.5,
         "Z": 2.094278573989868
      },
      "steerable": false,
      "simulated": true,
      "powered": true,
      "liftable": false,
      "onGround": true,
      "damage": 0.0002472453925292939
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
   "suspDeflection": 0.012256443500518799,
   "velocity": -0.00016334700922016054,
   "steering": 0,
   "rotation": 0.9994822144508362,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": -1.0449999570846558,
      "Y": 0.5,
      "Z": -1.6399999856948853
   },
   "steerable": true,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "damage": 0.0002472453925292939
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
   "suspDeflection": -0.012421095743775368,
   "velocity": -0.00006447999476222321,
   "steering": 0,
   "rotation": 0.9440193176269531,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": 1.0449999570846558,
      "Y": 0.5,
      "Z": -1.6399999856948853
   },
   "steerable": true,
   "simulated": true,
   "powered": false,
   "liftable": false,
   "onGround": true,
   "damage": 0.0002472453925292939
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
   "suspDeflection": -0.03638547658920288,
   "velocity": -0.00013093079905956984,
   "steering": 0,
   "rotation": 0.8885490894317627,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": -0.9300000071525574,
      "Y": 0.5,
      "Z": 2.094278573989868
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": false,
   "onGround": true,
   "damage": 0.0002472453925292939
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
   "suspDeflection": 0.03708859905600548,
   "velocity": -0.0002234351122751832,
   "steering": 0,
   "rotation": 0.8327707052230835,
   "lift": 0,
   "liftOffset": 0,
   "position": {
      "X": 0.9300000071525574,
      "Y": 0.5,
      "Z": 2.094278573989868
   },
   "steerable": false,
   "simulated": true,
   "powered": true,
   "liftable": false,
   "onGround": true,
   "damage": 0.0002472453925292939
}
```

### truck.wipers

```json
{
   "enabled": false
}
```

