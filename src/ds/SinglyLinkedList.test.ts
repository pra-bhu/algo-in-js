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
    test('should have new head and tail', () => { 
        singlyLinkedList.push("Node 2")
        singlyLinkedList.push("Node 3")

        expect(singlyLinkedList.length).toBe(3)
        expect(singlyLinkedList.head.value).toBe('Node 1')
        expect(singlyLinkedList.head.next.value).toBe('Node 2')
        expect(singlyLinkedList.tail.value).toBe('Node 3')
      })
  })

  describe('pops an element from the tail of the list', () => {
      const singlyLinkedList = new SinglyLinkedList()
      singlyLinkedList.push("Node 1")
      singlyLinkedList.push("Node 2")
      singlyLinkedList.push("Node 3")
      test('should remove Node 3 from the tail and point the tail to Node 2', () => { 
          
          singlyLinkedList.pop()
    
          expect(singlyLinkedList.length).toBe(2)
          expect(singlyLinkedList.tail.value).toBe('Node 2')
          expect(singlyLinkedList.tail.next).toBe(null)
       })
      
       test('should remove Node 2 from the tail and point the tail to Node 1', () => { 
          
          singlyLinkedList.pop()
    
          expect(singlyLinkedList.length).toBe(1)
          expect(singlyLinkedList.tail.value).toBe('Node 1')
          expect(singlyLinkedList.tail.next).toBe(null)
          expect(singlyLinkedList.head.next).toBe(null)
          expect(singlyLinkedList.head.value).toBe("Node 1")
          
       })

    test('should remove Node 1 from the tail and empty the list', () => { 

        singlyLinkedList.pop()
  
        expect(singlyLinkedList.length).toBe(0)
        expect(singlyLinkedList.tail).toBe(null)
        expect(singlyLinkedList.head).toBe(null)
     })
       
     test('should return undefined', () => { 
        expect(singlyLinkedList.pop()).toBe(undefined)
        
        expect(singlyLinkedList.length).toBe(0)
        expect(singlyLinkedList.tail).toBe(null)
        expect(singlyLinkedList.head).toBe(null)
     })
  })