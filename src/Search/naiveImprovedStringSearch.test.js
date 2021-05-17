import naiveStringSearch from "./naiveStringSearch"

describe('Searches a pattern in the target String', () => {
    test('naiveStringSearch("wyomguiomgasomg","omg") return 3', () => {
        expect(naiveStringSearch("wyomguoiomgasomgom","omg")).toEqual(3)
    })

    test('naiveStringSearch("THIS IS A TEST TEXT","TEST") return 1', () => {
        expect(naiveStringSearch("THIS IS A TEST TEXT","TEST")).toEqual(1)
    })

    test('naiveStringSearch("AABAACAADAABAABA","AABA") return 3', () => {
        expect(naiveStringSearch("AABAACAADAABAABA","AABA")).toEqual(3)
    })
    
})
