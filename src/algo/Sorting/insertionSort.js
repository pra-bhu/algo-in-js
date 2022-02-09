const insertionSort = (targetArray = []) => {
    const start = 1
    const size = targetArray.length
    let iteration = 0
     for(let i=1; i< size;i++){
        for(let j=i-1; j >= 0; j--){
            const temp = targetArray[j+1]
            if(temp > targetArray[j]) break
            if(temp < targetArray[j]){
               [targetArray[j+1],targetArray[j]]=[targetArray[j],temp]
            }
            iteration++
        }
        console.log('targetArray',targetArray);
        iteration++
    } 
    console.log('sortedArray',targetArray);
    console.log({iteration});
    return targetArray
}

export default insertionSort