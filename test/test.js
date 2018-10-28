const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('../src/codejam.js');

describe('make sumOfOther', () => {
    it('should sum', () => {
      assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });

    it('should sum', () => {
      assert.deepEqual(sumOfOther([4, 3, 2, 1]),[6, 7, 8, 9]);
    });

});
