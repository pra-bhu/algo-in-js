import { getDigit, sort, maxDigits, digitCount } from "./radixSort.js"

describe('return digit at the given place', () => {
    test('getDigit(2341,2) returns 3', () => {
        expect(getDigit(2341,2)).toEqual(3)
    })

    test('getDigit(57423,0) returns 3', () => {
        expect(getDigit(57423,0)).toEqual(3)
    })

    test('getDigit([12,5,9,2,15,10,14]) returns 4', () => {
        expect(getDigit(57423,3)).toEqual(7)
    })
})
describe('Given an array of numbers, returns the number of digits in the largest numbers in the list', () => {
    test('maxDigits([5,1332,3,12,23446,4,12224,33]) returns 5', () => {
        expect(maxDigits([5,1332,3,12,23446,4,12224,33])).toEqual(5)
    })

    test('maxDigits([5,13,3,1,6,4,12,33]) returns 2', () => {
        expect(maxDigits([5,13,3,1,6,4,12,33])).toEqual(2)
    })

    test('maxDigits([5,1324342,3,221,6567,52554,12432,33]) returns 7', () => {
        expect(maxDigits([5,1324342,3,221,6567,52554,12432,33])).toEqual(7)
    })
})

describe('returns the number of digits in num', () => {
    test('digitCount(12224) returns 5', () => {
        expect(digitCount(12224)).toEqual(5)
    })

    test('digitCount(33) returns 2', () => {
        expect(digitCount(33)).toEqual(2)
    })

    test('digitCount(0) returns 1', () => {
        expect(digitCount(0)).toEqual(1)
    })
})

describe('Sorts a given array', () => {
    test('sort([89,2,146,73,5,2,66,734,66,2]) should return [2,2,2,5,66,66,73,89,146,734]', () => {
        expect(sort([89,2,146,73,5,2,66,734,66,2])).toEqual([2,2,2,5,66,66,73,89,146,734])
    })

    test('sort([51,13,43,31,62,3,1,78]) should return [1,3,13,31,43,51,62,78]', () => {
        expect(sort([51,13,43,31,62,3,1,78])).toEqual([1,3,13,31,43,51,62,78])
    })

    test('sort([8,1,2,3,4,5,6,7]) should return [1,2,3,4,5,6,7,8]', () => {
        expect(sort([8,1,2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7,8])
    })
    
})


