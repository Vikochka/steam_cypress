const header = require("../steam/page-object/header/Header");
const mainMenu = require("../steam/page-object/mainMenu/mainMenu");

describe('Steam test', () => {
    it('should check language, select game with max discount and download Steam.exe file', function () {
        header.selectLanguage();

        mainMenu.navigateSection();

        // await actionPage.selectGameWithMaxDiscount();
        //
        // const pageURL = await browser.getUrl();
        // console.log("Page url = " + pageURL);
        // const page = await pageURL.split("/")[3];
        // console.log(page);
        // const namePage = "app";
        // if (page === namePage) {
        //     await console.log("Age page was opened");
        //     await agePage.checkAge("2000");
        //     await agePage.clickOnViewButton();
        // }
        // console.log("Game page was opened");
        // await gamePage.checkCurrentGame();
        //
        // await header.clickOnInstallSteam();
        // await downloadPage.downloadSteam();
    });
});