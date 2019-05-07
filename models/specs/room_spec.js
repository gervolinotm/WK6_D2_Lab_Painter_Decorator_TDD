const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){

  // let room;
  //
  // beforeEach(function () {
  //   room = new Room(100)
  // })

  it(`should have an area`, function(){
    const room = new Room(100)
    const actual = room.area;
    assert.strictEqual(actual, 100)
  })

  it(`should have status whether room is painted`, function(){
    const room = new Room(100, false)

    const actual = room.paint_status;
    assert.strictEqual(actual, false)
  })

  it(`should be able to be painted`, function(){
    const room = new Room(100, false, true)
    const actual = room.can_be_painted
    assert.strictEqual(actual, true)
  })

})
