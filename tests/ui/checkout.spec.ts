import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/ui/LoginPage";
import { ProductsPage } from "../../pages/ui/ProductsPage";
import { CheckoutPage } from "../../pages/ui/CheckoutPage";
import {USERS} from "../../test_case_data/login_test_data"

test ("e2e checkout flow", async({page})=>{
    let loginpage = new LoginPage(page);
    let productspage = new ProductsPage(page);    
    let checkoutpage = new CheckoutPage(page);

    await page.goto("https://www.saucedemo.com/");
    await loginpage.login(USERS.STANDARD.username, USERS.STANDARD.password);
    await productspage.add_item_to_cart_by_index(0);
    await productspage.add_item_to_cart_by_index(2);

    await productspage.click_on_shopping_cart_link();
    await checkoutpage.click_on_chekout_button();

    await checkoutpage.fill_shopper_details("Tester", "QA", "560097" );
    await checkoutpage.click_on_continue();
    await checkoutpage.click_on_finish_button();

    await expect(checkoutpage.is_order_successful_message_displayed()).toBeTruthy();



    
})