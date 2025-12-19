import * as getBuffer from '../buffer/getBuffer';
import * as allocateTelemetryData from './allocateTelemetryData';
import * as createBufferReader from '../buffer/bufferReader';
import * as updateTelemetryData from './updateTelemetryData';
import * as createConfig from '../createConfig';
import { getData } from './getData';
import type { SCSSDKTelemetry } from '../types';
import type { BufferReader } from '../buffer/bufferReader';

describe('getData()', () => {
  const getBufferSpy = jest.spyOn(getBuffer, 'getBuffer').mockImplementation();
  const allocateTelemetryDataSpy = jest.spyOn(allocateTelemetryData, 'allocateTelemetryData').mockReturnValue('data' as unknown as SCSSDKTelemetry);
  const updateTelemetryDataSpy = jest.spyOn(updateTelemetryData, 'updateTelemetryData').mockImplementation();
  const setBufferSpy = jest.fn();
  jest.spyOn(createBufferReader, 'createBufferReader').mockReturnValue({ setBuffer: setBufferSpy } as unknown as BufferReader);
  jest.spyOn(createConfig, 'createConfig').mockReturnValue({ sharedMemoryName: 'foobar' });

  beforeEach(() => {
    jest.clearAllMocks();
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