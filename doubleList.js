class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.pre = null;
  }
}

class DoubleList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.tail;
      this.tail = newNode;
      this.tail.pre = temp;
      temp.next = this.tail;
    }

    this.lenght++;
  }

  pop() {
    if (this.lenght <= 1) {
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.tail.pre;
      temp.next = null;
      this.tail = temp;
    }
    this.lenght--;
  }

  shift() {
    const temp = this.head.next;
    temp.pre = null;
    this.head = temp;
    this.lenght--;
  }
}

const dl = new DoubleList();

dl.push("h1");
dl.push("h2");
dl.shift();
//dl.pop();

console.log(dl);
