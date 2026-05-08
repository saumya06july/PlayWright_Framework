import { test, expect } from '../Fixtures/baseFixtures'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';

let search =[{search :'MacBook',searchKey:'MacBook Pro',imagecount :4},
             {search :'MacBook',searchKey:'MacBook Air',imagecount : 4}
            ]
for(let product of search){


    test.skip(`Verify Prduct Header${product.searchKey}`, async ({ homepage }) => {

    // let lp = new LoginPage(page);
    // await lp.goToLoginPage();
    // let homepage: HomePage = await lp.doLogin('saumya1991july@gmail.com', 'test@123');
    let resultpage: ResultsPage = await homepage.doSearch(product.search);
    let productInfoPage: ProductInfoPage = await resultpage.selectProduct(product.searchKey);
    expect(await productInfoPage.getProductheader()).toBe(product.searchKey);
})
}
for(let product of search){


    test.skip(`Verify Prduct Header${product.searchKey} ${product.imagecount}`, async ({ homepage }) => {

    // let lp = new LoginPage(page);
    // await lp.goToLoginPage();
    // let homepage: HomePage = await lp.doLogin('saumya1991july@gmail.com', 'test@123');

    let resultpage: ResultsPage = await homepage.doSearch(product.search);
    let productInfoPage: ProductInfoPage = await resultpage.selectProduct(product.searchKey);
    expect(await productInfoPage.getProductImagesCount()).toBe(product.imagecount);
})
}
 
test.skip(`Verify Prduct MetaData`, async ({ homepage }) => {

    // let lp = new LoginPage(page);
    // await lp.goToLoginPage();
    // let homepage: HomePage = await lp.doLogin('saumya1991july@gmail.com', 'test@123');
    let resultpage: ResultsPage = await homepage.doSearch('macbook');
    let productInfoPage: ProductInfoPage = await resultpage.selectProduct('MacBook Pro');
    const fullProductDetails=await productInfoPage.getProductDetails();
    expect.soft( fullProductDetails.get('Header')).toBe('MacBook Pro');
    expect.soft( fullProductDetails.get('Brand')).toBe('Apple');
    expect.soft(fullProductDetails.get('Product Code')).toBe('Product 18');
    expect.soft(fullProductDetails.get('Reward Points')).toBe('800');
    expect.soft( fullProductDetails.get('Availability')).toBe('Out Of Stock');
})
test(`Verify Prduct Pricing`, async ({ homepage }) => {

    // let lp = new LoginPage(page);
    // await lp.goToLoginPage();
    // let homepage: HomePage = await lp.doLogin('saumya1991july@gmail.com', 'test@123');
    let resultpage: ResultsPage = await homepage.doSearch('macbook');
    let productInfoPage: ProductInfoPage = await resultpage.selectProduct('MacBook Pro');
    const fullProductDetails=await productInfoPage.getProductDetails();
    expect.soft( fullProductDetails.get('Header')).toBe('MacBook Pro');
    expect.soft( fullProductDetails.get('price')).toBe('$2,000.00');
    expect.soft(fullProductDetails.get('extaxPrice')).toBe('$2,000.00');
})

