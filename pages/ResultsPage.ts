import { Locator, Page } from "@playwright/test"
import { ElementUtil } from "../Utils/ElementUtil";
import { LoginPage } from "./LoginPage";
import { ProductInfoPage } from "./ProductInfoPage";

export class ResultsPage {
    //Page locators/Objects/OR :

    private readonly page: Page;
    private readonly elementutil:ElementUtil;
    private readonly resultslocator:Locator;

    //Page class constructor

    constructor(page: Page) {
        this.elementutil = new ElementUtil(page);
        this.page = page;
        this.resultslocator=page.locator(`div[class='product-thumb']`);
    }

    // page Action and Method

   async getResultsCount()
   {
    return await this.resultslocator.count();
   }
   async selectProduct(productName:string)
   {
    console.log(`=====Product Name is ${productName}`);
    await this.elementutil.doClick(await this.page.getByRole('link',{name: `${productName}`}));
    return new ProductInfoPage(this.page);
   }

    
}