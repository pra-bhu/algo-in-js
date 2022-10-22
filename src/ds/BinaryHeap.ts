class BinaryHeap{
   protected _values:Array<any> = []

   insert(value:any):number{
        let values = this._values
        
        if(values.includes(value))return undefined
        let childInd:number = values.push(value) - 1
        let parentInd:number = Math.floor((childInd-1)/2)
        
        if(parentInd >= 0){
            while(((this instanceof MinBinaryHeap) && values[childInd] < values[parentInd] ) ||
            ((this instanceof MaxBinaryHeap) && values[childInd] > values[parentInd] )){
                [values[childInd],values[parentInd]] = [values[parentInd],values[childInd]]
                childInd = parentInd
                parentInd = Math.floor((childInd-1)/2)
            }
        }
        return childInd
    }
}

class MaxBinaryHeap extends BinaryHeap{
    constructor(){
        super()
    }

    get values():Array<any>{
        return this._values
    }
    
}


// MIN BINARY HEAP
class MinBinaryHeap extends BinaryHeap{
    constructor(){
        super()
    }

    get values():Array<any>{
        return this._values
    }

    
}

export { MaxBinaryHeap,MinBinaryHeap }