"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Stack = require('./Stack.js');
const Graph = require('./Graph.js');

function findMotherVertex(g){
  // visited[] is used for DFS. Initially all are 
  // initialized as not visited 
  let visited = [];
  for (var i=0; i<g.vertices; i++){
    visited[i]=false;  
  }

  // To store last finished vertex (or mother vertex) 
  let lastV=0;

  // Do a DFS traversal and find the last finished 
  // vertex 
  for (var i=0; i<g.vertices; i++){ 
    if (visited[i]==false){
      DFS(g, i, visited); 
      lastV = i;
    }
  }

  // If there exist mother vertex (or vetices) in given 
  // graph, then v must be one (or one of them) 

  // Now check if v is actually a mother vertex (or graph 
  // has a mother vertex). We basically check if every vertex 
  // is reachable from v or not. 

  // Reset all values in visited[] as false and do 
  // DFS beginning from v to check if all vertices are 
  // reachable from it or not. 
  for (var i=0; i<g.vertices; i++){
    visited[i]=false;
  }
  DFS(g, lastV, visited); 
  
  for(var j=0; j<visited.length; j++){
    if(visited[j]==false){
      return -1;
    }
  }
  return lastV;
}  

// A recursive function to print DFS starting from v 
function DFS(g, node, visited){

  // Mark the current node as visited and print it 
  visited[node] = true;

  // Recur for all the vertices adjacent to this vertex
  let temp = g.list[node].head;
  while(temp){
    if (visited[temp.data] == false){
      DFS(g, temp.data, visited);
    }
    temp = temp.nextElement;
  }
}

let g = new Graph(4);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(3,0);
g.addEdge(3,1);
console.log(findMotherVertex(g));

/**
This solution is based on Kosaraju’s Strongly Connected Component Algorithm. Initially, we run the DFS on the whole graph in a loop (line 11). The DFS ensures that all the nodes in the graph are visited. If the graph is disconnected, the visited array will still have some vertices which haven’t been set to true.

The theory is that the last vertex visited in the recursive DFS will be the mother vertex. This is because, ​at the last vertex, all slots in visited would be true since DFS only stops when all nodes are visited. We keep track of this last vertex using lastV.

Then, we reset the visited array and run the DFS only on lastV. If it visits all nodes, it is a mother vertex. Otherwise, a mother vertex does not exist. The only limitation in this algorithm is that it can detect one mother vertex, even if others exist.

Time Complexity
The DFS of the whole graph works in O(V + E). If a mother vertex exists, the second DFS takes O(V + E) as well. Therefore, the complete time complexity for this algorithm is O(V + E). */