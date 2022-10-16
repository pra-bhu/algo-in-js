import { Stack } from './StackWithArray'
describe('Create Stack', () => {
    const stack = new Stack()
    test('should create a stack as Array', () => {
        expect(stack.constructor.name).toBe("Stack")
        expect(stack.length).toBe(0)
    })
    test('should push a new Value and return boolean', ()=>{
        expect(stack.push('Dog')).toBe(true)
        expect(stack.push('Cat')).toBe(true)
        expect(stack.push('Mouse')).toBe(true)
        expect(stack.push('Cow')).toBe(true)
        expect(stack.length).toBe(4)
    })
    
    test('should return top value', () => {
        expect(stack.top()).toBe('Cow')
    })

    test('should pop a new Value and return boolean', ()=>{
        expect(stack.pop()).toBe('Cow')
        expect(stack.pop()).toBe('Mouse')
        expect(stack.pop()).toBe('Cat')
        expect(stack.pop()).toBe('Dog')
        expect(stack.length).toBe(0)
    })
})