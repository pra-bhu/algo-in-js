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
    /* 
    PUSH: 
    This function should accept a value
    Create a new node using the value passed to the function
    If there is no head property on the list, set the head and tail to be the newly created node
    Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    Increment the length by one
    Return the linked list
    */
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

     /* 
    POP: If there are no nodes in the list, return undefined
    Loop through the list until you reach the tail
    Set the next property of the 2nd to last node to be null
    Set the tail to be the 2nd to last node
    Decrement the length of the list by 1
    Return the value of the node removed
    */
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

    /* SHIFT: If there are no nodes, return undefined
    Store the current head property in a variable
    Set the head property to be the current head's next property
    Decrement the length by 1
    Return the value of the node removed */
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
    /* UNSHIFT:This function should accept a value
    Create a new node using the value passed to the function
    If there is no head property on the list, set the head and tail to be the newly created node
    Otherwise set the newly created node's next property to be the current head property on the list
    Set the head property on the list to be that newly created node
    Increment the length of the list by 1
    Return the linked list */
    unshift(value : string): SinglyLinkedList{
        const node = new Node(value)
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
    // getter
    get length() : number {
        return this._length
    }

    get tail() : Node {
        return this._tail
    }
    
    get head() : Node {
        return this._head
    }

    /* GET: This function should accept an index
    If the index is less than zero or greater than or equal to the length of the list, return null
    Loop through the list until you reach the index and return the node at that specific index */
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
    
    /* SET: This function should accept a value and an index
    Use your get function to find the specific node.
    If the node is not found, return false
    If the node is found, set the value of that node to be the value passed to the function and return true */
    set(index: number, value: string): boolean{
        let node = this.get(index)
        if(!node) return false
        node.value = value
        return true
    }

    /* INSERT:
    If the index is less than zero or greater than the length, return false
    If the index is the same as the length, push a new node to the end of the list
    If the index is 0, unshift a new node to the start of the list
    Otherwise, using the get method, access the node at the index - 1
    Set the next property on that node to be the new node
    Set the next property on the new node to be the previous next
    Increment the length
    Return true */
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

    /* REMOVE:
    If the index is less than zero or greater than the length, return undefined
    If the index is the same as the length-1, pop
    If the index is 0, shift
    Otherwise, using the get method, access the node at the index - 1
    Set the next property on that node to be the next of the next node
    Decrement the length
    Return the value of the node removed */
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

    /* REVERSE:
    Swap the head and tail
    Create a variable called next
    Create a variable called prev
    Create a variable called node and initialize it to the head property
    Loop through the list
    Set next to be the next property on whatever node is
    Set the next property on the node to be whatever prev is
    Set prev to be the value of the node variable
    Set the node variable to be the value of the next variable
    Once you have finished looping, return the list */
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