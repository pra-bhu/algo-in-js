const stack = (...items) => {
    this.items = items
        // console.log(this.items)

    this.reverse = false
    this.push = (item) => {
        console.log(item)
        if (!this.reverse) this.items.push(item)
        else this.items.unshift(item)
        console.log(this.items)
    }
    this.pop = () => {
        if (!this.reverse) this.items.pop()
        else this.items.shift()
    }
    console.log('Updated', this.items)
    return this

}

const mystack = stack(2, 4, 1, 5)
mystack.push(3)
mystack.push(22)
mystack.push(12)
mystack.pop()
mystack.reverse = true
mystack.pop()
mystack.push(12)
console.log(mystack)