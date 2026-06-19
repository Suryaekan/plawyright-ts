import { Page, Locator } from "@playwright/test";

export class ProductsPage{
    readonly page: Page;
    readonly add_to_cart_locator: Locator;
    readonly shopping_cart_badge_testid : Locator;
    readonly shopping_cart_link_testid: Locator;

    constructor(page: Page){
        this.page = page
        this.add_to_cart_locator = this.page.getByText("Add to cart");
        this.shopping_cart_badge_testid = this.page.getByTestId("shopping-cart-badge");
        this.shopping_cart_link_testid = this.page.getByTestId("shopping-cart-link")

    }

    async add_item_to_cart_by_index(index: number){
        await this.add_to_cart_locator.nth(index).click();
    }

    async click_on_shopping_cart_link(){
        await this.shopping_cart_link_testid.click();
    }
}
