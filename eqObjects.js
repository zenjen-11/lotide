const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back false!
const eqObjects = function(object1, object2) {
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;
  if (object1Length === object2Length) {
    return Object.keys(object1).every(key => object2.hasOwnProperty(key) && object2[key] === object1[key]);
  }
  return false;
};
const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
console.log(eqObjects(ab, ba));
const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
console.log(eqObjects(cd, dc));


assertEqual(eqObjects(ab, ba));
