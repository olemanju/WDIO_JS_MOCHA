import AlertsPage from "../pageobjects/Alerts.page";

describe("how to work on Alerts", () => {

    beforeEach("Launch the browser", async () => {
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts")
        await browser.maximizeWindow()
    })

    it("How to work on JsAlert", async () => {

        await AlertsPage.clickOnJSAlert()
        await browser.pause(1000)
        expect(await browser.getAlertText()).toEqual("I am a JS Alert")
        await browser.acceptAlert()
        await expect(AlertsPage.reslutText).toHaveText("You successfully clicked an alert")
        await browser.pause(2000)
    })

    it("How to work on Js Confirm", async () => {

        await AlertsPage.clickOnJSConfrimAlert()
        await browser.pause(1000)
         expect(await browser.getAlertText()).toEqual("I am a JS Confirm")
        await browser.dismissAlert()
         expect(await AlertsPage.reslutText).toHaveText("You clicked: Cancel")
        await browser.pause(2000)
    })

    it("How to work on Js Prompt", async () => {

        await AlertsPage.clickOnJSPromptAlert()
        await browser.pause(1000)
        var name = "I am Manjunatha"
        await browser.sendAlertText(name)
        await browser.acceptAlert()
         expect(await AlertsPage.reslutText).toHaveText(`You entered: ${name}`)
        await browser.pause(2000)
        await AlertsPage.clickOnJSPromptAlert()
        await browser.pause(1000)
        var name = "I am Manjunatha"
        var dismiss = "null"
        await browser.sendAlertText(name)
        await browser.dismissAlert()
         expect(await AlertsPage.reslutText).toHaveText(`You entered: ${dismiss}`)
        await browser.pause(2000)
    })
})