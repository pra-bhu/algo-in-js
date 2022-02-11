import { SinglyLinkedList } from './SinglyLinkedList'

describe('creates a Singly Linked list', () => {
    test('should return a singly linked list object', () => { 
        const singlyLinkedList = new SinglyLinkedList()
        expect(singlyLinkedList).toHaveProperty('_head')
        expect(singlyLinkedList).toHaveProperty('_tail')
        expect(singlyLinkedList).toHaveProperty('_length')
     })
    test('should return a singly linked list with length = 0', () => { 
        const singlyLinkedList = new SinglyLinkedList()
        expect(singlyLinkedList.length).toBe(0)
     })
 })