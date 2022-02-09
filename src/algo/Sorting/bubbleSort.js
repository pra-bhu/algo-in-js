const swap = (first,second) => {
    first = first +second
    second = first - second
    first = first - second
    return [ first,second ]
}

const bubbleSort = (targetArray = []) => {
    let lastLimit = targetArray.length
    let iteration = 0
    let isSwapped // Checks if there's any swap done in the last loop
    while(lastLimit > 1 ){
        for(let index = 0; index < lastLimit ; index++){
            iteration++
            if(targetArray[index] > targetArray[index+1]) {
                [targetArray[index],targetArray[index+1]] = swap(targetArray[index],targetArray[index+1])
                isSwapped = true
            }
        }
        if(!isSwapped) {
            break
        }
        lastLimit--
        iteration++
    }
    console.log('Total iterations',iteration)
    return targetArray
}

export {bubbleSort as default, swap}