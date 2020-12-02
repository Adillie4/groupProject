var popUp = {
    ifIsPresent: function (elementInQuestion) {
        this
        this.api.elements(elementInQuestion, results => {
            if (results.value.length > 0) {
                this.click(elementInQuestion)
            }
            else {
                console.log("Intended Element does NOT Exist, continuing test...")
            }
            return this
        })
    }
}

module.exports = {
    url: 'https://www.amd.com/en',
    commands: [popUp],
    elements: {
        shop: 'a[class="shop-menu-item dropdown-toggle"]',
        dsKtop: 'a[href="/en/shop/us/Desktops"]',
        shDskh: 'a[href="/en/shop/us/Desktops?f[0]=audience:Home"]',
        shDskg: 'a[href="/en/shop/us/Desktops?f[0]=audience:Gaming"]',
        shDskb: 'a[href="/en/shop/us/Desktops?f[0]=audience:Business"]',
        shopLap: 'a[href="/en/shop/us/Laptops"]',
        shLaph: 'a[href="/en/shop/us/Laptops?f[0]=audience:Home"]',
        shLapg: 'a[href="/en/shop/us/Laptops?f[0]=audience:Gaming"]',
        shLapb: 'a[href="/en/shop/us/Laptops?f[0]=audience:Business"]',
        shProcdsk: 'a[href="/en/shop/us/Desktop%20Processors"]',
        shProcser: 'a[href="/en/shop/us/Server%20Processors"]',
        shGcs: 'a[href="/en/shop/us/Graphics%20Cards"]',
        shGcpga: 'a[href="/en/shop/us/Pro%20Graphics%20%26%20Accelerators"]',
        shopMb: 'a[href="/en/shop/us/Motherboards"]',
        shopFm: 'a[href="/en/shop/us/Freesync%20Monitors"]',
        searchIcon: 'i[class="fa fa-search-toggle"]',
        searchBar: 'input[id="edit-keyword"]',
        heaDer: 'h1[class="page-title"]',
        auDckb: 'ul[data-drupal-facet-id="audience"]',
        popUpNoThanks: 'button[class="fsrButton fsrButtoninviteDecline fsrDeclineButton"]',
        //popUpClose: 'button[class="fsrInvitecloseWrapper fsrAbandonButton"]',
        // audHomeck: {
        //     selector: '(//input[@type="checkbox"])[3]',
        //     locateStrategy: 'xpath',
        // },
        // audGameck: {
        //     selector: '(//input[@type="checkbox"])[2]',
        //     locateStrategy: 'xpath',
        // },
        // audBizck: {
        //     selector: '(//input[@type="checkbox"])[1]',
        //     locateStrategy: 'xpath',
        // },
        shopNowbtn: {
            selector: '//a[@class="btn-transparent-black"]',
            locateStrategy: 'xpath',
        },
        seePrice: {
            selector: '(//a[@href="/en/shop-product-prices-reviews/100415171/us"])[2]',
            locateStrategy: 'xpath',
        },
        gamingDropdown: {
            selector: '(//li[@class="dropdown"])[3]',
            locateStrategy: 'xpath',
        },
        laptopGsub: {
            selector: '(//a[@href="/en/gaming/gaming-laptops"])[1]',
            locateStrategy: 'xpath',
        },
        dellshopNowbtn: {
            selector: '(//a[@class="btn-transparent-white"])[3]',
            locateStrategy: 'xpath',
        },
        shopProc: {
            selector: '(//a[@href="#"])[1]',
            locateStrategy: 'xpath',
        },
        shopGc: {
            selector: '(//a[@href="#"])[2]',
            locateStrategy: 'xpath',
        },
        shopFan: {
            selector: '(//a[@href="https://amdfanstore.com/"])[2]',
            locateStrategy: 'xpath',
        },
    }
}