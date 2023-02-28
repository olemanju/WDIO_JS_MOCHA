import Page from "./page";

class sauceLoginPage extends Page{

     get userNameTextBox(){
        return $("#user-name")
    }

     get passwordTextBox(){
        return $("#password")
    }

     get submitButton(){
        return $("#login-button")
    }


    get userNameErrorMessage(){
        return $('.error-message-container')
    }

    get InvalidCredentialsErrorMessage(){
        return $('.error-message-container>h3')
    }

    get imageOfSwag(){
        return $('.bot_column')
    }

    get swaglabHeader(){
        return $('.login_logo')
    }

    get AcceptedUsername(){
        return $("//div/h4[text()='Accepted usernames are:']")
    }

     async logintoSaucelab(username:string, password:string)
    {
        await this.userNameTextBox.setValue(username)
        await this.passwordTextBox.setValue(password)
        await this.submitButton.click();
    }

    async openBrowser()
    {
        await browser.url("https://www.saucedemo.com/")
        await browser.maximizeWindow()
    }
}
export default new sauceLoginPage()