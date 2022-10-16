class Stack{
    private list: Array<string>

    constructor (list ?:Array<string>) {
        this.list = list || []
    }

    push(value:string): boolean{
        this.list.push(value)
        return true
    }

    pop(): string{
        return this.list.pop()
    }

    top(): string {
        return this.list[this.length -1]
    }

    get length(): number{
        return this.list.length
    }

}

export { Stack }