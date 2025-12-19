export interface TSTConfig {
  /** Name/path of the shared memory */
  sharedMemoryName?: string;
}

export const createConfig = function(): Required<TSTConfig> {
  if ('win32' === process.platform) {
    return {
      sharedMemoryName: 'Local\\SCSTelemetry'
    };
  }

  return {
    sharedMemoryName: '/SCSTelemetry'
  };
};