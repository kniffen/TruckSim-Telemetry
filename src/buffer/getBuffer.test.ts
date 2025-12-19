import { getBuffer } from './getBuffer';

jest.mock('../../build/Release/scsSDKTelemetry.node', () => ({
  getBuffer: (path: string) => {
    if (path === 'error') {
      throw new Error('Failed to get buffer');
    }

    return path;
  }
}));

jest.mock('../createConfig', () => ({
  ...jest.requireActual('../createConfig'),
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