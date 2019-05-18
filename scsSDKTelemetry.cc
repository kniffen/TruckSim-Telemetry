#include <node.h>
#include <windows.h>

namespace scsSDKTelemetry {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::Value;
  using v8::ArrayBuffer;
  using v8::Isolate;
  using v8::Exception;
  using v8::String;

  HANDLE hMapFile;
  LPVOID pBuf = NULL;

  void GetArrayBuffer(const FunctionCallbackInfo<Value>& args) {
    try {
      hMapFile = OpenFileMapping(FILE_MAP_ALL_ACCESS, FALSE, "Local\\SimTelemetryETS2"); 
      pBuf = (LPVOID) MapViewOfFile(hMapFile, FILE_MAP_ALL_ACCESS, 0, 0, 16*1024);
    
      Local<ArrayBuffer> buffer = ArrayBuffer::New(Isolate::GetCurrent(), pBuf, 16*1024);

      args.GetReturnValue().Set(buffer);
    
    } catch (...) {
      Isolate* isolate = args.GetIsolate();
      isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Unable to get array buffer")));
    }
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "getArrayBuffer", GetArrayBuffer);
  }

  NODE_MODULE(addon, init)
}