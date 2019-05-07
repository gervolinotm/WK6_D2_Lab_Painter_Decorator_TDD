const assert = require('assert');
const Decorator = require('../decorator.js');


describe(`Decorator`, function() {

  it(`should be able to check paint stock`, function(){
    const decorator = new Decorator()
    const actual = decorator.stock;
    assert.strictEqual(actual, 0);
  })
})
