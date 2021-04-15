import capitalizeFirst from "./capitalizeFirst";

describe('Capitalize the first character of each element of an array', () => {
    test("capitalizeFirst(['car','taco','banana']) should return ['Car','Taco','Banana'] ", () => {
        expect(capitalizeFirst(['car','taco','banana'])).toEqual(['Car','Taco','Banana'])
    })
    
})
