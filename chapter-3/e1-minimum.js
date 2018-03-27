/*
  CHAPTER 3 - EXERCISE 1

  MINIMUM

  The previous chapter introduced the standard function Math.min that return
  its smallest argument. We can build something like that now. Write a function
  'min' that takes two arguments and returns their minimum.
*/


// min - version 1
function min_v1(a, b) {
  if (a < b) return a;
  else return b;
}


//min - version 2
const min_v2 = function(a, b) {
  return a < b ? a : b;
}


// min - version 3
const min_v3 = (a, b) => a < b ? a : b;
