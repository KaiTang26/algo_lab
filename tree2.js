class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Btree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    let currentNode = this.root;

    if (!currentNode) {
      this.root = newNode;
      return this.root;
    }

    while (currentNode) {
      if (currentNode.val === val) {
        console.log(`${val} in the tree`);
        return null;
      } else if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this.root;
        } else {
          currentNode = currentNode.left;
        }
      } else if (currentNode.val < val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this.root;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  BFS() {
    const queue = [];
    const nodeArry = [];

    queue.unshift(this.root);

    while (queue.length > 0) {
      let currentNode = queue.pop();

      nodeArry.push(currentNode.val);

      if (currentNode.left) {
        queue.unshift(currentNode.left);
      }

      if (currentNode.right) {
        queue.unshift(currentNode.right);
      }
    }

    return nodeArry;
  }

  pDFS() {
    const result = [];

    function travel(node) {
      if (!node) {
        return;
      } else {
        result.push(node.val);
        travel(node.left);
        travel(node.right);
      }
    }

    travel(this.root);

    return result;
  }

  iDFS() {
    const result = [];

    function travel(node) {
      if (!node) {
        return;
      } else {
        travel(node.left);
        result.push(node.val);
        travel(node.right);
      }
    }

    travel(this.root);

    return result;
  }

  postDFS() {
    const result = [];

    function travel(node) {
      if (!node) {
        return;
      } else {
        travel(node.left);
        travel(node.right);
        result.push(node.val);
      }
    }

    travel(this.root);

    return result;
  }

  delete(val) {
    let preNode = null;
    let deleteNode = null;

    function getNode(node) {
      if (!node) {
        return null;
      } else {
        if (!preNode && node.val === val) {
          deleteNode = node;
          return;
        }

        if (node.left && node.left.val === val) {
          preNode = node;
          deleteNode = node.left;
          return;
        }

        if (node.right && node.right.val === val) {
          preNode = node;
          deleteNode = node.right;
          return;
        }
        getNode(node.left);
        getNode(node.right);
      }
    }

    getNode(this.root);

    if (!deleteNode.left && !deleteNode.right) {
      if (preNode.right.val === val) {
        preNode.right = null;
      } else {
        preNode.left = null;
      }
    } else if (deleteNode.left === null && deleteNode.right !== null) {
      if (preNode.right.val === val) {
        preNode.right = deleteNode.right;
      } else {
        preNode.left = deleteNode.right;
      }
    } else if (deleteNode.left !== null && deleteNode.right === null) {
      if (preNode.right.val === val) {
        preNode.right = deleteNode.left;
      } else {
        preNode.left = deleteNode.left;
      }
    } else if (deleteNode.left !== null && deleteNode.right !== null) {
      let point = null;

      if (!deleteNode.right.left) {
        deleteNode.right.left = deleteNode.left;
        point = deleteNode.right;
        deleteNode.right = null;
        deleteNode.left = null;
      } else {
        point = deleteNode.right.left;
        deleteNode.right.left = null;
        point.left = deleteNode.left;
        point.right = deleteNode.right;
        deleteNode.right = null;
        deleteNode.left = null;
      }

      if (preNode.right.val === val) {
        preNode.right = point;
      } else {
        preNode.left = point;
      }
    }

    //console.log(deleteNode);
    //console.log(preNode);
  }
}

const newBtree = new Btree();

newBtree.insert(30);
newBtree.insert(25);
newBtree.insert(35);
newBtree.insert(20);
newBtree.insert(27);
newBtree.insert(32);
newBtree.insert(31);
newBtree.insert(33);
newBtree.insert(40);
newBtree.insert(36);
newBtree.insert(45);
console.log("before: ", newBtree.BFS());
newBtree.delete(35);

console.log("after: ", newBtree.BFS());
