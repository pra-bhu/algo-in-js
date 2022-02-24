import { maxSubarraySum, minSubArrayLen, findLongestSubstring } from "./slidingWindowPattern"

describe('maxSubarraySum:', () => {
  test('maxSubarraySum([100,200,300,400], 2) // 700', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700)
  })
  test('maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 ', () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39)
  })
  test('maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5', () => {
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5)
  })
  test('maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5', () => {
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5)
  })
  test('maxSubarraySum([2,3], 3) // null', () => {
    expect(maxSubarraySum([2, 3], 3)).toBe(null)
  })
})

describe('minSubArrayLen', () => {
  test('minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2)
  })

  test('minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray', () => {
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2)
  })

  test('minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52', () => {
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1)
  })

  test('minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3)
  })
  test('minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5)
  })
  test('minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2', () => {
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2)
  })
  test('minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0)
  })
})



describe('findLongestString', () => {
  test('findLongestSubstring("") // 0', () => {
    expect(findLongestSubstring('')).toBe(0)

  })
  test('findLongestSubstring("rithmschool") // 7', () => {
    expect(findLongestSubstring("rithmschool")).toBe(7)

  })
  test('findLongestSubstring("thisisawesome") // 6', () => {
    expect(findLongestSubstring("thisisawesome")).toBe(6)
  })
  test('findLongestSubstring("thecatinthehat") // 7', () => {
    expect(findLongestSubstring("thecatinthehat")).toBe(7)

  })
  test('findLongestSubstring("bbbbbb") // 1', () => {
    expect(findLongestSubstring("bbbbbb")).toBe(1)

  })
  test('findLongestSubstring("longestsubstring") // 8', () => {
    expect(findLongestSubstring("longestsubstring")).toBe(8)

  })
  test('findLongestSubstring("thisishowwedoit") // 6', () => {
    expect(findLongestSubstring("thisishowwedoit")).toBe(6)

  })
})















