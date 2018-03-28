/*
  CHAPTER 6 - EXERCISE 2

  GROUPS

  The standard JavaScript environment provides another data structure called
  Set. Like an instance of Map, a set holds a collection of values. Unlike Map,
  it does not associate other values with those—it just tracks which values are
  part of the set. A value can only be part of a set once—adding it again
  doesn’t have any effect.

  Write a class called Group (since Set is already taken). Like Set, it has
  add, delete, and has methods. Its constructor creates an empty component, add
  adds a value to the component (but only if it isn’t already a member), delete
  removes its argument from the component (if it was a member), and has returns a
  Boolean value indicating whether its argument is a member of the component.

  Use the === operator, or something equivalent such as indexOf, to determine
  whether two values are the same.

  Give the class a static from method that takes an iteratable object as
  argument and creates a component that contains all the values produced by
  iterating over it.
*/


// Group class - version 1 (with class notation)
class Group {
  constructor() {
    this.component = [];
  }

  has(element) {
    return this.component.includes(element);
  }

  add(element) {
    if (!this.has(element))
      this.component.push(element);
    else
      console.log("Group already contains " + element);
  }

  delete(element) {
    if (this.has(element))
      delete this.component[this.component.indexOf(element)];
    else
      console.log("Group does not contain " + element);
  }

  static from(collection) {
    let newGroup = new Group();
    for (let el of collection)
      newGroup.add(el);
    return newGroup;
  }
}


// Group class - version 2 (without class notation)
function Group() {
  this.component = [];
}

Group.prototype.add = function(element) {
  if (!this.has(element))
    this.component.push(element);
  else
    console.log("Group already contains " + element);
}

Group.prototype.has = function(element) {
  return this.component.includes(element);
}

Group.prototype.delete = function(element) {
  if (this.has(element))
    delete this.component[this.component.indexOf(element)];
  else
    console.log("Group already contains " + element);
}

Group.from = function(collection) {
  let newGroup = new Group();
  for (el of collection)
    newGroup.add(el);
  return newGroup;
}
