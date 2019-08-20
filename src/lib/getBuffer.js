import _scsSDKTelemetry from "../../build/Release/scsSDKTelemetry"

export default function getBuffer(ignore, scsSDKTelemetry = _scsSDKTelemetry) {
  try {
  
    const arrayBuffer = scsSDKTelemetry.getArrayBuffer()
    const buffer      = new Buffer.from(arrayBuffer)
    
    return buffer
  
  } catch (err) { 
    /* ignore, make the function return undefined */ 
  }
}