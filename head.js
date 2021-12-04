const head = function(array) {
  return array[0];
};

/*

assertEqual((head([5,6,7]), 5));
assertEqual((head(["Hello", "Lighthouse", "Labs"]), "Hello")); */

module.exports = head;



const range = function(skip) {
  return skip[0];
};

console.log(range(10, 4, 7, 7));
