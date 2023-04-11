//
// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created wh 5it, the returned function should add 5 to any number passed
// to it.

function createAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addFive = createAdder(5);
console.log(addFive(30));
console.log(addFive(50));
