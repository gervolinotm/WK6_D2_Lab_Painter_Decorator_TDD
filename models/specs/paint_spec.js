const assert = require('assert');
const PaintCan = require('../paint.js');

describe('PaintCan', function(){

  let paint;

  beforeEach(function() {
    paint = new PaintCan(10);
  })

  it(`should have a number of litres of paint`, function(){
    const actual = paint.litres;
    assert.strictEqual(actual, 10);
  })

  it(`should be able to check if it is empty`, function(){
    const actual = paint.check_if_empty;
    assert.strictEqual(actual, false);
  })

  // it(`should be able to check if it is empty when paint is empty`, function(){
  //   const actual = paint.update_paint_status();
  //   assert.strictEqual(actual, true);
  // })

  it(`should be able to empty itslef of paint`, function(){
    const actual = paint.empty_paint();
    assert.strictEqual(actual, 0)
  })
})
