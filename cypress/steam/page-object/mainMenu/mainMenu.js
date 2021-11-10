const BasePage = require("../page/basePage");

class MainMenu extends BasePage {
    get lblMenuSectionTemplate() {
        return cy.get(`//a[@class='pulldown_desktop'][contains(text(),'Categiries')]`)
    };

    get lblSubSectionTemplate() {
        return cy.get("//div[contains(@class,'popup_block_new flyout_tab_flyout responsive_slidedown')]//a[contains(text(),'Actions')]")
    };

    navigateSection() {
        this.lblMenuSectionTemplate.click();
        this.lblSubSectionTemplate.click();
    }
}

module.exports = new MainMenu();