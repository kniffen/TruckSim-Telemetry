import { createBufferReader } from './bufferReader';

describe('createBufferReader()', () => {
  const buffer = Buffer.alloc(60);
  buffer.writeUInt8(1, 10);
  buffer.writeUInt32LE(1234567890, 11);
  buffer.writeInt32LE(-123456789, 15);
  buffer.writeFloatLE(3.14, 19);
  buffer.writeDoubleLE(2.718281828459, 23);
  buffer.writeBigUInt64LE(1234567890123456789n, 31);
  buffer.writeBigInt64LE(-123456789012345678n, 39);
  buffer.write('Hello, World', 47, 'utf-8');


  test('It should be able to read a buffer', () => {
    const bufferReader = createBufferReader();

    bufferReader.setBuffer(buffer);
    bufferReader.padding(10);

    expect(bufferReader.buffer).toBe(buffer);
    expect(bufferReader.cursor).toBe(10);

    expect(bufferReader.readBool()).toBe(true);
    expect(bufferReader.cursor).toBe(11);

    expect(bufferReader.readUInt()).toBe(1234567890);
    expect(bufferReader.cursor).toBe(15);

    expect(bufferReader.readInt()).toBe(-123456789);
    expect(bufferReader.cursor).toBe(19);

    expect(bufferReader.readFloat()).toBeCloseTo(3.14);
    expect(bufferReader.cursor).toBe(23);

    expect(bufferReader.readDouble()).toBeCloseTo(2.718281828459);
    expect(bufferReader.cursor).toBe(31);

    expect(bufferReader.readULongLong()).toBe(1234567890123456789n);
    expect(bufferReader.cursor).toBe(39);

    expect(bufferReader.readLongLong()).toBe(-123456789012345678n);
    expect(bufferReader.cursor).toBe(47);

    expect(bufferReader.readString(13)).toBe('Hello, World');
    expect(bufferReader.cursor).toBe(60);

    bufferReader.reset();
    expect(bufferReader.buffer).toBeNull();
    expect(bufferReader.cursor).toBe(0);

    bufferReader.setCursor(19);
    expect(bufferReader.cursor).toBe(19);
  });

  test('It should have fallbacks when reading from a null buffer', () => {
    const bufferReader = createBufferReader();

    expect(bufferReader.buffer).toBeNull();
    expect(bufferReader.cursor).toBe(0);

    bufferReader.padding(10);

    expect(bufferReader.readBool()).toBe(false);
    expect(bufferReader.readUInt()).toBe(0);
    expect(bufferReader.readInt()).toBe(0);
    expect(bufferReader.readFloat()).toBeCloseTo(0);
    expect(bufferReader.readDouble()).toBeCloseTo(0);
    expect(bufferReader.readULongLong()).toBe(0n);
    expect(bufferReader.readLongLong()).toBe(0n);
    expect(bufferReader.readString(13)).toBe('');
  });
});