'use strict';

const Queue = require('../lib/queue.js');

var q = new Queue.con();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log('q === ', q.arr);

describe('queue.js', () => {
  describe('Input Queue Validation', () => {
    test('should pass if enqueue has a arg', () => {
    });
  });
});
