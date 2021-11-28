
function bubbleSort(arr) {
  let swap = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap++;
        console.log(arr.join(","));
      }
      if (i === arr.length - 2 && swap > 0) {
        swap = 0;
        i = -1;
      }
    }
    return arr;
}

module.exports = bubbleSort;
