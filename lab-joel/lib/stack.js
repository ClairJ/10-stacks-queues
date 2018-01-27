'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize=1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.count = 0;
  }
  push(val) {
    if(this.count === this.maxSize) throw new Error('Stack overflow!');

    let node = new Node(val);

    node.next = this.top;
    this.top = node;
    this.count++;
    return this.top;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.count--;

    return temp;
  }

  size() {
    return this.count;
  }

  peek(t) {
    if(t) return null;
    return this.top;
  }
};
