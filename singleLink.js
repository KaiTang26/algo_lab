class Snode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Slink {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 1;
  }

  push(val) {
    const newNode = new Snode(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // traversal(n) {
  //   if (n > this.length + 1 || n === 0) return null;

  //   if ((n = 1)) {
  //     return this.head;
  //   }
  //   if ((n = this.length)) {
  //     return this.tail;
  //   }

  //   let node = this.head;

  //   for (let i = 1; i <= n; i++) {
  //     node = node.next;
  //   }
  //   return node;
  // }

  // pop() {
  //   const removedNode = this.tail;
  //   const temp = this.traversal(this.length - 1);
  //   temp.next = null;
  //   this.tail = temp;

  //   return removedNode;
  // }
}

const linkedList = new Slink();

linkedList.push("h1");
linkedList.push("h2");
linkedList.push("h3");

function reverse(head) {
  let slowPoint = null;
  let fastPoint = head;
  while (fastPoint) {
    let temp = fastPoint.next;
    fastPoint.next = slowPoint;
    slowPoint = fastPoint;
    fastPoint = temp;
  }

  return slowPoint;
}

console.log(reverse(linkedList.head));
