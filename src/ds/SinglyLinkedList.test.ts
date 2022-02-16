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

describe('removes the node from the beginning of the linked list', () => {
    const singlyLinkedList1 = new SinglyLinkedList()
    singlyLinkedList1.push("Node 1")
    singlyLinkedList1.push("Node 2")
    singlyLinkedList1.push("Node 3")
    
    test('should remove Node 1 from the head and point the head to Node 2', () => { 
          
        singlyLinkedList1.shift()
  
        expect(singlyLinkedList1.length).toBe(2)
        expect(singlyLinkedList1.head.value).toBe('Node 2')
        expect(singlyLinkedList1.head.next.value).toBe('Node 3')
     })
    
    test('should remove Node 2 from the head and point the head to Node 3', () => { 
    
        singlyLinkedList1.shift()

        expect(singlyLinkedList1.length).toBe(1)
        expect(singlyLinkedList1.head.value).toBe('Node 3')
        expect(singlyLinkedList1.head.next).toBe(null)
    
    })

  test('should remove Node 3 from the head and empty the list', () => { 

      singlyLinkedList1.shift()

      expect(singlyLinkedList1.length).toBe(0)
      expect(singlyLinkedList1.tail).toBe(null)
      expect(singlyLinkedList1.head).toBe(null)
   })
     
   test('should return undefined', () => { 
      expect(singlyLinkedList1.shift()).toBe(undefined)
      
      expect(singlyLinkedList1.length).toBe(0)
      expect(singlyLinkedList1.tail).toBe(null)
      expect(singlyLinkedList1.head).toBe(null)
   })
})


describe('TEST unshift:pushes a new element at the beginning of the linked list', () => { 
   const singlyLinkedList = new SinglyLinkedList() 
   // console.log(singlyLinkedList.length)
   test('should return the new linked list', () => { 
       singlyLinkedList.unshift("Node 1")
       expect(singlyLinkedList.length).toBe(1)
       expect(singlyLinkedList.head.value).toBe('Node 1')
     })
   test('should have Node 2 as head and Node 1 as tail', () => { 
       singlyLinkedList.unshift("Node 2")

       expect(singlyLinkedList.length).toBe(2)
       expect(singlyLinkedList.head.value).toBe('Node 2')
       expect(singlyLinkedList.head.next.value).toBe('Node 1')
       expect(singlyLinkedList.tail.value).toBe('Node 1')
     })
   test('should have Node 3 as head and Node 1 as tail', () => { 
       singlyLinkedList.unshift("Node 3")

       expect(singlyLinkedList.length).toBe(3)
       expect(singlyLinkedList.head.value).toBe('Node 3')
       expect(singlyLinkedList.head.next.value).toBe('Node 2')
       expect(singlyLinkedList.tail.value).toBe('Node 1')
     })
 })


 describe('returns the node at a specific index', () => {
   const singlyLinkedList1 = new SinglyLinkedList()
   singlyLinkedList1.push("Node 1")
   singlyLinkedList1.push("Node 2")
   singlyLinkedList1.push("Node 3")
   test('singlyLinkedList1.get(0).value should return Node 1', () => {
      expect(singlyLinkedList1.get(0).value).toBe("Node 1")
   })
   test('singlyLinkedList1.get(1).value should return Node 2', () => {
      expect(singlyLinkedList1.get(1).value).toBe("Node 2")
   })
   test('singlyLinkedList1.get(2).value should return Node 3', () => {
      expect(singlyLinkedList1.get(2).value).toBe("Node 3")
   })
   test('singlyLinkedList1.get(-1).value should return null', () => {
      expect(singlyLinkedList1.get(-1)).toBe(null)
   })
   test('singlyLinkedList1.get(12).value should return null', () => {
      expect(singlyLinkedList1.get(12)).toBe(null)
   })
 })

 describe('sets the node with the provided value at a specific index', () => {
   const singlyLinkedList1 = new SinglyLinkedList()
   singlyLinkedList1.push("Node 1")
   singlyLinkedList1.push("Node 2")
   singlyLinkedList1.push("Node 3")
   test('singlyLinkedList1.set(0,"Node 4") should return true', () => {
      expect(singlyLinkedList1.set(0,'Node 4')).toBe(true)
      expect(singlyLinkedList1.get(0).value).toBe("Node 4")
   })
   test('singlyLinkedList1.set(1,"Node 5") should return true', () => {
      expect(singlyLinkedList1.set(1,'Node 5')).toBe(true)
      expect(singlyLinkedList1.get(1).value).toBe("Node 5")
   })
   test('singlyLinkedList1.set(3,"Node 6") should return false', () => {
      expect(singlyLinkedList1.set(3,'Node 6')).toBe(false)
      expect(singlyLinkedList1.get(3)).toBe(null)
   })
 })