
//Write a program to implement graph traversals.

class Graph {
    constructor() {
      this.vertices = {};
    }
  
    
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    
    addEdge(vertex1, vertex2) {
      if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
        console.log("Invalid vertices");
        return;
      }
  
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1);
    }
  
    // DFS
    dfs(startVertex) {
      const visited = {};
      const result = [];
  
      const dfsRec = (vertex) => {
        if (!vertex || visited[vertex]) {
          return;
        }
  
        visited[vertex] = true;
        result.push(vertex);
  
        for (const neighbor of this.vertices[vertex]) {
          dfsRec(neighbor);
        }
      };
  
      dfsRec(startVertex);
      return result;
    }
  
    // BFS
    bfs(startVertex) {
      const visited = {};
      const result = [];
      const queue = [startVertex];
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
  
        if (!visited[currentVertex]) {
          visited[currentVertex] = true;
          result.push(currentVertex);
  
          for (const neighbor of this.vertices[currentVertex]) {
            if (!visited[neighbor]) {
              queue.push(neighbor);
            }
          }
        }
      }
  
      return result;
    }
  }
  

  const graph = new Graph();
  

  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  

  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  
  console.log("DFS:", graph.dfs("A")); 
  console.log("BFS:", graph.bfs("A")); 
  