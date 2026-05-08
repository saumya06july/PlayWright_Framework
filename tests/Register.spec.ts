import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { expect, test } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

type register={
FirstName:string,
LastName:string,
email:string,
Telephone:string,
Password:string,
ConfirmPassword:string  
}
let regData =fs.readFileSync('Testdata/register.csv','utf-8');
let testdata:register[]=parse(regData,{
    columns:true,
    skip_empty_lines:true
})

for(let data of testdata)
{
    test(`Verify user able to register for ${data.FirstName} `,async({page,baseURL})=>
{
    let loginPage=new LoginPage(page);
    await loginPage.goToLoginPage(baseURL);
    let registrationPage=await loginPage.navigateToregistration();
    let userRegistered=await  registrationPage.register(data.FirstName,data.LastName,data.email,data.Telephone,data.Password,data.Password,'Yes');
    await page.pause();
    expect(userRegistered).toBeTruthy();

})
}



