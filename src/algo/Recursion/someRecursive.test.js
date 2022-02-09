import someRecursive from "./someRecursive"

describe('"someRecursive" function returns true if any one value of the array  when passed to the callback returns true else returns false ', () => {
    const isOdd = (val) => {
        return val % 2 !== 0
    }
    test('someRecursive([1,2,3,4], isOdd) should return true', () => {
        expect(someRecursive([1,2,3,4], isOdd)).toBe(true)
    })
    test('someRecursive([4,6,8,9], isOdd) should return true', () => {
        expect(someRecursive([4,6,8,9], isOdd)).toBe(true)
    })
    test('someRecursive([1,2,3,4], isOdd) should return false', () => {
        expect(someRecursive([4,6,8], isOdd)).toBe(false)
    })
    test('someRecursive([4,6,8], val => val > 10) should return false', () => {
        expect(someRecursive([4,6,8], val => val > 10)).toBe(false)
    })
    
})
