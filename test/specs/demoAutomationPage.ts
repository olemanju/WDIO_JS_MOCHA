import demoAutomationPage from "../pageobjects/demo.Automation.page";
import demoTestdata from "../testdata/DemoAutomation.json"

describe("To handle dynamic dropdwon", ()=>{

    beforeEach("To open the website", async()=>{
        await browser.url("https://demo.automationtesting.in/Register.html")
        await browser.maximizeWindow()
        await browser.pause(1000)
    })
    it("Handle dynamic dropdown", async ()=>{

        await demoAutomationPage.selectdynamicdropdown(demoTestdata.country)
        await browser.pause(4000)
    })
})