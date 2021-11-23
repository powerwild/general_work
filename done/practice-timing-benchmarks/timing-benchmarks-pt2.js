const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");


// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let arr = [];
  for (let i = increment; i <= increment * 10; i += increment){
    arr.push(addNums(i))
  }
  return arr;
}


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let array = [];
  for (let i = increment; i <= increment * 10; i += increment){
    array.push(addManyNums(i));
  }
return array;
}


module.exports = [addNums10, addManyNums10];
