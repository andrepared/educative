//Implementation example laid out below


// const LinkedList = require("../SLL/LinkedList");

// class Graph {
//     constructor(vertices) {
//         //Total number of vertices in the graph
//         this.vertices = vertices;
//         //Defining an array which can hold LinkedLists equal to the number of vertices in the graph
//         this.lists = [];
//         //Creating a new LinkedList for each vertex/index of the list
//         for (let i = 0; i < vertices.length; i++) {
//             let temp = new LinkedList();
//             this.lists.push(temp);
//         }
//     }
// }

//We’ve laid down the foundation of our Graph class. The variable vertices contains an integer specifying the total number of vertices.

// The second component is an array, which will act as our adjacency list. We simply have to run a loop and create a linked list for each vertex.

// Making the class functional with two added methods, printGraph() and addEdge()

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Array that holds linked lists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new linked list for each vertice of the graph
    var it;
    for (it = 0; it < vertices; it++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices)
    //Since we are implementing a directed list, (0,1) is not the same as (1,0)
    this.list[source].insertAtHead(destination);
    //If we were to implement an undirected graph where (0,1)==(1,0), 
    //we would create an additional edge from destination to source too:
    //this.list[destination].insertAtHead(source);
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
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.printGraph();
