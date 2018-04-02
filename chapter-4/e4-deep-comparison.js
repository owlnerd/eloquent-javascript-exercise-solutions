/*
  CHAPTER 4 - EXERCISE 4

  DEEP COMPARISON

  The == operator compares objects by identity. But sometimes, you would
  prefer to compare the values of their actual properties.

  Write a function, deepEqual, that takes two values and returns true only if
  they are the same value or are objects with the same properties, where the
  values of the properties are equal when compared with a recursive call to
  deepEqual.

  To find out whether to compare two things by identity (use the === operator
  for that) or by looking at their properties, you can use the typeof
  operator. If it produces "object" for both values, you should do a deep
  comparison. But you have to take one silly exception into account: because
  of a historical accident, typeof null also produces "object".

  The Object.keys function will be useful when you need to go over the
  properties of objects to compare them.
*/


// deepEqual - version 1
// ---------------------
function deepEqual_v1(obj1, obj2) {
  if (obj1 === obj2)
    return true;

  if (obj1 == null || typeof obj1 != "object" || obj2 == null ||
      typeof obj2 != "object")
    return false;

  let p1 = Object.keys(obj1);
  let p2 = Object.keys(obj2);
  if (p1.length != p2.length)
    return false;
  for (let i = 0; i < p1.length; i++)
    if (p2.includes(p1[i]) == false ||
        deepEqual_v1(obj1[p1[i]], obj2[p2[i]]) == false)
      return false

  return true;
}


// deepEqual - verison 2
// ---------------------
function deepEqual_v2(obj1, obj2) {
  if (obj1 === obj2)
    return true;

  let prop1 = Object.keys(obj1);
  let prop2 = Object.keys(obj2);

  if (prop1.length != prop2.length)
    return false;

  for (let i = 0; i < prop1.length; i++) {
    if (prop1[i] !== prop2[i])
      return false;

    let propType1 = typeof obj1[prop1[i]];
    let propType2 = typeof obj2[prop2[i]];

    if (propType1 !== propType2)
      return false;
    if (propType1 !== "object") {
      if (obj1[prop1[i]] !== obj2[prop2[i]])
        return false;
    } else {
      if ((propType1 === null && propType2 !== null) ||
          (propType2 === null && propType1 !== null))
        return false;
      if (!deepEqual_v2(obj1[prop1[i]], obj2[prop2[i]]))
          return false;
    }
    return true;
  }
}
