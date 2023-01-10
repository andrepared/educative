"use strict"
// require the Node class with respective files 
const Node = require('./Node.js');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }
    // Insert at head
    insertAtHead(newData) {
        let tempNode = new Node(newData);
        tempNode.nextElement = this.head;
        this.head = tempNode;
        return this; // Return the updated list
    }

    isEmpty() {
        return (this.head == null);
    }
    // Function to print the LinkeList 
    printList() {
        if (this.isEmpty()) {
            console.log("List is Empty");
            return false;
        
        } else {
        
            let temp = this.head;
            while (temp != null) {
                    process.stdout.write(String(temp.data));
                    process.stdout.write(" -> ");
                    temp = temp.nextElement;
            }
            console.log("null");
            return true;
        }
    }
    getHead() {
    return this.head;
  }
  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }

}