/**
Given an array, can you rotate its elements from right to left by one index?

Problem Statement:
implement a function rightRotate(arr, n) that will rotate the given array by n.
*/


// Solution #1 
function rightRotate(arr, n){ 
    var rotatedList = [] 
    for(var item=arr.length-n;item<arr.length;item++) 
      rotatedList.push(arr[item]) 
    for(var item=0;item<arr.length-n;item++)
      rotatedList.push(arr[item]) 
    return rotatedList 
}
