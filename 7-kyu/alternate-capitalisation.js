/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces
*/
// SOLN 1
function capitalize(s) {
  let even = [],
    odd = [];
  s.split("").map((ele, index) => {
    if (index % 2 == 0) {
      even.push(ele.toUpperCase());
      odd.push(ele);
    } else {
      even.push(ele);
      odd.push(ele.toUpperCase());
    }
  });
  return [even.join(""), odd.join("")];
}

// SOLN 2
function capitalize(s) {
  let even = "",
    odd = "";
  s.split("").map((ele, index) => {
    if (index % 2 == 0) {
      even += ele.toUpperCase();
      odd += ele;
    } else {
      odd += ele.toUpperCase();
      even += ele;
    }
  });
  return [even, odd];
}

console.log(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
console.log(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
console.log(capitalize("abracadabra"), ["AbRaCaDaBrA", "aBrAcAdAbRa"]);
console.log(capitalize("codewarriors"), ["CoDeWaRrIoRs", "cOdEwArRiOrS"]);
