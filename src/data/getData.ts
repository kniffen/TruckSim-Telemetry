import { createBufferReader } from '../buffer/bufferReader';
import { getBuffer } from '../buffer/getBuffer';
import { createConfig, type TSTConfig } from '../createConfig';
import { allocateTelemetryData } from './allocateTelemetryData';
import type { SCSSDKTelemetry } from '../types';
import { updateTelemetryData } from './updateTelemetryData';

/**
 * Gets the telemetry data.
 *
 * @example
 * ```ts
 * import { getData } from 'trucksim-telemetry';
 *
 * const data = getData();
 * const dataWithCustomConfig = getData({ sharedMemoryName: '/CustomTelemetry' });
 * ```
 */
export const getData = function(config: TSTConfig = createConfig()): SCSSDKTelemetry | null {
  const buffer = getBuffer(config);
  if (!buffer) {
    return null;
  };

  const data         = allocateTelemetryData();
  const bufferReader = createBufferReader();

  bufferReader.setBuffer(buffer);
  updateTelemetryData(data, bufferReader);

  return data;
};