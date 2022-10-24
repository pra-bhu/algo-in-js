class BinaryHeap {
  protected _values: Array<any> = []
}

class MaxBinaryHeap extends BinaryHeap {
  constructor() {
    super()
  }

  get values(): Array<any> {
    return this._values
  }

  insert(value: any): number {
    let values = this._values
    let childInd: number = values.push(value) - 1
    let parentInd: number = Math.floor((childInd - 1) / 2)
    while (values[childInd] >= values[parentInd]) {
      ;[values[childInd], values[parentInd]] = [values[parentInd],values[childInd]]
      childInd = parentInd
      parentInd = Math.floor((childInd - 1) / 2)
    }
    return childInd
  }

  extractMax(): any {
    let values: Array<any> = this._values
    
    if (values.length <= 1) return values.pop();
    [values[0], values[values.length - 1]] = [values[values.length - 1],values[0]]
    const result = values.pop()
    this._sinkDown(values)
    return result
  }

  _sinkDown(values: Array<any>) {
    let idx: number = 0
    while (idx < values.length) {
      let parentIdx = idx
      let firstChildIdx = 2 * idx + 1
      let secondChildIdx = 2 * idx + 2
      let nextSwap = Math.max(values[firstChildIdx], values[secondChildIdx])
      if (!nextSwap || nextSwap < values[parentIdx] ) return
      let nextIdx = values.indexOf(nextSwap);
      [values[idx], values[nextIdx]] = [values[nextIdx], values[idx]]
      idx = nextIdx
    }
  }
}

// MIN BINARY HEAP
class MinBinaryHeap extends BinaryHeap {
  constructor() {
    super()
  }

  get values(): Array<any> {
    return this._values
  }

  insert(value: any): number {
    let values = this._values
    let childInd: number = values.push(value) - 1
    let parentInd: number = Math.floor((childInd - 1) / 2)
    if (parentInd >= 0) {
      while (values[childInd] <= values[parentInd]) {
        ;[values[childInd], values[parentInd]] = [values[parentInd],values[childInd]]
        childInd = parentInd
        parentInd = Math.floor((childInd - 1) / 2)
      }
    }
    return childInd
  }
}

export { MaxBinaryHeap, MinBinaryHeap }
