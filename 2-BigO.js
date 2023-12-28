"use strict";

// Big-O Notation: Big-O Notation helps us to talk formally about how the runtime(time taken) of an algorithm grows as the inputs grow.

// Definition: We say that an algorithm is O(f(n)) if the no. of simple operations the computer has to do is eventually less than a constant times f(n), as n increases. So, f(n) could be linear, ie; f(n) = n, f(n) could be quadratic (f(n) = n^2), f(n) could be constant, ie f(n) = k, or f(n) could be something entirely different(Later).

// So for soln2 from the previous lecture; Big-O is O(1), bcz for higher values of "n", time elapsed is constant, this is bcz always the no. of operations is 3. (n *(n+1))/2.

// For soln1 from the previous lecture; Big-O is O(n), because time elapsed is increaing in direct proportion (linearly) with n.

// Q. Lets print numbers in console in reverse order.

const reverseCounting = function (n) {
  //   counting correctly:
  console.log("HERE WE GO!");
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  // REVERSE COUNTING:
  console.log("Reverse count Bye-bye!");
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
};

reverseCounting(10);
// Go to performance tracker:

// NOTE(VVIP): Now whats taking time is number of operations, so as "n" grows, we have to see whether the number of operations are growing or not.

console.log("-------------------NEW QUESTION----------------");
// Q. Print all pairs of numbers using nested for Loop.

const printAllPairs = function (n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
};

printAllPairs(5);
// go to performance tracker:
// The above question is O(n) for inner loop and for outer loop also its O(n), so for Big-O of O(n) operations inside O(n) operations will O(n^2).
///////////////////////////////////////////////////////

// Simplifying Big-O:

/*
1. While calculating Big-O, constants dont matter. Eg;
O(2n)->> O(n), or O(500)->> O(1), O(5n^2)->>O(n^2).

2. Small terms dont matter: O(n+10)-->O(n), o(1000n +50)--> O(n), O(n^2+ 5n + 8)->O(n^2).

3. runtime for arithematic operations is constant, for variable assignment also runtime is constant.

4. Accessing array elements by indexes or object value by keys is constant.

5. In a loop, time complexity is length of the loop times the complexity of whatever happens inside of the loop.
*/

// Q. Print numbers from 1 to n, given atleast n is to be printed.

const atLeast5 = function (n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

atLeast5(3);
atLeast5(7);
// So in above as n grows number of operation grows--> O(n).

// Q. Print numbers from 1 to max 5.

const logUpto5 = function (n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

logUpto5(3);
logUpto5(8);

// So in above, no matter how large the value of n is, operations wont grow--> O(1).
