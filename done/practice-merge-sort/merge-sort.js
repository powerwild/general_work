// Merge Sort out-of-plac
// Do not modify the original array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(right, left);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  const sorted = [];
  let a = 0;
  let b = 0;
  for (let i = 0; i < arrA.length + arrB.length; i++) {
    if (arrA[a] < arrB[b]) {
      sorted.push(arrA[a]);
      a++;
    } else {
      sorted.push(arrB[b]);
      b++;
    }
  }
  return sorted;
}

module.exports = [merge, mergeSort];
