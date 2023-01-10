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
//Returns a list containing the intersection of list1 and list2  
function intersection(list1, list2) {
  let result = new LinkedList();

  let t1 = list1.getHead();
  let t2 = list2.getHead();


  while (t1 != null) {
    while (t2 != null) {
      if(t1.data == t2.data){
         result.insertAtHead(t1.data);
      }
      t2 = t2.nextElement;
    }
    t2 = list2.getHead();
    t1 = t1.nextElement;
  }
  result.removeDuplicates();
  return result;
}
let ulist1 = new LinkedList();
let ulist2 = new LinkedList();
ulist1.insertAtHead(8);
ulist1.insertAtHead(22);
ulist1.insertAtHead(15);
ulist1.insertAtHead(14);
ulist1.insertAtHead(8);
ulist1.printList();

ulist2.insertAtHead(21);
ulist2.insertAtHead(14);
ulist2.insertAtHead(7);
ulist2.insertAtHead(14);
ulist2.printList();

let res = intersection(ulist1, ulist2);
res.printList();

/**
You are already familiar with this approach. We simply check which unique elements present in list1. If any of these values are found in list2, it is added to the list3 linked list. Since we insert at the head, insert works in O(1) time.

Time Complexity
The outer loop will run m times and the inner loop will run n times. Whereas, the complexity of the removeDuplicates() will be O(min(m,n)^2) depending upon the size of the list3. So the overall complexity of this solution will be max(O(mn), O(min(m,n)^2))
max(O(mn),O(min(m,n) 
2
 ))
, where m is the size of the first list and n is the size of the second list.
 */