'use strict';

const Stack = require('../lib/stack.js');

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

describe('stack.js', () => {
  describe('Peek Input Validation', () => {

    test('peek should pass with valid input', () => {
      expect(myStack.peek()).toMatchObject( { val: 3, next: { val: 2, next: { val: 1, next: null } } });
    });

    test('peek Should return null if arg is passed into peek', () => {
      expect(myStack.peek(1)).toBeNull;
    });

    test('peek Should return null if peek isn\'t called', () => {
      expect(myStack.peek).toBeNull;
    });
  });

  describe('Pop input Validation', () => {
    test('Pop should pass with valid input', () => {
      expect(myStack.pop()).toMatchObject({ val: 3, next: null });
      expect(myStack.pop()).toMatchObject({ val: 2, next: null });
      expect(myStack.pop()).toMatchObject({ val: 1, next: null });
    });
  });

  describe('Push input Validation', () => {
    let myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    test('Push should pass with valid input', () => {
      expect(myStack.count).toBe(3);
    });
  });
});
