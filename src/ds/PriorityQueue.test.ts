import { PriorityQueue, Node } from "./PriorityQueue";

describe('PriorityQueue: ', () => {
    describe('enqueue(): ', () => {

        const priorityQueue = new PriorityQueue()
        test('should enqueue a value', () => {
          expect(priorityQueue.enqueue(new Node("Node 88",88))).toBe(0)
        })
        test('should bubble up higher value to the top', () => {
          expect(priorityQueue.enqueue(new Node("Node 95",95))).toBe(0)
        })
        test('should add to right of the parent node i.e. 95', () => {
          expect(priorityQueue.enqueue(new Node("Node 5",5))).toBe(2)
        })
        test('should add to left of the parent node i.e. 88', () => {
          expect(priorityQueue.enqueue(new Node("Node 15",15))).toBe(3)
        })
        test('should add to right of the parent node i.e. 88', () => {
          expect(priorityQueue.enqueue(new Node("Node 25",25))).toBe(4)
        })
        test('should add to right of the parent node i.e. 95 and values[5] == 5', () => {
          expect(priorityQueue.enqueue(new Node("Node 22",22))).toBe(2)
            expect(priorityQueue.values[5].priority).toBe(5)
        })
        test('should add to right of the parent node i.e. 95 and values[5] == 5 and values[6]== 22', () => {
          expect(priorityQueue.enqueue(new Node("Node 34",34))).toBe(2)
            expect(priorityQueue.values[5].priority).toBe(5)
            expect(priorityQueue.values[6].priority).toBe(22)
        })
        test('should values[0]==102', () => {
          expect(priorityQueue.enqueue(new Node("Node 104",104))).toBe(0)
            expect(priorityQueue.values[1].priority).toBe(95)
            expect(priorityQueue.values[3].priority).toBe(88)
            expect(priorityQueue.values[6].priority).toBe(22)
        })
    })

    describe('dequeue()', () => {
        const priorityQueue = new PriorityQueue()
        test('should return undefined', () => {
            expect(priorityQueue.dequeue()).toBeUndefined()
        })
        test('should return 41', () => {
            priorityQueue.enqueue(new Node("Node 41",41))
            expect(priorityQueue.dequeue().priority).toBe(41)
            expect(priorityQueue.values.length).toBe(0)
            priorityQueue.enqueue(new Node("Node 41",41))
            priorityQueue.enqueue(new Node("Node 39",39))
            priorityQueue.enqueue(new Node("Node 33",33))
            priorityQueue.enqueue(new Node("Node 18",18))
            priorityQueue.enqueue(new Node("Node 27",27))
            priorityQueue.enqueue(new Node("Node 12",12))
        })
        
        test('should return 41',()=>{
            expect(priorityQueue.dequeue().priority).toBe(41)
            expect(priorityQueue.values.length).toBe(5)
            expect(priorityQueue.values[0].priority).toBe(39)
            expect(priorityQueue.values[1].priority).toBe(27)
            expect(priorityQueue.values[4].priority).toBe(12)
        })

        test('should return 39',()=>{
            expect(priorityQueue.dequeue().priority).toBe(39)
            expect(priorityQueue.values.length).toBe(4)
            expect(priorityQueue.values[2].priority).toBe(12)
            expect(priorityQueue.values[3].priority).toBe(18)
            expect(priorityQueue.values[1].priority).toBe(27)
        })
    })
})