#define NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED true
#include <node_api.h>
#include <string.h>
#include <stdlib.h>

#if defined(_WIN32)
  #include <windows.h>
#else
  #include <sys/mman.h>
  #include <sys/stat.h>
  #include <fcntl.h>
  #include <unistd.h>
#endif

napi_value GetBuffer(napi_env env, napi_callback_info info) {
  char* mmf_name;
  size_t argc = 1;
  size_t mmf_name_size;
  size_t mmf_name_size_read;
  size_t mmf_size = 32*1024;
  void* mappedFileView = nullptr;

  napi_status status;
  napi_value argv[1];

  // Retrieve arguments
  status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Failed to retrieve arguments.");
    return nullptr;
  }

  // Get size of filename
  status = napi_get_value_string_utf8(env, argv[0], NULL, 0, &mmf_name_size);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Failed to get memory-mapped filename size.");
    return nullptr;
  }

  // Allocate memory for filename
  mmf_name      = (char*)calloc(mmf_name_size + 1, sizeof(char));
  mmf_name_size = mmf_name_size + 1;

  // Set the filename value
  status = napi_get_value_string_utf8(env, argv[0], mmf_name, mmf_name_size, &mmf_name_size_read);
  if (status != napi_ok) {
    free(mmf_name);
    napi_throw_error(env, NULL, "Failed to set memory-mapped filename.");
    return nullptr;
  }

#if defined(_WIN32)
  // Open the memory-mapped file
  HANDLE hMapFileSCSTelemetry = OpenFileMapping(FILE_MAP_READ, FALSE, mmf_name);
  free(mmf_name);
  if (!hMapFileSCSTelemetry) {
    napi_throw_error(env, NULL, "Failed trying to open memory-mapped file");
    return nullptr;
  }

  mappedFileView = MapViewOfFile(hMapFileSCSTelemetry, FILE_MAP_READ, 0, 0, mmf_size);
  if (!mappedFileView) {
    CloseHandle(hMapFileSCSTelemetry);
    napi_throw_error(env, NULL, "Failed to map view of memory-mapped file");
    return nullptr;
  }
#else // POSIX (Linux, macOS)
  int fd = shm_open(mmf_name, O_RDONLY, 0400);
  free(mmf_name);

  if (fd == -1) {
    napi_throw_error(env, NULL, "Failed to open POSIX shared memory");
    return nullptr;
  }

  mappedFileView = mmap(NULL, mmf_size, PROT_READ, MAP_SHARED, fd, 0);
  if (mappedFileView == MAP_FAILED) {
    napi_throw_error(env, NULL, "Failed to mmap shared memory");
    return nullptr;
  }
  close(fd);
#endif

  // Create a new buffer for use in javascript
  napi_value buffer;
  void* data;
  status = napi_create_buffer(env, mmf_size, &data, &buffer);
  if (status != napi_ok) {

#if defined(_WIN32)
    UnmapViewOfFile(mappedFileView);
    CloseHandle(hMapFileSCSTelemetry);
#else
    munmap(mappedFileView, mmf_size);
#endif

    napi_throw_error(env, NULL, "Failed to create buffer");
    return nullptr;
  }

  // Copy data from memory-mapped file to the new buffer
  memcpy(data, mappedFileView, mmf_size);

  // Cleanup
#if defined(_WIN32)
  UnmapViewOfFile(mappedFileView);
  CloseHandle(hMapFileSCSTelemetry);
#else
  munmap(mappedFileView, mmf_size);
#endif

  return buffer;
}

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

napi_value Init(napi_env env, napi_value exports) {
  napi_property_descriptor desc = DECLARE_NAPI_METHOD("getBuffer", GetBuffer);
  napi_define_properties(env, exports, 1, &desc);

  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)