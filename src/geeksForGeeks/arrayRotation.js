/* Write a function rotate(ar[], d) that rotates arr[] by d elements. */

const rotateArr = (args, d) => {
        let arrLen = args.length;
        let i = 0;
        let rotatedArr = args.map((curr, index, arr) => {
            if ((index - d) >= 0) {
                console.log(index, arr[index - d])
            } else {
                console.log(index, arr[arrLen - (d - index)])
            }

        })
    }
    // console.log(`rotateArr: ${rotateArr([2,3,1,5,2,7], 2)}`)

const juggleAlgo = (arr, d) => {

    let len = arr.length,
        gcd = findGCD(len, d);

    for (let i = 0; i < gcd; i++) {
        for (let j = i; j < len; j = j + d) {
            let temp = 0
            let k = j + d
            if (k == i) break;
            console.log('j', j)
            console.log('arr[j + d]', arr[j + d])
            temp = (k > (len - 1)) ? arr[k - len] : arr[j + d]
            console.log('temp', temp)
            arr[j] = temp
        }
    }
    return arr
}

const findGCD = (a, b) => (b === 0) ? a : findGCD(b, a % b)

console.log(`rotateArr: ${juggleAlgo([ 2, 3, 1, 5, 2, 7 ], 2)}`)