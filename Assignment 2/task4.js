// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.
function addListItem(text) {
  let ul = document.getElementById("newListItem");
  let li = document.querySelector("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}

addListItem("Statistic");
