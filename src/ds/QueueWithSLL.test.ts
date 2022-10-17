import { Queue } from './QueueWithSLL'
describe('Create Queue', () => {
    const queue = new Queue()
    test('should create a queue as Singly Linked List', () => {
        expect(queue.constructor.name).toBe("Queue")
        expect(queue.size).toBe(0)
    })
    test('should push a new Value and return boolean', ()=>{
        expect(queue.enqueue('Dog')).toBe(1)
        expect(queue.last.value).toBe('Dog')
        expect(queue.first.value).toBe('Dog')
        expect(queue.enqueue('Cat')).toBe(2)
        expect(queue.first.value).toBe('Dog')
        expect(queue.last.value).toBe('Cat')
        expect(queue.enqueue('Mouse')).toBe(3)
        expect(queue.first.value).toBe('Dog')
        expect(queue.last.value).toBe('Mouse')
        expect(queue.enqueue('Cow')).toBe(4)
        expect(queue.first.value).toBe('Dog')
        expect(queue.last.value).toBe('Cow')
        expect(queue.size).toBe(4)
    })
    test('should return first value', () => {
        expect(queue.first.value).toBe('Dog')
    })
    
    test('should return last value', () => {
        expect(queue.last.value).toBe('Cow')
    })

    test('should pop a new Value and return boolean', ()=>{
        expect(queue.dequeue()).toBe(3)
        expect(queue.first.value).toBe('Cat')
        expect(queue.last.value).toBe('Cow')
        expect(queue.dequeue()).toBe(2)
        expect(queue.first.value).toBe('Mouse')
        expect(queue.last.value).toBe('Cow')
        expect(queue.dequeue()).toBe(1)
        expect(queue.first.value).toBe('Cow')
        expect(queue.last.value).toBe('Cow')
        expect(queue.dequeue()).toBe(0)
        expect(queue.first).toBe(undefined)
        expect(queue.last).toBe(undefined)
        expect(queue.size).toBe(0)
    })
})