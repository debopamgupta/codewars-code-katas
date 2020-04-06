/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

String.prototype.toAlternatingCase = function () {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    if (this.charAt(i) >= "A" && this.charAt(i) <= "Z") {
      str = str + this.charAt(i).toLowerCase();
    } else if (this.charAt(i) >= "a" && this.charAt(i) <= "z")
      str = str + this.charAt(i).toUpperCase();
    else str = str + this.charAt(i);
  }
  return str;
};

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log(
  "String.prototype.toAlternatingCase".toAlternatingCase(),
  "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
);
console.log(
  "Hello World".toAlternatingCase().toAlternatingCase(),
  "Hello World"
);
