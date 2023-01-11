const  DoublyLinkedList = require ('./DoublyLinkedList.js');

class Queue {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  isEmpty() {   
    return this.items.length == 0;
  }

  getFront() {
    if (!(this.isEmpty())) {
     return this.items.getHead(); 
  } else
     return null;
  }

  size() {
    return this.items.length;
  }
  
}

var myQueue = new Queue();
console.log("You have successfully created a Queue of size: " + myQueue.size());

console.log("Is queue empty()?: " + myQueue.isEmpty());
console.log("getFront(): " + myQueue.getFront());