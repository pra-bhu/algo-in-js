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
        let isInserted = false
        let node = this.root
        while(!isInserted){
            if (newNode.value <= node.value){
                if(node.left) {
                    node = node.left
                    continue
                }
                node.left = newNode
                isInserted = true
            }else{
                if(node.right){
                    node = node.right
                    continue
                }
                node.right = newNode
                isInserted = true
            }

        }
        return this
    }

    insertRecursively(value:number, nextNode?:Node):BinarySearchTree{
        if (!this.root) {
            this.root = new Node(value)
            return this
        }
        let node = nextNode || this.root
        if(value <= node.value){
            if(node.left) return this.insertRecursively(value, node.left)
            node.left = new Node(value)
            return this
        }else{
            if(node.right) return this.insertRecursively(value, node.right)
            node.right = new Node(value)
        }
        return this
    }
}

export { BinarySearchTree }