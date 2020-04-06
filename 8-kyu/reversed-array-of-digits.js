/*
Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

const digitize = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((x) => Number(x));

console.log(digitize(35231), [1, 3, 2, 5, 3]);
