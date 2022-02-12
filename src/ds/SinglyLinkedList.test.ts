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

 describe('pushes a new element to linked list', () => { 
    const singlyLinkedList = new SinglyLinkedList() 
    test('should return the new linked list', () => { 
        singlyLinkedList.push("Node 1")
        expect(singlyLinkedList.length).toBe(1)
        expect(singlyLinkedList.head.value).toBe('Node 1')
      })
  })