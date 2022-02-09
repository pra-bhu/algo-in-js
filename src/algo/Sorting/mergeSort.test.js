import { merge, mergeSort } from "./mergeSort.js"

describe('Merges 2 sorted arrays', () => {
    test('merge([2,5,9],[1,4,8]) returns [1,2,4,5,8,9]', () => {
        expect(merge([2,5,9],[1,4,8])).toEqual([1,2,4,5,8,9])
    })

    test('merge([2,5],[1,4]) returns [1,2,4,5]', () => {
        expect(merge([2,5],[1,4])).toEqual([1,2,4,5])
    })

    test('merge([2,5,9,12,15],[10,14]) returns [2,5,9,10,12,14,15]', () => {
        expect(merge([2,5,9,12,15],[10,14])).toEqual([2,5,9,10,12,14,15])
    })

    test('merge([1,10,50],[2,14,99,100]) returns [1,2,10,14,50,99,100]', () => {
        expect(merge([1,10,50],[2,14,99,100])).toEqual([1,2,10,14,50,99,100])
    })
})

describe('merge Sorts a given array', () => {
    test('mergeSort([5,3,4,1,2]) should return [1,2,3,4,5]', () => {
        expect(mergeSort([5,3,4,1,2])).toEqual([1,2,3,4,5])
    })

    test('mergeSort([51,13,43,31,62,3,1,78]) should return [1,3,13,31,43,51,62,78]', () => {
        expect(mergeSort([51,13,43,31,62,3,1,78])).toEqual([1,3,13,31,43,51,62,78])
    })

    test('mergeSort([8,1,2,3,4,5,6,7]) should return [1,2,3,4,5,6,7,8]', () => {
        expect(mergeSort([8,1,2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7,8])
    })
    
})


