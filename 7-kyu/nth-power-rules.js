/*
You are provided with array of positive non-zero ints and int n representing n-th power (n >= 2).
For the given array, calculate the sum of each value to the n-th power. Then subtract the sum of the original array.

Example 1: Input: {1, 2, 3}, 3 --> (1 ^ 3 + 2 ^ 3 + 3 ^ 3 ) - (1 + 2 + 3) --> 36 - 6 --> Output: 30
Example 2: Input: {1, 2}, 5 --> (1 ^ 5 + 2 ^ 5) - (1 + 2) --> 33 - 3 --> Output: 30
*/

// SOLN 1
function modifiedSum(a, n) {
  let sum = 0,
    sumele = 0;
  // for each loop can also be used
  a.map((ele) => {
    sum += ele;
    ele = ele ** n;
    sumele += ele;
  });
  return sumele - sum;
}

// SOLN 2
function modifiedSum(a, n) {
  let sum = 0,
    sumele = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    // ** and Math.pow are the same
    // sumele += Math.pow(a[i], n);
    sumele += a[i] ** n;
  }
  return sumele - sum;
}

// extras
// soln by other members

//By bag
function modifiedSum(a, n) {
  return (
    a.map((item) => item ** n).reduce((i, b) => i + b) -
    a.reduce((i, b) => i + b)
  );
}
console.log(modifiedSum([1, 2, 3], 3), 30);
console.log(modifiedSum([1, 2], 5), 30);
