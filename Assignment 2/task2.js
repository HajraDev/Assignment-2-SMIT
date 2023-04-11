// Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

// function searchArray(array, value) {
//   if (array.length === 0) {
//     return false;
//   } else if (array[0] === value) {
//     return true;
//   } else {
//     return searchArray(array.s(1), value);
//   }
// }
// const myArray = [1, 2, 3, 4, 5];
// console.log(searchArray(myArray, 5));
// console.log(searchArray(myArray, 8));
function searchArray(array, value) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === value) {
    return true;
  } else {
    return searchArray(array.slice(1), value);
  }
}

const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3));
console.log(searchArray(myArray, 6));
