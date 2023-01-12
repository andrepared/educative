function findSumOfThree(nums, target) {
// Sorting the input list
    nums = nums.sort((a, b) => {
        return a - b;

    });
    //Fix one element at a time and find the other two
    for (let i = 0; i < nums.length - 2; i++){
        // Set the indexes of the pointers
        // Index of the first of the remaining elements 
        let low = i + 1;
        //INdex of the last of the remaining elements
        let high = nums.length - 1;
        while (low < high) {
            // Check if the sum of the triple is equal to the sum
            let triple = nums[i] + nums[low] + nums[high];

            // Found a triple whose sum equals the target
            if (triple == target) {
                return true;
            }
            // Move lower pointer forward if the triple sum is less than  the required sum
            else if (triple < target) low++;
            // Move the higher pointer backwards if the triple sum is greater than the required sum
            else high--;
        }
    };
    return false;
}
function main() {
     let numsLists = [
        [3, 7, 1, 2, 8, 4, 5],
        [-1, 2, 1, -4, 5, -3],
        [2, 3, 4, 1, 7, 9],
        [1, -1, 0],
        [2, 4, 2, 7, 6, 3, 1],
    ];

    let testLists = [
        [10, 20, 21],
        [-8, 0, 7],
        [8, 10, 20],
        [1, -1, 0],
        [8, 11, 15],
    ];
    
    numsLists.maps((numList, i) => {
        console.log(i + 1 + ".\tInput Array:", numsLists[i]);
        testLists[i].map((testLists, j) => {
            if (findSumOfThree(numsLists[i], testLists[i][j]))
                console.log("\tSum for", testLists[i][j], "exists");
            else console.log("\tSum for", testlissts[i][j], "does not exist");
        });
        console.log("-".repeat(100));
    });
}
main();

/**
Solution summary
Sort the array in ascending order.

Loop through the entire array and set up two pointers (low and high) on every iteration.

The low pointer is set to the current loop index + 1, and high is set to the last index of the array.

Calculate the sum of array elements pointed to by the current loop index, and the low and high pointers.

If the sum is equal to the target, return TRUE.

If the sum is greater than the target, move the high pointer backward.

If the sum is less than the target, move the low pointer forward.

Repeat until the loop has processed the entire array.

If after processing the entire array, we don’t find a triple that matches our requirement, we return FALSE.

Time complexity
Sorting the array: O(nlog(n))
O(nlog(n))

Nested loop to find the triplet: O(n^2)
O(n 
2
 )

The total time complexity of this solution is O(nlog(n) + n^2)
O(nlog(n)+n 
2
 )
.

Space complexity
The space complexity of this solution is O(1)
O(1)
 because we only use the space needed to store two index values. */