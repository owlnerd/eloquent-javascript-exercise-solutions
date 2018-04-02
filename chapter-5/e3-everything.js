/*
  CHAPTER 5 - EXERCISE 3

  EVERYTHING

  Analogous to the some method, arrays also have an every method. This one
  returns true when the given function returns true for every element in the
  array. In a way, some is a version of the || operator that acts on arrays,
  and every is like the && operator.

  Implement 'every' as a function that takes an array and a predicate function
  as parameters. Write two versions, one using a loop and one using the some
  method.
*/


// every - version 1 (using for loop)
// ----------------------------------
function every(array, test) {
  for (let element of array)
    if (!test(element)) return false;
  return true;
}


// every - version 2 (using 'some' function defined below)
// -------------------------------------------------------
function every_v2(array, test) {
  return !some(array, element => !test(element));
}

// some - defined for use in every - version 2
// -------------------------------------------
function some(array, test) {
  for (let element of array)
    if (test(element)) return true;
  return false;
}


// every - version 3 (using built-in version of some)
// --------------------------------------------------
function every_v3(array, test) {
  return !array.some(element => !test(element));
}
