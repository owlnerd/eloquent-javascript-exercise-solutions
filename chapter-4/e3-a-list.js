/*
  CHAPTER 4 - EXERCISE 3

  A LIST

  Objects, as generic blobs of values, can be used to build all sorts of data
  structures. A common data structure is the list (not to be confused with
  array). A list is a nested set of objects, with the first object holding a
  reference to the second, the second to the third, and so on.

  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

  The resulting objects form a chain, like this:

  --------------
  | value: 1   |    --------------
  | rest: --------> | value: 2   |    --------------
  --------------    | rest: --------> | value: 3   |
                    --------------    | rest: null |
                                      --------------

  A nice thing about lists is that they can share parts of their structure.
  For example, if I create two new values {value: 0, rest: list} and {value:
  -1, rest: list} (with list referring to the binding defined earlier), they
  are both independent lists, but they share the structure that makes up
  their last three elements. The original list is also still a valid
  three-element list.

  Write a function 'arrayToList' that builds up a list structure like the one
  shown when given [1, 2, 3] as argument. Also write a 'listToArray' function
  that produces an array from a list. Then, add a helper function 'prepend',
  which takes an element and a list and creates a new list that adds the
  element to the front of the input list, and 'nth', which takes a list and a
  number and returns the element at the given position in the list (with zero
  referring to the first element) or undefined when there is no such element.

  If you haven’t already, also write a recursive version of 'nth'.
*/


// arrayToList - progressive verison
// Array elements are added to the list in the order that they appear in the
// array, from the 0th element to the .length - 1th element.
function arrayToListProg(array) {
  let list = null;
  let listElement;
  if (list == null) {
    list = {value: array[0], rest: null};
    listElement = list;
  }
  for (let i = 1; i < array.length; i++) {
    listElement.rest = {value: array[i], rest: null};
    listElement = listElement.rest;
  }
  return list;
}


// arrayToList - regressive version
// Array elements are added to the list in reversed order, that is from the
// .length - 1th element of the array to the 0th one. However, this does not
// change the order of list nodes, as the references to the rest node were set
// to the previously created node, instead of the newly created one.
function arrayToListReg(array) {
  let list = null;
  for (let i = array.length - 1; i >=0 ; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}


// listToArray
function listToArray(list) {
  let array = [];
  let listElement = list;
  while (listElement != null) {
    array.push(listElement.value);
    listElement = listElement.rest;
  }
  return array;
}


// prepend
function prepend(element, list) {
  return {value: element, rest: list};
}


// nth - iterative version
function nthIter(list, n) {
  while (n) {
    if (list == null)
      return undefined;
    list = list.rest;
    n--;
  }
  return list.value;
}


//nth - recursive version
function nthRecur(list, n) {
  if (list == null)
    return undefined;
  if (n == 0)
    return list.value;
  return nthRecur(list.rest, n - 1);
}
