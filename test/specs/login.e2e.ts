import sauceLoginPage from "../pageobjects/sauceLogin.page";
import sauceProductsPage from "../pageobjects/sauce.products.page";
import loginData from "../testdata/loginData.json"

describe("Login to sauce lab with famework implementation", ()=>{

    it.only("Login to Sauce login with valid details", async ()=>{

        await sauceLoginPage.openBrowser()
        await sauceLoginPage.logintoSaucelab(loginData.valid.userName,loginData.valid.password)
        const prodtctstext = await  sauceProductsPage.productsLabel.getText()
        expect (await  sauceProductsPage.productsLabel.getText()).toHaveText("Products")
        await sauceProductsPage.shopcartlink.isDisplayed()
        await  sauceProductsPage.shopcartlink.click()
        await browser.pause(4000)
    })

    it.only("Login to Sauce login with Invalid details", async ()=>{

        await sauceLoginPage.openBrowser()
        await sauceLoginPage.logintoSaucelab(loginData.Invalid.userName,loginData.Invalid.password)
        const ErrorMessage = await  sauceLoginPage.InvalidCredentialsErrorMessage.getText()
        console.log("Heelo manju" + ErrorMessage)
        expect (await sauceLoginPage.InvalidCredentialsErrorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
        await browser.pause(4000)
    })
})