"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Queue = require('./Queue.js');
const Graph = require('./Graph.js');

function bfsTraversal_helper(g, source, visited, obj) {
  
  
  //Create Queue(implemented in previous lesson) for Breadth First Traversal and enqueue source in it
  let queue = new Queue(g.vertices);
  queue.enqueue(source);
  visited[source] = true;
  //Traverse while queue is not empty
  while (queue.isEmpty() == false) {
    //Dequeue a vertex/node from queue and add it to result
    let current_node = queue.dequeue();
    obj.result += String(current_node);
    //Get adjacent vertices to the current_node from the list,
    //and if they are not already visited then enqueue them in the Queue
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (visited[temp.data] == false) {
        queue.enqueue(temp.data);
        visited[temp.data] = true; //Visit the children
      }
      temp = temp.nextElement;
    }
  }
}

function bfsTraversal(g)
{
  if (g.vertices < 1){
    return null;
  }
  
  var obj = {result: ''}

  //An array to hold the history of visited nodes
  //Make a node visited whenever you push it into stack
  let visited = [];
  for (var x = 0; x < g.vertices; x++) {
    visited.push(false);
  }
    
  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i])
      bfsTraversal_helper(g, i, visited, obj);
  }

  return obj.result;
}

let g1=new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log(bfsTraversal(g1, 0));

/**
For this solution, we will use the help of the queue data structure. bfsTraversal calls the helper function bfs_helper on every vertex which is not visited. bfs_helper starts from source, each node is pushed into the stack. Starting from the source vertex, which is 1, we insert the vertices into the queue. To keep track of where we have already traversed​, every vertex inserted into the queue is marked as “visited” in the visited array.

The result string will be our returning variable. The value of a node is appended to result when it is dequeued from the queue. For each node that is dequeued, its adjacent nodes are added to the queue if they have not been visited.

The First In First Out (FIFO) structure of the queue ensures that the graph is traversed one level at a time.

Time Complexity
Since this algorithm traverses the whole graph once, its time complexity is O(V + E).
 */