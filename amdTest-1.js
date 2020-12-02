var aMd = {}
var popUp = require('../pageObjects/amdPage')
module.exports = {
    beforeEach: browser => {
        aMd = browser.page.amdPage()
        aMd
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        aMd
            .end()
    },
    'Seller Through Shop': browser => {
        aMd
            //Accepting Cookie Compliance 
            .click('a[class="cookieComplianceClose"]')
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@dsKtop')
            .click('@dsKtop')
            .verify.containsText('@heaDer', 'Desktops')
            .waitForElementVisible('@seePrice')
            .click('@seePrice')
            .waitForElementVisible('@shopNowbtn')
            .click('@shopNowbtn')
            .api.windowHandles(result => {
                browser.switchWindow(result.value[1])
                    .verify.urlEquals('https://www.ibuypower.com/Store/AMD-Ryzen-7-VR')
            }),
            aMd
                .useXpath()
                .verify.containsText('(//div[@class="spec-top-block"])[2]', 'Ryzen 5')
    },
    'Seller 2': browser => {
        aMd
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@gamingDropdown', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@laptopGsub')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@laptopGsub')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Gaming Laptops')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@dellshopNowbtn')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@dellshopNowbtn')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .api.windowHandles(result => {
                browser.switchWindow(result.value[2])
                    .verify.urlContains('https://www.bestbuy.com/')
            }),
            aMd
                .ifIsPresent('@popUpNoThanks')
        aMd
        // .waitForElementVisible('div[class="sku-title"]')
        // .verify.containsText('div[class="sku-title"]', 'G5')
    },
    'Shop Dropdowns and Sub-dropdowns': browser => {
        aMd
            .ifIsPresent('@popUpNoThanks')
        aMd
            // Desktop dropdown and subs
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@dsKtop')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@dsKtop')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Desktops')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@dsKtop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shDskh')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shDskh')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@auDckb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.urlContains('audience:Home')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@dsKtop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shDskg')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shDskg')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@auDckb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.urlContains('audience:Gaming')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@dsKtop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shDskb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shDskb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@auDckb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.urlContains('audience:Business')
            .ifIsPresent('@popUpNoThanks')
        aMd
            // Laptop dropdown and subs
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopLap')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shopLap')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@heaDer')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Laptops')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shopLap', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shLaph')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shLaph')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@auDckb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.urlContains('audience:Home')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shopLap', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shLapg')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shLapg')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@auDckb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.urlContains('audience:Gaming')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shopLap', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shLapb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shLapb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@auDckb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.urlContains('audience:Business')
            .ifIsPresent('@popUpNoThanks')
        aMd
            // Processors dropdown and subs
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopProc')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shopProc', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shProcdsk')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shProcdsk')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Desktop Processors')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopProc')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shopProc', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shProcser')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shProcser')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Server Processors')
            // Graphics Cards dropdown and subs
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopGc')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shopGc', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shGcs')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shGcs')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Graphics Cards')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopGc')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shopGc', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shGcpga')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shGcpga')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Pro Graphics and Accelerators')
            // Motherboard dropdown
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopMb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shopMb')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('@heaDer', 'Motherboards')
            .ifIsPresent('@popUpNoThanks')
        aMd
            // Freesync Monitor dropdown
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopFm')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shopFm')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.containsText('aside[class="layout-sidebar-first"]', 'FreeSync')
            //FanStore through Shop dropdown
            .ifIsPresent('@popUpNoThanks')
        aMd
            .moveToElement('@shop', 10, 10)
            .ifIsPresent('@popUpNoThanks')
        aMd
            .waitForElementVisible('@shopFan')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .click('@shopFan')
            .ifIsPresent('@popUpNoThanks')
        aMd
            .verify.urlContains('https://amdfanstore.com/')
    }
}