import nestedEvenSum from "./nestedEvenSum";

describe('Sum of all even numbers in the nested Object', () => {
    
      const obj1 = {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
          }
        }
      }
      
      const obj2 = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 2}, ee: 'car'}
      };
      
    test('nestedEvenSum(obj1) should return 6 ', () => {
        expect(nestedEvenSum(obj1)).toBe(6);
    })
    test('nestedEvenSum(obj2) should return 10 ', () => {
        expect(nestedEvenSum(obj2)).toBe(10);
    })
    
})
