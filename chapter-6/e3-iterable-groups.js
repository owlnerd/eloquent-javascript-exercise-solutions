/*
  CHAPTER 6 - EXERCISE 3

  ITERABLE GROUPS

  Make the Group class from the previous exercise iterable. Refer back to the
  section about the iterator interface earlier in the chapter if you aren’t
  clear on the exact form of the interface anymore.

  If you used an array to represent the group’s members, don’t just return the
  iterator created by calling the Symbol.iterator method on the array. That
  would work, but defeats the purpose of this exercise.

  It is okay if your iterator behaves strangely when the group is modified
  during iteration.
*/


// Group class
// -----------
class Group {
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
    let group = new Group();
    for (let element of collection)
      group.add(element);
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}


// Group iterator
// --------------
class GroupIterator {
  constructor(group) {
    this.group = group;
    this.i = 0;
  }

  next() {
    if (this.i >= this.group.grp.length)
      return {done: true};
    return {value: this.group.grp[this.i++], done: false};
  }
}
