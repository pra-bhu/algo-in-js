export const maxSubarraySum = (arr: Array<number>, len: number): number => {
  if (arr.length < len) return null

  let maxSum = 0
  //preparing sum window
  for (let i = 0; i < len; i++) {
    maxSum += arr[i]
  }
  let currSum = maxSum
  for (let i = 1; i < (arr.length - len + 1); i++) {
    currSum = currSum - arr[i - 1] + arr[i + len - 1]
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum
}

export const minSubArrayLen = (nums: Array<number>, sum: number) => {
  let start = 0, end = 0, total = 0
  let minLen = Infinity

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end]
      end++
    }
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start]
      start++
    }
    else {
      break
    }

  }
  return minLen === Infinity ? 0 : minLen
}
interface dynamicObj {
  [k: string]: any
}
export const findLongestSubstring = (str: string) => {
  let longest = 0;
  let seen:dynamicObj = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}