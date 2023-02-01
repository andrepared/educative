/**
Given an array of size "n". Can you find the minimum value in the array? Implement your solution in JavaScript and see if your output matches the expected output.

Implement a function findMinimum(arr) that finds the smallest number in the given array.
 */

// Solution #1 Sort the array
function findMinimum(arr){
    arr.sort((function (a, b) {
        return a - b
    }))
    return arr[0]
}

// Solution #2 Iterate over the array
function findMinimum(arr) {
    var currentMin = arr[0];
    // At every Index compare its value with the current minimum
    // and if it is less, then make that index value the new minimum value
    for (let val of arr) {
        if (val < currentMin)
            currentMin = val
    }
    return currentMin
}

//Start with the first element, which is 9 in this example, and save it as the smallest value. Then, iterate over the rest of the array, and whenever an element that is smaller than the number already stored as the minimum is found, set the minimum to that number. By the end of the array, the number stored in the minimum will be the smallest integer in the whole array.

function findMin(arr) {
    currentMin = 0;
    for (let val of arr) {
        if (val < currentMin) {
            currentMin = val;
        }
        return currentMin;
    }

}