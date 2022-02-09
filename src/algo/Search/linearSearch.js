const linearSearch = (list,searchParam) => {
    let index = -1
    list.forEach((element,ind) => {
        if(element === searchParam) index = ind
    });
    return index
}

export default linearSearch;