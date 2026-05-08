import { Locator, Page,expect } from "@playwright/test"
import { ElementUtil } from "../Utils/ElementUtil";
import { HomePage } from "./HomePage";

export class RegistrationPage
{

    private readonly page:Page;
    private readonly elementutil: ElementUtil;
    private readonly firstName;
    private readonly lastName;
    private readonly eMail;
    private readonly telephone;
    private readonly password;
    private readonly confirmPassword;
    private readonly newsLetterYesradio;
    private readonly newsLetterNoradio;
    private readonly agreeCheckbox;
    private readonly continueButton;
    private readonly successfulmsg;

    constructor(page:Page)
    {
        this.page=page;
        this.elementutil=new ElementUtil(page);
        this.firstName=page.getByLabel('First Name');
        this.lastName=page.getByLabel('Last Name');
        this.eMail=page.getByLabel('E-Mail');
        this.telephone=page.getByLabel('Telephone');
        this.password=page.getByRole('textbox', { name: '* Password', exact: true });
        this.confirmPassword=page.getByRole('textbox', { name: '* Password Confirm' });
        this.newsLetterYesradio=page.getByRole('radio', { name: 'Yes' });
        this.newsLetterNoradio=page.getByRole('radio', { name: 'No' });
        this.agreeCheckbox=page.locator("input[name='agree']");
        this.continueButton=page.getByRole('button', { name: 'Continue' });
        this.successfulmsg=page.locator(`//h1[.='Your Account Has Been Created!']`);
    }

    async register(firstName:string,lastName:string,eMail:string,telephone:string,password:string,confirmPassword:string,subSribeNewletter:string)
    {
        await this.elementutil.doFill(this.firstName,firstName,2000);
        await this.elementutil.doFill(this.lastName,lastName,2000);
        await this.elementutil.doFill(this.telephone,telephone,2000);
        await this.elementutil.doFill(this.eMail,eMail,2000);
        await this.elementutil.doFill(this.password,password,2000);
         await this.elementutil.doFill(this.confirmPassword,confirmPassword,2000);
         if(subSribeNewletter==='yes')
         {
            await this.elementutil.doClick(this.newsLetterYesradio);
         }
         else{
             await this.elementutil.doClick(this.newsLetterNoradio);
         }
         await this.elementutil.doClick(this.agreeCheckbox);
         await this.elementutil.doClick(this.continueButton);
        return await this.elementutil.isVisible(this.successfulmsg);
    }

    // async verifycccountTobeVisibile()
    // {
    //     await expect(this.successfulmsg).toBeVisible();
    // }
}