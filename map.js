const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
 
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {

      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {

      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'l', 'u', 't', 's', 'y' ]);

const results2 = map(words, word => word + ' ' + 'test');
assertArraysEqual(results2, ["ground test", "control test", "to test", "major test", "tom test"]);

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, -8, 3]);