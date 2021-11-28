
// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  let array = arr.slice;
  let sorted = [];
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted.join(","));
    if (!sorted.length) sorted.push(array.pop());
    let el = array[array.length - 1];
    if (el < arr[i] )


  }

    // Pop a value from the array

    // Create a new spot at the end of the array

    // Walk through the sorted array in reverse order
      // Check if the value to the left is smaller than the new value
        // If so, you've reached the insertion point so exit the loop
        // If not shift the value to the right by 1 and continue

    // Insert the unsorted value at the break point

  // Return the sorted array

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
