import { Stack } from './StackWithSLL'
describe('Create Stack', () => {
    const stack = new Stack()
    test('should create a stack as Singly Linked List', () => {
        expect(stack.constructor.name).toBe("Stack")
        expect(stack.length).toBe(0)
    })
    test('should push a new Value and return boolean', ()=>{
        expect(stack.push('Dog')).toBe(1)
        expect(stack.top().value).toBe('Dog')
        expect(stack.push('Cat')).toBe(2)
        expect(stack.top().value).toBe('Cat')
        expect(stack.push('Mouse')).toBe(3)
        expect(stack.push('Cow')).toBe(4)
        expect(stack.length).toBe(4)
    })
    test('should return top value', () => {
        expect(stack.top().value).toBe('Cow')
    })

    test('should pop a new Value and return boolean', ()=>{
        expect(stack.pop()).toBe(3)
        expect(stack.top().value).toBe('Mouse')
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.top().value).toBe('Dog')
        expect(stack.length).toBe(1)
    })
})