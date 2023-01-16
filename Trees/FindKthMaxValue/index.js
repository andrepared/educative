/**Sorting the tree in order */

// "use strict";
// const BinarySearchTree = require('./BinarySearchTree.js');
// const Node = require('./Node.js');

// function findKthMax(rootNode,k)
// {
//   var tree = []
//   tree=inOrderTraverse(rootNode, tree);
//   console.log(tree);
//   if(((tree.length)-k) >=0 && k>0)
//   { 
//     return tree[tree.length-k]
//   }
//   return null;
// }
// //Helper recursive function to traverse the tree inorder
// function inOrderTraverse(rootNode,tree)
// {
//   if( rootNode !== null)
//   {
//     tree=inOrderTraverse(rootNode.leftChild,tree)
//     tree.push(rootNode.val)
//     tree=inOrderTraverse(rootNode.rightChild,tree)
//   }
  
//   return tree;
// }
    

// var BST = new BinarySearchTree(6)
// BST.insertBST(1)
// BST.insertBST(133)
// BST.insertBST(12)
// console.log(findKthMax(BST.root, 3));


/** Using Reverse in-Order */

"use strict";
const BinarySearchTree = require('./BinarySearchTree.js');
const Node = require('./Node.js');

var counter;

function findKthMax(rootNode, k) {
	counter = 0;
	return reverseInOrder(rootNode, k).val;
}

function reverseInOrder(rootNode, k) {
	if (rootNode) {
		var rightChild = reverseInOrder(rootNode.rightChild, k)

		if (rightChild) {
			if (counter == k) {
				return rightChild;
			}

		} else {
			counter++;
			if (k == counter) {
				return rootNode;
			}
			return reverseInOrder(rootNode.leftChild, k)
		}

	}
}

var BST = new BinarySearchTree(6)
BST.insertBST(1)
BST.insertBST(133)
BST.insertBST(12)
console.log(findKthMax(BST.root,3));