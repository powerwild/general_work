/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

***********************************************************************/

// your code here


const arrowMirrorArray = (array) => {
  let array1 = array.slice();
  return array.concat(array1.reverse());
};

arrowMirrorArray([1, 2, 3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/



try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
