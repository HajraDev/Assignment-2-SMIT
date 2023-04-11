// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveObjectPropertiesToLocalStorage(obj) {
  for (let prop in obj) {
    localStorage.setItem(prop, JSON.stringify(obj[prop]));
  }

  const retrievedObject = {};
  for (let prop in obj) {
    retrievedObject[prop] = JSON.parse(localStorage.getItem(prop));
  }

  return retrievedObject;
}

const myObject = { name: "Hajra", age: 25 };
const retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
console.log(retrievedObject);
