/*
  CHAPTER 8 - EXERCISE 1

  RETRY

  Say you have a function primitiveMultiply that, in 20 percent of cases,
  multiplies two numbers, and in the other 80 percent, raises an exception of
  type MultiplicatorUnitFailure. Write a function that wraps this clunky
  function and just keeps trying until a call succeeds, after which it returns
  the result.

  Make sure you handle only the exceptions you are trying to handle.
*/


// reliableMultiply function - version 1 (serious behavior)
// --------------------------------------------------------
function reliableMultiply_v1(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) throw e;
    }
  }
}


// reliableMultiply function - version 2 (silly behavior)
// --------------------------------------------------------
function reliableMultiply_v2(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure)
        console.log("Function misbehavior SHAL  NOT  PAAAAAAS!!!");
      else
        throw e;
    }
  }
}


// MultiplicatorUnitFailure class and primitiveMultiply function provided by
// the book, included here in order to make things clearer
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
