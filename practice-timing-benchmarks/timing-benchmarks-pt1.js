// Adds up positive integers from 1-n
function addNums(n) {
  let total = 0
  for (let i = 0; i < n; i++) {
  }
  for (let j = 1; j <= n; j++) {
    total += j
  }
  return total

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += addNums(i)
  }
  return total

}



module.exports = [addNums, addManyNums];
