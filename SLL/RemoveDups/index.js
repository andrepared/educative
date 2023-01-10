"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Acess Length => list.length;
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
function removeDuplicates(list) {
  if (list.isEmpty()) {
    return null;
  }

  //If list only has one node, leave it unchanged
  if (list.getHead().nextElement == null) {
    return list;
  }

  let outerNode = list.getHead();
  while (outerNode != null) {
    let innerNode = outerNode; // Iterator for the inner loop
    while (innerNode != null) {
      if (innerNode.nextElement != null && outerNode.data == innerNode.nextElement.data) { //Duplicate found ahead
        innerNode.nextElement = innerNode.nextElement.nextElement; // Remove duplicate
      } else {
        innerNode = innerNode.nextElement; // Otherwise simply iterate ahead
      }
    }
    outerNode = outerNode.nextElement;
  }

  return list;
}

let list = new LinkedList();
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(22);
list.insertAtHead(14);
list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);


list.printList();
removeDuplicates(list);
list.printList();

/**
In this implementation, we check each node against the remaining list to see if a node contains an identical value.

outerNode iterates through the outer loop, while innerNode checks for duplicates. Whenever a duplicate is found, it is removed from the list.

innerNode.nextElement = innerNode.nextElement.nextElement
This algorithm is the most basic way to remove duplicates from a linked list. This means it is not very efficient.

Time Complexity
The nested while loops increase this program’s complexity to O(n2).
 */