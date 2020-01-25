class graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = [];
    }
  }

  addEdge(node1, node2) {
    if (!this.adjacencyList[node1]) {
      this.adjacencyList[node1] = [];
    }

    if (!this.adjacencyList[node2]) {
      this.adjacencyList[node2] = [];
    }
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  removeEdge(node1, node2) {
    const newNode1List = this.adjacencyList[node1].filter(ele => {
      if (ele !== node2) {
        return ele;
      }
    });
    this.adjacencyList[node1] = newNode1List;

    const newNode2List = this.adjacencyList[node2].filter(ele => {
      if (ele !== node1) {
        return ele;
      }
    });
    this.adjacencyList[node2] = newNode2List;
  }

  removeEdge(node) {
    delete this.adjacencyList[node];
    const keyList = Object.keys(this.adjacencyList);

    keyList.map(ele => {
      const newNode1List = this.adjacencyList[ele].filter(e => {
        if (e !== node) {
          return e;
        }
      });
      this.adjacencyList[ele] = newNode1List;
    });
  }
}

const newCity = new graph();

newCity.addEdge("zheng zhou", "zhu hai");

newCity.addEdge("zheng zhou", "tai yuang");

// console.log(newCity);

// newCity.removeEdge("zheng zhou", "tai yuang");
// console.log(newCity);

newCity.removeEdge("tai yuang");

console.log(newCity);
