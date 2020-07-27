
//Counts Unique value using multiple pointers pattern
export const countUniqueValues = (arr:Array<any>) => {
  if(arr.length <1) return 0
  let init = 0
  let repeat = 1
  let count = 0
  for(let i=0;i < arr.length; i++){
    if(arr[init] === arr[repeat]) {
      init = repeat
      ++repeat
    }
    else{
      ++count
      init = i
      repeat = i+1
    }    
  }  
  return count
}

const countUniqueValuesAlt = (arr:Array<any>) => {
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}