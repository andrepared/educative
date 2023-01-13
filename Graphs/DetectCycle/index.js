"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Stack = require('./Stack.js');
const Graph = require('./Graph.js');

function detectCycleRec(g, i,visited, recNodes) {
    // Check if current node is being visited in the same recursive call
    if(visited[i]==false) {
        // Set recursive array and visited to true
        visited[i] = true;
        recNodes[i] = true;

        var adjacent;
        let adjacentNode= g.list[i].getHead();
        while (adjacentNode != null ) {
            // Access adjacent node and repeat algorithm
            adjacent = adjacentNode.data;
            if ((!visited[adjacent]) && detectCycleRec(g, adjacent, visited, recNodes))
                return true;  // Loop found
            else if(recNodes[adjacent])
              return true;
            adjacentNode=adjacentNode.nextElement;
        }

    }


    recNodes[i] = false;
    return false;
}
function detectCycle(g) {

    var num_of_vertices = g.vertices;
    //Boolean Array to hold the history of visited nodes (by default-false)
    //Make a node visited whenever you traverse it
     var visited = [];

    //Boolean array of vertices which will recursively called
     var recNodes = [];

    for(var i = 0; i < num_of_vertices; i++)
    {
        visited[i] = false;
        recNodes[i] = false;
    }

    for (var i = 0; i < num_of_vertices; i++) { // Recursive function called
        if (detectCycleRec(g,i, visited, recNodes))
            return true;
        // If cycle detected, return true
    }
    return false;
}


let g=new Graph(6);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(4, 5);

console.log(detectCycle(g));
g.addEdge(5, 3);
console.log(detectCycle(g));
/**
The solution might look confusing at first, but the logic behind it is pretty straight forward.

For each node, we start a recursive call with detectCycleRec. The function maintains a stack (not to be confused with the stack data structure) of nodes called recNodes along with a visited array.

The vertices that have been traversed in the current recursion are added to recNodes and visited keeps a record of all the nodes that have been traversed regardless of the recursive call.

For a cycle to occur, we must reach a node that was already present in the recursion stack. If the recursion ends and no such node is found, the stack is reset again and the next iteration of detectCycle starts.

Time Complexity
O(V+E), which we already know is the complexity of traversing the adjacency list that represents our graph.
 */