// merge([3,5],[1,4]) returns [1,3,4,5]
const merge = (arr1=[],arr2=[]) => {
    let mArr = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            mArr.push(arr1[i])
            i++
        }
        else if(arr2[j] <= arr1[i]){
            mArr.push(arr2[j])
            j++
        }
        if(i === arr1.length && j < arr2.length ) mArr = [...mArr,...arr2.slice(j)]
        if(j === arr2.length && i < arr1.length) mArr = [...mArr,...arr1.slice(i)]
    }
    return mArr
}

const sp

const mergeSort = (arr=[]) => {
    let sortedArr = []
    
    return sortedArr
}
export {merge}