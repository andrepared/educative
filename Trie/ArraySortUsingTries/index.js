"use strict";
const TrieNode = require('./TrieNode.js');
const Trie = require('./Trie.js');

//Recursive Function to generate all words in alphabetic order
function getWords(root,result,level,word){
  //Leaf denotes end of a word
  if (root.isEndWord){
    //current word is stored till the 'level' in the character array
    let temp = "";
    for (var x=0; x<level; x++){ 
      temp += word[x];
      //console.log("pushing", word[x]);
    }                          
    result.push(temp);
  }
  
  for (var i=0; i<26; i++){ 
    if (root.children[i] != null){
      //Non-null child, so add that index to the character array
      word[level] = String.fromCharCode(i + "a".charCodeAt(0));
      getWords(root.children[i], result, level + 1, word);
    }
  }
}
  

function sortArray(arr){
  let result = [];
  //Creating Trie and Inserting words from array
  let trie = new Trie();
  for (var x=0; x<arr.length; x++){ 
    //console.log("inserting", arr[x]);
    trie.insert(String(arr[x]), x);
  }
  
  let word = [];
  for(var i=0; i<26; i++){
    word.push('');
  }
  getWords(trie.root, result, 0, word);
  return result;
}

let arr =["abc", "aba", "ceed", "cde"];
console.log(arr);
console.log(sortArray(arr));

/**
This exercise is very similar to Challenge 2, except for the fact that you have to create the trie yourself.

Since the children array for each node stores alphabets in alphabetical order, the tree itself is ordered from top to bottom. All we need to do is make a pre-order traversal, think of a as the leftmost child and z as the rightmost child. Then we just store the words in an​ array just like we did in the previous challenge.

Time Complexity
We first insert the nodes into the graph and then traverse all the existing nodes. Hence, the bottleneck worst-case time complexity is O(n) where n is the number of nodes in the trie.
 */