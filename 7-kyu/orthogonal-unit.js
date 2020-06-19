/*
Suppose I have two vectors: (a1, a2, a3, ..., aN) and (b1, b2, b3, ..., bN). The dot product between these two vectors is defined as:

a1*b1 + a2*b2 + a3*b3 + ... + aN*bN
The vectors are classified as orthogonal if the dot product equals zero.

Complete the function that accepts two sequences as inputs and returns true if the vectors are orthogonal, and false if they are not. The sequences will always be correctly formatted and of the same length, so there is no need to check them first.

Examples
[1, 1, 1], [2, 5, 7]        --> false
[1, 0, 0, 1], [0, 1, 1, 0]  --> true
*/

function isOrthogonal(u, v) {
  // place to store the sum
  let sum = 0;
  // iterating over the elements of each array, multiplying corresponding elements and adding them.
  for (let i = 0; i < u.length; i++) {
    sum += u[i] * v[i];
  }
  // return boolean if its 0 or not
  return sum === 0;
}

console.log(isOrthogonal([1, 2], [2, 1]), false);
console.log(isOrthogonal([1, -2], [2, 1]), true);
console.log(isOrthogonal([7, 8], [7, -6]), false);
console.log(isOrthogonal([-13, -26], [-8, 4]), true);
console.log(isOrthogonal([1, 2, 3], [0, -3, 2]), true);
console.log(isOrthogonal([3, 4, 5], [6, 7, -8]), false);
console.log(isOrthogonal([3, -4, -5], [-4, -3, 0]), true);
console.log(isOrthogonal([1, -2, 3, -4], [-4, 3, 2, -1]), true);
console.log(isOrthogonal([2, 4, 5, 6, 7], [-14, -12, 0, 8, 4]), true);
console.log(isOrthogonal([5, 10, 1, 20, 2], [-2, -20, -1, 10, 5]), false);
