/* Given a sequence of numbers, find the largest pair sum in the sequence.
For example
[10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
[99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)
Input sequence contains minimum two elements and every element is an integer.
*/

// SOLN 1 self sorting the array without any functions
function largestPairSum(numbers) {
  // sort array.
  for (let i = 0; i < numbers.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    let temp = numbers[i];
    numbers[i] = numbers[min];
    numbers[min] = temp;
  }
  // take the last two integers and sum them.
  return numbers[numbers.length - 1] + numbers[numbers.length - 2];
}

// SOLN 2 using higher order functions
function largestPairSum(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0] + numbers[1];
}

console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);
