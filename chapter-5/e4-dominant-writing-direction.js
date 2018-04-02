/*
  CHAPTER 5 - EXERCISE 4

  DOMINANT WRITING DIRECTION

  Write a function that computes the dominant writing direction in a string of
  text. Remember that each script object has a direction property that can be
  "ltr" (left-to-right), "rtl" (right-to-left), or "ttb" (top-to-bottom).

  The dominant direction is the direction of a majority of the characters which
  have a script associated with them. The characterScript and countBy
  functions defined earlier in the chapter are probably useful here.
*/


// helper function - identifies the script that character belongs to
function getCharScript(char) {
  for (let script of SCRIPTS)
    if (script.ranges.some(([low, high]) => char >= low && char < high))
      return script;
  return null;
}


// helper function - counts the number of elements each category contains
function countCatagories(items, itemCategory) {
  let categoriesCounter = [];
  for (let item of items) {
    let category = itemCategory(item);
    let index = categoriesCounter.findIndex(v => v.direction == category);
    if (index == -1)
      categoriesCounter.push({direction: category, count: 1});
    else
      categoriesCounter[index].count++;
  }
  return categoriesCounter;
}


// dominantDirection - determines the dominant writing direction of the text
function dominantDirection(text) {
  let directionsCount = countCatagories(text, c => {
    let script = getCharScript(c.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(v => v.direction != "none");
  return directionsCount.reduce((c, v) => c.count < v.count ? v : c).direction;
}
