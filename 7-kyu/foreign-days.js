/*
How many days are we represented in a foreign country?

My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

Example:

daysRepresented ([[10,17],[200,207]])
Returns 16 because there are two trips of 8 days, which add up to 16
*/
// SOLN 1
function daysRepresented(trips) {
  // place to store the days
  let days = {};
  trips.forEach((trip) => {
    const arrival = trip[0];
    const departure = trip[1];
    for (let i = arrival; i <= departure; i++) {
      // iterate over the array and set the date value to be true.
      // if it already exists on the object days, then it will be overwritten
      // resulting in only one entry for it

      days[i] = true;
    }
  });
  return Object.keys(days).length;
}

// SOLN 2
function daysRepresented(trips) {
  const set = new Set();
  trips.map(([a, b]) => {
    for (let i = a; i <= b; ++i) {
      set.add(i);
    }
  });
  return set.size;
}

console.log(
  daysRepresented([
    [2, 8],
    [6, 16],
    [17, 26],
  ]),
  25
);

console.log(
  daysRepresented([
    [2, 8],
    [220, 229],
    [10, 16],
  ]),
  24
);
