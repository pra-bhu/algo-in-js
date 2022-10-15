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

    pop(): Node{
        if (this._length <= 0) return null
        
        let oldTail = this._tail
        if (this._length == 1){
            this._tail = null
            this._head = null
        }else{
            this._tail = oldTail.prev
            this._tail.next = null
            oldTail.prev = undefined
        }
        this._length--
        return oldTail
    }

    shift(): Node{
        if (!this._head) return null
        let oldHead = this._head
        if (this._length == 1){
            this._head = null
            this._tail = null
        }else{
            this._head = oldHead.next
            this._head.prev = null
            oldHead.next = undefined
        }
        this._length--
        return oldHead
    }

    unshift(value:string): DoublyLinkedList{
        let node = new Node(value)
        if (this._length <= 0) return this.push(value)
        this._head.prev = node
        node.next = this._head
        this._head = node
        this._length++
        return this
    }

    get(index: number): Node{
        if (index < 0 || index >= this._length) return undefined
        if (index == 0 || this._length == 1) return this._head
        let node = null
        if(index <= this._length/2){
            node = this._head
            for(let i = 1;i <= index; i++){
                node = node.next
            }
        }
        else {
            node = this._tail
            for(let i = this._length-2;i >= index; i--){
                node = node.prev
            }
        }
        return node
    }

    set(index:number, value:string): boolean{
        let node = this.get(index)
        if (!node) return false
        node.value = value
        return true
    }

    insert(index:number, value:string): boolean{
        let node = this.get(index)
        if (!node) return false
        let newNode = new Node(value)
        if(index == 0 && this.unshift(value)) return  true
        if (index == this._length-1) {
            newNode.next = this._tail
            newNode.prev = this._tail.prev
            this._tail.prev = newNode
            this._length++
            return true
        }
        let previous = node.prev
        newNode.prev = previous
        newNode.next = node
        previous.next = newNode
        this._length++
        return true
    }

    remove(index:number): Node{
        let targetNode = this.get(index)
        if (!targetNode) return undefined

        if(index == 0) return this.shift()
        if(index == this._length -1) return this.pop()
        
        let previousNode = targetNode.prev
        let nextNode = targetNode.next
        targetNode.next = null
        targetNode.prev = null
        previousNode.next = nextNode
        nextNode.prev = previousNode
        this._length--
        return targetNode
    }

    reverse(): DoublyLinkedList{
        if (this._length == 0) return undefined
        if (this._length == 1) return this
        let currentNode = this._head
        this._head = this._tail
        this._tail = currentNode
        let prevNode = null
        let nextNode 
        for(let i=0; i < this._length; i++){
            nextNode = currentNode.next
            currentNode.next = prevNode
            currentNode.prev = nextNode
            prevNode = currentNode
            currentNode = nextNode
        }
        this.print()
        return this
    }

    print(){
        let node = this._head
        let str =''
        for (let i= 0; i<this._length;i++){
            str+=`${node.value} ${node.next ? '->':''}`
            node = node.next
        }
        console.log(str);
    }

}

export { DoublyLinkedList }