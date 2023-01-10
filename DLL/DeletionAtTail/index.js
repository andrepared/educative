"use strict";
const DoublyLinkedList = require('./DoublyLinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => this.head
//Check if list is empty => this.isEmpty()
//Delete at head => this.deleteAtHead()
//Search for element => this.search(value)
//Node class  { data ; Node nextElement;}
DoublyLinkedList.prototype.deleteAtTail = function() {
  //if list is empty, do nothing
  if (this.isEmpty()) {
    return this;
  }
  //Get the head and first element of the list
  let lastElement = this.tail;
  //If list is not empty, link head to the nextElement of firstElement
  this.tail = lastElement.previousElement;
  if (this.tail == null) {
    this.head = null;
    return this;
  }
  this.tail.nextElement = null;
  return this;
}

let list = new DoublyLinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtHead(7);
list.insertAtTail(1);
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