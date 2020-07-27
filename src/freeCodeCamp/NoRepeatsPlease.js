function permAlone(str) {
    //splitting str into array
    let stack = str.split('');
    if (stack.length < 1) {
        return 'Invalid string'
    }
    if (stack.length == 1) {
        return 1
    }
    //popping last 2 chars from array
    let buffer = []
    buffer.push(stack.pop()) //popped the last element
    buffer.push(stack.pop()) //popped the 2nd last element
    buffer = [
            [buffer[0], buffer[1]],
            [buffer[1], buffer[0]]
        ] //buffer has both permutations
    while (stack.length > 0) {
        let output = []
        let index = 0
        let nextElement = stack.pop() //popping the next element from stack
        while (index <= buffer.length) {
            let temp = buffer.map((curr, i, arr) => {
                let el = [...curr]
                el.splice(index, 0, nextElement)
                return el
            })
            output.push(...temp)
            temp = []
            index++
        }
        buffer = output
    }
    console.log(buffer)


    // return filterConsecutiveWords(buffer);
}

function filterConsecutiveWords(arr) {
    let index = 0
    let uniqCount = 0
    while (index < arr.length) {
        let i = 0
        let isUniq = true
        while (i < (arr[i].length - 1)) {
            console.log(arr[index])
            console.log('arr[i]', arr[index][i], 'arr[i+1]', arr[index][i + 1])
            if (arr[index][i] == arr[index][i + 1]) {
                isUniq = false;
                break;
            };
            i++;
        }
        if (isUniq) uniqCount++
            console.log(uniqCount)
        index++
    }
    console.log(uniqCount)
}

permAlone('abcda');