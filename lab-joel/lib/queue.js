const Queue = module.exports = {};

Queue.con = function() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.arr = function() {
    return collection;
  };
};
