/**
Find Second Max Value in an Array
Given an array of size n, can you find the second maximum element in the array?

Problem Statement
Implement a function findSecondMaximum(arr), which returns the second largest element in the array.
Note1: input array will contain at least two unique elements. 
Note2: input array will not contain Number.NEGATIVE_INFINITY

*/
// Solution #1 Sort and Index
function findSecondMaximum(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    if (arr.length >= 2)
        return arr[arr.length - 2]
    else 
        return null
}
//We first sort the array and return the second largest element (present at second last index: arr.length - 2) from the sorted array. We use the generic JavaScript sort() function, but in a real interview, you should implement your favorite sorting algorithm here! Remember to always take care of edge cases, such as the input array being smaller than two here.
//Note: This solution wont work properly if there are duplicate values in an array
/**
The time complexity of this solution is O(nlogn)
O(nlogn)or whatever is the complexity of your sorting algorithm.
 */

// Solution #2 Traversing the array twice
function findSecondMaximum(arr) {
    var firstMax = Number.NEGATIVE_INFINITY;
    var secondMax = Number.NEGATIVE_INFINITY;
    for (let item of arr) {
        if (item > firstMax)
            firstMax = item
    }
    for (let item of arr) {
        if ((item < firstMax) && (item > secondMax))
            secondMax = item
    }
    return secondMax;
    
}
//We traverse the array twice. In the first traversal, we find the maximum element. In the second traversal, we find the greatest element less than the element obtained in the first traversal.
/**
Time Complexity
The time complexity of the solution is in O(n) since the list is traversed twice. */

// Solution #3 Finding the second largest in one traversal 
function findSecondMaximum(arr) {
    var max = Number.NEGATIVE_INFINITY;
    var secondMax = Number.NEGATIVE_INFINITY;

    for (var val of arr) {
        if (val > max) {
            secondMax = max
            max = val

        } else if (val > secondMax && val != max)
            secondMax = val
    }
    return secondMax
}
// We initialize two variables max and secondmax to NEGATIVE_INFINITY. We then traverse the array, and if the current element in the array is greater than the maximum value, then set secondmax to max and max to the current element. If the current element is in between the first and second, then update secondmax to store the value of the current variable. Finally, return the value stored in the secondmax.

/**
This solution is in O(n) since the array is traversed once only. */

