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