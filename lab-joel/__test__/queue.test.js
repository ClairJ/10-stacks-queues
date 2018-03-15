'use strict';

const Queue = require('../lib/queue.js');

var q = new Queue.con();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log('q === ', q.arr());

describe('queue.js', () => {
  describe('Input Queue Validation', () => {
    test('should pass if queue has a arg', () => {
      expect(q.arr()).toContain(1,2,3);
    });

    q.enqueue(6);

    test('should pass if enqueue adds a arg', () => {
      expect(q.arr()).toContain(1,2,3,6);
    });

    q.dequeue(6);

    test('should pass if dequeue removes a arg', () => {
      expect(q.arr()).toContain(1,2,3);
    });
  });
});
