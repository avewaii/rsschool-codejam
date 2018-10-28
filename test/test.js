const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('../src/sumOfOther.js');
const make = require('../src/make.js');

describe('codejam-3 core-js', () => {
    describe('sumOfOther function', () => {
        it('should pass with the first set of params', () => {
          assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
        });
        it('should pass with the second set of params', () => {
          assert.deepEqual(sumOfOther([4, 3, 2, 1]), [6, 7, 8, 9]);
        });
    });

    describe('make function', () => {
        it('should pass with the first set of params and sum function', () => {
            const sum = (a, b) => a + b;
          assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
        });
        it('should pass with the second set of params and multiply function', () => {
            const multiply = (a, b) => a * b;
          assert.deepEqual(make(2, 4)(5, 11)(multiply), 440);
        });
    });
});
