import linearSearch from "./linearSearch"

describe('Linear Search : Accepts an array and string and returns index', () => {
    test('linearSearch([12,3,53,632,7,8,11], 2) and returns -1', () => {
        expect(linearSearch([12,3,53,632,7,8,11], 2)).toBe(-1)
    })
    test('linearSearch([12,3,53,632,7,8,11], 53) and returns 2', () => {
        expect(linearSearch([12,3,53,632,7,8,11], 53)).toBe(2)
    })
    
})
