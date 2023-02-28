class waitExaplePage{

    get startButton(){
        return $("#start>button")
    }

    get loadingIcon(){
        return $('#loading')
    }

    get HelloWorldText(){
        return $("#finish>h4")
    }

    async clickOnStartButton()
    {
        await  this.startButton.click()
    }
    async waitForLoadingtodisappear(){
        await this.HelloWorldText.waitForDisplayed(
            {
                timeout: 10000,
                timeoutMsg: "Failed to display Hello word Text"
            })
    }

    async waitForLoadingDisappearReverseTrue(){
        await this.loadingIcon.waitForDisplayed(
            {
                reverse: true,
                timeout: 10000,
                timeoutMsg: "Failed to display Hello word Text"
            })
    }
   


}
export default new waitExaplePage()