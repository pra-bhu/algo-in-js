  class Node {
    value: any = null
    priority:number 
    constructor(value: any, priority: number){
      this.value = value
      this.priority = priority
    }
  }

  class PriorityQueue  {
    _values: Array<Node> = []
  
    get values(): Array<Node> {
      return this._values
    }
  
    enqueue(value: Node): number {
      let values = this._values
      let childInd: number = values.push(value) - 1
      let parentInd: number = Math.floor((childInd - 1) / 2)
      console.log({childInd, parentInd});
      
      while (parentInd >= 0 && (values[childInd].priority > values[parentInd].priority)) {
        ;[values[childInd], values[parentInd]] = [values[parentInd],values[childInd]]
        childInd = parentInd
        parentInd = Math.floor((childInd - 1) / 2)
      }
      return childInd
    }
  
    dequeue(): Node {
      let values: Array<Node> = this._values
      
      if (values.length <= 1) return values.pop();
      [values[0], values[values.length - 1]] = [values[values.length - 1],values[0]]
      const result = values.pop()
      console.log(values);
      this._sinkDown(values)
      return result
    }
  
    _sinkDown(values: Array<Node>) {
      let idx: number = 0
      while (idx < values.length) {
        let parentIdx = idx
        let firstChildIdx = 2 * idx + 1
        let secondChildIdx = 2 * idx + 2
        let nextSwap = Math.max(values[firstChildIdx] && values[firstChildIdx].priority, values[secondChildIdx] && values[secondChildIdx].priority)
        if (!nextSwap || nextSwap < values[parentIdx].priority ) return

        let nextIdx:number = (nextSwap == values[firstChildIdx].priority ? firstChildIdx : secondChildIdx)

        ;[values[idx], values[nextIdx]] = [values[nextIdx], values[idx]]
        idx = nextIdx
      }
    }
  }
  
  export { PriorityQueue, Node }
  