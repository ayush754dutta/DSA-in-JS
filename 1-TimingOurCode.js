"use strict";

// Timing our code:

// Q. Write a fn to add consecutive numbers from 1 upto n(included).

// Soln 1:
const addUpto = function (n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUpto(3));
console.log(addUpto(50));
console.log(addUpto(5050));

// soln 2:

const addUpto1 = function (n) {
  return (n * (n + 1)) / 2;
};

console.log(addUpto1(3));
console.log(addUpto1(50));
console.log(addUpto1(5050));

// Now the question is which one is better. And What does better mean, does that mean faster or less memory intensive or more readable?

// 1. Faster:

// soln1:
const addConsecutiveNum = function (n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

let t1 = performance.now();
console.log(addConsecutiveNum(1000000000));
let t2 = performance.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);

// soln2:

const addConsecutiveNum1 = function (n) {
  return (n * (n + 1)) / 2;
};

let t3 = performance.now();
console.log(addConsecutiveNum1(1000000000));
let t4 = performance.now();
console.log(`time elapsed: ${(t4 - t3) / 1000} seconds`);
////////////////////////////////////////////////////////

// Visualizing time complexities: In this lecture we are going to plot time taken by the code to execute as "n" keeps on increasing:

/*
1. So in soln2: time taken increases almost linearly with increasing value of n. 
*/
