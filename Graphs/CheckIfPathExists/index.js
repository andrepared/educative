
"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Graph = require('./Graph.js');

function isTree(g) {
  //All vertices unvisited
  let visited = [];
  for (var j = 0; j < g.vertices; j++) {
    visited[j] = false;
  }

  //Check cycle using recursion stack
  //Also mark nodes visited to check connectivity
  if (checkCycle(g, 0, visited, -1) == true) {
    return false;
  }

  //Check if all nodes we visited from the source (graph is connected)
  for (var i = 0; i < visited.length; i++) {
    //Graph is not connected
    if (visited[i] == false) {
      return false;
    }
  }
  //Not cycle and connected graph
  return true;
}

function checkCycle(g, node, visited, parent) {
  // Mark node as visited 
  visited[node] = true;

  //Pick adjacent node and run recursive DFS
  let adjacent = g.list[node].head;
  while (adjacent) {
    if (visited[adjacent.data] == false) {
      if (checkCycle(g, adjacent.data, visited, node) == true) {
        return true;
      }
    }
    //If adjacent is visited and not the parent node of the current node 
    else if (adjacent.data != parent) {
      // Cycle found
      return true;
    }
    adjacent = adjacent.nextElement
  }
  return false;
}

let g1=new Graph(3);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 2);
console.log(isTree(g1));

let g2=new Graph(3);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
console.log(isTree(g2));

/**
To check whether an undirected graph is a tree or not, we’ll check the following :

1- There is no cycle in the graph.

2- The graph is connected.

For an undirected graph, we can either use BFS or DFS to detect the above two conditions.

So we start from the source and visit every adjacent vertex using recursive calls if, during the recursion, we come across any vertex that has already been visited and is not the parent of the current vertex, then there is a cycle. If we do not find such an adjacent for any vertex, we say that there is no cycle.

Then we check for connectivity and traverse all the vertices on the graph to check if they have been visited in the recursive calls from the source. If we find any vertex that is not visited, we conclude that vertex is not reachable from the source. Therefore, the graph is not connected and, hence, is not a tree.

Time Complexity
The graph is traversed in both functions. Hence, the time complexity is O(V + E).
 */