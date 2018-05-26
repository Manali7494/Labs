var assert = require("chai").assert;
var check = require("../luhn.js");

describe("LuhnAlgorithm", function() {
  it("should return true if the number is valid ", function() {
    var number = [4, 9, 9, 2, 7, 3, 9, 8, 7, 1, 6];
    var result = check(number);
    assert.isTrue(result);
  });
  it("should return false if the number is NOT valid", function() {
    var number = [5, 7, 9, 10];
    var result = check(number);
    assert.isFalse(result);
  });
});
