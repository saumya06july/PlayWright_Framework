import {test as base,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

type myFixtures=
{
    homepage :HomePage;
}

export const test=base.extend<myFixtures>({

  homepage:  async({page,baseURL},use,testInfo)=>
    {
       const loginPage= new LoginPage(page);
       await loginPage.goToLoginPage(baseURL);
       const userName=testInfo.project.metadata.appUserName;
       const password=testInfo.project.metadata.appPassword;
       const homepage=await loginPage.doLogin(userName,password);
       expect(await homepage.isUserLoggedin()).toBeTruthy();
       await use(homepage);
    }
})

export {expect};