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
//Create List => list = LinkedList()
//Remove duplicates => list.removeDuplicates()
//Node class { data ; Node nextElement;}


//Returns a list containing the union of list1 and list2  
function union(list1, list2) {
  if (list1.isEmpty()) {
    return list2;
  } else if (list2.isEmpty()) {
    return list1;
  }

  let start = list1.getHead();

  //Traverse the first list till the tail
  while (start.nextElement != null) {
    start = start.nextElement;
  }

  //Link last element of first list to the first element of second list
  start.nextElement = list2.getHead();
  list1.removeDuplicates();

  return list1;
}

let ulist1 = new LinkedList();
let ulist2 = new LinkedList();
ulist1.insertAtHead(8);
ulist1.insertAtHead(22);
ulist1.insertAtHead(15);
ulist1.insertAtHead(22);
ulist1.printList();


ulist2.insertAtHead(21);
ulist2.insertAtHead(14);
ulist2.insertAtHead(21);
ulist2.insertAtHead(8);
ulist2.insertAtHead(7);
ulist2.printList();

union(ulist1, ulist2);
ulist1.printList();

/**
Nothing tricky going on here. We traverse to the tail of the first list and link it to the first node of the second list (line 33). All we have to do now is remove duplicates from the combined list (line 34).

Time Complexity
If we did not have the care of duplicates, the runtime complexity of this algorithm would be O(m)
O(m)
 where m is the size of the first list. However, because of duplicates, we need to traverse the whole union list. This increases the time complexity to O(m + n)^2
O(m+n) 
2
 
 where m is the size of the first list and n is the size of the second list.
 */