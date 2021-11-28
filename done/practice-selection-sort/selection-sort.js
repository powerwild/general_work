

function selectionSort(arr) {
  let arr1 = arr.slice();
  let sorted = [];
  let min = arr1[0];
  let index = 0;
  for(let i = 0; i < arr1.length; i++) {
    if (arr1.length === 1) {
      sorted.push(arr1[0]);
      return sorted;
    }
    if (arr1[i] < min) {
      min = arr1[i];
      index = i;
    }
    if (i === arr1.length - 1) {
      console.log(sorted.join(","));
      [arr1[index], arr1[arr1.length - 1]] = [arr1[arr1.length - 1], arr1[index]];
      sorted.push(arr1.pop());
      i = -1;
      min = arr1[0];
      index = 0;
    }
  }
  }
  arr = [2,4,6,8,1,3,5,7,9];
  selectionSort(arr);



function selectionSortInPlace(arr) {
 
}


module.exports = [selectionSort, selectionSortInPlace];
