// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

function century(year) {
  if (year > Math.floor(year / 100) * 100) {
    // greater than the nearest century
    return Math.floor(year / 100) + 1;
  } else {
    return year / 100; // give that century
  }
}

console.log(century(1705), 18);
console.log(century(1900), 19);
console.log(century(1601), 17);
console.log(century(2000), 20);
console.log(century(89), 1);
