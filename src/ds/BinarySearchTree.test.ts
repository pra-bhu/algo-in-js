import { BinarySearchTree } from "./BinarySearchTree"

describe('create a Binary Search Tree', () => {
    let bst = new BinarySearchTree()
    describe('Insert Iteratively:', () => {
        test('should create a BST', () => {
            expect(bst).toBeInstanceOf(BinarySearchTree)
            expect(bst.root).toBeNull()
        })
        test('should insert a node to root', () => {
            bst.insert(15)
            expect(bst.root.value).toBe(15)
            expect(bst.root.left).toBeNull()
            expect(bst.root.right).toBeNull()
        })
        test('should insert a node to left of the root', () => {
            bst.insert(12)
            expect(bst.root.value).toBe(15)
            expect(bst.root.left).toBeTruthy()
            expect(bst.root.left.value).toBe(12)
            expect(bst.root.right).toBeNull()
        })
        test('should insert a node to right of the root', () => {
            bst.insert(18)
            expect(bst.root.value).toBe(15)
            expect(bst.root.right).toBeTruthy()
            expect(bst.root.right.value).toBe(18)
            expect(bst.root.left).toBeTruthy()
            expect(bst.root.left.value).toBe(12)
        })
    
        test('should insert a node to left of the node 12', () => {
            bst.insert(8)
            let leftNode = bst.root.left
            expect(bst.root.value).toBe(15)
            expect(leftNode.value).toBe(12)
            expect(leftNode.left).toBeDefined()
            expect(leftNode.left.value).toBe(8)
        })
        
        test('should insert a node to right of the node 12', () => {
            bst.insert(13)
            let leftNode = bst.root.left
            expect(bst.root.value).toBe(15)
            expect(leftNode.value).toBe(12)
            expect(leftNode.right).toBeDefined()
            expect(leftNode.right.value).toBe(13)
        })
        
        test('should insert a node to left of the node 18', () => {
            bst.insert(16)
            let rightNode = bst.root.right
            expect(bst.root.value).toBe(15)
            expect(rightNode.value).toBe(18)
            expect(rightNode.left).toBeDefined()
            expect(rightNode.left.value).toBe(16)
        })
        
        test('should insert a node to right of the node 18', () => {
            bst.insert(19)
            let rightNode = bst.root.right
            expect(bst.root.value).toBe(15)
            expect(rightNode.value).toBe(18)
            expect(rightNode.right).toBeDefined()
            expect(rightNode.right.value).toBe(19)
        })
    })
    describe('Insert Recursively:', () => {
        let bstR = new BinarySearchTree()
        test('should create a BST', () => {
            expect(bstR).toBeInstanceOf(BinarySearchTree)
            expect(bstR.root).toBeNull()
        })
        test('should insert a node to root', () => {
            bstR.insertRecursively(15)
            expect(bstR.root.value).toBe(15)
            expect(bstR.root.left).toBeNull()
            expect(bstR.root.right).toBeNull()
        })
        test('should insert a node to left of the root', () => {
            bstR.insertRecursively(12)
            expect(bstR.root.value).toBe(15)
            expect(bstR.root.left).toBeTruthy()
            expect(bstR.root.left.value).toBe(12)
            expect(bstR.root.right).toBeNull()
        })
        test('should insert a node to right of the root', () => {
            bstR.insertRecursively(18)
            expect(bstR.root.value).toBe(15)
            expect(bstR.root.right).toBeTruthy()
            expect(bstR.root.right.value).toBe(18)
            expect(bstR.root.left).toBeTruthy()
            expect(bstR.root.left.value).toBe(12)
        })
    
        test('should insert a node to left of the node 12', () => {
            bstR.insertRecursively(8)
            let leftNode = bstR.root.left
            expect(bstR.root.value).toBe(15)
            expect(leftNode.value).toBe(12)
            expect(leftNode.left).toBeDefined()
            expect(leftNode.left.value).toBe(8)
        })
        
        test('should insert a node to right of the node 12', () => {
            bstR.insertRecursively(13)
            let leftNode = bstR.root.left
            expect(bstR.root.value).toBe(15)
            expect(leftNode.value).toBe(12)
            expect(leftNode.right).toBeDefined()
            expect(leftNode.right.value).toBe(13)
        })
        
        test('should insert a node to left of the node 18', () => {
            bstR.insertRecursively(16)
            let rightNode = bstR.root.right
            expect(bstR.root.value).toBe(15)
            expect(rightNode.value).toBe(18)
            expect(rightNode.left).toBeDefined()
            expect(rightNode.left.value).toBe(16)
        })
        
        test('should insert a node to right of the node 18', () => {
            bstR.insertRecursively(19)
            let rightNode = bstR.root.right
            expect(bstR.root.value).toBe(15)
            expect(rightNode.value).toBe(18)
            expect(rightNode.right).toBeDefined()
            expect(rightNode.right.value).toBe(19)
        })
    })
})