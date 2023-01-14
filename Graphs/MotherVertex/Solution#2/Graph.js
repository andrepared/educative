"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

module.exports = class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //List that holds linked lists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new linked list for each vertice of the graph
    var it;
    for (it = 0; it < vertices; it++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    //Since we are implementing a directed list, (0,1) is not the same as (1,0)
    this.list[source].insertAtHead(destination);
    //If we were to implement an undirected graph where (0,1)==(1,0), 
    //we would create an additional edge from destination to source too:
    //self.list[destination].insertAtHead(source);
    return this;
  }

  printGraph() {
    console.log(">>Adjacency List of Directed Graph<<");
    var i;
    for (i = 0; i < this.list.length; i++) {
      process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].getHead();
      while (temp != null) {
        process.stdout.write("[" + String(temp.data) + "] -> ");
        temp = temp.nextElement;
      }
      console.log("null ");
    }
  }

  strGraph() {
    let str = "";
    var i;
    for (i = 0; i < this.list.length; i++) {
      str = str + "|" + String(i) + "| => ";
      let temp = this.list[i].getHead();
      while (temp != null) {
        str += ("[" + String(temp.data) + "] -> ");
        temp = temp.nextElement;
      }
      str += "null ";
    }
    return str;
  }
}