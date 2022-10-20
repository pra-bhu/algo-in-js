import { Queue } from './QueueWithSLL'

import { BinarySearchTree, Node } from './BinarySearchTree'

const dfsPreOrder = (tree:BinarySearchTree):Array<Node> => {
    let visited:Array<Node> = []
    preOrderHelper(tree.root,visited)
    return visited
}

const preOrderHelper =(current:Node, visited:Array<Node>):void=> {
    visited.push(current)
    if(current.left) preOrderHelper(current.left, visited)
    if(current.right) preOrderHelper(current.right, visited)
}

const dfsPostOrder = (tree:BinarySearchTree):Array<Node> => {
    let visited:Array<Node> = []
    postOrderHelper(tree.root,visited)
    return visited
}

const postOrderHelper =(current:Node, visited:Array<Node>):void=> {
    if(current.left) postOrderHelper(current.left, visited)
    if(current.right) postOrderHelper(current.right, visited)
    visited.push(current)
}

const dfsInOrder = (tree:BinarySearchTree):Array<Node> => {
    let visited:Array<Node> = []
    inOrderHelper(tree.root,visited)
    return visited
}

const inOrderHelper =(current:Node, visited:Array<Node>):void=> {
    if(current.left) inOrderHelper(current.left, visited)
    visited.push(current)
    if(current.right) inOrderHelper(current.right, visited)
}

export { dfsPreOrder, dfsPostOrder, dfsInOrder }