import { BinarySearchTree } from "./BinarySearchTree"
import { bfsSearch } from "./BreadthFirstSearch"
import { getRandomInt } from "./Utils"


describe('Breadth First Search', () => {
    const bst = new BinarySearchTree()
    const min = 12, max = 231
    const treeVals:number[] = []
    for(let i=0; i<= 10; i++){
        const val = getRandomInt(min,max)
        bst.insert(val) && treeVals.push(val)
    }
    test('should return a list of visited Nodes in the tree', () => {
        const visited = bfsSearch(bst)
        console.log({treeVals,visited});
        
        expect(visited.length).toBeGreaterThan(0)
    })
})