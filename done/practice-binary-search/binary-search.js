function linearSearch (arr, target) {
return arr.indexOf(target);
};

function binarySearch(arr, target) {
  let high = arr.length - 1;
  let low = 0;
  while (high >= low) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
return -1;
}


module.exports = [linearSearch, binarySearch]
