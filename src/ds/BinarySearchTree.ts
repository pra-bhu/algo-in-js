class Node{
    value:number
    left?: Node = null
    right?: Node = null
    constructor (value:number) {
        this.value = value
    }
}

class BinarySearchTree{
    root:Node = null 

    insert(value:number):BinarySearchTree{
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let node = this.root
        while(true){
            if(newNode.value == node.value) return undefined
            if (newNode.value < node.value){
                if(!node.left) {
                    node.left = newNode
                    return this
                }
                node = node.left
            }else{
                if(!node.right){
                    node.right = newNode
                    return this
                }
                node = node.right
            }
        }
    }

    insertRecursively(value:number, nextNode?:Node):BinarySearchTree{
        if (!this.root) {
            this.root = new Node(value)
            return this
        }
        let node = nextNode || this.root
        if(value == node.value) return undefined
        if(value < node.value){
            if(node.left) return this.insertRecursively(value, node.left)
            node.left = new Node(value)
            return this
        }else{
            if(node.right) return this.insertRecursively(value, node.right)
            node.right = new Node(value)
        }
        return this
    }

    find(value:number, nextNode?: Node): Node{
        if(!this.root) return undefined
        
        let node = nextNode || this.root
        if(value == node.value) return node
        if(value < node.value){
            if(node.left) return this.find(value, node.left)
            return undefined
        }
        if(node.right) return this.find(value, node.right)
        return undefined
    }
}

export { BinarySearchTree }