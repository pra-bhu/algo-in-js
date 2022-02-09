const binarySearch = (list, searchKey) => {
    let start = 0, end = list.length - 1
    while(start <= end){
        let middle = Math.floor((end-start)/2 + start)
        if(list[middle] === searchKey) return middle
        if(searchKey > list[middle]) start = middle + 1
        if(searchKey < list[middle]) end = middle - 1
    }
    return -1
}

export default binarySearch;