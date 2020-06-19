// SOLN 1
function accum(input) {
  // a place to store the result
  let result = "";
  // iterate over the string
  for (let index = 0; index < input.length; index++) {
    const currentLetter = input[index];
    // append the current letter i+1 times to the string
    const totalCount = index + 1;
    for (let counter = 0; counter < totalCount; counter++) {
      // capitalize the first append
      if (counter == 0) {
        result += currentLetter.toUpperCase();
      } else {
        result += currentLetter.toLowerCase();
      }
    }

    // append a dash if it is not the last letter
    if (index != input.length - 1) {
      result += "-";
    }
  }

  return result;
}
// SOLN 2
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

// SOLN 3
function accum(s) {
  return s
    .split("")
    .map((c, i) => {
      var res = c.toUpperCase();
      for (var j = 1; j <= i; j++) {
        res += c.toLowerCase();
      }
      return res;
    })
    .join("-");
}

console.log(accum("Zpg"), "Z-Pp-Ggg");
console.log(accum("Nyff"), "N-Yy-Fff-Ffff");
