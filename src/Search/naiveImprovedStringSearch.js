const naiveStringSearch = (searchString, searchKey) => {
    let lenOfKey = searchKey.length 
    let count = 0

    for(let ind = 0; ind <= searchString.length; ){
        if(searchString[ind] === searchKey[0]) {
            if(searchString.substring(ind, ind+lenOfKey) === searchKey) {
                console.log('Found at index',ind)
                count++
                ind += lenOfKey - 2
            }
        }
        ind++
    }
    return count
}

export default naiveStringSearch