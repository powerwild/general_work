function intersect(arr1, arr2, arr = []) {
    if (!arr2.length) return arr;
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[arr2.length - 1] === arr1[i]) arr.push(arr1[i]);
    }
    arr2.pop();
    return intersect(arr1, arr2, arr);
}
// Examples:
let start = Date.now();
console.log(
    intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']), // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []
let end = Date.now();
console.log(end - start);
