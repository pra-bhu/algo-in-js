const nestedEvenSum = (obj,sum = 0) => {
    let values = Object.values(obj)
    values.forEach(el => {
        if(typeof(el)=="object"){
            sum = nestedEvenSum(el,sum)
        }
        if(typeof(el)==="number" && el % 2 === 0) {
            sum += el
        }
    })
    return sum
}

export default nestedEvenSum;