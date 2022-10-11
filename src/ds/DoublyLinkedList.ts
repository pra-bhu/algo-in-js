class Node {
    value: string
    next?: Node
    prev?: Node
    constructor(value:string, next?: Node, prev?: Node){
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    private _head: Node
    private _tail: Node
    private _length: number

    constructor () {
        this._head = null
        this._tail = null
        this._length = 0
    }

    get length(): number{
        return this._length
    }

    get head(): Node{
        return this._head
    }
    
    get tail(): Node{
        return this._tail
    }

    push(value: string): DoublyLinkedList{
        let node = new Node(value)
        if(this._length <= 0) {
            this._head = node
            this._tail = node
        }else{
            this._tail.next = node
            node.prev = this._tail
            this._tail = node
        }
        this._length++
        return this
    }
}

export { DoublyLinkedList }