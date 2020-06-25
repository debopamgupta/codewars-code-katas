/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers) {
  const arr = numbers.split(" ");
  // note - get all values as numbers be careful as they are still strings
  let max = Number(arr[0]),
    min = Number(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > max) max = arr[i];
    if (Number(arr[i]) < min) min = arr[i];
  }
  return max.toString() + " " + min.toString();
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
