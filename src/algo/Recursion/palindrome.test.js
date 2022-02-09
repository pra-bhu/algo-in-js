import {isPalindrome} from "./palindrome"

describe('Is given word is Palindrome', () => {
    test('isPalindrome("tacocat") should return true', () => {
        expect(isPalindrome("tacocat")).toBe(true)
    })
    test('isPalindrome("awesome") should return false', () => {
        expect(isPalindrome("awesome")).toBe(false)
    })
    test('isPalindrome("foobar") should return false', () => {
        expect(isPalindrome("foobar")).toBe(false)
    })
    test('isPalindrome("amanaplanacanalpanama") should return true', () => {
        expect(isPalindrome("amanaplanacanalpanama")).toBe(true)
    })
    test('isPalindrome("amanaplanacanalpandemonium") should return false', () => {
        expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false)
    })
    
})
