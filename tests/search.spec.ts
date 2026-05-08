import { test, expect } from '../Fixtures/baseFixtures'
import { ResultsPage } from '../pages/ResultsPage';

// Data Provider for Product SearchKey and results count
let searchData=[
    {searchkey : 'macbook',resultscount : 3} ,
    {searchkey : 'samsung', resultscount :3},
]

for(let product of searchData)
{
    test(` @Sanity Serach the Itmes ${product.searchkey}`,
        {annotation :[{type :'epic',description:'EPIC 100 design for LoginPage'},
                      {type:'feature',description:'Login Feature'},
                      {type:'Story',description :'US 50 User can Login to App'},
                      {type :'Severity',description:'Blocker'},
                      {type :'Owner',description:'Soumya R'}
    ]

    },async({homepage})=>
{
    
    let resultpage:ResultsPage= await homepage.doSearch(product.searchkey);
    expect(await resultpage.getResultsCount()).toBe(product.resultscount);

    // await page.pause();

})


}