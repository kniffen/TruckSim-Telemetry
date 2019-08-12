#include <node.h>
#include <windows.h>

namespace scsSDKTelemetry {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::Value;
  using v8::ArrayBuffer;
  using v8::Exception;
  using v8::String;

  HANDLE hMapFileSCSTelemetry;
  HANDLE hMapFileSimTelemetrySCS;
  HANDLE hMapFileSimTelemetryETS2;
  LPVOID pBuf = NULL;

  void GetArrayBuffer(const FunctionCallbackInfo<Value>& args) {
    hMapFileSCSTelemetry     = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SCSTelemetry");
    hMapFileSimTelemetrySCS  = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SimTelemetrySCS");
    hMapFileSimTelemetryETS2 = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SimTelemetryETS2");
    
    if (hMapFileSCSTelemetry) {
      pBuf = (LPVOID) MapViewOfFile(hMapFileSCSTelemetry, FILE_MAP_ALL_ACCESS, 0, 0, 32*1024);
    
    } else if (hMapFileSimTelemetrySCS) {
      pBuf = (LPVOID) MapViewOfFile(hMapFileSimTelemetrySCS, FILE_MAP_ALL_ACCESS, 0, 0, 16*1024);
    
    } else if (hMapFileSimTelemetryETS2) {
      pBuf = (LPVOID) MapViewOfFile(hMapFileSimTelemetryETS2, FILE_MAP_ALL_ACCESS, 0, 0, 16*1024);
    
    } else {
      Isolate* isolate = args.GetIsolate();
      isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Unable to get array buffer")));

      return;
    }
  
    Local<ArrayBuffer> buffer = ArrayBuffer::New(Isolate::GetCurrent(), pBuf, 16*1024);

    args.GetReturnValue().Set(buffer);
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "getArrayBuffer", GetArrayBuffer);
  }

  NODE_MODULE(addon, init)
}