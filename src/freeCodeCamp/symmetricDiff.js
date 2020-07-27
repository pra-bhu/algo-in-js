/* Create a function that takes two or more arrays and 
returns an array of the symmetric difference(△ or ⊕) of the provided arrays.

Given two sets(for example set A = { 1, 2, 3} and set B = { 2, 3, 4}),
the mathematical term "symmetric difference" of two sets is the set of 
elements which are in either of the two sets, but not in both(A △ B = C = { 1, 4}).
For every additional symmetric difference you take(say on a set D = { 2, 3}), 
you should get the set with elements which are in either of the two the sets but
 not both(C △ D = { 1, 4} △ { 2, 3} = { 1, 2, 3, 4}).
 The resulting array must contain only unique values(no duplicates). */

function sym(...args) {
    let arrCount = args.length;
    let i = 0;
    let buffer = args[0]
    while (i < arrCount - 1) {

        buffer = symmetricDiff(buffer, args[i + 1])
        i++
    }
    return buffer;
}

function symmetricDiff(a, b) {
    let c = [...uniqueArray(a), ...uniqueArray(b)]
    c = c.filter((curr, i, arr) => {
        let next = arr.indexOf(curr, i + 1)
        if (next >= 0) {
            arr.splice(next, 1)
            return false;
        }
        return true;
    })
    return c
}

function uniqueArray(a) {
    return a.filter((curr, i, arr) => !arr.includes(curr, i + 1))
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))