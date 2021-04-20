import assert       from "assert"
import sinon        from "sinon"
import EventEmitter from "events"

import job from "../../src/eventEmitters/job"

describe("eventEmitters/job()", function() {

  const telemetry = {
    job: new EventEmitter()
  }

  const spies = {
    cancelled: sinon.spy(),
    delivered: sinon.spy(),
    finished:  sinon.spy(),
    started:   sinon.spy(),
  }

  const createData = () => ({
    game: {
      pluginVersion: 10
    },
    events: {
      job: {
        finished:  {
          active: false,
        },
        started:   {
          active:     false,
          autoLoaded: false,
        },
        cancelled: {
          active:        false,
          penalty:       1001,
          startingTime:  1002,
          finishingTime: 1003,
        },
        delivered: {
          active:        false,
          autoParked:    false,
          cargoDamage:   0.5,
          deliveryTime:  2001,
          startingTime:  2002,
          finishingTime: 2003,
          earnedXP:      2004,
          distance:      2005,
          revenue:       2006,
        },
      }
    },
    job: {
      deliveryTime:    3001,
      plannedDistance: 3002,
      income:          3003,
      isSpecial:       true,
      cargo:           {foo: "foo"},
      source:          {foo: "bar"},
      destination:     {foo: "qux"},
      market:          {foo: "quux"},
    }
  })

  before(function() {
    const data = [createData(), createData()]

    data[1].job = {
      deliveryTime:    4001,
      plannedDistance: 4002,
      income:          4002,
      isSpecial:       false,
      cargo:           {bar: "foo"},
      source:          {bar: "bar"},
      destination:     {bar: "qux"},
      market:          {bar: "quux"},
    }

    telemetry.job.on( "cancelled", spies.cancelled )
    telemetry.job.on( "delivered", spies.delivered )
    telemetry.job.on( "finished",  spies.finished )
    telemetry.job.on( "started",   spies.started )

    job( telemetry, data )

    // Job finished
    data[0].events.job.finished.active = true
    data[1].events.job.finished.active = false
    job( telemetry, data )
    data[0].events.job.finished.active = false
    data[1].events.job.finished.active = true
    job( telemetry, data )

    // Job started
    data[0].events.job.started.active = true
    data[1].events.job.started.active = false
    job( telemetry, data )
    data[0].events.job.started.active = false
    data[1].events.job.started.active = true
    job( telemetry, data )

    // Job cancelled
    data[0].events.job.cancelled.active = true
    data[1].events.job.delivered.active = false
    job( telemetry, data )
    data[0].events.job.cancelled.active = false
    data[1].events.job.delivered.active = true
    job( telemetry, data )


    // Job delivered
    data[0].events.job.delivered.active = true
    data[1].events.job.delivered.active = false
    job( telemetry, data )
    data[0].events.job.delivered.active = false
    data[1].events.job.delivered.active = true
    job( telemetry, data )
  } )


  it("Should emit finished events", function() {
    assert.equal(spies.finished.args.length, 1)
  } )


  it( "Should emit started events", function() {
    assert.equal( spies.started.args.length, 1)
    assert.deepEqual( spies.started.args[0][0], {
      autoLoaded:      false,
      deliveryTime:    3001,
      plannedDistance: 3002,
      cargo:           {foo: "foo"},
      isSpecial:       true,
      source:          {foo: "bar"},
      destination:     {foo: "qux"},
      market:          {foo: "quux"},
      income:          3003,
    } )
  } )

  it( "Should emit cancelled events", function() {
    assert.equal( spies.cancelled.args.length, 1 )
    assert.deepEqual( spies.cancelled.args[0][0], {
      penalty:         1001,
      startingTime:    1002,
      finishingTime:   1003,
      deliveryTime:    4001,
      plannedDistance: 4002,
      cargo:           {bar: "foo"},
      isSpecial:       false,
      source:          {bar: "bar"},
      destination:     {bar: "qux"},
      market:          {bar: "quux"},
      income:          0,
    } )
  } )

  it( "Should emit delivered events", function() {
    assert.equal( spies.delivered.args.length, 1)
    assert.deepEqual( spies.delivered.args[0][0], {
      deliveryTime:    2001,
      startingTime:    2002,
      finishingTime:   2003,
      earnedXP:        2004,
      cargoDamage:     0.5,
      distance:        2005,
      autoParked:      false,
      revenue:         2006,
      plannedDistance: 4002,
      cargo:           {bar: "foo"},
      isSpecial:       false,
      source:          {bar: "bar"},
      destination:     {bar: "qux"},
      market:          {bar: "quux"},
    } )
  } )

})