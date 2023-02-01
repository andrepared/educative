/**
Given an array, can you re-arrange its elements in such a way that the negative elements appear at one side and positive elements appear in the other? 

Problem Statement
Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, and all positive appear on the right
 */

function reArrange(arr) {
    var neg = [];
    var pos = [];
    for (let ele of arr) {
        if (ele < 0) {
            neg.push(ele)
        } else {
            pos.push(ele)
        }
        return neg.concat(pos)
    }
}
/**
In this solution, we iterate over the entire given array and append all negative numbers to one array and the postive to another. We simply join them and return at the end
 */
// Time Complexity 
// Since the array is only iterated over once, the time complexity is O(n)

// Solution #2 Rearranging in Place 
function reArrange(arr) {
    var leftMostPosEle = 0,
        temp;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i != leftMostPosEle) {
                temp = arr[i];
                arr[i] = arr[leftMostPosEle];
                arr[leftMostPosEle] = temp;
            }
            leftMostPosEle += 1
        }
    }
    return arr;
}
// In this solution, we iterate over the entire array, and if we encounter a negative element, we simply swap it with the leftmost positive element.

// Time Complexity
// O(n) with no extra space used as the entire array is iterated over.

function reArrange(arr) {
    var pos = [];
    var neg = [];
    for (let ele of arr) {
        if (ele < 0) {
            neg.push(ele)
        } else {
            pos.push(ele)
        }
        return neg.concat(pos)
    }

}