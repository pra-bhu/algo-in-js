const getDigit = (num, position) =>{
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10
}

const digitCount = num => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

const maxDigits = (nums = []) => {
    const maxDigit = nums.reduce((prev,curr)=> prev > digitCount(curr) ? prev : digitCount(curr), digitCount(nums[0]))
    console.log('maxDIGIT :'+ maxDigit)
    return maxDigit
}

const sort = (arr) => {
    let maxDigit = maxDigits(arr)
    console.log(maxDigit);
    for (let digit = 0; digit < maxDigit; digit++){
        let container = Array.from({length: 10}, () => [])
        for (let i= 0; i < arr.length; i++){
            const position = getDigit(arr[i], digit)
            container[position].push(arr[i])
        }
        arr = [].concat(...container)
    }
    return arr
}
export { getDigit, sort, maxDigits, digitCount }