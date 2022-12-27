class Graph {
  _adjacencyList: Map<any,Array<any>>
  constructor() {
    this._adjacencyList = new Map()
  }

  get adjacencyList(){
    return this._adjacencyList
  }

  addVertex(vertex:any){
    this._adjacencyList.set(vertex,[])
  }

  addEdge(v1:any, v2:any):Graph{
    const vt1 = this._adjacencyList.get(v1)
    const vt2 = this._adjacencyList.get(v2)
    if (!vt1 || !vt2) throw new Error(`Vertex ${(!vt2 && v2) || (!vt1 && v1)} does not exists!`)

    if(!vt1.includes(v2)) vt1.push(v2) 
    else throw new Error(`Edge ${v1} --- ${v2} already exists`)
    if(!vt2.includes(v1)) vt2.push(v1)
    else throw new Error(`Edge ${v1} --- ${v2} already exists`)
    return this
  }

  removeEdge(v1:any, v2:any):Graph{
    const vt1 = this._adjacencyList.get(v1)
    const vt2 = this._adjacencyList.get(v2)
    if (!vt1 || !vt2) throw new Error(`Vertex ${(!vt2 && v2) || (!vt1 && v1)} does not exists!`)

    if(vt1.includes(v2)) {
      const ind = vt1.indexOf(v2);
      [vt1[ind],vt1[vt1.length - 1 ]] = [vt1[vt1.length - 1 ],vt1[ind]]
      vt1.pop()
    }
    if(vt2.includes(v1)) {
      const ind = vt2.indexOf(v1);
      [vt2[ind],vt2[vt2.length - 1 ]] = [vt2[vt2.length - 1 ],vt2[ind]]
      vt2.pop()
    }
    
    return this
  }

  removeVertex(vertex:any){
    if(!this._adjacencyList.has(vertex)) throw new Error(`Vertex ${vertex} does not exists!`)

    let dependentEdges = [...this._adjacencyList.get(vertex)]
    dependentEdges.forEach(edge => this.removeEdge(vertex,edge))
    this._adjacencyList.delete(vertex)
    return vertex
  }

  dfsRecursive(vertex:any, visited:Map<string,boolean>){
    if(!vertex) return 
    visited.set(vertex, true)
    this._adjacencyList.
          get(vertex)
          .forEach(neighbor=>!visited.has(neighbor) && this.dfsRecursive(neighbor,visited))
    return visited
  }

  dfsIterative(start: any){
    let stack:Array<any> = []
    let visited:Map<string,boolean> = new Map<string,boolean>()
    stack.push(start)
    while (stack.length > 0){
      const vertex = stack.pop()
      visited.set(vertex,true)
      this._adjacencyList
            .get(vertex)
            .forEach(neighbor => !visited.has(neighbor) && stack.push(neighbor))
    }
    return visited
  }

  bfs(start:any){
    let q:Array<any> = []
    let visited:Map<string,boolean> = new Map<string,boolean>()
    q.push(start)
    while(q.length > 0){
      const vertex = q.shift()
      visited.set(vertex,true)
      this._adjacencyList
            .get(vertex)
            .forEach(neighbor => !visited.has(neighbor) && (visited.set(neighbor, true) && q.push(neighbor)))
    }
    return visited
  }
}

export {Graph}