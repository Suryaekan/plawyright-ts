import {test, expect} from "@playwright/test"
import {ProductsPage} from "../../pages/ui/ProductsPage"
import { LoginPage } from "../../pages/ui/LoginPage"
import {USERS} from "../../test_case_data/login_test_data"


test ("verify cart badge value", async({page})=>{
    let product_page = new ProductsPage(page)
    let loginPage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")
    await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

    await product_page.add_item_to_cart_by_index(0)
    await product_page.add_item_to_cart_by_index(1)

    await expect(product_page.shopping_cart_badge_testid).toHaveText("2");
})



test ("verify sort prices low to high", async({page})=>{
    let product_page = new ProductsPage(page)
    let loginPage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")
    await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);


    await product_page.sort_product_by_price_low_to_high();

    const actualPrices = await product_page.getPricesOfAllListedItems();
    const expectedPrices = [...actualPrices].sort((a, b) => a - b);

    expect(actualPrices).toEqual(expectedPrices);
    

})