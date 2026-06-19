import {test, expect} from "@playwright/test"
import {ProductsPage} from "../../pages/ui/ProductsPage"
import { LoginPage } from "../../pages/ui/LoginPage"

test ("verify cart badge value", async({page})=>{
    let product_page = new ProductsPage(page)
    let loginPage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")
    await loginPage.fill_password("secret_sauce");
    await loginPage.fill_username("standard_user");
    await loginPage.click_login_button();

    await product_page.add_item_to_cart_by_index(0)
    await product_page.add_item_to_cart_by_index(1)

    await expect(product_page.shopping_cart_badge_testid).toHaveText("2");

    

})