function quicksort(arr) {
  let newArr = arr.slice();
  if (newArr.length <= 1) return newArr;
  let count = 0;
  let pivot = newArr[newArr.length - 1];
for (let i = newArr.length - 1; i >= 0; i--) {
  if (newArr[i] >= pivot) {
    newArr.push(newArr.splice(i, 1)[0]);
    count++;
  }
}
let left = quicksort(newArr.slice(0, newArr.length - (1 + count)));
let right = quicksort(newArr.slice(newArr.length - (1 + count)))
return left.concat(right);
}


module.exports = [quicksort];
