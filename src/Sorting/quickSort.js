const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
    let pivotIdx = startIdx
    for(let i=startIdx +1 ; i <= endIdx; i++){
        if(arr[i] < arr[startIdx]){
            pivotIdx++
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx] , arr[i]]
        }
    }
    [arr[startIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[startIdx]]
    console.log('arr: '+ arr);
    return pivotIdx
}


const sort = (arr, left = 0, right= arr.length-1) => {
    
    if (left < right){
        let pivotIdx = pivot(arr, left, right)
        // left array sort
        sort (arr, left, pivotIdx - 1)
        // right array sort
        sort(arr, pivotIdx+1, right)
    }
    return arr
}

export {pivot, sort}