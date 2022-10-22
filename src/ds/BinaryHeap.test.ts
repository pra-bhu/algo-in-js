import { MaxBinaryHeap,MinBinaryHeap } from "./BinaryHeap";

describe('MaxBinaryHeap: ', () => {
    const maxBinaryHeap = new MaxBinaryHeap()
    test('should insert a value', () => {
        expect(maxBinaryHeap.insert(88)).toBe(0)
    })
    test('should return false', () => {
        expect(maxBinaryHeap.insert(88)).toBeUndefined()
    })
    test('should bubble up higher value to the top', () => {
        expect(maxBinaryHeap.insert(95)).toBe(0)
    })
    test('should add to right of the parent node i.e. 95', () => {
        expect(maxBinaryHeap.insert(5)).toBe(2)
    })
    test('should add to left of the parent node i.e. 88', () => {
        expect(maxBinaryHeap.insert(15)).toBe(3)
    })
    test('should add to right of the parent node i.e. 88', () => {
        expect(maxBinaryHeap.insert(25)).toBe(4)
    })
    test('should add to right of the parent node i.e. 95 and values[5] == 5', () => {
        expect(maxBinaryHeap.insert(22)).toBe(2)
        expect(maxBinaryHeap.values[5]).toBe(5)
    })
    test('should add to right of the parent node i.e. 95 and values[5] == 5 and values[6]== 22', () => {
        expect(maxBinaryHeap.insert(34)).toBe(2)
        expect(maxBinaryHeap.values[5]).toBe(5)
        expect(maxBinaryHeap.values[6]).toBe(22)
    })
    test('should values[0]==102', () => {
        expect(maxBinaryHeap.insert(104)).toBe(0)
        expect(maxBinaryHeap.values[1]).toBe(95)
        expect(maxBinaryHeap.values[3]).toBe(88)
        expect(maxBinaryHeap.values[6]).toBe(22)
    })
})