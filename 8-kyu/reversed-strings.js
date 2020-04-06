/*
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/

const solution = (str) => str.split("").reverse().join("");

console.log(solution("world") == "dlrow");
