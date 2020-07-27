import { countUniqueValues } from "./multiplePointersPattern"

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