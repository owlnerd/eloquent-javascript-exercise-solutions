/*
  CHAPTER 2 - EXERCISE 3

  CHESS BOARD

  Write a program that creates a string that represents an 8×8 grid, using
  newline characters to separate lines. At each position of the grid there is
  either a space or a "#" character. The characters should form a chess board.

  Passing this string to console.log should show something like this:

     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #

  When you have a program that generates this pattern, define a binding size =
  8 and change the program so that it works for any size, outputting a grid of
  the given width and height.
*/


let chessBoard;
let dim = 8;


// chess board code - version 1
chessBoard = "";
dim = 8;
for (let i = 0; i < dim; i++) {
  for (let j = 0; j < dim; j++)
    chessBoard += (i + j) % 2 ? "#" : " ";
  chessBoard += "\n";
}
console.log(chessBoard);
