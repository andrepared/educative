"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Graph = require('./Graph.js');

function removeEdge(graph, source, dest){
  if(graph.list.length == 0){
    return graph;
  }
  
  if(source >= graph.list.length || source < 0){
    return graph;
  }
  
  if(dest >= graph.list.length || dest < 0){
    return graph;
  }
  
  graph.list[source].deleteVal(dest);
  return graph;
}


let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(4, 0);
console.log("Before removing edge")
g.printGraph();

removeEdge(g, 1, 3);

console.log("\nAfter removing edge")
g.printGraph();

/**
This is a fairly simple challenge. Since our vertices are stored in an array, we access the source linked list within the array. Then we call the delete function we implemented earlier for linked lists.

Time Complexity
In the worst-case, we have to traverse E edges. Therefore, the complexity of this solution will be O(E).
 */