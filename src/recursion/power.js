function power(base,exponent){
    //base case
    if(exponent === 0){
        return 1
    }
    //recursion logic
    return base * power(base,--exponent)
}


console.log(power(2,4))