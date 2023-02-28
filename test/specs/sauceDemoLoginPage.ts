describe(" Login screen for Sauce lab", async () => {

    before("launch the browser", async () => {
        await browser.url("https://www.saucedemo.com/")
    })

    it("Should login with the valid user", async () => {

        const username = $("#user-name")
        const password = $("#password")
        const loginbutton = $("#login-button")

        await username.setValue("standard_user")
        await password.setValue("secret_sauce")
        await loginbutton.click()

        const products = $(".title")
        await expect(products).toBeDisplayed()

    })

    it.only("Combinations on text box", async () => {

        const username = $("#user-name")

        await username.setValue("standard_user")
        console.log("The value is entered " + await username.getValue())
        await  username.addValue("Addedfew more text")
        console.log("The value is entered later " +await username.getValue())
        await  username.clearValue()
        console.log("Cleared the value " +await username.getValue())

    })

})