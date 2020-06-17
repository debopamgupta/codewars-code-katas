// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

// SOLN 1
function reject(array, predicate) {
  const arr = [];
  // this is like the filter function but in reverse.

  array.map((item) => {
    // only push items which do not match the criteria.
    // that way the things which do satisfy are filtered out.
    if (predicate(item) !== true) {
      arr.push(item);
    }
  });
  return arr;
}

// SOLN 2
function reject(array, predicate) {
  return array.filter((x) => !predicate(x));
}

console.log(
  reject([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
  }),
  [1, 3, 5]
);
