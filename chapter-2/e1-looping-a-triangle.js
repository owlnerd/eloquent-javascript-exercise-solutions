/*
  CHAPTER 2 - EXERCISE 1

  LOOPING A TRIANGLE

  Write a loop that makes seven calls to console.log to output the following
  triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######

  It may be useful to know that you can find the length of a string by
  writing .length after it:

    let abc = "abc";
    console.log(abc.length);
    // → 3
*/


let triangle;


// triangle code - version 1
triangle = "";
for (let t = "#"; t.length <= 7; t += "#")
  triangle += t + "\n";

console.log(triangle)


// triangle code - version 2
triangle = "";
for (let i = 1; i <= 7; i++) {
  let line = "";
  for (let j = 1; j <= i; j++)
    line += "#";
  line += "\n";
  triangle += line;
}

console.log(triangle)


// bonus inverted triangle - recursive function
function invertedTriangleRecursive(n, base = n) {
  if (n == 0) return;
  invertedTriangleRecursive(n - 1, base);
  let line = ""
  for (let i = n; i <= base; i++)
    line += "#";
  console.log(line);
}
