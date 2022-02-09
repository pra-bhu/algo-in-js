const selectionSort = (targetArray) => {
    const size = targetArray.length
    let start = 0
    let iteration = 0
    while (start < size){
        let minimum = start
        for(let i=start; i < targetArray.length;i++){
            if(targetArray[i] < targetArray[minimum]) {
                minimum = i
            }
            iteration++
        }
        
        iteration++
        //swap
        
        if(minimum!==start) [targetArray[start],targetArray[minimum]] = [targetArray[minimum],targetArray[start]]
       
        start++
        console.log('targetArray',targetArray);
    }
    console.log('Total Iterations',iteration)
    return targetArray
}

export default selectionSort