const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "E", "F"],
  E: ["C", "D", "F"],
  F: ["D", "E"]
};

function DFS(graph, firstNode) {
  const result = [];

  function helper(node) {
    if (result.includes(node)) return;

    result.push(node);

    graph[node].forEach(ele => {
      helper(ele);
    });
  }

  helper(firstNode);

  return result;
}

function BFS(graph, firstNode) {
  const queueList = [];
  const result = [];
  queueList.unshift(firstNode);

  while (queueList.length > 0) {
    let ele = queueList.pop();
    if (!result.includes(ele)) {
      result.push(ele);
    }
    graph[ele].forEach(ele => {
      if (!result.includes(ele)) {
        queueList.unshift(ele);
      }
    });
  }

  return result;
}

console.log(BFS(graph, "A"));
