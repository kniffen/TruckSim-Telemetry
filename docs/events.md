# Events

## game

### connected
| Parameter |
| --------- |
| None      |

### disconnected
| Parameter |
| --------- |
| None      |

### pause
| Parameter | Type    |
| ----------|-------- |
| isPaused  | Boolean |

### time-change
| Parameter                                | Type   |
| ---------------------------------------- | ------ |
| current [time object](data.md#gametime)  | Object |
| previous [time object](data.md#gametime) | Object |


### fine
| Parameter                            | Type   |
| ------------------------------------ | ------ |
| [fine object](events.md#fine-object) | Object |

### tollgate
| Parameter                                    | Type   |
| -------------------------------------------- | ------ |
| [tollgate object](events.md#tollgate-object) | Object |

### ferry
| Parameter                              | Type   |
| -------------------------------------- | ------ |
| [ferry object](events.md#ferry-object) | Object |

### train
| Parameter                              | Type   |
| -------------------------------------- | ------ |
| [train object](events.md#train-object) | Object |

### refuel-paid
| Parameter                                         | Type   |
| ------------------------------------------------- | ------ |
| [refuelPaid object](events.md#refuel-paid-object) | Object |


## job

### started
| Parameter                                          | Type   |
| -------------------------------------------------- | ------ |
| [job started object](events.md#job-started-object) | Object |

### finished
| Parameter | Type    |
| --------- | ------- |
| None      |         |

### delivered
| Parameter                                              | Type    |
| ------------------------------------------------------ | ------- |
| [job delivered object](events.md#job-delivered-object) | Object |

### cancelled
| Parameter                                              | Type   |
| ------------------------------------------------------ | ------ |
| [job cancelled object](events.md#job-cancelled-object) | Object |


## navigation

### speed-limit
| Parameter                                                                       | Type    |
| ------------------------------------------------------------------------------- | ------- |
| current [navigation.speedLimit object](events.md#navigation-speed-limit-object) | Object |
| previous [navigation.speedLimit object](data.md#navigation-speed-limit-object)  | Object |


## trailer

### coupling
| Parameter   | Type    |
| ------------| ------- |
| isAttached  | Boolean |

### damage
| Parameter                                                         | Type   |
| ----------------------------------------------------------------- | ------ |
| current [trailer damage object](events.md#trailer-damage-object)  | Object |
| previous [trailer damage object](events.md#trailer-damage-object) | Object |

## trailers

### coupling
| Parameter   | Type     |
| ------------| -------- |
| trailer     | Number   |
| isAttached  | Boolean  |

### damage
| Parameter                                                         | Type   |
| ----------------------------------------------------------------- | ------ |
| trailer                                                           | Number |
| current [trailer damage object](events.md#trailer-damage-object)  | Object |
| previous [trailer damage object](events.md#trailer-damage-object) | Object |

## truck

### damage
Triggers when there is 1% or more increase to the truck's total damage
| Parameter                                                    | Type     |
| ------------------------------------------------------------ | -------- |
| current [truck damage object](events.md#truck-damage-object) | Object |
| previous [truck damage object](data.md#truck-damage-object)  | Object |


### cruise-control
| Parameter                                                      | Type   |
| -------------------------------------------------------------- | ------ |
| [cruise control object](events.md#truck-cruise-control-object) | Object |

### cruise-control-increase
| Parameter                                                      | Type   |
| -------------------------------------------------------------- | ------ |
| [cruise control object](events.md#truck-cruise-control-object) | Object |

### cruise-control-decrease
| Parameter                                                      | Type   |
| -------------------------------------------------------------- | ------ |
| [cruise control object](events.md#truck-cruise-control-object) | Object |

### warning
| Parameter | Type     |
| ----------| -------- |
| warning   | String   |
| enabled   | Boolean  |

### emergency
| Parameter | Type     |
| ----------| -------- |
| warning   | String   |
| enabled   | Boolean  |

### engine
| Parameter | Type     |
| ----------| -------- |
| enabled   | Boolean  |

### electric
| Parameter | Type     |
| ----------| -------- |
| enabled   | Boolean  |

### gear-change
| Parameter                                                                | Type   |
| -------------------------------------------------------------------------| ------ |
| current [truck transmission gear object](data.md#trucktransmissiongear)  | Object |
| previous [truck transmission gear object](data.md#trucktransmissiongear) | Object |

### park
| Parameter | Type     |
| ----------| -------- |
| enabled   | Boolean  |

### retarder
| Parameter                                                     | Type   |
| --------------------------------------------------------------| ------ |
| current [truck retarder object](data.md#truckbrakesretarder)  | Object |
| previous [truck retarder object](data.md#truckbrakesretarder) | Object |

### wipers
| Parameter | Type     |
| ----------| -------- |
| enabled   | Boolean  |

### refuel-started
| Parameter                                  | Type   |
| ------------------------------------------ | ------ |
| [fuel object](events.md#truck-fuel-object) | Object |

### refuel-stopped
| Parameter                                  | Type   |
| ------------------------------------------ | ------ |
| [fuel object](events.md#truck-fuel-object) | Object |


# Event objects

## fine-object
```json
{
  "offence": {
     "id": "red_signal",
     "name": "Red Signal"
  },
  "amount": 80
}
```

## tollgate-object
```json
{
  "amount": 15
}
```

## ferry-object
```json
{
  "source": {
     "name": "Tallinn",
     "id": "tallinn"
  },
  "destination": {
     "name": "Helsinki",
     "id": "helsinki"
  },
  "amount": 430
}
```

## train-object
```json
{
  "source": {
     "name": "Folkestone",
     "id": "tunnel_d"
  },
  "destination": {
     "name": "Calais",
     "id": "tunnel_c"
  },
  "target": {
     "name": "Calais",
     "id": "tunnel_c"
  },
  "amount": 0
}
```

## refuel-paid-object
Note that the `amount` value is in liters
```json
{
  "amount": 424.70806884765625
}
```

## job-started-object
```json
{
  "autoLoaded": false,
  "deliveryTime": {
     "value": 17210418,
     "unix": 577080000
  },
  "plannedDistance": {
     "km": 1185,
     "miles": 736
  },
  "cargo": {
     "mass": 9979.2001953125,
     "unitMass": 302.3999938964844,
     "damage": 0,
     "isLoaded": false,
     "id": "scooters",
     "name": "Scooters"
  },
  "isSpecial": false,
  "source": {
     "city": {
        "id": "paldiski",
        "name": "Paldiski"
     },
     "company": {
        "id": "blt",
        "name": "BLT"
     }
  },
  "destination": {
     "city": {
        "id": "szczecin",
        "name": "Szczecin"
     },
     "company": {
        "id": "transinet",
        "name": "TransiNet"
     }
  },
  "market": {
     "id": "cargo_market",
     "name": "Cargo Market"
  },
  "income": 88548
}
```

## job-cancelled-object
```json
{
  "penalty": 12000,
  "startingTime": 103320000,
  "finishingTime": 105660000,
  "deliveryTime": {
     "value": 0,
     "unix": 345600000
  },
  "plannedDistance": {
     "km": 0,
     "miles": 0
  },
  "cargo": {
     "mass": 0,
     "unitMass": 0,
     "damage": 0,
     "isLoaded": false,
     "id": "",
     "name": ""
  },
  "isSpecial": false,
  "source": {
     "city": {
        "id": "",
        "name": ""
     },
     "company": {
        "id": "",
        "name": ""
     }
  },
  "destination": {
     "city": {
        "id": "",
        "name": ""
     },
     "company": {
        "id": "",
        "name": ""
     }
  },
  "market": {
     "id": "",
     "name": ""
  },
  "income": 0
}
```

## job-delivered-object
```json
{
  "deliveryTime": 9540000,
  "startingTime": 1032517260000,
  "finishingTime": 1032526860000,
  "earnedXP": 879,
  "cargoDamage": 0,
  "distance": {
     "km": 398,
     "miles": 247
  },
  "autoParked": false,
  "revenue": 88548,
  "plannedDistance": {
     "km": 1185,
     "miles": 736
  },
  "cargo": {
     "mass": 9979.2001953125,
     "unitMass": 302.3999938964844,
     "damage": 0.00017614384705666453,
     "isLoaded": true,
     "id": "scooters",
     "name": "Scooters"
  },
  "isSpecial": false,
  "source": {
     "city": {
        "id": "paldiski",
        "name": "Paldiski"
     },
     "company": {
        "id": "blt",
        "name": "BLT"
     }
  },
  "destination": {
     "city": {
        "id": "szczecin",
        "name": "Szczecin"
     },
     "company": {
        "id": "transinet",
        "name": "TransiNet"
     }
  },
  "market": {
     "id": "cargo_market",
     "name": "Cargo Market"
  }
}
```
## navigation-speed-limit-object
```json
{
  "value": 13.88888931274414,
  "kph": 50,
  "mph": 31
}
```

## trailer-damage-object
1.0 = 100%
```json
{
  "cargo": 0.012286542914807796,
  "chassis": 0.03265746310353279,
  "wheels": 0.004918619524687529,
  "total": 0.03265746310353279
}
```

## truck-damage-object
1.0 = 100%
```json
{
  "cabin": 0.030827179551124573,
  "chassis": 0.038533974438905716,
  "engine": 0.019268987700343132,
  "transmission": 0.011562191881239414,
  "wheels": 0.005800096318125725,
  "total": 0.038533974438905716
}
```

## truck-cruise-control-object
```json
{
  "enabled": true,
  "currentSpeed": {
     "value": 20.09762191772461,
     "kph": 72,
     "mph": 45
  },
  "speedLimit": {
     "value": 25.000001907348633,
     "kph": 90,
     "mph": 56
  },
  "cruiseControlSpeed": {
     "value": 20.033126831054688,
     "kph": 72,
     "mph": 45
  }
}
```

## truck-fuel-object
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
