"use strict"; 
// importing LinkedList and Node class from respective files. 
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//implementing isEmpty module of LinkedList class 
// isEmpty checks if list is empty or not. 
LinkedList.prototype.isEmpty = function () {
    return (this.head == null); // returns true if head is null, false otherwise.
}

let list = new LinkedList();
console.log(list.isEmpty()); // will print true
