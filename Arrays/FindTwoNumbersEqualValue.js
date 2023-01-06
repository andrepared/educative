/**
Given an array and a number "value", find two numbers from the array that sum to 'value'. Implement your solution in JavaScript and see if your output matches with the correct output.
 */

/**
In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.
 */

// ************************************

/** Brute Force : Solution #1
This is the most time-intensive, but yet an ​intuitive solution. Traverse the whole array, and check if any of the two elements add up to the given number n. Use a nested for-loop and iterate over the entire array for each element.

 */

function findSum(arr, value) {
    for (var j = 0; j < arr.length; j++) {
        for (var k = j + 1; k < arr.length; k++) {
            if ((arr[j] + arr[k]) == value)
                return [arr[j], arr[k]]
            
        }
    }
    return false;
}

/** Sorting the Array: Solution #2 */


function binarySearch(arr, item) {
    var first = 0, mid;
    var last = arr.length - 1;
    var found = false;
    var arrayIndex = -1;
    
    while ((first <= last) && !found) {
        mid = Math.floor((first + last) / 2)
        if (arr[mid] == item) {
            arrayIndex = mid;
            found = true;
        }
        else {
            if (item < arr[mid]) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }
        
    }
    if (found) {
    return arrayIndex
    } else {
        return false;
    }
}

function findSum(arr, value) {
    arr.sort(function (a, b) {
    return a - b
    })
    var index; 
     for(var j = 0; j<arr.length; j++){
   index = binarySearch(arr,(value-arr[j]))
   if(index!=false && j!=index)
     return [arr[j],value-arr[j]]
 }
  return false;
}

/** Moving Indices: Solution 3 */
function findSum(arr, value) {

    arr.sort(function(a, b) {
        return a - b
    })

    var index1 = 0,
        index2 = arr.length - 1,
        result = [],
        sum = 0;

    while (index1 != index2) {
        sum = arr[index1] + arr[index2]

        if (sum < value) {
            index1++;
        } else if (sum > value) {
            index2--;
        } else {
            result.push(arr[index1]);
            result.push(arr[index2]);
            return result;

        }
    }
  return false;
}
