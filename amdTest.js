var aMd = {}
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
    //NOTE: random pop up will break test. Write if statement?
    'Seller Through Shop': browser => {
        aMd
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
            .moveToElement('@gamingDropdown', 10, 10)
            .waitForElementVisible('@laptopGsub')
            .click('@laptopGsub')
            .verify.containsText('@heaDer', 'Gaming Laptops')
            .waitForElementVisible('@dellshopNowbtn')
            .click('@dellshopNowbtn')
            .api.windowHandles(result => {
                browser.switchWindow(result.value[2])
                    .verify.urlContains('https://www.bestbuy.com/')
            }),
            aMd
                .waitForElementVisible('div[class="sku-title"]')
                .verify.containsText('div[class="sku-title"]', 'G5')
    },
    'Search': browser => {
        aMd
            .moveToElement('@searchIcon', 10, 10)
            .waitForElementVisible('@searchBar')
            .click('@searchBar')
            .setValue('@searchBar', 'Test')
    },
    'Shop Dropdowns and Sub-dropdowns': browser => {
        aMd
            // Desktop dropdown and subs
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@dsKtop')
            .click('@dsKtop')
            .verify.containsText('@heaDer', 'Desktops')
            .moveToElement('@shop', 10, 10)
            .moveToElement('@dsKtop', 10, 10)
            .waitForElementVisible('@shDskh')
            .click('@shDskh')
            .waitForElementVisible('@auDckb')
            //verify home checkbox is checked
            .moveToElement('@shop', 10, 10)
            .moveToElement('@dsKtop', 10, 10)
            .waitForElementVisible('@shDskg')
            .click('@shDskg')
            .waitForElementVisible('@auDckb')
            //verify gaming check box checked
            .moveToElement('@shop', 10, 10)
            .moveToElement('@dsKtop', 10, 10)
            .waitForElementVisible('@shDskb')
            .click('@shDskb')
            .waitForElementVisible('@auDckb')
            //verify business check box checked
            // Laptop dropdown and subs
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopLap')
            .click('@shopLap')
            .waitForElementVisible('@heaDer')
            .verify.containsText('@heaDer', 'Laptops')
            .moveToElement('@shop', 10, 10)
            .moveToElement('@shopLap', 10, 10)
            .waitForElementVisible('@shLaph')
            .click('@shLaph')
            .waitForElementVisible('@auDckb')
            //verify home checkbox is checked
            .moveToElement('@shop', 10, 10)
            .moveToElement('@shopLap', 10, 10)
            .waitForElementVisible('@shLapg')
            .click('@shLapg')
            .waitForElementVisible('@auDckb')
            // verify gaming check box checked
            .moveToElement('@shop', 10, 10)
            .moveToElement('@shopLap', 10, 10)
            .waitForElementVisible('@shLapb')
            .click('@shLapb')
            .waitForElementVisible('@auDckb')
            // verify business check box checked
            // Processors dropdown and subs
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopProc')
            .moveToElement('@shopProc', 10, 10)
            .waitForElementVisible('@shProcdsk')
            .click('@shProcdsk')
            .verify.containsText('@heaDer', 'Desktop Processors')
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopProc')
            .moveToElement('@shopProc', 10, 10)
            .waitForElementVisible('@shProcser')
            .click('@shProcser')
            .verify.containsText('@heaDer', 'Server Processors')
            // Graphics Cards dropdown and subs
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopGc')
            .moveToElement('@shopGc', 10, 10)
            .waitForElementVisible('@shGcs')
            .click('@shGcs')
            .verify.containsText('@heaDer', 'Graphics Cards')
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopGc')
            .moveToElement('@shopGc', 10, 10)
            .waitForElementVisible('@shGcpga')
            .click('@shGcpga')
            .verify.containsText('@heaDer', 'Pro Graphics and Accelerators')
            // Motherboard dropdown
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopMb')
            .click('@shopMb')
            .verify.containsText('@heaDer', 'Motherboards')
            // Freesync Monitor dropdown
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopFm')
            .click('@shopFm')
            .verify.containsText('aside[class="layout-sidebar-first"]', 'FreeSync')
            //FanStore through Shop dropdown
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@shopFan')
            .click('@shopFan')
            .verify.urlContains('https://amdfanstore.com/')
    }
}