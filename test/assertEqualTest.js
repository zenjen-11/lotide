const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

assertEqual("Jennypoo", "Jennypoo");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(42, 42);
assertArraysEqual(['45', 6, undefined], ['45', 6, undefined]);

// exports the assertEqual function */

module.exports = assertEqual;