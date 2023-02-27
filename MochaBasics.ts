describe("feature which manju", async () => {
//to run this file npx mocha MochaBasics.ts
    before("Login to app", () => {
        console.log("I have logged In")
    })

    describe("valid sceanrios", ()=>{

        it.skip("First", async () => {

            //await browser.url("https://testautomationpractice.blogspot.com/")
    
        })
    
        it("Second", async () => {
    
            //await browser.url("https://testautomationpractice.blogspot.com/")
    
        })
    })
    describe("valid sceanrios", ()=>{
        it.only("TThird", async () => {

            //await browser.url("https://testautomationpractice.blogspot.com/")
    
        })
    
        it("forth", async () => {
    
            //await browser.url("https://testautomationpractice.blogspot.com/")
    
        })
    })

    

    after("Logout details", () => {
        console.log("I ahave logged out")
    })
})