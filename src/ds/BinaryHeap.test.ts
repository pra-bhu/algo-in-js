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

describe('MinBinaryHeap: ', () => {
    const minBinaryHeap = new MinBinaryHeap()
    test('should insert a value', () => {
        expect(minBinaryHeap.insert(88)).toBe(0)
    })
    test('should return false', () => {
        expect(minBinaryHeap.insert(88)).toBeUndefined()
    })
    test('should bubble up lower value to the top', () => {
        expect(minBinaryHeap.insert(75)).toBe(0)
    })
    test('should add to right of the parent node i.e. 75', () => {
        expect(minBinaryHeap.insert(5)).toBe(0)
        expect(minBinaryHeap.values[1]).toBe(88)
        expect(minBinaryHeap.values[2]).toBe(75)
    })
    test('should add to left of the parent node i.e. 88', () => {
        expect(minBinaryHeap.insert(95)).toBe(3)
    })
    test('should add to right of the parent node i.e. 88', () => {
        expect(minBinaryHeap.insert(25)).toBe(1)
    })
    test('should add to right of the parent node i.e. 5 and values[5] == 75', () => {
        expect(minBinaryHeap.insert(22)).toBe(2)
        expect(minBinaryHeap.values[5]).toBe(75)
    })
    test('should add to right of the parent node i.e. 95 and values[5] == 5 and values[6]== 22', () => {
        expect(minBinaryHeap.insert(34)).toBe(6)
        expect(minBinaryHeap.values[5]).toBe(75)
        expect(minBinaryHeap.values[6]).toBe(34)
    })
    test('should values[0]==102', () => {
        expect(minBinaryHeap.insert(104)).toBe(7)
    })
})