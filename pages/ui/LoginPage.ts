import {Locator, Page} from "@playwright/test"

export class LoginPage{
    readonly page: Page;
    readonly  username_textbox_testid: Locator;
    readonly password_textbox_testid: Locator;
    readonly login_button_testid: Locator;
    readonly header_logo_css: Locator;
    readonly error_test_testid: Locator;

    constructor(page: Page){
        this.page = page;
        this.username_textbox_testid = this.page.getByTestId("username");
        this.password_textbox_testid = this.page.getByTestId("password");
        this.login_button_testid = page.getByTestId("login-button");
        this.header_logo_css = page.locator("div.app_logo");
        this.error_test_testid = page.getByTestId("error");
    }

    async fill_username(username: string): Promise<void>{
        await this.username_textbox_testid.fill(username);
    }

    async fill_password(password: string): Promise<void>{
        await this.password_textbox_testid.fill(password);
    }

    async click_login_button(): Promise<void>{
        await this.login_button_testid.click();
    }

}