/**
Merge two sorted arrays
 */
// function mergeArrays(arr1, arr2) {
//     var merged = [];
//     var i = 0,
//         j = 0;
// // Traverse both arrays and insert small value for arr1 and arr2 into result array and increment the array index.
// // If an array is completely traversed, while other one is left, then just copy all the remaining elements into result array.
//     while ((i < arr1.length) && (j < arr2.length)) {
//         if (arr1[i] < arr2[j]) {
//             merged.push(arr1[i]);
//             i++
//         }
//         else {
//             merged.push(arr2[j]);
//             j++
//         }
//     }
//     if (i <= (arr1.length - 1)) {
//         arr1.splice(0, i)
//         merged = merged.concat(arr1);
//     } else if (j <= (arr2.length - 1)) {
//         arr2.splice(0, i)
//         merged = merged.concat(arr2);
        
//     }
    
//     return merged;
// }

/**

Start by creating a new empty array. This array will be filled with the elements of both arrays in sorted order and returned. Then initialize two variables to zero to store the current index of each array. Then compare the elements of the two given arrays at the current index of each, append the smaller one to the new array, and increment the index of that array whose element has been added. Repeat until the end of one of the arrays is reached and append the other array to the merged array.

** Time Complexity

The time complexity for this algorithm is O(n+m) where and m are the lengths of arr1 and arr2, respectively. This is because both the arrays are iterated over once.
 */

function mergeArrays (arr1, arr2) {
    var merged = [];
    i = 0;
    j = 0;
    // traverse both arrays and insert small value for arr1 and arr 2 into result array and increment the array index.
    // If an array is completely traversed, while the other one is left, then just copy all the remaining elements into result array.
    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++
        } else {
            merged.push(arr2[j])
                j++
            }
        }
        if (i <= (arr1.length - 1)) {
            arr1.splice(0, i)
            merged = merged.concate(arr1);
        } else if (j <= (arr2.length - 1)) {
            arr2.splice(0, i)
            merged = merged.concate(arr2);
        }
        return merged;
    }

function mergedArrays(arr1, arr2) {
    var merged = [];
    var i = 0;
    var j = 0;
    
        while((i < arr1.length) && (j < arr2.length)){
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i])
                i++
            } else {
                merged.push(arr2[j])
                j++
            }
        }
    if (i <= (arr1.length - 1)) {
        arr1.splice(0, i)
        merged = merged.concat(arr1)
    } else if (j <= (arr2.length - 1)) {
        arr2.splice(0, j)
        merged = merged.concat(arr2)
    }
    return merged;
}