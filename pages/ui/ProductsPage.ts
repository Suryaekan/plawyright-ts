import { Page, Locator } from "@playwright/test";

export class ProductsPage{
    readonly page: Page;
    readonly add_to_cart_locator: Locator;
    readonly shopping_cart_badge_testid : Locator;
    readonly shopping_cart_link_testid: Locator;
    readonly product_sort_container_testid: Locator
    readonly item_prices_testid: Locator;

    constructor(page: Page){
        this.page = page
        this.add_to_cart_locator = this.page.getByText("Add to cart");
        this.shopping_cart_badge_testid = this.page.getByTestId("shopping-cart-badge");
        this.shopping_cart_link_testid = this.page.getByTestId("shopping-cart-link");
        this.product_sort_container_testid = this.page.getByTestId("product-sort-container");
        this.item_prices_testid = this.page.getByTestId("inventory-item-price");

    }

    async add_item_to_cart_by_index(index: number){
        await this.add_to_cart_locator.nth(index).click();
    }

    async click_on_shopping_cart_link(){
        await this.shopping_cart_link_testid.click();
    }

    async sort_product_by_price_low_to_high(){
        await this.product_sort_container_testid.selectOption("Price (low to high)");
    }

    async getPricesOfAllListedItems(){
        const prices = await this.item_prices_testid.allInnerTexts();
        const floatPrices: number[] = [];

        for (const price of prices) {
            floatPrices.push(parseFloat(price.replace("$", "")));
        }

        return floatPrices;
    }

}
