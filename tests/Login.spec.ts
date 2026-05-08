import { test, expect } from '../Fixtures/baseFixtures'
import { LoginPage } from '../pages/LoginPage'


test(' Verify Valid Login', async ({homepage}) => {
    
    expect(homepage.page).toHaveTitle('My Account');
})
test(' Verify InValid Login', async ({ page,baseURL }) => {
    let lp = new LoginPage(page);
    await lp.goToLoginPage(baseURL);
    const title=await lp.doLogin('pwtest123@nal.com', 'test@123');

    const inavlidLoginWaringmsg=await lp.getInvalidLoginMessage();
    await expect(inavlidLoginWaringmsg).toContain('Warning: No match for E-Mail Address and/or Password.');
})
