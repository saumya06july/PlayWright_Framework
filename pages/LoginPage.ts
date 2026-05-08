import { Locator, Page } from "@playwright/test"
import { ElementUtil } from "../Utils/ElementUtil";
import { HomePage } from "./HomePage";
import { RegistrationPage } from "./RegistrationPage";
export class LoginPage {
    //Page locators/Objects/OR :

    private readonly page: Page;
    private readonly emailId: Locator;
    private readonly loginBtn: Locator;
    private readonly password: Locator;
    private readonly warningMessage: Locator;
    private readonly registrationLink :Locator;
    private readonly elementutil;

    //Page class constructor

    constructor(page: Page) {
        this.elementutil = new ElementUtil(page);
        this.page = page;
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.locator(`//input[@type='submit']`);
        this.warningMessage = page.locator(` //div[contains(.,'Warning: No match for E-Mail Address') and contains(@class,'alert alert')]`);
        this.registrationLink=page.locator(`(//a[.='Register'])[2]`);

    }

    // page Action and Method

    async goToLoginPage(baseURL:string | undefined) {
        await this.page.goto(`${baseURL}?route=account/login`);
    }

    async doLogin(userName: string, password: string): Promise<HomePage> {
        await this.elementutil.doFill(this.emailId, userName, 3000);
        await this.elementutil.doFill(this.password, password, 3000);
        await this.elementutil.doClick(this.loginBtn);
        // const pageTitile = await this.page.title();
        // console.log(`Home Page Titile ${pageTitile}`);
        // return pageTitile;

        return new HomePage(this.page);

    }
    async getInvalidLoginMessage(): Promise<string | null> {
        let warningMsg = await this.elementutil.getText(this.warningMessage);
        console.log(`Waring message is ${warningMsg}`);
        return warningMsg;
    }
    async navigateToregistration():Promise<RegistrationPage>
    {
       await this.elementutil.doClick(this.registrationLink);
       return new RegistrationPage(this.page);
    }
}