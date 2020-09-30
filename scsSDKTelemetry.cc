#include <node_api.h>
#include <windows.h>

HANDLE hMapFileSCSTelemetry;
HANDLE hMapFileSimTelemetrySCS;
HANDLE hMapFileSimTelemetryETS2;
LPVOID pBuf = NULL;

napi_value GetArrayBuffer(napi_env env, napi_callback_info info) {
  napi_status status;
  napi_value buffer;

  hMapFileSCSTelemetry     = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SCSTelemetry");
  hMapFileSimTelemetrySCS  = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SimTelemetrySCS");
  hMapFileSimTelemetryETS2 = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SimTelemetryETS2");

  if (hMapFileSCSTelemetry) {
    pBuf = MapViewOfFile(hMapFileSCSTelemetry, FILE_MAP_ALL_ACCESS, 0, 0, 32*1024);  
  } else if (hMapFileSimTelemetrySCS) {
    pBuf = MapViewOfFile(hMapFileSimTelemetrySCS, FILE_MAP_ALL_ACCESS, 0, 0, 16*1024);
  } else if (hMapFileSimTelemetryETS2) {
    pBuf = MapViewOfFile(hMapFileSimTelemetryETS2, FILE_MAP_ALL_ACCESS, 0, 0, 16*1024);
  } else {
    napi_throw_error(env, NULL, "Unable to get array buffer");
    return nullptr;
  }

  status = napi_create_external_arraybuffer(env, pBuf, 16*1024, NULL, NULL, &buffer);

  return buffer;
}

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  
  napi_property_descriptor desc = DECLARE_NAPI_METHOD("getArrayBuffer", GetArrayBuffer);
  status = napi_define_properties(env, exports, 1, &desc);
  
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)