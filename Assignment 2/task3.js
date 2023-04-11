//Write a function that adds a new paragraph element to the bottom of an HTML document.The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraph(text) {
  const newParagraph = document.getElementById("para");
  const content = document.createTextNode(text);
  newParagraph.appendChild(content);
  document.body.appendChild(newParagraph);
}

addParagraph(
  "This is a new paragraph added to the bottom of the HTML document!"
);
