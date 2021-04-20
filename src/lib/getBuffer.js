import scsSDKTelemetry from "../../build/Release/scsSDKTelemetry"

export default function getBuffer(opts) {
  try {
    const arrayBuffer = scsSDKTelemetry.getArrayBuffer(opts.mmfName)
    const buffer      = new Buffer.from(arrayBuffer)
    
    return buffer
  
  } catch (err) {  /* ignore, make the function return undefined */  }
}