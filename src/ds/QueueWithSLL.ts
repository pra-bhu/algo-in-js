class Node {
    value:string
    next?:Node = null
    constructor(value: string, next?:Node ) {
        this.value = value
        this.next = next || null
    }
}


class Queue{
    private _first: Node = null
    private _last: Node = null
    private _size: number = 0

    get size():number{
        return this._size
    }

    get first():Node{
        return this._first
    }
    
    get last():Node{
        return this._last
    }

    enqueue(value:string):number{
        let node = new Node(value)
        if (this._size == 0) this._first = this._last = node
        else{
            this._last.next = node
            this._last = node
        }
        return ++this._size
    }

    dequeue():number{
        const node = this._first
        if (this._size==1) this._first = this._last = undefined
        else {
            this._first = node.next
            node.next = undefined
        }
        return --this._size
    }

}

export { Queue }