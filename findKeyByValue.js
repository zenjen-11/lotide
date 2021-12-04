const assertEqual = function(actual, efindKeyByValuepected) {
  if (actual === efindKeyByValuepected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${efindKeyByValuepected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${efindKeyByValuepected}`);
  }
};
const findKeyByValue = function(object, value) {
  for (let key in object)
    if (object[key] === value) return key;
  return "key is not found";
};
const bestTVShowsByGenre = {
  sciFi: "The EfindKeyByValuepanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);