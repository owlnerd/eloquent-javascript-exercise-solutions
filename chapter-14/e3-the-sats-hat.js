/*
  CHAPTER 14 - EXERCISE 3

  THE CAT'S HAT

  Extend the cat animation defined earlier so that both the cat and his hat
  (<img src="img/hat.png">) orbit at opposite sides of the ellipse.

  Or make the hat circle around the cat. Or alter the animation in some other
  interesting way.

  To make positioning multiple objects easier, it is probably a good idea to
  switch to absolute positioning. This means that top and left are counted
  relative to the top left of the document. To avoid using negative
  coordinates, which would cause the image to move outside of the visible page,
  you can add a fixed number of pixels to the position values.
*/


// SUPPLIED CODE
// -------------
let cat = document.querySelector("#cat");
let hat = document.querySelector("#hat");

let angle = 0;
let lastTime = null;
function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.001;
  lastTime = time;
  cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
  cat.style.left = (Math.cos(angle) * 200 + 230) + "px";

  // MY CODE
  // Makes the hat go around cat
  // ---------------------------
  hat.style.top = (Math.sin(angle)  * 100 + 40) + "px";
  hat.style.left = (Math.cos(angle) * 260 + 230) + "px";

  // MY CODE - comented
  // Makes the hat be on the opposite side of cat on the elipse path
  // ---------------------------------------------------------------
  /*
  hat.style.top = (Math.sin(angle + Math.PI)  * 40 + 40) + "px";
  hat.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";
  */

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
