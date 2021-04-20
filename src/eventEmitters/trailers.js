import cloneDeep from "lodash.clonedeep"

export default function eventEmittersTrailers(telemetry, data) {

  for (let i = 0; i < data[0]?.trailers?.length; i++) {

    // Coupling
    if (data[0]?.trailers[i]?.attached != data[1]?.trailers[i]?.attached) {
      telemetry.trailers.emit("coupling", i, data[0].trailers[i].attached)
      if (i == 0) telemetry.trailer.emit("coupling", data[0].trailers[0].attached)
    }

    // Damage
    if ( Math.floor(data[0]?.trailers[i]?.damage.total * 100) > Math.floor(data[1]?.trailers[i]?.damage.total * 100) ) {
      telemetry.trailers.emit(
        "damage", 
        i, 
        cloneDeep(data[0].trailers[i].damage),
        cloneDeep(data[1].trailers[i].damage)
      )
      
      if (i == 0) {
        telemetry.trailer.emit(
          "damage", 
          cloneDeep(data[0].trailers[0].damage), 
          cloneDeep(data[1].trailers[0].damage)
        )
      }
    }
  }
  
}