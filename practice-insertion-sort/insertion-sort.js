
// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  let array = arr.slice();
  let sorted = [];
  while (array.length) {
    console.log(sorted.join(","));
    let curr = array.pop();
    if (sorted.length) {
     for (let i = 0; i < sorted.length; i++) {
        if (curr < sorted[i]) {
        sorted.splice(i, 0, curr);
        break;
        }
      }
    }else {
      sorted.push(curr);
    }
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  let divider = 1;
  while (divider < arr.length) {
    console.log(arr.join(","));
    let val = arr[divider];
    let i = divider;
    while (i > 0) {
      if (arr[i - 1] < val) {
        break;
      } else {
        arr[i] = arr[i - 1];
        i--;
      }
    }
    arr[i] = val;
    divider++;
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
