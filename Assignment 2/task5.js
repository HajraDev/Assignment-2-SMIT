// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

const myElement = document.getElementById("myElement");
changeBackgroundColor(myElement, "red");
