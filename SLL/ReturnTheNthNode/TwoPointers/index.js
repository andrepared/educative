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
  let nthNode = list.getHead(); //This iterator will reach the nth node
  let endNode = list.getHead(); //This iterator will reach the end

  let count = 0;
  if (!list.isEmpty()) {
    while (count < n) {
      if (endNode == null) {
        console.log("Out of bounds");
        return null;
      }
      endNode = endNode.nextElement;
      count++;
    }
  }
  while (endNode != null) {
    endNode = endNode.nextElement;
    nthNode = nthNode.nextElement;
  }
  if (nthNode != null) {
    return nthNode;
  } else {
    return null;
  }
}

let l1 = new LinkedList();
l1.insertAtHead(23);
l1.insertAtHead(76);
l1.insertAtHead(49);
l1.insertAtHead(54);
l1.insertAtHead(22);

for (var i = 1; i < 5; i++) {
  console.log(findNth(l1, i).data);
}
console.log(findNth(l1, 100));

/**
This is a more efficient approach, although it is not an unfamiliar one. Here’s the flow of the algorithm:

Move endNode forward n times, while nthNode stays at the head (lines 21-26)
Check if n is in the bounds of the list (line 22)
Move pointers simultaneously after n nodes (lines 31-32)
When endNode reaches the end, nthNode is one the Nth position from the end
Return the node’s value
This algorithm also works in O(n)
O(n)
 time complexity, but it still adopts the policy of one iteration over the whole list. We do not need to keep track of the length of the list.

Time Complexity
A single linear iteration is performed, which means that time complexity is O(n).
 */