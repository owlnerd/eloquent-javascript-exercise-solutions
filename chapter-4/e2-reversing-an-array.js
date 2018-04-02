/*
  CHAPTER 4 - EXERCISE 2

  REVERSING AN ARRAY

  Arrays have a reverse method which changes the array by inverting the order
  in which its elements appear. For this exercise, write two functions,
  'reverseArray' and 'reverseArrayInPlace'. The first, 'reverseArray', takes
  an array as argument and produces a new array that has the same elements in
  the inverse order. The second, 'reverseArrayInPlace', does what the reverse
  method does: it modifies the array given as argument by reversing its
  elements. Neither may use the standard reverse method.

  Thinking back to the notes about side effects and pure functions in the
  previous chapter, which variant do you expect to be useful in more
  situations? Which one runs faster?
*/


// reverseArray - version 1
// ------------------------
function reverseArray_v1(inputArray) {
  let outputArray = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
}


// reverseArray - version 2
// ------------------------
function reverseArray_v2(inputArray) {
  let outputArray = [];
  for (let element of inputArray) {
    outputArray.unshift(element);
  }
  return outputArray;
}


// reverseArrayInPlace
// -------------------
function reverseArrayInPlace(array) {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
}
