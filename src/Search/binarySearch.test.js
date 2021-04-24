import binarySearch from "./binarySearch"

describe('Binary Search: Accepts an array and string and returns index', () => {
    test('binarySearch([1,2,3,4,5],2) returns 1', () => {
        expect(binarySearch([1,2,3,4,5],2)).toBe(1)
    })
    test('binarySearch([1,2,3,4,5],3) returns 2', () => {
        expect(binarySearch([1,2,3,4,5],3)).toBe(2)
    })
    test('binarySearch([1,2,3,4,5],5) returns 4', () => {
        expect(binarySearch([1,2,3,4,5],5)).toBe(4)
    })
    test('binarySearch([1,2,3,4,5],6) // -1', () => {
        expect(binarySearch([1,2,3,4,5],6)).toBe(-1)
    })
    test('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) returns 2', () => {
        expect(binarySearch([
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
            40, 44, 64, 79, 84, 86, 95, 96, 98, 99
          ], 10)).toBe(2)
    })
    
    test('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) returns 16', () => {
        expect(binarySearch([
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
            40, 44, 64, 79, 84, 86, 95, 96, 98, 99
          ], 95)).toBe(16)
    })
    
    test('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) returns -1', () => {
        expect(binarySearch([
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
            40, 44, 64, 79, 84, 86, 95, 96, 98, 99
          ], 100)).toBe(-1)
    })
    

    
})
