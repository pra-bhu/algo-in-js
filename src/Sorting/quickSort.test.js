import { pivot, sort } from "./quickSort.js"

describe('return pivot index', () => {
    test('pivot([2,5,9,1,4,8]) returns 1', () => {
        expect(pivot([2,5,9,1,4,8])).toEqual(1)
    })

    test('pivot([4,2,5,1]) returns 2', () => {
        expect(pivot([4,2,5,1])).toEqual(2)
    })

    test('pivot([12,5,9,2,15,10,14]) returns 4', () => {
        expect(pivot([12,5,9,2,15,10,14])).toEqual(4)
    })

    // test('pivot([1,10,50,2,14,99,100]) returns [1,2,10,14,50,99,100]', () => {
    //     expect(pivot([1,10,50,2,14,99,100])).toEqual([1,2,10,14,50,99,100])
    // })
})

describe('pivot Sorts a given array', () => {
    test('sort([5,3,4,1,2]) should return [1,2,3,4,5]', () => {
        expect(sort([5,3,4,1,2])).toEqual([1,2,3,4,5])
    })

    test('sort([51,13,43,31,62,3,1,78]) should return [1,3,13,31,43,51,62,78]', () => {
        expect(sort([51,13,43,31,62,3,1,78])).toEqual([1,3,13,31,43,51,62,78])
    })

    test('sort([8,1,2,3,4,5,6,7]) should return [1,2,3,4,5,6,7,8]', () => {
        expect(sort([8,1,2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7,8])
    })
    
})


