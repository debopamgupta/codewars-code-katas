/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
Patrick Feeney => P.F
*/

// Works for the kata particularly
function abbrevName(name) {
  name = name.split(" ");
  let sn =
    name[0].charAt(0).toUpperCase() + "." + name[1].charAt(0).toUpperCase();
  return sn;
}

// BUMP
// works for any name containg any amount of words
function abbrevName(name) {
  name = name.split(" ");
  let sn = "" + name[0].charAt(0).toUpperCase();
  name = name.splice(1);
  name.forEach((element) => {
    sn += "." + element.charAt(0).toUpperCase();
  });
  return sn;
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
