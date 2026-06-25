import { describe, expect, test, vi } from 'vitest';
import { getBuffer } from './getBuffer';

vi.mock('../../build/Release/scsSDKTelemetry.node', () => ({
  default: {
    getBuffer: (path: string) => {
      if (path === 'error') {
        throw new Error('Failed to get buffer');
      }

      return path;
    }
  }
}));

vi.mock('../createConfig', async () => ({
  ...(await vi.importActual('../createConfig')),
  createConfig: () => ({
    sharedMemoryName: 'foobar'
  })
}));

describe('getBuffer()', () => {
  test('It should get the current buffer', () => {
    expect(getBuffer()).toEqual('foobar');
    expect(getBuffer({ sharedMemoryName: 'custom' })).toEqual('custom');
  });

  test('It should return null if an error occurs', () => {
    expect(getBuffer({ sharedMemoryName: 'error' })).toBeNull();
  });
});