#include <node.h>
#include <windows.h>

namespace scsSDKTememetry {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  // using v8::String;
  using v8::Value;
  using v8::ArrayBuffer;

  HANDLE hMapFile;
  LPVOID pBuf = NULL;

  void GetData(const FunctionCallbackInfo<Value>& args) {
    hMapFile = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SimTelemetryETS2"); 
    pBuf = (LPVOID) MapViewOfFile(hMapFile, FILE_MAP_ALL_ACCESS, 0, 0, 16*1024);
    
    Local<ArrayBuffer> buffer = ArrayBuffer::New(Isolate::GetCurrent(), pBuf, 16*1024);

    args.GetReturnValue().Set(buffer);
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "getData", GetData);
  }

  NODE_MODULE(addon, init)
}