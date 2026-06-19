import {Locator, Page} from "@playwright/test"

export class CheckoutPage{
    readonly page: Page;
    readonly checkout_button_testid: Locator;
    readonly continue_button_testid: Locator;
    readonly firstname_textbox_testid: Locator;
    readonly last_name_textbox_testid: Locator;
    readonly postalcode_textbox_testid : Locator;
    readonly finish_button_testid: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkout_button_testid = this.page.getByTestId("checkout");
        this.continue_button_testid = this.page.getByTestId("continue");
        this.firstname_textbox_testid = this.page.getByTestId("firstName");
        this.last_name_textbox_testid = this.page.getByTestId("lastName");
        this.postalcode_textbox_testid = this.page.getByTestId("postalCode");
        this.finish_button_testid = this.page.getByTestId("finish")
    }

    async fill_firstname(firstname: string){
        await this.firstname_textbox_testid.fill(firstname);
    }

    async fill_lastname(lastname: string){
        await this.last_name_textbox_testid.fill(lastname);
    }

    async fill_postalcode(postalcode: string){
        await this.postalcode_textbox_testid.fill(postalcode);
    }

    async fill_shopper_details(firstname: string, lastname:string, postalcode: string){
        await this.fill_firstname(firstname);
        await this.fill_lastname(lastname);        
        await this.fill_postalcode(postalcode);        
    }

    async click_on_continue(){
        await this.continue_button_testid.click();
    }

    async click_on_chekout_button(){
        await this.checkout_button_testid.click();
    }

    async click_on_finish_button(){
        await this.finish_button_testid.click();
    }

    async is_order_successful_message_displayed(){
        return await this.page.getByText("Thank you for your order!").isVisible();
    }



    

}