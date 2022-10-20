const util = require('util');
module.exports = {
    'Test 1': function (test) {
        test.expect(4);
        test.equals(true, util.isArray([]));
        test.equals(true, util.isArray(new Array(3)));
        test.equals(true, util.isArray([1,2,3]));
        test.notEqual(true, 1 > 2);
        test.done();
    },
    'Test 2': function (test) {
        test.expect(2);
        test.deepEqual([1,2,3],[1,2,3]);
        test.ok('str' === 'str', 'equal');
        test.done();
    }
};