const vows = require('vows'),
    assert = require('assert');
const circle = require('../app/circle');
const suite = vows.describe('Test Circle');
suite.addBatch({
    'An instance of Circle': {
        topic: circle,
        'should be able to calculate circumference': function (topic) {
            assert.equal(topic.circumference(3.0), 18.8496);
        },
        'should be able to calculate area': function (topic) {
            assert.equal(topic.area(3.0), 28.2743);
        }
    }
}).run();