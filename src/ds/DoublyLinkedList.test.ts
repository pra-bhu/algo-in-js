import { DoublyLinkedList } from './DoublyLinkedList'


describe('creates a Doubly Linked list', () => {
    test('should return a doubly linked list object', () => { 
        const doublyLinkedList = new DoublyLinkedList()
        expect(doublyLinkedList).toHaveProperty('_head')
        expect(doublyLinkedList).toHaveProperty('_tail')
        expect(doublyLinkedList).toHaveProperty('_length')
     })
    test('should return a doubly linked list with length = 0', () => { 
        const doublyLinkedList = new DoublyLinkedList()
        expect(doublyLinkedList.length).toBe(0)
     })
 })
 describe('PUSH(): pushes a new element to linked list', () => { 
     const doublyLinkedList = new DoublyLinkedList() 
     test('should return the new linked list', () => { 
         doublyLinkedList.push("Node 1")
         expect(doublyLinkedList.length).toBe(1)
         expect(doublyLinkedList.head.value).toBe('Node 1')
         expect(doublyLinkedList.head.next).toBe(undefined)
         expect(doublyLinkedList.head.prev).toBe(undefined)
         expect(doublyLinkedList.tail.value).toBe('Node 1')
         expect(doublyLinkedList.tail.next).toBe(undefined)
         expect(doublyLinkedList.tail.prev).toBe(undefined)
        })
        test('should have new head and tail', () => { 
            doublyLinkedList.push("Node 2")
            expect(doublyLinkedList.head.value).toBe('Node 1')
            expect(doublyLinkedList.head.next.value).toBe('Node 2')
            expect(doublyLinkedList.head.prev).toBe(undefined)
            expect(doublyLinkedList.tail.value).toBe('Node 2')
            expect(doublyLinkedList.tail.next).toBe(undefined)
            expect(doublyLinkedList.tail.prev.value).toBe('Node 1')
            doublyLinkedList.push("Node 3")
            
            expect(doublyLinkedList.length).toBe(3)
            expect(doublyLinkedList.head.value).toBe('Node 1')
            expect(doublyLinkedList.head.next.value).toBe('Node 2')
            expect(doublyLinkedList.head.next.prev.value).toBe('Node 1')
            expect(doublyLinkedList.head.next.next.value).toBe('Node 3')
            expect(doublyLinkedList.tail.value).toBe('Node 3')
        })
    })
    
    describe('POP(): pops an element from the tail of the list', () => {
        const doublyLinkedList = new DoublyLinkedList()
        doublyLinkedList.push("Node 1")
        doublyLinkedList.push("Node 2")
        doublyLinkedList.push("Node 3")
        test('should remove Node 3 from the tail and point the tail to Node 2', () => { 
            
            const node = doublyLinkedList.pop()
            expect(node.next).toBe(undefined)
            expect(node.prev).toBe(undefined)
            expect(node.value).toBe('Node 3')

            expect(doublyLinkedList.length).toBe(2)
            expect(doublyLinkedList.tail.value).toBe('Node 2')
            expect(doublyLinkedList.tail.next).toBe(null)
            expect(doublyLinkedList.tail.prev.value).toBe('Node 1')
        })
        
        test('should remove Node 2 from the tail and point the tail to Node 1', () => { 
            
            doublyLinkedList.pop()
            
            expect(doublyLinkedList.length).toBe(1)
            expect(doublyLinkedList.tail.value).toBe('Node 1')
            expect(doublyLinkedList.tail.next).toBe(null)
            expect(doublyLinkedList.head.next).toBe(null)
            expect(doublyLinkedList.head.value).toBe("Node 1")
            
        })
        
        test('should remove Node 1 from the tail and empty the list', () => { 
            
            doublyLinkedList.pop()
            
            expect(doublyLinkedList.length).toBe(0)
            expect(doublyLinkedList.tail).toBe(null)
            expect(doublyLinkedList.head).toBe(null)
        })
        
        test('should return undefined', () => { 
            expect(doublyLinkedList.pop()).toBe(null)
            
            expect(doublyLinkedList.length).toBe(0)
            expect(doublyLinkedList.tail).toBe(null)
            expect(doublyLinkedList.head).toBe(null)
        })
    })
    
    describe('SHIFT(): removes the node from the beginning of the linked list', () => {
        const doublyLinkedList1 = new DoublyLinkedList()
        doublyLinkedList1.push("Node 1")
        doublyLinkedList1.push("Node 2")
        doublyLinkedList1.push("Node 3")
        
        test('should remove Node 1 from the head and point the head to Node 2', () => { 
            
            const node = doublyLinkedList1.shift()
            expect(node.next).toBe(undefined)
            expect(node.prev).toBe(undefined)
            expect(node.value).toBe('Node 1')

            expect(doublyLinkedList1.length).toBe(2)
            expect(doublyLinkedList1.head.value).toBe('Node 2')
            expect(doublyLinkedList1.head.prev).toBe(null)
            expect(doublyLinkedList1.head.next.value).toBe('Node 3')
        })
        
        test('should remove Node 2 from the head and point the head to Node 3', () => { 
            
            const node = doublyLinkedList1.shift()
            expect(node.next).toBe(undefined)
            expect(node.prev).toBe(null)
            expect(node.value).toBe('Node 2')
            
            expect(doublyLinkedList1.length).toBe(1)
            expect(doublyLinkedList1.head.value).toBe('Node 3')
            expect(doublyLinkedList1.head.next).toBe(undefined)
            expect(doublyLinkedList1.tail.value).toBe('Node 3')
            expect(doublyLinkedList1.tail.next).toBe(undefined)
            
        })
        
        test('should remove Node 3 from the head and empty the list', () => { 
            
            doublyLinkedList1.shift()
            
            expect(doublyLinkedList1.length).toBe(0)
            expect(doublyLinkedList1.tail).toBe(null)
            expect(doublyLinkedList1.head).toBe(null)
        })
        
        test('should return undefined', () => { 
            expect(doublyLinkedList1.shift()).toBe(null)
            
            expect(doublyLinkedList1.length).toBe(0)
            expect(doublyLinkedList1.tail).toBe(null)
            expect(doublyLinkedList1.head).toBe(null)
        })
    })
    
    
    describe('UNSHIFT():pushes a new element at the beginning of the linked list', () => { 
       const doublyLinkedList = new DoublyLinkedList() 
       // console.log(doublyLinkedList.length)
       test('should return the new linked list', () => { 
          doublyLinkedList.unshift("Node 1")
          expect(doublyLinkedList.length).toBe(1)
          expect(doublyLinkedList.head.value).toBe('Node 1')
          expect(doublyLinkedList.head.next).toBe(undefined)
          expect(doublyLinkedList.head.prev).toBe(undefined)
          expect(doublyLinkedList.tail.value).toBe('Node 1')
          expect(doublyLinkedList.tail.next).toBe(undefined)
          expect(doublyLinkedList.tail.prev).toBe(undefined)

         })
         test('should have Node 2 as head and Node 1 as tail', () => { 
            doublyLinkedList.unshift("Node 2")
            
            expect(doublyLinkedList.length).toBe(2)
            expect(doublyLinkedList.head.value).toBe('Node 2')
            expect(doublyLinkedList.head.next.value).toBe('Node 1')
            expect(doublyLinkedList.head.prev).toBe(undefined)
            expect(doublyLinkedList.tail.value).toBe('Node 1')
            expect(doublyLinkedList.tail.next).toBe(undefined)
            expect(doublyLinkedList.tail.prev.value).toBe('Node 2')
         })
         test('should have Node 3 as head and Node 1 as tail', () => { 
            doublyLinkedList.unshift("Node 3")
            
            expect(doublyLinkedList.length).toBe(3)
            expect(doublyLinkedList.head.value).toBe('Node 3')
            expect(doublyLinkedList.head.next.value).toBe('Node 2')
            expect(doublyLinkedList.tail.value).toBe('Node 1')
         })
      })
      
      
      describe('returns the node at a specific index', () => {
         const doublyLinkedList1 = new DoublyLinkedList()
         doublyLinkedList1.push("Node 1")
         doublyLinkedList1.push("Node 2")
         doublyLinkedList1.push("Node 3")
         doublyLinkedList1.push("Node 4")
         doublyLinkedList1.push("Node 5")
         test('doublyLinkedList1.get(0).value should return Node 1', () => {
            expect(doublyLinkedList1.get(0).value).toBe("Node 1")
         })
         test('doublyLinkedList1.get(1).value should return Node 2', () => {
            expect(doublyLinkedList1.get(1).value).toBe("Node 2")
         })
         test('doublyLinkedList1.get(2).value should return Node 3', () => {
            expect(doublyLinkedList1.get(2).value).toBe("Node 3")
         })
         test('doublyLinkedList1.get(3).value should return Node 4', () => {
            expect(doublyLinkedList1.get(3).value).toBe("Node 4")
         })
         test('doublyLinkedList1.get(4).value should return Node 5', () => {
            expect(doublyLinkedList1.get(4).value).toBe("Node 5")
         })
         test('doublyLinkedList1.get(-1).value should return null', () => {
            expect(doublyLinkedList1.get(-1)).toBe(undefined)
         })
         test('doublyLinkedList1.get(12).value should return null', () => {
            expect(doublyLinkedList1.get(12)).toBe(undefined)
         })
      })
      
      describe('sets the node with the provided value at a specific index', () => {
         const doublyLinkedList1 = new DoublyLinkedList()
         doublyLinkedList1.push("Node 1")
         doublyLinkedList1.push("Node 2")
         doublyLinkedList1.push("Node 3")
         test('doublyLinkedList1.set(0,"Node 4") should return true', () => {
            expect(doublyLinkedList1.set(0,'Node 4')).toBe(true)
            expect(doublyLinkedList1.get(0).value).toBe("Node 4")
         })
         test('doublyLinkedList1.set(1,"Node 5") should return true', () => {
            expect(doublyLinkedList1.set(1,'Node 5')).toBe(true)
            expect(doublyLinkedList1.get(1).value).toBe("Node 5")
         })
         test('doublyLinkedList1.set(3,"Node 6") should return false', () => {
            expect(doublyLinkedList1.set(3,'Node 6')).toBe(false)
            expect(doublyLinkedList1.get(3)).toBe(undefined)
         })
      })
      
      
      describe('inserts the node with the provided value at a specific index', () => {
         const doublyLinkedList1 = new DoublyLinkedList()
         doublyLinkedList1.push("Node 1")
         doublyLinkedList1.push("Node 2")
         doublyLinkedList1.push("Node 3")
         test('doublyLinkedList1.insert(0,"Node 4") should return true', () => {
            expect(doublyLinkedList1.insert(0,'Node 4')).toBe(true)
            expect(doublyLinkedList1.get(0).value).toBe("Node 4")
            expect(doublyLinkedList1.get(1).value).toBe("Node 1")
            expect(doublyLinkedList1.length).toBe(4)
         })
         test('doublyLinkedList1.insert(3,"Node 5") should return true', () => {
            expect(doublyLinkedList1.insert(3,'Node 5')).toBe(true)
            expect(doublyLinkedList1.get(3).value).toBe("Node 5")
            expect(doublyLinkedList1.get(4).value).toBe("Node 3")
            expect(doublyLinkedList1.get(2).value).toBe("Node 2")
            expect(doublyLinkedList1.length).toBe(5)
         })
         test('doublyLinkedList1.insert(2,"Node 6") should return true', () => {
            expect(doublyLinkedList1.insert(2,'Node 6')).toBe(true)
            expect(doublyLinkedList1.get(2).value).toBe("Node 6")
            expect(doublyLinkedList1.get(1).value).toBe("Node 1")
            expect(doublyLinkedList1.get(3).value).toBe("Node 2")
            expect(doublyLinkedList1.length).toBe(6)
         })
         test('doublyLinkedList1.insert(10,"Node 5") should return false', () => {
            expect(doublyLinkedList1.insert(10,'Node 5')).toBe(false)
         })
      })
 
 describe('removes the node with the provided value at a specific index', () => {
   const doublyLinkedList1 = new DoublyLinkedList()
   doublyLinkedList1.push("Node 0")
   doublyLinkedList1.push("Node 1")
   doublyLinkedList1.push("Node 2")
   doublyLinkedList1.push("Node 3")
   doublyLinkedList1.push("Node 4")
   test('doublyLinkedList1.remove(0) should return Node 0', () => {
      expect(doublyLinkedList1.remove(0).value).toBe("Node 0")
      expect(doublyLinkedList1.get(1).value).toBe("Node 2")
      expect(doublyLinkedList1.get(0).value).toBe("Node 1")
      expect(doublyLinkedList1.length).toBe(4)
   })
   test('doublyLinkedList1.remove(4) should return undefined', () => {
      expect(doublyLinkedList1.remove(4)).toBe(undefined)
      expect(doublyLinkedList1.length).toBe(4)
   })
   test('doublyLinkedList1.remove(2) should return Node 3', () => {
      expect(doublyLinkedList1.remove(2).value).toBe('Node 3')
      expect(doublyLinkedList1.get(2).value).toBe("Node 4")
      expect(doublyLinkedList1.get(1).value).toBe("Node 2")
      expect(doublyLinkedList1.get(3)).toBe(undefined)
      expect(doublyLinkedList1.length).toBe(3)
   })
 })


describe.only('reverses a linked list in place', () => {
   let doublyLinkedList1 = new DoublyLinkedList()
   // beforeEach(()=> {
   //    doublyLinkedList1.push("Node 0")
   //    doublyLinkedList1.push("Node 1")
   //    doublyLinkedList1.push("Node 2")
   //    doublyLinkedList1.push("Node 3")
   //    doublyLinkedList1.push("Node 4")
   //    return doublyLinkedList1
   // })
   test('should return undefined', () => {
      let doublyLinkedList2 = new DoublyLinkedList();
      expect(doublyLinkedList2.reverse()).toBe(undefined)
   })
   test('should return linked List in reverse order', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.push("Node 0")
      doublyLinkedList1.push("Node 1")
      doublyLinkedList1.push("Node 2")
      doublyLinkedList1.push("Node 3")
      doublyLinkedList1.push("Node 4")
      doublyLinkedList1.reverse()
      expect(doublyLinkedList1.head.value).toBe("Node 4")
      const node1 = doublyLinkedList1.get(1)
      expect(node1.value).toBe("Node 3")
      expect(node1.prev.value).toBe("Node 4")
      expect(node1.next.value).toBe("Node 2")
      const node2 = doublyLinkedList1.get(2)
      expect(node2.value).toBe("Node 2")
      expect(node2.prev.value).toBe("Node 3")
      expect(node2.next.value).toBe("Node 1")
      expect(doublyLinkedList1.get(2).value).toBe("Node 2")
      expect(doublyLinkedList1.get(3).value).toBe("Node 1")
      expect(doublyLinkedList1.tail.value).toBe("Node 0")
   })
})  