/*
  CHAPTER 6 - EXERCISE 1

  A VECTOR TYPE

  Write a class 'Vec' that represents a vector in two-dimensional space. It
  takes x and y parameters (numbers), which it should save to properties of the
  same name.

  Give the Vec prototype two methods, 'plus' and 'minus', that take another
  vector as a parameter and return a new vector that has the sum or difference
  of the two vectors’ (this and the parameter) x and y values.

  Add a getter property 'length' to the prototype that computes the length of
  the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/


// Vec class - verison 1 (using Ad Hoc object construction)
// --------------------------------------------------------
let protoVec = {
  plus: function(v) {
    return Vec_v1(this.x + v.x, this.y + v.y)
  },
  minus: function(v) {
    return Vec_v1(this.x - v.x, this.y - v.y);
  },
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

function Vec_v1(x, y) {
  let vector = Object.create(protoVec);
  vector.x = x;
  vector.y = y;
  return vector;
}


// Vec class - version 2 (using constructors with new keyword and constructor
// prototype manipulation)
// --------------------------------------------------------------------------
function Vec_2(x, y) {
  this.x = x;
  this.y = y;
}
Vec.prototype = {
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
Vec.prototype.plus = function(v) {
  return new Vec_2(this.x + v.x, this.y + v.y);
}
Vec.prototype.minus = function(v) {
  return new Vec_2(this.x - v.x, this.y - v.y);
}


// Vec class - version 3 (using class syntactic sugar)
// ---------------------------------------------------
class Vec_v3 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(v) {
    return new Vec_3(this.x + v.x, this.y + v.y);
  }
  minus(v) {
    return new Vec_3(this.x - v.x, this.y - v.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}
