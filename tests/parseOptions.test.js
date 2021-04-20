import assert from "assert"
import sinon  from "sinon"

import parseOptions  from "../src/parseOptions"

describe("parseOptions()", function() {

  it("Should parse option objects", function() {
    const actual = [
      parseOptions(),
      parseOptions(null),
      parseOptions(undefined),
      parseOptions("foo"),
      parseOptions(1234),
      parseOptions([]),
      parseOptions({}),
      parseOptions({mmfName: "bar"}),
    ]

    const expected = [
      {mmfName: "Local\\SCSTelemetry"},
      {mmfName: "Local\\SCSTelemetry"},
      {mmfName: "Local\\SCSTelemetry"},
      {mmfName: "Local\\SCSTelemetry"},
      {mmfName: "Local\\SCSTelemetry"},
      {mmfName: "Local\\SCSTelemetry"},
      {mmfName: "Local\\SCSTelemetry"},
      {mmfName: "bar"},
    ]

    assert.deepEqual(actual, expected)
  })

})