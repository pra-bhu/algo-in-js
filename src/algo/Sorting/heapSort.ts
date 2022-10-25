import { MaxBinaryHeap } from "../../ds/BinaryHeap"

const maxHeapify = (arr:Array<number>): MaxBinaryHeap => {
  const heap = new MaxBinaryHeap()
  arr.map(curr => {heap.insert(curr)})
  return heap
}

const heapSort = (arr:Array<number>): Array<number> => {
  let heap = maxHeapify(arr)
  let size = heap.values.length
  for(let i=size-1; i>=0; i-- ){
    arr[i] = heap.extractMax()
    heap = maxHeapify(heap.values)
  }
  console.log(arr);
  
  return arr
}

export { maxHeapify, heapSort }