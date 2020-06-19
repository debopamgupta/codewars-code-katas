/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0;
  str.split("").map((ele) => {
    if (
      ele === "a" ||
      ele === "e" ||
      ele === "i" ||
      ele === "o" ||
      ele === "u"
    ) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(getCount("abracadabra"), 5);
