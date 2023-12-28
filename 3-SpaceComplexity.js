"use strict";

// Space Complexity:

/*
1. So Far we have been talking about time complexity, variation of runtime as the size of algoritm increases.

2. Space complexity means, how memory is gonna be allocated to the algorithm as the input grows. Here we will not talk about the memeory occupied by input. This is called auxiliary space complexity.

// 3. Some space complexities: 
a. Most primitives(Boolean, number, undefined, null) are constant space.

b. Strings require O(n), where n = string.length.

c. Arrays or objects require O(n), whre n = array.length or number of keys in case of objects.

*/

// Q. calculate space complexity for adding all elements of an array.

const sumArr = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
};

// So in above, we are increasing the number of allocations and NOT the number of variables in every iteration. So even if array has millions of elements, allocation will be done only in total-var and i-var(inside of loop). So, O(1) space.

// Q. create new array from older one.

const fillArr = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};

// So in above, as the length of input array "arr" grows, the length of newArr grows, newArr.length is proportional to arr.length. so, O(n).
//////////////////////////////////////////////////////////////

// Logarithm and section recap: We know what log is but simply, Log is the number of times an input number is divided by the base number before it becomes less than or equal to 1.

// Logarithmic complexities is observed in;
/*
1. Certain searching algorithms have logarithmic time complexities.

2. Efficient sorting algorithms involve logarithms.

3. Recursion sometimes involves logarithmic space complexities.
*/
