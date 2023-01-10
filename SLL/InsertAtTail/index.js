"use strict"
// import LinkedList and Node class with their respective files. 
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

// Access HeadNode => this.head
// Check if list isEmpty => this.isEmpty()
// Node class {data, Node nextELement} 

//Inserts a value at the end of the list 
LinkedList.prototype.insertAtTail = function (newData) {
    // creating a New Node with data newData 
    let node = new Node(newData);


    // check for case when list is empty 
    if (this.isEmpty()) {
        this.head = node;
        return this;
    }
    // Start from head
    let currentNode = this.head;
    
    // Iterate to the last element 
    while (currentNode.nextElement != null) {
        currentNode = currentNode.nextElement
    }
    // Make new Node the nextElement of last node of list
    currentNode.nextElement = node 
    return this;
}
let list = new LinkedList()
for (var i = 0; i < 5; i++) {
    list.insertAtTail(i)
    list.printList();
}