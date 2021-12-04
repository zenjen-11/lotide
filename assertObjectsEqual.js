const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    //same number of keys so let's compare values
    let object1Keys = Object.keys(object1);
    for (let key of object1Keys) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else if (object1[key] instanceof Object) {

        return eqObjects(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  } else return false;
};
  
const object1a = { a: "1", b: "2" };
const object2a = { b: "2", a: "1" };
assertObjectsEqual(object1a, object2a);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });