import { Locator, Page } from "@playwright/test"
import { ElementUtil } from "../Utils/ElementUtil";
import { HomePage } from "./HomePage";

export class ProductInfoPage {
    private readonly page: Page;
    private readonly elementutil: ElementUtil;
    private readonly header: Locator;
    private readonly imagecount: Locator;
    private readonly productMetadata: Locator;
    private readonly productPricedata: Locator;
    private readonly Productmap = new Map<string, string | number | null>();

    constructor(page: Page) {
        this.page = page;
        this.elementutil = new ElementUtil(page);
        this.header = page.locator('h1');
        this.imagecount = page.locator(`div#content img`);
        this.productMetadata = page.locator(`(//div[@id='content']//ul[@class='list-unstyled'])[1]//li`);
        this.productPricedata = page.locator(`(//div[@id='content']//ul[@class='list-unstyled'])[2]//li`);
    }

    async getProductheader() {
        const header = await this.elementutil.getText(this.header);
        console.log(`Product header is ${header}`);
        return header.trim();
    }

    // async getProductImagesCount()
    // {
    //     await this.elementutil.waitforElementVisible(this.imagecount);
    //     const imagesCount= await this.imagecount.count();

    //     console.log(`The total number of images are ${this.getProductImagesCount()}====> ${imagesCount}`);
    //     return imagesCount;
    // }
    async getProductImagesCount(): Promise<number> {
        await this.elementutil.isVisible(this.imagecount);

        const imagesCount = await this.imagecount.count();

        console.log(`The total number of images are ${imagesCount}`);

        return imagesCount;
    }

    // //Brand: Apple
    // Product Code: Product 18
    // Reward Points: 800
    // Availability: Out Of Stock

    async getProductMetadata() {
        let productMetadata: string[] = await this.productMetadata.allInnerTexts();

        for (let meta of productMetadata) {
            let meatadata = meta.split(":");
            let metaKey = meatadata[0].trim();
            let metaValue = meatadata[1].trim();

            this.Productmap.set(metaKey, metaValue);
        }
    }
    /***
     * This method is returning headers,meta data, Product count;
     */

    async getProductDetails() {
        // this.Productmap.clear();
        this.Productmap.set('Header', await this.getProductheader());
        this.Productmap.set('Images', await this.getProductImagesCount())
        await this.getProductMetadata();
        await this.getProductPricingData();
        console.log(`Full product deatails of the Product ${this.Productmap}`);
        await this.printProductDetails();
        return this.Productmap;
    }

    private async printProductDetails() {
        for (const [key, value] of this.Productmap) {
            console.log(`${key}--------------------> ${value}`);
        }
    }
    // $2,000.00
    // Ex Tax: $2,000.00
    // Qty

    private async getProductPricingData() {
        // await this.productPricedata.first().waitFor({ state: 'visible' });
        await this.page.waitForTimeout(3000);
        const productMetadata: string[] = await this.productPricedata.allInnerTexts();

        const productPrice = productMetadata[0]?.trim() || '';
        const productExTax = productMetadata[1]?.split(":")[1].trim();

        this.Productmap.set('price', productPrice);
        this.Productmap.set('extaxPrice', productExTax);
    }
}