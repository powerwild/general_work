// HINT:  Review counting islands before starting this problem!

function findNeighbors(node, matrix) {
    let neighbors = [];
    let row = node[0];
    let col = node[1];
    //north
        if (row > 0 && matrix[row - 1][col] < -5) {
        neighbors.push([row - 1, col]);
        }
    //south
        if (row < (matrix.length - 1) && matrix[row + 1][col] < -5) {
        neighbors.push([row + 1, col]);
        }
    //west
        if (col > 0 && matrix[row][col - 1] < -5) {
        neighbors.push([row, col - 1]);
        }
    //east
        if (col < matrix[0].length - 1 && matrix[row][col + 1] < -5) {
        neighbors.push([row, col + 1]);
        }
    return neighbors;
}

function trenchTraversal(node, matrix, visited) {
    if (matrix.length <= 1) return false;
    let row = node[0];
    for (let col = node[1]; col < matrix[0].length; col++) {
        let neighbors = findNeighbors([row, col], matrix)
        if (neighbors.length === 2) return true;
        if (row !== matrix.length && col === matrix[0].length -1) {
            row++;
            col = -1;
        }
    }
    return false;


    // Traverse the potential trench to count it's length
    // Your code here
}

function identifyTrench(trenchMatrix) {
    if (trenchMatrix.length <= 1) return false;
    let row = 0;
    let neighbor;
    let hasTrench = false;
    let trench = false;
    for (let col = 0; col < trenchMatrix[0].length; col++) {
        neighbor = findNeighbors([row, col], trenchMatrix);
        if (trench) {
            if (neighbor.length === 2) hasTrench = true;
            if (neighbor.length > 2) hasTrench = false;
            if (!neighbor.length) trench = false;
        }
        if (neighbor.length) trench = true;
        if (row < trenchMatrix.length - 1 && col === trenchMatrix[0].length -1) {
            row++;
            col = -1;
        }
    }
    return hasTrench;
}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]
// const sonar_data = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
//   ];
// const sonar_2 = [
//     [-5, -5, -5, -6, -5],
//     [-5, -7, -8, -9, -5],
//     [-5, -5, -5, -8, -5],
//     [-5, -5, -5, -5, -5]
//   ];
//   console.log(findNeighbors([1, 3], sonar_2).length);
// console.log(findNeighbors([1,1], sonar_0)) //=> Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];
