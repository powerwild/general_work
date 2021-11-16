const findMinimum = arr => {
  let low = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (low > arr[i]) low = arr[i];
  }
  return low;
};
//above code: O(n), O(1) .... try var declare with arr[0].. compare vars
const runningSum = arr => {
  if (!arr.length) return arr;
  for (let i = 1; i < arr.length; i++){
    arr[i] = arr[i] + arr[i - 1];
  }
  return arr;
};
// above code: O(n), O(1)
const evenNumOfChars = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length % 2 === 0) count++;
  }
  return count;
};
//above code: O(n), O(1)
const smallerThanCurr = arr => {
  let arr1 = new Array(arr.length);
  for (let i = 0; i < arr.length; i++){
    let num = 0;
    for (let j = 0; j < arr.length; j++){
      if(arr[i] > arr[j]) num++;
    }
    arr1[i] = num;
  }
  return arr1;
};
// above: O(n^2), O(n)
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
};
//above: O(n^2), O(1)
const secondLargest = arr => {
  if (arr.length < 2) return undefined;
  let largest = 0;
  let large = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > largest) {
      large = largest;
      largest = arr[i];
    }
    else if (arr[i] > large) large = arr[i];
  }
  return large;
};
// above: O(n), O(1)
const shuffle = (arr) => {
  let array = [];
  let min = Math.ceil(0);
  let max = Math.floor(arr.length);
  let start = Date.now();
  for (let i = Math.floor(Math.random() * (max - min) + min); array.length < arr.length; i += 0) {
    if (!array.includes(arr[i])) array.push(arr[i]);
    i = Math.floor(Math.random() * (max - min) + min);
  }
  let end = Date.now();
  console.log(end - start);
  return array;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
