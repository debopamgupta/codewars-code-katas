/*
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

function greet(name) {
  if (name) return `hello ${name}!`;
  else return null;
}

function greet(name) {
  return name ? `hello ${name}!` : null;
}

console.log(greet("Niks"), "hello Niks!");
console.log(greet(null), null);
