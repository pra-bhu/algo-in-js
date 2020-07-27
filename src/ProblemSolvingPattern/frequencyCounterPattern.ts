//An anagram is a string made by rearranging letters from a word.
// e.g. "cinema" => "iceman"

interface dynamicObj {
    [k:string]:any
}

export const anagramChecker = (str1:string, str2:string) => {
    //create an object to maintain character frequency from a word
    if(str1.length !== str2.length) return false
    let str1Freq:dynamicObj = {}
    let str2Freq:dynamicObj= {}
    for(let char of str1){
        str1Freq[char] = ++str1Freq[char] || 1
    }
    for(let char of str2){
        str2Freq[char] = ++str2Freq[char] || 1
    }
    for(let ele in str1Freq){
        if(!str2Freq[ele]) return false
        if(str2Freq[ele] !== str1Freq[ele]) return false
    }
    return true
}


export const sameFrequency = (num1:number, num2:number) => {
    let num1Freq : dynamicObj ={}
    let num2Freq : dynamicObj ={}

    let num1Str = num1.toString()
    let num2Str = num2.toString()
    if(num1Str.length !== num2Str.length) return false

    for(let num of num1Str){
        num1Freq[num] = ++num1Freq[num] || 1
    }
    for(let num of num2Str){
        num2Freq[num] = ++num2Freq[num] || 1
    }
    for(let num of num2Str){
        if(!num1Freq.hasOwnProperty(num)) return false
        if(num1Freq[num] !== num2Freq[num]) return false
    }
    return true
}