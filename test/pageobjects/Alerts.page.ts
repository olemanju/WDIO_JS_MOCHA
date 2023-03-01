class AlertsPage {

    private get JsAlertButton() {

        return $("//button[text()='Click for JS Alert']");
    }

    private get JsConfirmAlertButton() {

        return $("//button[text()='Click for JS Confirm']");
    }
    private get JsPromptAlertButton() {

        return $("//button[text()='Click for JS Prompt']");
    }

    get reslutText() {

        return $('#result');
    }

    async clickOnJSAlert() {
        await this.JsAlertButton.click()
    }
    async clickOnJSConfrimAlert() {
        await this.JsConfirmAlertButton.click()
    }
    async clickOnJSPromptAlert() {
        await this.JsPromptAlertButton.click()
    }

}

export default new AlertsPage()