const DoublyLinkedList = require('./DoublyLinkedList.js');

class Queue {
    constructor() {
        this.items = new DoublyLinkedList()
    }
}

var myQueue = new Queue();
console.log("You have successfully created a Queue.");
