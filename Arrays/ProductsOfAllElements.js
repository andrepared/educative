/**
Given an array, return an array where each index stores the product of all numbers in the array except the number at the index itself.
 

Problem statement

Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.

Note: the size of the array should be greater than or equal to 2. 
 */

function findProduct(arr){
  var result = []
  var left = 1, currentproduct;
  //To store product of all previous values from currentIndex
  for(var i=0;i<arr.length;i++){
    currentproduct = 1
    //To store current product for index i    
		//compute product of values to the right of i index of list
    for(var j=i+1;j<arr.length;j++){
      currentproduct = currentproduct * arr[j]
    }
    //currentproduct * product of all values to the left of i index
    result.push(currentproduct * left)
    //Updating `left`
    left = left * arr[i]
  }
    
  return result
}

/**
Optimizing the number of multiplications 
*/

function findProduct(arr) {
    var temp = 1,
        product = [];
    for (var i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
    }

    temp = 1;
    for (var i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
    }

    return product
}

/**
In this problem, we need to calculate the product of elements in a specific way. In the output array, The value at index i will be equal to the product of all the elements of the given array arr except the element at index i. Given an array {1, 3, 4, 5}. The product of elements can be calculated as:

We will first create a new array product to store the products of elements. Then, we will traverse the arr and store the product of all the numbers to the left side of the current element in product[i] as on line 5. We will also calculate the product of all the elements from index 0 to the current index i for the next iteration and store it in temp line 6 (It will be a product of all the numbers on the left for an element at index i+1).

Now we will traverse the arr from the end and multiply the product of all the numbers to the right side of the current element with product[i]( product of all the numbers to the left side of current element) as on line 11. We will also calculate the product of all the elements from index length-1 to the current index i for the next iteration and store it in temp line 12 (It will be a product of all the numbers on the right for an element at index i-1).
*/