import { add,subraction,multplication,division } from "./MyFunction"

describe("Testing the Calculator", ()=>
 {
    it("testing only add", ()=> 
    {
        expect(add(100, 200)).toBe(300)
    })
    it("testing only sub", ()=> 
    {
        expect(subraction(100, 200)).toBe(-100)
    })
    it("testing only mul", () =>
     {
        expect(multplication(1, 20)).toBe(20)
    })
    it("testing only div", () => 
    {
        expect(division(20, 4)).toBe(5)
    })
})
describe("Testing the name", ()=>
 {
    it("testing only Name", () => 
    {
        let name:any ="arun"
        expect(name).toEqual("arun")
    })
 })