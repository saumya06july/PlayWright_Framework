import { Locator, Page } from "@playwright/test"
import { ElementUtil } from "../Utils/ElementUtil";
import { LoginPage } from "./LoginPage";
import { ResultsPage } from "./ResultsPage";

export class HomePage {
    //Page locators/Objects/OR :

     readonly page: Page;
    private readonly elementutil:ElementUtil;
    private readonly logoutBtn:Locator;
    private readonly search:Locator;
    private readonly searchIcon:Locator;
    private readonly loginLink :Locator;

    //Page class constructor

    constructor(page: Page) {
        this.elementutil = new ElementUtil(page);
        this.page = page;
        this.logoutBtn=page.locator(`//aside[@id='column-right']//a[.='Logout']`);
        this.search=page.locator(`//input[@name='search']`);
        this.searchIcon=page.locator(`//div[@id='search']//button[@type='button']`);
        this.loginLink=page.locator(`//aside[@id='column-right']//a[.='Login']`);

    }

    // page Action and Method

    async isUserLoggedin()
    {
       return  await this.elementutil.isVisibleElement(this.logoutBtn);
    }
async logout()
{
    await this.elementutil.doClick(this.logoutBtn);
    await this.elementutil.doClick(this.loginLink);
    return new LoginPage(this.page);
}

async doSearch(serachKey:string)
{
    console.log(`search item available ${serachKey} `);
    await this.elementutil.doFill(this.search,'Macbook',5000);
    await this.elementutil.doClick(this.searchIcon);

    return new ResultsPage(this.page);
}

    
}