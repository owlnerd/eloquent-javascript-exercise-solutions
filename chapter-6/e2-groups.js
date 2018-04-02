/*
  CHAPTER 6 - EXERCISE 2

  GROUPS

  The standard JavaScript environment provides another data structure called
  Set. Like an instance of Map, a set holds a collection of values. Unlike Map,
  it does not associate other values with those—it just tracks which values are
  part of the set. A value can only be part of a set once—adding it again
  doesn’t have any effect.

  Write a class called 'Group' (since Set is already taken). Like Set, it has
  add, delete, and has methods. Its constructor creates an empty component, add
  adds a value to the component (but only if it isn’t already a member), delete
  removes its argument from the component (if it was a member), and has returns
  a Boolean value indicating whether its argument is a member of the component.

  Use the === operator, or something equivalent such as indexOf, to determine
  whether two values are the same.

  Give the class a static from method that takes an iteratable object as
  argument and creates a component that contains all the values produced by
  iterating over it.
*/


// Group class - version 1 (using Ad Hoc object construction)
// ----------------------------------------------------------
let protoGroup_v1 = {
  add(x) {
    if (!this.has(x))
      this.grp.push(x);
    else
      console.log(x + " is already an element of the Group.");
  },
  delete(x) {
    if (this.has(x))
      delete this.grp[this.grp.findIndex(v => v === x)];
    else console.log(x + " is not an element of the Group.");
  },
  has(x) {
    return this.grp.some(v => v === x);
  }
}

function Group_v1() {
  let group = Object.create(protoGroup_v1);
  group.grp = [];
  return group;
}

Group_v1.from = function(collection) {
  let group = Group_v1();
  for (let element of collection)
    group.add(element);
  return group;
}


// Group class - version 2 (using constructors with new keyword and constructor
// prototype manipulation)
// ----------------------------------------------------------------------------
function Group_v2() {
  this.grp = [];
}

Group_v2.prototype.add = function(x) {
  if (!this.has(x))
      this.grp.push(x);
  else
    console.log(x + " is already an element of the Group.");
}

Group_v2.prototype.delete = function(x) {
  if (this.has(x))
      delete this.grp[this.grp.findIndex(v => v === x)];
  else
    console.log(x + " is not an element of the Group.");
}

Group_v2.prototype.has = function(x) {
  return this.grp.some(v => v === x);
}

Group_v2.from = function(collection) {
  let group = new Group_v2();
  for (let element of collection)
    group.add(element);
  return group;
}


// Group class - version 3 (using class syntactic sugar)
// -----------------------------------------------------
class Group_v3 {
  constructor() {
    this.grp = [];
  }

  add(x) {
    if (!this.has(x))
      this.grp.push(x);
    else
      console.log(x + " is already an element of the Group.");
  }

  delete(x) {
    if (this.has(x))
      delete this.grp[this.grp.findIndex(v => v === x)];
    else
      console.log(x + " is not an element of the Group.");
  }

  has(x) {
    return this.grp.some(v => v === x);
  }

  static from(collection) {
    let group = new Group_v3();
    for (let element of collection)
      group.add(element);
    return group;
  }
}
