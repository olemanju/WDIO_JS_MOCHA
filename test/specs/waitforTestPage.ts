import waitexamplePage from "../pageobjects/waitexample.page";

describe("This feature is example for waitfor", ()=>{

    beforeEach("To open the website", async()=>{
        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")
        await browser.maximizeWindow()
    })

    it("example for waitfordisplayed",async()=>{

        await waitexamplePage.clickOnStartButton()
        await waitexamplePage.waitForLoadingtodisappear()
        expect(await waitexamplePage.HelloWorldText).toHaveText("Hello World!")
    })

    it("example for waitfordisplayed reverse option",async()=>{

        await waitexamplePage.clickOnStartButton()
        await  waitexamplePage.waitForLoadingDisappearReverseTrue()
        expect(await waitexamplePage.HelloWorldText).toHaveText("Hello World!")
    })

    it("Under waitUntill we can pass any function or condition",async()=>{

        await waitexamplePage.clickOnStartButton()
        await browser.waitUntil(async()=>
            await  waitexamplePage.HelloWorldText.getText() === "Hello World!",
            {
                timeout: 10000,
                timeoutMsg: "Failed to locate Hello waord through wait untill example"
            }
        )
        expect(await waitexamplePage.HelloWorldText).toHaveText("Hello World!")
    })
})