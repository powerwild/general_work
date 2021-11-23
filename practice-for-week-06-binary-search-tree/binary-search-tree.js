// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let node = new TreeNode(val);
    if (!this.root) return this.root = node;
    if (val < currentNode.val && !currentNode.left) currentNode.left = node;
    if (val < currentNode.val) this.insert(val, currentNode.left);
    if (val > currentNode.val && !currentNode.right) currentNode.right = node;
    if (val > currentNode.val) this.insert(val, currentNode.right);
  }
  search(val) {
    if (!this.root) return false;
    if (this.root.val === val) return true;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}
module.exports = { BinarySearchTree, TreeNode };
