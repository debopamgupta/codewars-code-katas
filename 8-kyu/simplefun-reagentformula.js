/*
Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

Note
All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.
*/

function isValid(formula) {
  const obj = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  };

  formula.forEach((element) => {
    obj[element] = true;
  });

  if (obj[1] && obj[2]) return false;
  if (obj[3] && obj[4]) return false;
  if (
    (obj[5] === true && obj[6] === false) ||
    (obj[6] === true && obj[5] === false)
  )
    return false;
  if (obj[7] || obj[8]) return true;
  else return false;
}

//  ALSO can use array.includes(number)

console.log(isValid([1, 3, 7]), true);
console.log(isValid([7, 1, 2, 3]), false);
console.log(isValid([1, 3, 5, 7]), false);
console.log(isValid([1, 5, 6, 7, 3]), true);
console.log(isValid([5, 6, 7]), true);
console.log(isValid([5, 6, 7, 8]), true);
console.log(isValid([6, 7, 8]), false);
console.log(isValid([7, 8]), true);
