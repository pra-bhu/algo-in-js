class Node {
    value:string
    next?:Node
    constructor(value: string, next?:Node ) {
        this.value = value
        this.next = next || null
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

    get(idx: number) :Node{
        if (idx < 0 || idx >= this._length) return null

        let i:number = 0
        let node:Node = this._head
        while (i != idx){
            node = node.next
            i++
        }
        return node
    }
    
    set(index: number, value: string): boolean{
        let node = this.get(index)
        if(!node) return false
        node.value = value
        return true
    }

    insert(index: number, value: string): boolean{
        if(index < 0 || index > this._length) return false
        if(index == 0 && this.unshift(value)) return  true
        if(index == this._length && this.push(value)) return true
        let previousNode = this.get(index-1)
        let targetNode = this.get(index)
        let node = new Node(value,targetNode)
        previousNode.next = node
        this._length+=1
        return true
    }

    remove(index: number): Node{
        if(index < 0 || index >= this.length) return undefined

        if(index == this.length - 1) return this.pop()

        if(index == 0) return this.shift()

        let targetNode = this.get(index)
        let previousNode = this.get(index - 1)
        previousNode.next = this.get(index + 1)

        this._length--
        return targetNode
    }

    reverse():SinglyLinkedList{ 
        if(this._length <= 0) return undefined

        let currentNode = this.head
        this._head = this.tail
        this._tail = currentNode
        let previousNode = null
        let nextNode
        for(let i = 0; i < this.length; i++){
            nextNode = currentNode.next
            currentNode.next = previousNode
            previousNode = currentNode
            currentNode = nextNode
        }
        return this
    }
}


export { SinglyLinkedList }