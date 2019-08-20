export default function stop(
  telemetry,
  _clearInterval = clearInterval
) {

  _clearInterval(telemetry.watcher)
    
}