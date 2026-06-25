import { getBuffer } from '../buffer/getBuffer';
import { allocateTelemetryData } from './allocateTelemetryData';
import { createBufferReader, type BufferReader } from '../buffer/bufferReader';
import { updateTelemetryData } from './updateTelemetryData';
import { createConfig } from '../createConfig';
import { getData } from './getData';
import type { SCSSDKTelemetry } from '../types';
import { describe, vi, beforeEach, test, expect } from 'vitest';

vi.mock('../buffer/getBuffer');
vi.mock('./allocateTelemetryData');
vi.mock('./updateTelemetryData');
vi.mock('../buffer/bufferReader');
vi.mock('../createConfig');

describe('getData()', () => {
  const getBufferSpy = vi.mocked(getBuffer);
  const allocateTelemetryDataSpy = vi.mocked(allocateTelemetryData).mockReturnValue('data' as unknown as SCSSDKTelemetry);
  const updateTelemetryDataSpy = vi.mocked(updateTelemetryData);
  const setBufferSpy = vi.fn();
  vi.mocked(createBufferReader).mockReturnValue({ setBuffer: setBufferSpy } as unknown as BufferReader);
  vi.mocked(createConfig).mockReturnValue({ sharedMemoryName: 'foobar' });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('it should get telemetry data', () => {
    getBufferSpy.mockReturnValue('buffer' as unknown as Buffer);

    const data = getData();

    expect(getBufferSpy).toHaveBeenCalledWith({ sharedMemoryName: 'foobar' });
    expect(allocateTelemetryDataSpy).toHaveBeenCalled();
    expect(updateTelemetryDataSpy).toHaveBeenCalledWith('data', { setBuffer: setBufferSpy });
    expect(setBufferSpy).toHaveBeenCalledWith('buffer');
    expect(data).toBe('data');
  });

  test('It should use provided config', () => {
    const config = { sharedMemoryName: 'custom' };
    getBufferSpy.mockReturnValue('buffer' as unknown as Buffer);

    getData(config);
    expect(getBufferSpy).toHaveBeenCalledWith(config);
  });

  test('It should return null if there\'s no buffer', () => {
    getBufferSpy.mockReturnValue(null);

    const data = getData();

    expect(allocateTelemetryDataSpy).not.toHaveBeenCalled();
    expect(updateTelemetryDataSpy).not.toHaveBeenCalled();
    expect(data).toBeNull();
  });
});