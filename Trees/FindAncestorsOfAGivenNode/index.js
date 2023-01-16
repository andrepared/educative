"use strict";
const BinarySearchTree = require('./BinarySearchTree.js');
const Node = require('./Node.js');

function findAncestors(rootNode, k) {
    var result = []
    recfindAncestors(rootNode, k, result)
    return result;
}

function recfindAncestors(rootNode, k, result) {
    if (rootNode == null) {
        return false;
    } else if (rootNode.val == k) {
        return true;
    } else if ((recfindAncestors(rootNode.leftChild, k, result)) || (recfindAncestors(rootNode.rightChild, k, result))) {
        result.push(rootNode.val)
        return true;
    }
    return false;
}

var BST = new BinarySearchTree(6)
BST.insertBST(1)
BST.insertBST(133)
BST.insertBST(12)
console.log(findAncestors(BST.root, 12))

/**
This solution uses a recursive helper function which traverses from the root to the input node and backtracks to append the ancestors that led to the node.

Time Complexity
This is an O(n)
O(n)
 time function since it iterates over all of the nodes of the entire tree.
 */