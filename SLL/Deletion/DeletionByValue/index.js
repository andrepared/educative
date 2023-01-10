"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => this.head
//Check if list is empty => this.isEmpty()
//Delete at head => this.deleteAtHead()
//Search for element => this.search(value)
//Node class  { data ; Node nextElement;}
LinkedList.prototype.deleteVal = function(value) {
  
  //if list is empty return false
  if (this.isEmpty()) {
    return false;
  }

  //else get pointer to head
  let currentNode = this.head;
  // if first node's is the node to be deleted, delete it and return true
  if (currentNode.data == value) {
    this.head = currentNode.nextElement;
    return true;
  }

  // else traverse the list
  while (currentNode.nextElement != null) {
    // if a node whose next node has the value as data, is found, delete it from the list and return true
    if (currentNode.nextElement.data == value) {
      currentNode.nextElement = currentNode.nextElement.nextElement;
      return true;
    }
    currentNode = currentNode.nextElement;
  }
  //else node was not found, return false
  return false;
}

let list = new LinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtHead(7);
list.insertAtHead(1);
list.printList();
list.deleteVal(5);
list.printList();

/**
The algorithm is very intuitive. Firstly, you need to handle a couple of corner cases before moving to the general case. If the linked list is already empty, there is nothing to delete, so we can simply return false in this case (line 15).

Before we handle the next corner case, let’s briefly talk about our strategy for the general case. To delete the desired node, we need to set the nextElement of the desired node’s previous node. Thus we actually need to reach that previous node instead of the desired node. We do this by checking the next node’s value at each iteration (line 29). When we have found the required node, we update its nextElement to skip its next node (line 30).

This strategy would not work for the case when the first node is the node that needs to be deleted. Which is our next corner case, deletion, in this case, is just the same as deletion at the head (line 22).
 
Time Complexity#
In the worst-case scenario, you would have to traverse until the end of the list. This means the time complexity will be O(n).

*/