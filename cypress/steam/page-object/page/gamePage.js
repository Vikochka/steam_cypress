const BasePage = require("../../page-object/page/basePage");
const actionPage = require("./actionPage")

class GamePage extends BasePage {
    get lblGameDiscount() {
        return $("//div[@class='game_area_purchase_game']//div[@class='discount_block game_purchase_discount']//div[@class='discount_pct']")
    }

    async checkCurrentGame() {
        cy.log("Check current game");

        const max = actionPage.maxDiscount();

        const gameDiscount = await this.lblGameDiscount.getText();
        cy.log("Discount of selected game = " + gameDiscount);
        let discount = await gameDiscount.split("%");
        cy.log(discount)
        let convert = parseInt(discount);
        convert = convert - convert - convert;
        if (max === convert) {
            return true;
        } else {
            return false;
        }
    }

    async open() {
        return super.open("gamePage");
    }
}

module.exports = new GamePage();