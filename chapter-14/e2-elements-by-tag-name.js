/*
  CHAPTER 14 - EXERCISE 2

  ELEMENTS BY TAG NAME

  The document.getElementsByTagName method returns all child elements
  with a given tag name. Implement your own version of this as a function that
  takes a node and a string (the tag name) as arguments and returns an array
  containing all descendant element nodes with the given tag name.

  To find the tag name of an element, use its nodeName property. But note that
  this will return the tag name in all uppercase. Use the toLowerCase or
  toUpperCase string methods to compensate for this.
*/


// FUNCTION: byTagName
// -------------------
function byTagName(node, tagName) {
  let elements = [];
  for (let child of Array.from(node.childNodes)) {
    if (child.nodeName.toLowerCase() == tagName) {
      elements.push(child);
    }
    elements = elements.concat(byTagName(child, tagName));
  }
  return elements;
}
