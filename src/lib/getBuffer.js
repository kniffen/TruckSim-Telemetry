import scsSDKTelemetry from "../../build/Release/scsSDKTelemetry"

export default function getBuffer() {
  try {
  
    const arrayBuffer = scsSDKTelemetry.getArrayBuffer()
    const buffer      = new Buffer.from(arrayBuffer)
    
    return buffer
  
  } catch (err) {  /* ignore, make the function return undefined */  }
}