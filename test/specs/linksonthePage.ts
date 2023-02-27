describe("palaying with locators", async () => {

    before("launch the browser", async () => {
        await browser.url("https://www.google.com/")
    })

    it("Print number of links ", async () => {

        const links_page = $$("//a")
        console.log("total length is :: " + (await links_page.length))
        for (let i = 0; i < await links_page.length; i++) {

            const linkName = (await links_page[i].getText());
            if (linkName !== "") {
                console.log("Links details::: " + linkName)
            }

        }
    })

})