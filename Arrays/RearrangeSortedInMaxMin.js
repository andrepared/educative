/** Arrange elements in such a way that the maximum element appears at first, then minimum at second, then second maximum at third, and so on and so forth

Problem Statement
Implement a function called MaxMin(arr), which will rearranvge the elements of a sorted array so that the first position will have the largest number, second will have the smallest, third will have the second largest, and so on and so forth. */

function MaxMin(arr) {
    var result = [];
    for (var i = 0; i < (Math.floor(arr.length / 2)); i++) {
        result.push(arr[arr.length - (i + 1)])
        result.push(arr[i])
        }
    if (arr.length % 2) {
        result.push(arr[Math.floor(arr.length / 2)])
    }
    return result;
        
}

// This solution, we first create a new empty array. We then iterate throught the array starting from the Oth index until the arr.length/2th index. So if the length of the given array is 10, the iterator variable i on line 8 in our solution would start from 0 and end at 4. At each iteration, we first append the largest unappended element and then the smallest.
// So at the first iteration, i = 0, therefore, bu replacing i with 0 in arr[arr.length - (i+1)] we get arr[arr.length-(0+1)] = arr[arr.length-2]. This is equivalent to the lst element of the array, and as the array is sorted, the largest element in the array is appended to the result array first and then the 0th element. NExt, the second largest and the second smallest are appended and so on until the end.

// The Time Complexity 
// 

// Solution #2 

function maxMin(arr) {
    var maxIdx = arr.length-1
    var minIdx = 0
    var maxElem = arr[maxIdx] + 1; // store any element that is greater than the maximum element in the array 
    for( var i = 0; i < (arr.length); i++) {
      // at even indices we will store maximum elements
      if (i % 2 == 0){  
        arr[i] += Math.floor((arr[maxIdx] % maxElem ) * maxElem)
        maxIdx -= 1
      }
      else { // at odd indices we will store minimum elements
        arr[i] += Math.floor((arr[minIdx] % maxElem ) * maxElem)
        minIdx += 1
      }
    }
    // dividing with maxElem to get original values.
    for( var i = 0; i < (arr.length); i++) {
      arr[i] = Math.floor(arr[i] / maxElem)
    }
    return arr
}