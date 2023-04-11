// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, object) {
  const objectJSON = JSON.stringify(object);

  localStorage.setItem(key, objectJSON);
}
const myObject = { name: "Hajra", age: 25, city: "Attock" };
saveObjectToLocalStorage("myKey", myObject);
