import flatten from './flatten'

describe('Flatten the given nested array', () => {
    test('flatten([1, 2, 3, [4, 5] ]) should return [1, 2, 3, 4, 5] ', () => {
        expect(flatten([1, 2, 3, [4, 5] ])).toEqual([1, 2, 3, 4, 5])
    })
    // console.log('flatten([1, [2, [3, 4], [[5]]]])',flatten([1, [2, [3, 4], [[5]]]]));
    test('flatten([1, [2, [3, 4], [[5]]]]) should return [1, 2, 3, 4, 5] ', () => {
        expect(flatten([1, [2,  [[5]]], [3, 4]])).toEqual([1, 2, 5,3, 4])
    })
    test('flatten([[1],[2],[3]]) should return [1, 2, 3] ', () => {
        expect(flatten([[1],[2],[3]])).toEqual([1, 2, 3])
    })
    test('flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) should return [1, 2, 3] ', () => {
        expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3])
    })

    
})
