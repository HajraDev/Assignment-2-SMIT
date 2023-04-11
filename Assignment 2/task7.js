// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
  const storedObject = localStorage.getItem(key);
  return JSON.parse(storedObject);
}

const myObject = getObjectFromLocalStorage("myKey");
console.log(myObject);
