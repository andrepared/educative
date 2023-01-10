"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => this.head
//Check if list is empty => this.isEmpty()
// delete first node => this.deleteAtHead()
//Node class  { data ; Node nextElement;}

LinkedList.prototype.deleteAtTail = function() {
  // check for the case when linked list is empty
  if (this.isEmpty()) {
    return this;
  }
  //if linked list is not empty, get the pointer to first node
  let firstNode = this.head;
  //check for the corner case when linked list has only one element
  if (firstNode.nextElement == null) {
    this.deleteAtHead();
    return this;
  }
  //otherwise traverse to reach second last node
  while (firstNode.nextElement.nextElement != null) {
    firstNode = firstNode.nextElement;
  }
  //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
  firstNode.nextElement = null;
  return this;
}
let list = new LinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtHead(7);
list.insertAtHead(1);
list.printList();
list.deleteAtTail();
list.printList();
list.deleteAtTail();
list.printList();
list.deleteAtTail();
list.printList();
list.deleteAtTail();
list.printList();
list.deleteAtTail();
list.printList();