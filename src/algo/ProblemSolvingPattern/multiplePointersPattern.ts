
//Counts Unique value using multiple pointers pattern
export const countUniqueValues = (arr: Array<any>) => {
  if (arr.length < 1) return 0
  let init = 0
  let repeat = 1
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[init] === arr[repeat]) {
      init = repeat
      ++repeat
    }
    else {
      ++count
      init = i
      repeat = i + 1
    }
  }
  return count
}

const countUniqueValuesAlt = (arr: Array<any>) => {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

export const averagePair = (arr: Array<number>, num: number): boolean => {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}


export const isSubsequence = (str1: string, str2: string): boolean => {
  let char1 = str1[0], char2 = str2[0]
  let i = 0, j = 0
  if (!str1) return true;
  while (i < str1.length) {
    if (str1[i] === str2[j]) {
      j++
      i++
    }
    if (str1[i] !== str2[j]) {
      j++
    }
    if (j > (str2.length)) return false
  }
  return true
}