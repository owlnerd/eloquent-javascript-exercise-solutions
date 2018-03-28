/*
  CHAPTER 6 - EXERCISE 1

  A VECTOR TYPE

  Write a class Vec that represents a vector in two-dimensional space. It takes
  x and y parameters (numbers), which it should save to properties of the same
  name.

  Give the Vec prototype two methods, plus and minus, that take another
  vector as a parameter and return a new vector that has the sum or difference
  of the two vectors’ (this and the parameter) x and y values.

  Add a getter property length to the prototype that computes the length of the
  vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/


// Vec class class
class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  plus(v) {
    return new Vec(this.x + v.x, this.y + v.y);
  }
  minus(v) {
    return new Vec(this.x - v.x, this.y - v.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
