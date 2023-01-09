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

/**
This solution is very smart. We actually store two elements at one index mathematically. The original element is stored as the remainder, while the max/min element is stored as the multiplier. The following line achieves this;

arr[i] += (arr[maxIdx] % maxElem ) * maxElem;
Here, arr[maxId] is stored as the multiplier. Whereas, arr[i] is stored as the remainder. For example in the array, [1, 2, 3, 4, 5, 6, 7, 8, 9], the maxElem which is any element greater than the maximum element in the array, in this case, is 10 and 91 is stored at index 0. With 91, we can get the original element, 1, using the expression 91%10 as well as the new element, 9, using the expression 91/10.

This allows us to swap the numbers in place without losing any data or using any extra space. To get the final array, we simply divide each element by maxElem as done in the last for loop.
 */

