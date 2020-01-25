class Node {
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

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (currentNode.val > newNode.val) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  find(val) {
    let result = false;
    function travales(node) {
      if (!node) {
        return;
      }
      if (node.val === val) {
        result = true;
      }

      travales(node.left);
      travales(node.right);
    }

    travales(this.root);

    return result;
  }

  BFS() {
    const queueList = [];
    const vistedList = [];

    queueList.unshift(this.root);

    while (queueList.length > 0) {
      const popEle = queueList.pop();

      if (popEle.right) {
        queueList.unshift(popEle.right);
      }

      if (popEle.left) {
        queueList.unshift(popEle.left);
      }
      vistedList.push(popEle.val);
    }
    return vistedList;
  }

  DFS_pre() {
    const result = [];

    function preorder(node) {
      if (!node) return;

      result.push(node.val);

      preorder(node.left);
      preorder(node.right);
    }

    preorder(this.root);

    return result;
  }

  DFS_post() {
    const result = [];

    function postorder(node) {
      if (!node) return;

      postorder(node.left);
      postorder(node.right);
      result.push(node.val);
    }

    postorder(this.root);

    return result;
  }

  DFS_inorder() {
    const result = [];

    function inorder(node) {
      if (!node) return;

      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
    }

    inorder(this.root);
    return result;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log(tree.DFS_inorder());
