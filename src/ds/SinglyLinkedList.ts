class Node {
    value:string
    next?:Node = null
    constructor(value: string, next?:Node) {
        this.value = value
        this.next = next
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

    push(value:string){
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

    
    public get length() : number {
        return this._length
    }

    
    public get tail() : Node {
        return this._tail
    }
    
    
    public get head() : Node {
        return this._head
    }
    
}

let singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.push("Node1")
console.log('tails before insertion',singlyLinkedList.tail)
singlyLinkedList.push("Node2")
singlyLinkedList.push("Node3")
singlyLinkedList.push("Node4")
// console.log('singlyLinkedList.length : ' + singlyLinkedList.length + ' ')
console.log('head',singlyLinkedList)
console.log('tails after insertion',singlyLinkedList.tail)

