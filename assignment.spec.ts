import { chromium, firefox, test, webkit } from "@playwright/test"; // test function is imported from playwright library



test(`Test to launch a browser`, async ({page}) =>  {


    //const browser =await chromium.launch() // Step1 launching the browser
    //const context = await browser.newContext() // Step2 creating a new context
    //const page    =await context.newPage() // Step3 new page created 


    await page.goto('https://login.salesforce.com/');
    //used class //
    await page.locator('[class="input r4 wide mb16 mt8 username"]').fill('dilipkumar.rajendran@testleaf.com');
    //used id //
    await page.locator('#password').fill('TestLeaf@2025');
    //use 
    await page.locator('[id="Login"]').click();
    
    
   // page.url();


     //await page.title()


    await page.waitForTimeout(3000)
                 
    
    
 })
