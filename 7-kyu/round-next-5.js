/*
Given an integer as input, can you round it to the next (meaning, "higher") 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

// SOLN 1
function roundToNext5(n) {
  // if it is divisible by 5 then return the number itself
  if (n % 5 == 0) {
    return n;
  }
  // otherwise, get the nearest quotient multiple, and add 5 to it to get the higher value.
  else {
    const nearest5multiple = Math.floor(n / 5) * 5 + 5;
    return nearest5multiple;
  }
}

// SOLN 2
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(1), 5);
console.log(roundToNext5(3), 5);
console.log(roundToNext5(7), 10);
console.log(roundToNext5(39), 40);
console.log(roundToNext5(0), 0);
console.log(roundToNext5(5), 5);
