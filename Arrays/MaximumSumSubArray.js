/**
Given an array, find the contigous subarray
 */
let findMaxSumSubArray = function(array_) {
  if (array_.length < 1) {
    return 0;
  }

  let currMax = array_[0];
  let globalMax = array_[0];
  let lengtharray = array_.length;
  for (let i = 1; i < lengtharray; i++) {
    if (currMax < 0) {
      currMax = array_[i];
    } else {
      currMax += array_[i];
    }

    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }
  return globalMax;
};


//The basic idea of Kadane’s algorithm is to scan the entire array and at each position find the maximum sum of the subarray ending there. This is achieved by keeping a current_max for the current array index and a global_max. The algorithm is as follows:

