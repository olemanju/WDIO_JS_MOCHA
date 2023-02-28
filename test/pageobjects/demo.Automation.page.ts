class demoAutomationPage{

 private get selectCountriesDropdown () {
        
        return $('.select2-selection--single');
    }

    private get searchTextBoxDropdown () {
        
        return $('.select2-search__field');
    }
    private get submitButton () {
        
        return $('#submitbtn');
    }
    
    
    ////*[@id='select2-country-results']/li[text()='Netherlands']


async selectdynamicdropdown(countryName: string){
    const dropdownselectItem = $(`//*[@id='select2-country-results']/li[text()='${countryName}']`)
    await this.submitButton.scrollIntoView()
    await  this.selectCountriesDropdown.click()
    await this.searchTextBoxDropdown.setValue(countryName)
    await dropdownselectItem.click()
}
}

export default new demoAutomationPage()