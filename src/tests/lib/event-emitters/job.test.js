import assert from "assert"
import sinon from "sinon"
import EventEmitter from "events"
import job from "../../../lib/event-emitters/job"

describe("event-emitters/job()", function() {

  const telemetry = {
    job: new EventEmitter()
  }

  const spies = {
    cancelled: sinon.spy(),
    delivered: sinon.spy(),
    finished:  sinon.spy(),
    started:   sinon.spy(),
  }

  const data = []

  const createData = () => ({
    events: {
      job: {
        cancelled: {active: false, foo: "bar"},
        delivered: {active: false, bar: "baz"},
        finished:  {active: false, baz: "qux"},
        started:   {active: false, qux: "quux"},
      }
    }
  })

  before(function() {
    data[0] = createData()
    data[1] = createData()

    telemetry.job.on("cancelled", spies.cancelled)
    telemetry.job.on("delivered", spies.delivered)
    telemetry.job.on("finished",  spies.finished)
    telemetry.job.on("started",   spies.started)

    job(telemetry, data)
    data[0].events.job.cancelled.active = true
    data[0].events.job.delivered.active = true
    data[0].events.job.finished.active  = true
    data[0].events.job.started.active   = true
    job(telemetry, data)
    data[0].events.job.cancelled.active = false
    data[0].events.job.delivered.active = false
    data[0].events.job.finished.active  = false
    data[0].events.job.started.active   = false
    job(telemetry, data)
    data[1].events.job.cancelled.active = true
    data[1].events.job.delivered.active = true
    data[1].events.job.finished.active  = true
    data[1].events.job.started.active   = true
    job(telemetry, data)
    data[1].events.job.cancelled.active = false
    data[1].events.job.delivered.active = false
    data[1].events.job.finished.active  = false
    data[1].events.job.started.active   = false
    job(telemetry, data)
  })

  it("Should emit cancelled events", function() {
    assert.equal(spies.cancelled.args.length, 1)
    assert.deepEqual(spies.cancelled.args[0][0], {active: true, foo: "bar"})
  })

  it("Should emit delivered events", function() {
    assert.equal(spies.delivered.args.length, 1)
    assert.deepEqual(spies.delivered.args[0][0], {active: true, bar: "baz"})
  })

  it("Should emit finished events", function() {
    assert.equal(spies.finished.args.length, 1)
  })

  it("Should emit started events", function() {
    assert.equal(spies.started.args.length, 1)
    assert.deepEqual(spies.started.args[0][0], {active: true, qux: "quux"})
  })

})