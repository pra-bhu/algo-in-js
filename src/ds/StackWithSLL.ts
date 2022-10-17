class Node {
    value:string
    next?:Node = null
    constructor(value: string, next?:Node ) {
        this.value = value
        this.next = next || null
    }
}


class Stack{
    private _first: Node = null
    private _last: Node = null
    private _length: number = 0

    get length():number{
        return this._length
    }
    push(value:string):number{
        let node = new Node(value)
        if(this._length == 0) this._first = this._last = node
        node.next = this._first
        this._first = node
        this._length++
        return this._length
    }

    top():Node{
        return this._first
    }

    pop():number{
        let node = this._first
        this._first = node.next
        node.next = undefined
        this._length--
        return this._length
    }
}

export { Stack }