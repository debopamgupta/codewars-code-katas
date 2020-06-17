/*
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

// SOLN 1
function halvingSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i *= 2) {
    sum += Math.floor(n / i);
  }
  return sum;
}

// SOLN 2 by ChrisKramer2020, gautemo, pmnord, agary110
function halvingSum(n) {
  if (n === 1) return n;
  return n + halvingSum(Math.floor(n / 2));
}

console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
