export const isPalindrome = (word) => {
    //
    if(word.length <= 1) return true

    if(word.charAt(0) === word.charAt(word.length-1)) return isPalindrome(word.slice(1,word.length-1))

    return false
}
