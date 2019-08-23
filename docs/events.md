# Events

## game

### connected

| Parameter | Type    |
| ----------| ------- |
| None      |         |

### disconnected

| Parameter | Type    |
| ----------| ------- |
| None      |         |

### pause

| Parameter | Type    |
| ----------| ------- |
| paused    | Boolean |

### time-change

| Parameter                                | Type    |
| ---------------------------------------- | ------- |
| current [time object](data.md#gametime)  | Object  |
| previous [time object](data.md#gametime) | Object  |

### fine

| Parameter                         | Type    |
| --------------------------------- | ------- |
| [fine object](data.md#eventsfine) | Object  |

### tollgate

| Parameter                                 | Type    |
| ----------------------------------------- | ------- |
| [tollgate object](data.md#eventstollgate) | Object  |

### ferry

| Parameter                           | Type    |
| ----------------------------------- | ------- |
| [ferry object](data.md#eventsferry) | Object  |

### train

| Parameter                           | Type    |
| ----------------------------------- | ------- |
| [train object](data.md#eventstrain) | Object  |

## job

### cancelled

| Parameter                                    | Type    |
| -------------------------------------------- | ------- |
| [job cancelled object](data.md#eventsjobcancelled) | Object  |

### delivered

| Parameter                                    | Type    |
| -------------------------------------------- | ------- |
| [job delivered object](data.md#eventsjobdelivered) | Object  |

### finished

| Parameter | Type    |
| --------- | ------- |
| None      |         |

### started

| Parameter                                | Type    |
| ---------------------------------------- | ------- |
| [job started object](data.md#eventsjobstarted) | Object  |


## navigation

### speed-limit

| Parameter                                                             | Type    |
| --------------------------------------------------------------------- | ------- |
| current [navigation.speedLimit object](data.md#navigationspeedlimit)  | Object  |
| previous [navigation.speedLimit object](data.md#navigationspeedlimit) | Object  |

## trailer

### coupling

| Parameter | Type     |
| ----------| -------- |
| attached  | Boolean  |

### damage

| Parameter                                               | Type    |
| --------------------------------------------------------| ------- |
| current [trailer damage object](data.md#trailerdamage)  | Object  |
| previous [trailer damage object](data.md#trailerdamage) | Object  |

## trailers

### coupling

| Parameter | Type     |
| ----------| -------- |
| trailer   | Number   |
| attached  | Boolean  |

### damage

| Parameter                                               | Type    |
| --------------------------------------------------------| ------- |
| trailer                                                 | Number  |
| current [trailer damage object](data.md#trailerdamage)  | Object  |
| previous [trailer damage object](data.md#trailerdamage) | Object  |

## truck

### damage

Triggers when there's 1% or more damage to the truck's chassis

| Parameter                                           | Type     |
| ----------------------------------------------------| -------- |
| current [truck damage object](data.md#truckdamage)  | Object  |
| previous [truck damage object](data.md#truckdamage) | Object  |


### cruise-control

| Parameter | Type     |
| ----------| -------- |
| enabled   | Boolean  |

### cruise-control-increase

| Parameter                                                 | Type   |
| ----------------------------------------------------------| ------ |
| [truck cruise control object](data.md#truckcruisecontrol) | Object |

### cruise-control-decrease

| Parameter                                                 | Type   |
| ----------------------------------------------------------| ------ |
| [truck cruise control object](data.md#truckcruisecontrol) | Object |

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