/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

const past = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000;

console.log(past(0, 1, 1), 61000);
console.log(past(1, 1, 1), 3661000);
console.log(past(0, 0, 0), 0);
console.log(past(1, 0, 1), 3601000);
console.log(past(1, 0, 0), 3600000);
