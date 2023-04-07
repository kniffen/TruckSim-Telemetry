const createWriter = (buffer) => {
  const writer = {
    cursor: 0,
    buffer
  }
  
  writer.padding = (padding) => {
    writer.cursor += padding
  }

  writer.writeBool = (count = 1) => {
    for (let i = 0; i < count; i++) {
      writer.buffer.writeUInt8((i+1) % 2, writer.cursor)
      writer.cursor++
    }
  }

  writer.writeInt32LE = (value, count = 1) => {
    for (let i = 0; i < count; i++) {
      writer.buffer.writeInt32LE(value+i, writer.cursor)
      writer.cursor += 4
    }
  }

  writer.writeBigInt64LE = (value) => {
    writer.buffer.writeBigInt64LE(value, writer.cursor)
    writer.cursor += 8
  }

  writer.writeUInt32LE = (value, count = 1) => {
    for (let i = 0; i < count; i++) {
      writer.buffer.writeUInt32LE(value+i, writer.cursor)
      writer.cursor += 4
    }
  }

  writer.writeFloatLE = (value, count = 1) => {
    for (let i = 0; i < count; i++) {
      writer.buffer.writeFloatLE(value+(i+1)/10, writer.cursor)
      writer.cursor += 4
    }
  }

  writer.writeDoubleLE = (value, count = 1) => {
    for (let i = 0; i < count; i++) {
      writer.buffer.writeDoubleLE(value+(i+1)/10, writer.cursor)
      writer.cursor += 8
    }
  }
  
  writer.writeBigUInt64LE = (value) => {
    writer.buffer.writeBigUInt64LE(value, writer.cursor)
    writer.cursor += 8
  }

  writer.writeString = (str, size) => {
    writer.buffer.write(str, writer.cursor)
    writer.cursor += size
  }

  return writer
}

module.exports = createWriter