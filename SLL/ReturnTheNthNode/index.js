//Double Iteration


"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}

//Function to find the nth node from the end of a Linked List
function findNth(list, n) {
  let nthNode = null;
  let length = 0;
  let tempNode = list.getHead();
  while (tempNode != null) {
    tempNode = tempNode.nextElement;
    length++;
  }
  let nthPos = length - n;
  if (nthPos < 0 || nthPos > length) {
    return null;
  }
  nthNode = list.getHead();
  for (var i = 0; i < nthPos; i++) {
    nthNode = nthNode.nextElement;
  }
  return nthNode;
}

let l1 = new LinkedList();
l1.insertAtHead(54);
l1.insertAtHead(89);
l1.insertAtHead(11);
l1.insertAtHead(40);
l1.insertAtHead(23);

for (var i = 1; i < 5; i++) {
  console.log(findNth(l1, i).data);
}
console.log(findNth(l1, 100));