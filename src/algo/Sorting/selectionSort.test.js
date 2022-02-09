import selectionSort from './selectionSort'

describe('Selection Sorts a given array', () => {
    test('selectionSort([5,3,4,1,2]) should return [1,2,3,4,5]', () => {
        expect(selectionSort([5,3,4,1,2])).toEqual([1,2,3,4,5])
    })

    test('selectionSort([51,13,43,31,62,3,1,78]) should return [1,3,13,31,43,51,62,78]', () => {
        expect(selectionSort([51,13,43,31,62,3,1,78])).toEqual([1,3,13,31,43,51,62,78])
    })

    test('selectionSort([8,1,2,3,4,5,6,7]) should return [1,2,3,4,5,6,7,8]', () => {
        expect(selectionSort([8,1,2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7,8])
    })
    
})
