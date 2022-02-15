class Node {
    value:string
    next?:Node
    constructor(value: string, next?:Node ) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    private _head: Node
    private _tail: Node
    private _length: number
    constructor () {
        this._head = null
        this._tail = null
        this._length = 0
    }

    push(value:string): SinglyLinkedList{
        const node = new Node(value)
        if(this._length <= 0){
            this._head = node
            this._tail = node
        }
        else {
            this._tail.next = node
            this._tail = node
        }
        this._length += 1
        return this
    }

    pop(): Node{
        if(!this._head) return undefined
        let currentNode = this._head
        let previousNode = currentNode 
        while(currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        this._tail = previousNode
        this._tail.next = null
        this._length -= 1
        if(this.length === 0){
            this._head = null
            this._tail = null
        }
        return currentNode
    }

    shift(): Node{
        if(!this._head) return undefined
        let currentNode = this._head
        this._head = currentNode.next
        this._length -=1
        if(this._length == 0){
            this._head = null
            this._tail = null
        }
        return currentNode
    }

    unshift(value : string): SinglyLinkedList{
        const node = new Node(value)
        console.log("TEST "+ this.length)
        if(!this._head) {
            this._head = node 
            this._tail = this._head
        }
        else {
            node.next = this._head
            this._head = node
        }
        this._length += 1
        return this
    }

    
    get length() : number {
        return this._length
    }

    
    get tail() : Node {
        return this._tail
    }
    
    
    get head() : Node {
        return this._head
    }
    
}


export { SinglyLinkedList }