"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

LinkedList.prototype.deleteAtHead = function() {
  //if list is empty, do nothing
  if (this.isEmpty()) {
    return this;
  }
  //Get the head and first element of the list
  let firstElement = this.head;

  //If list is not empty, link head to the nextElement of firstElement
  this.head = firstElement.nextElement;

  return this;
}

let list = new LinkedList();

for (var i = 0; i < 10; i++) {
  list.insertAtHead(i);
}

list.printList();
list.deleteAtHead();
list.deleteAtHead();
list.printList();

/**
Explanation
Time Complexity: O(1)

There is nothing too complicated going on here. We first check whether the list is empty or not. If it is empty, there is nothing to do (line 7). Otherwise, we access the head of the linked list in variable firstElement (line 11).

Now, we just need to point head to the next node in the list, which we do on line 14.

Now, firstElement has been removed from the linked list.

In the next lesson, we will discuss the second deletion strategy, deletion by value.
 */