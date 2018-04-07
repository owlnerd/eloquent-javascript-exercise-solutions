/*
  CHAPTER 9 - EXERCISE 2

  QUOTING STYLE

  Imagine you have written a story and used single quotation marks throughout
  to mark pieces of dialogue. Now you want to replace all the dialogue quotes
  with double quotes, while keeping the single quotes used in contractions like
  aren’t.

  Think of a pattern that distinguishes these two kinds of quote usage and
  craft a call to the replace method that does the proper replacement.
*/


let text = "'I'm the cook,' he said, 'it's my job.'";


// Note: A disgusting solution, especially when compared agains the official
// one. Anyway, as noted in readme, I only supply this repository with
// my own solutions, so here it is. It's ugly, but it works :)
console.log(text.replace(/((')\s)|(\s('))|(^('))|((')$)/g, re => {
  if (re.match(/(')\s/)) return "\" ";
  if (re.match(/\s(')/)) return " \"";
  return "\"";
}));


// Note: Here is the official solution. Marvel the elegance ;)
console.log(text.replace(/(^|\W)'|'(\W|$)/g, "$1\"$2");
