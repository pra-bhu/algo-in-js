import { anagramChecker, sameFrequency, areThereDuplicates } from "./frequencyCounterPattern"

//Test cases for anagram checker
describe('Test cases for anagram checker', () => {

    test('car and rew should return false', () => {
        expect(anagramChecker('car', 'rew')).toBe(false)
    })


    test('anagra and nagaram should return false', () => {
        expect(anagramChecker('anagra', 'nagaram')).toBe(false)
    })

    test('anagram and nagaram should return true', () => {
        expect(anagramChecker('anagram', 'nagaram')).toBe(true)
    })


    test('qwerty and wqerty should return true', () => {
        expect(anagramChecker('qwerty', 'wqerty')).toBe(true)
    })


    test('"" and "" should return true', () => {
        expect(anagramChecker('', '')).toBe(true)
    })

    test('aaz and zza should return false', () => {
        expect(anagramChecker('aaz', 'zza')).toBe(false)
    })
})


//
describe('Test cases for sameFrequency', () => {

    test('182 and 281 returns true', () => {
        expect(sameFrequency(182, 281)).toBe(true)
    })

    test('22 and 222 returns false', () => {
        expect(sameFrequency(22, 222)).toBe(false)
    })

    test('34 and 14 returns false', () => {
        expect(sameFrequency(34, 14)).toBe(false)
    })

    test('3589578 and 5879385 returns true', () => {
        expect(sameFrequency(3589578, 5879385)).toBe(true)
    })

    test('3589577 and 5879385 returns false', () => {
        expect(sameFrequency(3589577, 5879385)).toBe(false)
    })
})

//Test cases for areThereDuplicates
describe('Test cases for areThereDuplicates', () => {
    test('1,2,3,2,5 returns true', () => {
        expect(areThereDuplicates(1, 2, 3, 2, 5)).toBe(true)
    })

    test('a,b,c,d returns false', () => {
        expect(areThereDuplicates('a', 'b', 'c', 'd')).toBe(false)
    })

    test('a,b,c,d,d,a returns true', () => {
        expect(areThereDuplicates('a', 'b', 'c', 'd', 'd', 'a')).toBe(true)
    })
})
