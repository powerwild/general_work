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
      let curr = this.root;
      while (curr) {
        if (curr.val < val) curr = curr.right;
        else if (curr.val > val) curr = curr.left;
        else return true;
      }
      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      console.log(currentNode.val);
      if (currentNode.left) this.preOrderTraversal(currentNode.left);
      if (currentNode.right) this.preOrderTraversal(currentNode.right);
    }

    inOrderTraversal(currentNode = this.root) {
      if (currentNode.left) this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      if (currentNode.right) this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
      if (currentNode.left) this.postOrderTraversal(currentNode.left);
      if (currentNode.right) this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      const queue = [this.root];
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.val)
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      const stack = [this.root];
      while (stack.length) {
        let curr = stack.pop();
        console.log(curr.val)
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
      }
    }
  }
module.exports = {BinarySearchTree, TreeNode};
