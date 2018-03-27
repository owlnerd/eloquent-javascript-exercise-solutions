/*
  CHAPTER 2 - EXERCISE 2

  FIZZBUZZ

  Write a program that uses console.log to print all the numbers from 1 to
  100, with two exceptions. For numbers divisible by 3, print "Fizz" instead
  of the number, and for numbers divisible by 5 (and not 3), print "Buzz"
  instead.

  When you have that working, modify your program to print "FizzBuzz", for
  numbers that are divisible by both 3 and 5 (and still print "Fizz" or
  "Buzz" for numbers divisible by only one of those).

  (This is actually an interview question that has been claimed to weed out a
  significant percentage of programmer candidates. So if you solved it, your
  labor market value just went up.)
*/


// fizzbuzz code - version 1
for (let n = 1; n <= 100; n++) {
  if (n % 3 == 0) {
    if (n % 5 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Fizz");
    }
  } else if (n % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}


// fizzbuzz code - version 2
for (let n = 1; n <= 100; n++) {
  let fizzBuzz = "";
  if (!(n % 3)) fizzBuzz += "Fizz";
  if (!(n % 5)) fizzBuzz += "Buzz";
  console.log(fizzBuzz ? fizzBuzz : n);
}
