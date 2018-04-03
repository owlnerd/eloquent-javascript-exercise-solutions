/*
  CHAPTER 6 - EXERCISE 4

  BORROWING A METHOD

  Earlier in the chapter I mentioned that an object’s 'hasOwnProperty' can be
  used as a more robust alternative to the in operator when you want to ignore
  the prototype’s properties. But what if your map needs to include the word
  "hasOwnProperty"? You won’t be able to call that method anymore, because
  the object’s own property hides the method value.

  Can you think of a way to call hasOwnProperty on an object that has its own
  property by that name?
*/


let map = {one: true, two: true, hasOwnProperty: true};


// borrowing a method code - version 1 (without fully qualified name)
// -----------------------
console.log(hasOwnProperty.call(map, "one"));


// borrowing a method cade - version 2 (with fully qualified name)
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
