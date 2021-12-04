const assertEqual = function(actual, efindKeyByValuepected) {
 
  if (actual === efindKeyByValuepected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${efindKeyByValuepected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${efindKeyByValuepected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};
const trackLevel = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2,},
  "elBulli":   { stars: 3,},
  "Ora":       { stars: 2,},
  "Akelarre":  { stars: 3,}
};
assertEqual(findKey(trackLevel, track => track < 2), 'Blue Hill');

const yummyDesserts = {
  "panecotta":      { desserts: 3 },
  "tiramisu":      { desserts: 4 },
  "creme caramel":  { desserts: 2 },
  "macarons":       { desserts: 5 },
  "pudding":        { desserts: 1 },
};
assertEqual(findKey(yummyDesserts, track => track.desserts === 1), 'pudding');
