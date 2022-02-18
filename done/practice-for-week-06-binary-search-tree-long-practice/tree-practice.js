const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let node = rootNode;
  while (node.left) {
    node = node.left;
  }
  return node.val;
  //if (rootNode.left) return findBST(rootNode.left);
  //return rootNode.val;
}

function findMaxBST (rootNode) {
  let node = rootNode;
  while (node.right) {
    node = node.right;
  }
  return node.val;
  //if (rootNode.right) return findBST(rootNode.right);
  //return rootNode.val;
}

function findMinBT (rootNode) {
  if (!rootNode) return null;
  const stack = [rootNode];
  let min = rootNode.val;
  while (stack.length) {
    let curr = stack.pop();
    if (curr.val < min) min = curr.val;
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return min;
}

function findMaxBT (rootNode) {
  const stack = [rootNode];
  let max = rootNode.val;
  while (stack.length) {
    let curr = stack.pop();
    if (curr.val > max) max = curr.val;
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return max;
}

function getHeight (rootNode) {
  if(!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function countNodes (rootNode) {
  const stack = [rootNode];
  let count = 0;
  while (stack.length) {
    let curr = stack.pop();
    count++;
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return count;
}

function balancedTree (rootNode) {
  if (Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right)) < 2) return true;
  else return false;
}


function getParentNode (rootNode, target) {
  if(!rootNode) return undefined;
  if(rootNode.val === target) return null;
  if((rootNode.right && rootNode.right.val === target) ||
  (rootNode.left && rootNode.left.val === target)){
    return rootNode;
  }else{
    let node = getParentNode(rootNode.right, target);
    if (!node){
      node = getParentNode(rootNode.left, target);
    }
    return node;
  }
}


function inOrderPredecessor (rootNode, target, prevNode) {
  
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}
let bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);
    console.log(inOrderPredecessor(bstRoot, 4));
module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
