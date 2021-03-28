// Accepts a string and return it's reverse

function reverse(str){
    str = str.split('')
    let rstr = []
    function reverseHelper(string){
        if(string.length === 0) return
        rstr.unshift(string[0])
        return reverseHelper(string.slice(1))
    }
    reverseHelper([...str])
    return rstr.join('')
}

console.log(reverse("Prashant"))