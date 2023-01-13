"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Stack = require('./Stack.js');
const Graph = require('./Graph.js');

function dfsTraversal_helper (g, source, visited, obj) {
  //Create Stack(Implemented in previous lesson) for Depth First Traversal and Push source in it
  let stack = new Stack(g.vertices);
  stack.push(source);
  visited[source] = true;
  //Traverse while stack is not empty
  while (stack.isEmpty() == false) {
    //Pop a vertex/node from stack and add it to the result
    let current_node = stack.pop();
    obj.result += String(current_node);
    //Get adjacent vertices to the current_node from the array,
    //and if they are not already visited then push them in the stack
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (visited[temp.data] == false) {
        stack.push(temp.data);
         visited[temp.data] = true;
      }
      temp = temp.nextElement;
    } 
  }
}

function dfsTraversal(g)
{
  if (g.vertices < 1){
    return null;
  }
  
  var obj = {result: ''}

  //An array to hold the history of visited nodes
  //Make a node visited whenever you push it into stack
  var visited = [];
  for (var x = 0; x < g.vertices; x++) {
    visited.push(false);
  }
    
  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i])
      dfsTraversal_helper(g, i, visited, obj);
  }

  return obj.result;
}


let g=new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
console.log(dfsTraversal(g, 0)); //Should output 01342 