import { wService } from "./wether";

describe("w test",()=>{
    it("test f", async()=>{
        const  t = await wService(1);
        expect(t).toBe(123)
    })
})