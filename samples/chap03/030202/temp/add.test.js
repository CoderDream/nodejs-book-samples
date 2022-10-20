const {should, expect, assert} = require('chai');
// const {add} = require('./add');

function add(number, number2) {
    return number + number2;
}

describe('test add', function () {
    it('1 + 1 should be equal to 2', function (done) {
        (add(1, 1) === 2).should.be.true();
        done();
    });

    it('1 + 2 should not be equal to 2', function (done) {
        (add(1, 2) === 2).should.be.true();
        done();
    });
});