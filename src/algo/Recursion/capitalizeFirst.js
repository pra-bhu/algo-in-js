const capitalizeFirst = (arr, buffer = []) => {
    if(arr.length === 0) return buffer
    let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1,arr[0].length)
    buffer.push(capitalized)
    return capitalizeFirst(arr.slice(1,arr.length),buffer)
}

export default capitalizeFirst;