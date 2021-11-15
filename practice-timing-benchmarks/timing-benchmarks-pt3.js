const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");

function addNums10Timing(increment) {

  let arr = [];
  for (let i = increment; i <= increment * 10; i += increment){
    let start = Date.now();
    arr.push(addNums(i))
    let end = Date.now();
    console.log(end - start);
  }
  return arr;

}


function addManyNums10Timing(increment) {

  let array = [];
  for (let i = increment; i <= increment * 10; i += increment){
    let start = Date.now();
    array.push(addManyNums(i));
    let end = Date.now();
    console.log(end - start);
  }
return array;

}


n = 1000000
console.log(`addNums(${n}): `);
// console.time('timer 1');
addNums10Timing(1000000);
// console.timeEnd('timer 1');

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
