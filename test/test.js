const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('../src/sumOfOther.js');

describe('codejam-3 core-js', () => {
    describe('sumOfOther', () => {
        it('should pass with the first set of params', () => {
          assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
        });

        it('should pass with the second set of params', () => {
          assert.deepEqual(sumOfOther([4, 3, 2, 1]),[6, 7, 8, 9]);
        });
    });
});
