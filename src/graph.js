/* Adjacency Matrix
const adjMatrix = [[0, 1, 0, 0, 1],
                   [1, 0, 1, 1, 1],
                   [0, 1, 0, 1, 0],
                   [0, 1, 1, 0, 1],
                   [1, 1, 0, 1, 0]];
Array represents vertice and 1 means we have edge
 */

/* Adjacency List
const adjList = {
                  1: [2, 5],
                  2: [1, 5, 3, 4],
                  3: [2, 4],
                  4: [2, 5, 3],
                  5: [4, 1, 2],
                };
Key represents vertice and array value contains links
*/

class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node.value] = {
      node,
      edges: [],
    };
  }

  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2);
    this.adjList[node2.value].edges.push(node1);
  }

  removeNode(node) {
    delete this.adjList[node.value];
    const nodes = Object.keys(this.adjList);
    // eslint-disable-next-line no-restricted-syntax
    for (const currentNode of nodes) {
      const { edges } = this.adjList[currentNode];
      const index = edges.indexOf(currentNode);
      if (index > -1) {
        edges.splice(index, 1);
      }
    }
  }
}

const adjList = new Graph();
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
adjList.addNode(node1);
adjList.addNode(node2);
adjList.addNode(node3);
adjList.addEdge(node1, node2);
console.log('Two nodes: ', adjList);
adjList.removeNode(node2);
console.log('Node was removed: ', adjList);
