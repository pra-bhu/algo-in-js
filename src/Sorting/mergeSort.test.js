import { merge } from "./mergeSort.js"

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

