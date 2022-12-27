import {Graph} from "./Graph"

describe('Undirected Graph: ', () => {

  let graph = new Graph()
  describe('adds a vertex ', () => {
    test('should add a key to the adjacency list', () => {
      graph.addVertex("tokyo")
      expect(graph.adjacencyList.has("tokyo"))
    })
  })

  describe('adds an edge', () => {
    test('should add an edge to the adjacency list', () => {
      graph.addVertex("madrid")
      graph.addVertex("hyderabad")
      graph.addEdge("madrid","tokyo")
      graph.addEdge("madrid","hyderabad")
      expect(graph.adjacencyList.get("madrid")).toContain("tokyo")
      expect(graph.adjacencyList.get("tokyo")).toContain("madrid")
    })
    test('should fail to add an edge to the adjacency list if vertex does not exists', () => {
      expect(() => graph.addEdge("madrid","kolkata")).toThrow("Vertex kolkata does not exists!")
      expect(() => graph.addEdge("jaipur","kolkata")).toThrow("Vertex kolkata does not exists!")
      expect(() => graph.addEdge("jaipur","madrid")).toThrow("Vertex jaipur does not exists!")
    })
    test('should fail to add an edge to the adjacency list if edge already exists', () => {
      expect(() => graph.addEdge("madrid","tokyo")).toThrow("Edge madrid --- tokyo already exists")
      expect(() => graph.addEdge("tokyo","madrid")).toThrow("Edge tokyo --- madrid already exists")
      expect(() => graph.addEdge("hyderabad","madrid")).toThrow("Edge hyderabad --- madrid already exists")
    })
  })
  
  describe('removes an edge', () => {
    test('should remove the edge', () => {
      graph.removeEdge("hyderabad","madrid")
      expect(graph.adjacencyList.get("madrid")).not.toContain("hyderabad")
      expect(graph.adjacencyList.get("madrid")).toContain("tokyo")
      expect(graph.adjacencyList.get("hyderabad")).not.toContain("madrid")
    })
  })

  describe('removes a vertex', () => {
    test('should remove the vertex', () => {
      graph.addEdge("hyderabad","madrid")
      graph.addVertex("kolkata")
      graph.addVertex("jaipur")
      graph.addEdge("jaipur","kolkata")
      graph.addEdge("hyderabad","kolkata")
      graph.addEdge("madrid","kolkata")
      graph.addEdge("tokyo","kolkata")
      expect(graph.removeVertex("hyderabad")).toBe("hyderabad")
      expect(graph.adjacencyList.get("hyderabad")).toBeFalsy()
      expect(graph.adjacencyList.get("madrid")).not.toContain("hyderabad")
      expect(graph.adjacencyList.get("kolkata")).not.toContain("hyderabad")
    })
  })

  describe('Traversal', () => {
    let g = new Graph();
    test('should traverse in Depth First Search Order Recursively', () => {

        g.addVertex("A")
        g.addVertex("B")
        g.addVertex("C")
        g.addVertex("D")
        g.addVertex("E")
        g.addVertex("F")


        g.addEdge("A", "B")
        g.addEdge("A", "C")
        g.addEdge("B","D")
        g.addEdge("C","E")
        g.addEdge("D","E")
        g.addEdge("D","F")
        g.addEdge("E","F")
        
        console.log(g._adjacencyList.entries())
        expect(Array.from(g.dfsRecursive("A",new Map<string,boolean>()).keys())).toEqual(['A','B','D','E','C','F'])

    })

    test('should traverse in Depth First Search Order Iteratively ', () => {
      expect(Array.from(g.dfsIterative("A").keys())).toEqual(['A','C','E','F','D','B'])
    })

    test('should traverse in Breadth First Search Order Iteratively ', () => {
      console.log(g.bfs("A").entries());
      expect(Array.from(g.bfs("A").keys())).toEqual(['A','B','C','D','E','F'])
    })
  })
})