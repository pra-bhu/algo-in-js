import { countUniqueValues,averagePair,isSubsequence } from "./multiplePointersPattern"

describe('TEST CASES: countUniqueValues',()=>{
  test('[1,1,1,1,1,2] should return 2',() => {
    expect(countUniqueValues([1,1,1,1,1,2])).toBe(2)
  })
  
  test('[] should return 0',() => {
    expect(countUniqueValues([])).toBe(0)
  })
  
  test('[1,1,2,3,3] should return 3',() => {
    expect(countUniqueValues([1,1,2,3,3])).toBe(3)
  })
  
  test('[1,2,3,4,4,4,7,7,12,12,13] should return 7',() => {
    expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7)
  })
  
  test('[-2,-1,-1,0,1] should return 4',() => {
    expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4)
  })
})

describe('TEST CASES: averagePair',()=>{
  test('[1,2,3], 2.5 returns true',()=>{
    expect(averagePair([1,2,3], 2.5)).toBe(true)
  })
  test('[1,3,3,5,6,7,10,12,19], 8 returns true',()=>{
    expect(averagePair([1,3,3,5,6,7,10,12,19], 8)).toBe(true)
  })
})


describe('TEST CASES: isSubsequence',()=>{
  test('"hello" and "hello world returns true',()=>{
    expect(isSubsequence('hello','hello world')).toBe(true)
  })
  test('"sing" and "string" returns true',()=>{
    expect(isSubsequence("sing","string")).toBe(true)
  })
  test("abc','acb'returns false",()=>{
    expect(isSubsequence('abc','acb')).toBe(false)
  })
  test("abc','abracadabra'returns true",()=>{
    expect(isSubsequence('abc','abracadabra')).toBe(true)
  })
  
})
