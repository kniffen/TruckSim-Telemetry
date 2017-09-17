using System;
using System.Threading.Tasks;
using System.IO.MemoryMappedFiles;

public class Startup {
	public async Task<object> Invoke(object options) {
		var SharedMemory = new SharedMemory();

		SharedMemory.Connect();

		return new {
			getData = (Func<object, Task<object>>)(
				async (x) => {
					SharedMemory.Update();

					return SharedMemory.RawData;
				}
			)
		};
	}
}

public class SharedMemory {
	private string map = "Local\\SimTelemetryETS2";
	private const uint mapSize = 16*1024;

	public bool Hooked { get; private set; }
	public Exception HookException { get; private set; }
	public byte[] RawData { get; private set; }

	private MemoryMappedFile memoryMappedHandle;
	private MemoryMappedViewAccessor memoryMappedView;

	public void Connect() {
		if (Hooked) Disconnect();

		HookException = null;
		
		try {
			RawData = new byte[mapSize];

			memoryMappedHandle = MemoryMappedFile.CreateOrOpen(map, mapSize, MemoryMappedFileAccess.ReadWrite);
			memoryMappedView = memoryMappedHandle.CreateViewAccessor(0, mapSize);

			Hooked = true;
		
		} catch (Exception err) {
			Hooked = false;
			HookException = err;
		}
	}

	public void Disconnect() {
		Hooked = false;

		memoryMappedView.Dispose();
		memoryMappedHandle.Dispose();
	}

	public void Update() {
		if (!Hooked || memoryMappedView == null) return;

		memoryMappedView.ReadArray(0, RawData, 0, RawData.Length);
	}
}