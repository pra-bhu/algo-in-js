const operator = () => {
    let temp = 4;
    let increment = () => {
        return ++temp
    }
    let decrement = () => {
        return --temp
    }
    return (param) => {
        if (param == "increment") return increment()
        if (param == "decrement") return decrement()
        return "Invalid param"
    }
}


const useState = (initialValue) => {
    let _val = initialValue
    const state = () => {
        return _val
    }
    const setState = (value) => {
        _val = value
    }
    return [state, setState]
}



let main = () => {
    const numOperator = operator()
    console.log(numOperator)
    const dumOperator = operator()
    console.log(numOperator == dumOperator);
    console.log("numOperator ", numOperator('increment'));
    console.log("numOperator ", numOperator('increment'));
    console.log("numOperator ", numOperator('increment'));
    console.log("dumOperator ", dumOperator('increment'));
    console.log("dumOperator ", dumOperator('increment'));

    //react closure
    console.log(useState(12));
    let [pride, setPride] = useState(12)
        // console.log(setPride(23));
    setPride(23)
    console.log('pride', pride)


}

//Execute
main()