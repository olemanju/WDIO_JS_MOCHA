describe(" Login screen for Sauce lab",async()=>{

    before("launch the browser", async()=>{
await browser.url("https://www.saucedemo.com/")
    })

    it("Should login with the valid user",async()=>{

        const username = $("#user-name")
        const password = $("#password")
        const loginbutton = $("#login-button")

        await username.setValue("standard_user")
        await password.setValue("secret_sauce")
        await loginbutton.click()

        const products = $(".title")
        await expect(products).toBeDisplayed()

    })

})