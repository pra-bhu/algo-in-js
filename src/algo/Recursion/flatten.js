const flatten = (nestedArr,buffer = []) => {
    if (nestedArr.length === 0) return buffer
    nestedArr.forEach(el => {
        if(Array.isArray(el)) {
            return flatten(el,buffer)
        }
        else{
            buffer.push(el)
        }
    })

    return buffer
}

export default flatten;