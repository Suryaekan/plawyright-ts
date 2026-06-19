import { expect, Page, test } from "@playwright/test";
import {LoginPage} from "../../pages/ui/LoginPage"

let standard_user: string = "standard_user"
let valid_password: string = "secret_sauce"



test("verify standard user log in", async({page})=>{

    let loginpage = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")

    await loginpage.fill_username(standard_user);
    await loginpage.fill_password(valid_password);
    await loginpage.click_login_button();

    await expect(loginpage.header_logo_css).toHaveText("Swag Labs")
    


});