const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const MathFxns = require('../mathfxns.js');
const math = new MathFxns();

describe('math functions \n', () => {
  describe('addTwoNums', () => {
    it('should return the sum of two numbers', () => {
      const num1 = 5;
      const num2 = 11;
      const sum = 16;
      assert.ok(math.addTwoNums(num1, num2) === sum);
    });
  });
  // ...
  // add more tests here
});
