import { expect, Page, test } from "@playwright/test";
import {LoginPage} from "../../pages/ui/LoginPage"
import {USERS} from "../../test_case_data/login_test_data"



test("verify standard user log in", async({page})=>{

    let loginpage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")

    await loginpage.login(USERS.STANDARD.username, USERS.STANDARD.password);

    await expect(loginpage.header_logo_css).toHaveText("Swag Labs")
    


});

test("verify locked out user", async({page})=>{

    let loginpage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")

    await loginpage.login(USERS.LOCKED_OUT.username, USERS.LOCKED_OUT.password);

    await expect(loginpage.error_test_testid).toHaveText(USERS.LOCKED_OUT.error_text);
    
});