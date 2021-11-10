class Header {
    get lblLanguage() {
        return cy.get("template").contains('#language_pulldown');
    }

    get btnLanguage() {
        return cy.get("button[//a[@class='popup_menu_item tight'][contains(text(),'English')]");
    }

    selectLanguage() {
        this.lblLanguage.invoke('text').then((text) => {
            if (text.trim() === ("язык")) {
                cy.log("Site opening on russian");
                this.lblLanguage.click();
                cy.log("Click on lbl");
                this.btnLanguage.click()
            } else {
                cy.log('Site opening on english');
            }
        });
    }
}

module.exports = new Header();