"use strict"; 
// importing LinkedList and Node class from respective files. 
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//implementing isEmpty module of LinkedList class 
// isEmpty checks if list is empty or not. 
// LinkedList.prototype.isEmpty = function () {
//     return (this.head == null); // returns true if head is null, false otherwise.
// }

// let list = new LinkedList();
// console.log(list.isEmpty()); // will print true

/**

Singly Linked List insertion 
 */

/**------------------------------------ */

//Insertion at head
LinkedList.prototype.insertAtHead = function (newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
}
let list = new LinkedList();
for (var i = 0; i < 10; i++) {
    list = list.insertAtHead(i);
}
list.printList(); // will print the list