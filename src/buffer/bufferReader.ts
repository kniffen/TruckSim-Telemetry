export interface BufferReader {
  buffer: Buffer | null;
  cursor: number;
  setBuffer:     (buffer: Buffer | null) => void;
  reset:         ()                      => void;
  padding:       (num: number)           => void;
  setCursor:     (newCursorPos: number)  => void;
  readBool:      ()                      => boolean;
  readUInt:      ()                      => number;
  readInt:       ()                      => number;
  readFloat:     ()                      => number;
  readDouble:    ()                      => number;
  readULongLong: ()                      => bigint;
  readLongLong:  ()                      => bigint;
  readString:    (size: number)          => string;
}

export const createBufferReader = function(): BufferReader {
  const bufferReader: BufferReader = {
    cursor:    0,
    buffer:    null,
    setBuffer: (buffer: Buffer | null): void => {
      bufferReader.buffer = buffer;
      bufferReader.cursor = 0;
    },
    reset: (): void => {
      bufferReader.buffer = null;
      bufferReader.cursor = 0;
    },
    padding: (num: number): void => {
      bufferReader.cursor += num;
    },
    setCursor: (newCursorPos: number): void => {
      bufferReader.cursor = newCursorPos;
    },
    readBool: (): boolean => {
      const bool = !!bufferReader.buffer?.readUInt8(bufferReader.cursor);
      bufferReader.cursor += 1;
      return bool;
    },
    readUInt: (): number => {
      const val = bufferReader.buffer?.readUInt32LE(bufferReader.cursor) ?? 0;
      bufferReader.cursor += 4;
      return val;
    },
    readInt: (): number => {
      const val = bufferReader.buffer?.readInt32LE(bufferReader.cursor) ?? 0;
      bufferReader.cursor += 4;
      return val;
    },
    readFloat: (): number => {
      const val = bufferReader.buffer?.readFloatLE(bufferReader.cursor) ?? 0;
      bufferReader.cursor += 4;
      return val;
    },
    readDouble: (): number => {
      const val = bufferReader.buffer?.readDoubleLE(bufferReader.cursor) ?? 0;
      bufferReader.cursor += 8;
      return val;
    },
    readULongLong: (): bigint => {
      const val = bufferReader.buffer?.readBigUInt64LE(bufferReader.cursor) ?? 0n;
      bufferReader.cursor += 8;
      return val;
    },
    readLongLong: (): bigint => {
      const val = bufferReader.buffer?.readBigInt64LE(bufferReader.cursor) ?? 0n;
      bufferReader.cursor += 8;
      return val;
    },
    readString: (size: number): string => {
      const val = bufferReader.buffer?.toString('utf8', bufferReader.cursor, bufferReader.cursor + size) ?? '';
      bufferReader.cursor += size;
      return val.replace(/\u0000/g, '');
    }
  };

  return bufferReader;
};
