import {reverse} from "./reverse"

describe.only('Reverse a string',() => {
    test ('Reverse("PRASHANT") should return TNAHSARP',() =>{
        expect(reverse("PRASHANT")).toBe("TNAHSARP")
    })
})