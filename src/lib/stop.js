export default function stop(telemetry) {
  
  clearInterval(telemetry.watcher)

}