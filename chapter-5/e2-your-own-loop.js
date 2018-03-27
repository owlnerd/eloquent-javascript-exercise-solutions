/*
  CHAPTER 5 - EXERCISE 2

  YOUR OWN LOOP

  Write a higher-order function loop that provides something like a for loop
  statement. It takes a value, a test function, an update function, and a body
  function. Each iteration, it first runs the test function on the current loop
  value, and stops if that returns false. Then it calls the body function,
  giving it the current value. And finally, it calls the update function to
  create a new value, and starts from the beginning.

  When defining the function, you can use a regular loop to do the actual
  looping.
*/


// my own loop code - version 1 (utilizing while loop)
function loop_v1(val, test, update, body) {
  while (test(val)) {
    body();
    val = update(val)
  }
}


// my own loop - version 2 (utilizing for loop)
function loop_v2(val, test, update, body) {
  for ( ; test(val); val = update(val))
    body(val);
}
