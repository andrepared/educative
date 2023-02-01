/** 
Given an array, find the first integer, which is unique in the array. Unique means the number does not repeat and appears only once in the whole array. 

Problem Statement
--> Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.

Note: The function should return null if no unique number is found.  

*/

function findFirstUnique(arr) {
    var index2;
    for (var index1 = 0; index1 < arr.length; index1++){
        index2 = 0
        while (index2 < arr.length) {
            if ((index1 != index2) && (arr[index1] == arr[index2]))
                break
            index2 += 1
        }
        if (index2 == arr.length)
            return arr[index1]
    }
    return null;
}

/**
We start from the first element and traverse through the whole array comparing it with all the other elements to see if any element is equal to it. If so, we skip to the next element and repeat the same steps. If not, then this is the first unique element in the array, like 0 is in the given example.
 */

//Not the most optimal solution, the best way to optimize this solution is create a hashing function**

/**
Time Complexity
The time complexity of this solution is O(n^2)
 since the entire array is iterated for each element
→n×n */

function findFirstUnique(arr) {

    var index2;
    for (var index1 = 0; index1 < arr.length; index1++){
        index2 = 0
        while (index2 < arr.length) {
            if ((index1 != index2) && (arr[index1] == arr[index2]))
                break
            index2 += 1
        }
        if (index2 == arr.length) {
            return arr[index1]
        }
        return null;
    }
}