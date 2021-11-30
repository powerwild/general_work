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
        if (row < matrix.length - 1 && matrix[row + 1][col] < -5) {
        neighbors.push([row + 1, col]);
        }
    //west
        if (col > 0 && matrix[row][col - 1] < -5) {
        neighbors.push([row, col - 1]);
        }
    //east
        if (col < matrix[row].length - 1 && matrix[row][col + 1] < -5) {
        neighbors.push([row, col + 1]);
        }
    return neighbors;
}

function trenchTraversal(node, matrix, visited) {
    if (matrix[node[0]][node[1]] > -6) return false;
    let trench = [node];
    visited.add(`${node}`);
    let i = 0;
    while (i < trench.length) {
        let curr = trench[i];
        let neighbors = findNeighbors(curr, matrix);
        if (neighbors.length > 2) return false;
        neighbors.forEach(el => {
            if (!visited.has(`${el}`)) {
                visited.add(`${el}`);
                trench.push(el);
            }
        })
        i++;
    }
    if (trench.length < 3) return false;
    return true;
}

function identifyTrench(trenchMatrix) {
    let row = 0;
    for (let col = 0; row < trenchMatrix.length; col++) {
        if (findNeighbors([row, col], trenchMatrix).length > 0) {
            if (trenchTraversal([row, col], trenchMatrix, new Set())) return true;
        }
        if (col === trenchMatrix[row].length - 1) {
            col = -1;
            row++;
        }
    }
    return false;
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