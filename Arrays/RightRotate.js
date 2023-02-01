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
//In this solution, we first create an empty array. We then iterate through the last n elements of the array and append them to the new array. Lastly, we append the first arr.length-n elements to the new array and return. 
// Time Complexity 
// Since the entire array is iterated over, the time complexity of this solution is O(n).

//Solution #2 using splice() and concat()
function rightRotate(arr, n) {
    return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
}

function rightRotate(arr, n) {
  var rotatedList = [];
  for (var item = arr.length - n; item < arr.length; item++) 
    rotatedList.push(arr[item])
    for (var item = 0; item < arr.length - n; item++)
    rotatedList.push(arr[item])
  
  return rotatedList  
      
  
}