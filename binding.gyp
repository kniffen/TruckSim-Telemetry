{
  "targets": [
    {
      "target_name": "scsSDKTelemetry",
      "sources": [ "scsSDKTelemetry.cc" ],
      "cflags": ["-fexceptions"],
      "cflags_cc": ["-fexceptions"],
      "conditions": [
        ["OS == 'linux'", {
          "libraries": [ "-lrt" ]
        }]
      ]
    }
  ]
}