describe('Steam test', () => {
    it('should check language, select game with max discount and download Steam.exe file', function () {
        cy.visit('/');
        cy.get('#language_pulldown').invoke('text').then((text) => {
            if (text.trim() === ("язык")) {
                cy.log("Site opening on russian");
                cy.get('#language_pulldown').click();
                cy.log("Click on lbl");
                cy.get(`//a[@class='popup_menu_item tight'][contains(text(),'English')]`).click()
            } else {
                cy.log('Site opening on english');
            }
        });

        cy.get("//a[@class='pulldown_desktop'][contains(text(),'Categories')]").click();
        cy.get("span").contains("//div[contains(@class,'popup_block_new flyout_tab_flyout responsive_slidedown')]//a[contains(text(),'Actions')]").click();

        // var discountList = new Array();
        // var convertArray = new Array();
        // discountList = cy.get("//div[@class='discount_block  discount_block_inline']//div[@class='discount_pct']");
        // cy.log(discountList.length);
        // var max = 0;
        // var count = 0;
        // var indexOfMax;
        // for (let i = 0; i < discountList.length; i++) {
        //     if (discountList[i] !== undefined) {
        //         let strDiscount = discountList[i].getText();
        //         let discount = strDiscount.split("%");
        //         cy.log(discount)
        //         let convert = parseInt(discount);
        //         convert = convert - convert - convert;
        //         convertArray.push(convert)
        //     }
        // }
        // console.log(convertArray)
        // console.log(convertArray.length)
        // if (convertArray !== undefined) {
        //     for (let i = 0; i < convertArray.length; i++) {
        //         if (convertArray[i] > max) {
        //             max = convertArray[i];
        //             count = 1;
        //         } else if (convertArray[i] === max && convertArray[i - 1] > max) {
        //             count++;
        //             max = convertArray[i];
        //         }
        //     }
        // }
        // cy.log(count)
        // cy.log("Max discount of game = " + max);
        // indexOfMax = convertArray.indexOf(max);
        // cy.log("Index of max discount = " + indexOfMax);
        //     discountList[indexOfMax].click();
        //
        //     const pageURL = browser.getUrl();
        //     console.log("Page url = " + pageURL);
        //     const page = pageURL.split("/")[3];
        //     console.log(page);
        //     const namePage = "app";
        //     if (page === namePage) {
        //         cy.log("Age page was opened");
        //         cy.log("Check age:");
        //         const selectBox = cy.get('#ageYear');
        //         cy.log(cy.get('#ageYear').invoke('text').then((text)));
        //         selectBox.selectByVisibleText(2000);
        //         cy.log(selectBox.invoke('text').then((text)));
        //         cy.get("//a[@class='btnv6_blue_hoverfade btn_medium']/span[text()='']").click();
        //     }else {
        //         cy.log("Game page was opened");
        //         cy.log("Check current game");
        //
        //         const gameDiscount = cy.get("//div[@class='game_area_purchase_game']//div[@class='discount_block game_purchase_discount']//div[@class='discount_pct']").invoke('text').then((text));
        //         cy.log("Discount of selected game = " + gameDiscount);
        //         let discount = gameDiscount.split("%");
        //         cy.log(discount)
        //         let convert = parseInt(discount);
        //         convert = convert - convert - convert;
        //         return max === convert;
        //     }
        //     cy.get("//a[@class='header_installsteam_btn_content']").click();
        //
        // });
    })
})
