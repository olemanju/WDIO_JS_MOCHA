class demoAutomationPage{

 private get selectCountriesDropdown () {
        
        return $('.select2-selection--single');
    }

    private get searchTextBoxDropdown () {
        
        return $('.select2-search__field');
    }
    private get submitButton () {
        
        return $('#firstpassword');
    }
    
    
    ////*[@id='select2-country-results']/li[text()='Netherlands']


async selectdynamicdropdown(countryName: string){
    const dropdownselectItem = $(`//*[@id='select2-country-results']/li[text()='${countryName}']`)
    await this.submitButton.scrollIntoView()
    await browser.pause(2000)
    await  this.selectCountriesDropdown.click()
    await this.searchTextBoxDropdown.setValue(countryName)
    await browser.pause(2000)
    await dropdownselectItem.click()
}
}

export default new demoAutomationPage()