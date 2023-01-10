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

/**
Explanation
To start things off, let’s explain the function called printList(self) in the LinkedList.js file. It simply iterates through the linked list using temp and prints their value. The line temp=temp.nextElement; updates temp's value to the next element in the linked list. Our iteration ends when the temp is null, which means that we’ve reached the last Node in the list.

The list that is created is going to look like this:

9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0-> null
9−>8−>7−>6−>5−>4−>3−>2−>1−>0−>null

insertAtHead()
Now, we are at the main part of the code. insertAthead() (in index.js) takes an integer value as newData and inserts it at head to make it the first element of the list.

The function follows these steps to insert a new Node:

Create a new Node object with the given value, called tempNode
Make the nextElement of tempNode point to where the head is currently pointing
Point the head node to the newNode
 */