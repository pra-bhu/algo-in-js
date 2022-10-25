import { heapSort, maxHeapify } from "./heapSort"

describe('maxHeapify : ', () => {
  test('should accept an array', () => {
    const arr:Array<number> = []
    expect(maxHeapify(arr).values.length).toBe(0)
  })
  test('should accept an array and return a heap with max value as the first element', () => {
    const arr:Array<number> = [4, 10, 3, 5, 1]
    const heap = maxHeapify(arr)
    console.log(heap);
    
    expect(heap.values.length).toBe(5)
    expect(heap.values.toString()).toBe([ 10, 5, 3, 4, 1 ].toString())
  })
})

describe('Heap Sort: ', () => {
  test('should sort a given array to [ 1, 3, 4, 5, 10 ]', () => {
    const arr:Array<number> = [4, 10, 3, 5, 1]
    expect(heapSort(arr).toString()).toBe([ 1, 3, 4, 5, 10 ].toString())
  })
  test('should sort a given array to [ 12,18,22,32,34,35,37,55,99]', () => {
    const arr:Array<number> = [12,32,55,22,37,18,35,99,34]
    expect(heapSort(arr).toString()).toBe([12,18,22,32,34,35,37,55,99].toString())
  })
})