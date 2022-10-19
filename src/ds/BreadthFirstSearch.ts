import { Queue } from './QueueWithSLL'

import { BinarySearchTree, Node } from './BinarySearchTree'

const bfsSearch = (tree:BinarySearchTree):Array<Node> =>{
    let q = new Queue()
    q.enqueue(tree.root)
    let visited:Array<Node> = []
    while(q.size > 0){
        let currentNode = q.first.value
        q.dequeue()
        visited.push(currentNode)
        if(currentNode.left) q.enqueue(currentNode.left)
        if(currentNode.right) q.enqueue(currentNode.right)

    }
    return visited
}

export { bfsSearch }