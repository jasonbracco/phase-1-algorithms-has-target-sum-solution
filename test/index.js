const chai = require("chai");
global.expect = chai.expect;
// const hasTargetSum = require("../index");

/* PseudoCode:
create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

function hasTargetSum(array, target) {
    // create an object to keep track of all the numbers we've seen
  const seenNumbers = new Set() //initialize an empty set
    // iterate over the array of numbers
  for (const number of array){
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers.has(complement)) return true // .has returns true if the Set includes the complement
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers.add(number); // .add adds the number to the Set
    }
    // if we reach the end of the array, return false
    return false
  }



describe("hasTargetSum", () => {
  it("returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10", () => {
    expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;
  });
  it("returns true when the array is [22, 19, 4, 6, 30] and the target is 25", () => {
    expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;
  });
  it("returns false when the array is [1, 2, 5] and the target is 4", () => {
    expect(hasTargetSum([1, 2, 5], 4)).to.be.false;
  });
  it("returns true when the array is [-7, 10, 4, 8] and the target is 3", () => {
    expect(hasTargetSum([-7, 10, 4, 8], 3)).to.be.true;
  });
  it("returns true when the array is [1, 2, 3, 4] and the target is 5", () => {
    expect(hasTargetSum([1, 2, 3, 4], 5)).to.be.true;
  });
  it("returns true when the array is [2, 2, 3, 3] and the target is 4", () => {
    expect(hasTargetSum([2, 2, 3, 3], 4)).to.be.true;
  });
  it("returns false when the array is [4] and the target is 4", () => {
    expect(hasTargetSum([4], 5)).to.be.false;
  });
});

