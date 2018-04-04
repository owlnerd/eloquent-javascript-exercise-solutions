/*
  CHAPTER 7 - EXERCISE 3

  PERSISTENT GROUP

  Most data structures provided in a standard JavaScript environment aren’t
  very well suited for persistent use. Arrays have slice and concat methods,
  which allow us to easily create new arrays without damaging the old one. But
  Set, for example, has no methods for creating a new set with an item added or
  removed.

  Write a new class PGroup, similar to the Group class from Chapter 6, which
  stores a set of values. Like Group, it has add, delete, and has methods.

  Its add method, however, should return a new PGroup instance with the given
  member added, and leave the old one unchanged. Similarly, delete creates a
  new instance without a given member.

  The class should work for keys of any type, not just strings. It does not
  have to be efficient when used with large amounts of keys.

  The constructor shouldn’t be part of the class’ interface (though you’ll
  definitely want to use it internally). Instead, there is an empty instance,
  PGroup.empty, that can be used as a starting value.

  Why do you only need one PGroup.empty value, rather than having a function
  that creates a new, empty map every time?
*/


// PGroup class
// ------------
class PGroup {
  constructor(group = []) {
    this.grp = group;
  }
  has(x) {
    return this.grp.some(v => x == v);
  }
  add(x) {
    if (!this.has(x))
      return new PGroup(this.grp.concat(x));
    else return this;
  }
  // delete method - version 1 (using slice array method)
  // -------------------------
  delete(x) {
    if (this.has(x)) {
      let index = this.grp.findIndex(v => v === x);
      return new PGroup(this.grp.slice(0, index).concat(this.grp.slice(index + 1)));
    }
    else return this;
  }
  /* delete method - version 2 (using splice array method)
     -------------------------
  delete(x) {
    if (this.has(x)) {
      let index = this.grp.findIndex(v => x == v);
      let newGrp = this.grp.slice(0);
      newGrp.splice(index, 1);
    } else
      return this;
  } */
  /* delete method - version 3
     --------------------------
  delete(x) {
    if (this.has(x)) {
      let newGrp = this.grp.slice(0);
      delete newGrp[newGrp.findIndex(v => v === x)];
      return new PGroup(newGrp);
    }
    else return this;
  }*/
}

// Adding an empty Pgroup instance member to constructor function.
// The reason this member never needs to be recreated is the fact that class
// methods do not operate on own members but instead create new resulting
// instances which leaves PGroup.empty unchanged in every case.
PGroup.empty = new PGroup([]);
