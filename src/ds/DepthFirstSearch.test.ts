import { BinarySearchTree } from "./BinarySearchTree"
import { dfsPreOrder, dfsPostOrder, dfsInOrder } from "./DepthFirstSearch"
import { getRandomInt } from "./Utils"


describe('Depth First Search', () => {
    const bst = new BinarySearchTree()
    const treeVals = [10,6,15,3,8,20]
    treeVals.map(curr => bst.insert(curr))
    describe('DFS PreOrder', () => {
        test('should return a list of visited Nodes in the tree', () => {
            const visited = dfsPreOrder(bst)
            expect(visited.length).toBeGreaterThan(0)
            expect((visited.map(curr => curr.value)).toString()).toBe([10,6,3,8,15,20].toString())
        })
    })
    
    describe('DFS PostOrder', () => {
        test('should return a list of visited Nodes in the tree', () => {
            const visited = dfsPostOrder(bst)
            expect(visited.length).toBeGreaterThan(0)
            expect((visited.map(curr => curr.value)).toString()).toBe([3,8,6,20,15,10].toString())
        })
    })
    
    describe('DFS InOrder', () => {
        test('should return a list of visited Nodes in the tree', () => {
            const visited = dfsInOrder(bst)
            expect(visited.length).toBeGreaterThan(0)
            expect((visited.map(curr => curr.value)).toString()).toBe([3,6,8,10,15,20].toString())
        })
    })
})