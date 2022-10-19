import {reverse} from "./reverse"

describe('Reverse a string',() => {
    test ('Reverse("PRASHANT") should return TNAHSARP',() =>{
        expect(reverse("PRASHANT")).toBe("TNAHSARP")
    })
})