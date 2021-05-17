import bubbleSort,{swap} from './bubbleSort'

describe('Bubble Sorts a given array', () => {
    test('swap(2,3) should return [3,2]', () => {
        expect(swap(2,3)).toEqual([3,2])
    })

    test('bubbleSort([5,3,4,1,2]) should return [1,2,3,4,5]', () => {
        expect(bubbleSort([5,3,4,1,2])).toEqual([1,2,3,4,5])
    })

    test('bubbleSort([51,13,43,31,62,3,1,78]) should return [1,3,13,31,43,51,62,78]', () => {
        expect(bubbleSort([51,13,43,31,62,3,1,78])).toEqual([1,3,13,31,43,51,62,78])
    })

    test('bubbleSort([8,1,2,3,4,5,6,7]) should return [1,2,3,4,5,6,7,8]', () => {
        expect(bubbleSort([8,1,2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7,8])
    })
    
})
