/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
*/

function correctPolishLetters(string) {
  let finalstring = "";

  for (let i = 0; i < string.length; i++) {
    const c = string.charAt(i);
    switch (c) {
      case "ą":
        finalstring += "a";
        break;
      case "ć":
        finalstring += "c";
        break;
      case "ę":
        finalstring += "e";
        break;
      case "ł":
        finalstring += "l";
        break;
      case "ń":
        finalstring += "n";
        break;
      case "ó":
        finalstring += "o";
        break;
      case "ś":
        finalstring += "s";
        break;
      case "ź":
        finalstring += "z";
        break;
      case "ż":
        finalstring += "z";
        break;
      default:
        finalstring += string.charAt(i);
    }
  }
  return finalstring;
}

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(
  correctPolishLetters("Maria Skłodowska-Curie"),
  "Maria Sklodowska-Curie"
);
