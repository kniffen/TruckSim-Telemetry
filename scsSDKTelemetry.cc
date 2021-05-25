#include <node_api.h>
#include <windows.h>

HANDLE hMapFileSCSTelemetry;
LPVOID pBuf = NULL;

napi_value GetBuffer(napi_env env, napi_callback_info info) {
  char* mmf_name;
  size_t argc = 1;
  size_t mmf_name_size;
  size_t mmf_name_size_read;
  size_t mmf_size = 32*1024;
  napi_status status;
  napi_value argv[1];
  napi_value buffer;

  status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
  status = napi_get_value_string_utf8(env, argv[0], NULL, 0, &mmf_name_size);

  mmf_name      = (char*)calloc(mmf_name_size + 1, sizeof(char));
  mmf_name_size = mmf_name_size + 1;

  status = napi_get_value_string_utf8(env, argv[0], mmf_name, mmf_name_size, &mmf_name_size_read);

  hMapFileSCSTelemetry = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, mmf_name);

  if (hMapFileSCSTelemetry) {
    pBuf = MapViewOfFile(hMapFileSCSTelemetry, FILE_MAP_ALL_ACCESS, 0, 0, mmf_size);  
  } else {
    napi_throw_error(env, NULL, "Unable to get buffer");
    return nullptr;
  }
  status = napi_create_external_buffer(env, mmf_size, pBuf, NULL, NULL, &buffer);

  return buffer;
}

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  
  napi_property_descriptor desc = DECLARE_NAPI_METHOD("getBuffer", GetBuffer);
  status = napi_define_properties(env, exports, 1, &desc);
  
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)