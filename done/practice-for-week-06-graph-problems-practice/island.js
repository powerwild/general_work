function getNeighbors(row, col, graph) {
  let neighbors = [];
  if (row > 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  if (col > 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  return neighbors;
}


function islandSize(row, col, graph) {
  let visited = new Set([[row, col]]);
  let stack = [[row, col]];
  let size = 0;
  while (stack.length > 0) {
    let curr = stack.pop();
    let neighbors = getNeighbors(curr[0], curr[1], graph);
    if (neighbors.length > 0) {
      neighbors.forEach(el => {
        if (!visited.has(JSON.stringify(el))) {
          size++;
          stack.push(el);
          visited.add(JSON.stringify(el));
        }
      })
    }
  }
   return size;
}
// 
module.exports = [getNeighbors, islandSize];
