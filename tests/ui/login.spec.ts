import { expect, Page, test } from "@playwright/test";
import {LoginPage} from "../../pages/ui/LoginPage"

let standard_user: string = "standard_user";
let valid_password: string = "secret_sauce";
let locked_out_user: string = "locked_out_user";
let error_locked_out_user: string = "Epic sadface: Sorry, this user has been locked out."



test("verify standard user log in", async({page})=>{

    let loginpage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")

    await loginpage.fill_username(standard_user);
    await loginpage.fill_password(valid_password);
    await loginpage.click_login_button();

    await expect(loginpage.header_logo_css).toHaveText("Swag Labs")
    


});

test("verify locked out user", async({page})=>{

    let loginpage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")

    await loginpage.fill_username(locked_out_user);
    await loginpage.fill_password(valid_password);
    await loginpage.click_login_button();

    await expect(loginpage.error_test_testid).toHaveText(error_locked_out_user);
    
});