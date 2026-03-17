import { chromium, firefox, test, webkit } from "@playwright/test"; // test function is imported from playwright library



test(`Test to create lead`, async ({page}) =>  {


    await page.goto('http://leaftaps.com/opentaps/control/main');
    //get page title
    const title =await page.title();
    console.log( "Page title is ",title);
    //fill username//
    await page.locator('#username').fill('democsr2');
    //fill password //
    await page.locator('#password').fill('crmsfa');
    //click submit
    await page.locator('.decorativeSubmit').click();
   // await page.locator('.button.r4.wide.primary').nth(0).click();
   //click crmsfa button
   await page.locator('.crmsfa').click();
   //click lead button
   await page.locator('[href="/crmsfa/control/leadsMain"]').click();
   //click create lead
   //await page.locator('.selected').nth(0).click();
   await page.locator('[href="/crmsfa/control/createLeadForm"]').click();
   //fill company name
   await page.locator('[name="companyName"]').fill('LTM');
   //fill firstname
   await page.locator('[name="firstNameLocal"]').fill('Gayathri');
   //await page.locator('#createLeadForm_firstNameLocal').fill('Gayathri');
   //fill last name
   await page.locator('[name="lastNameLocal"]').fill('PrabhuRaju');
   //await page.locator('[name="lastNameLocal"]').fill('PrabhuRaju');
   //Fill the Salutation 
   await page.locator('[name="personalTitle"]').fill('Pakala');
   //fill title
   await page.locator('#createLeadForm_companyName').fill('Testing');
   //fil revene
   await page.locator('[name="annualRevenue"]').fill('30000');
   //fill deartment
   await page.locator('[name="departmentName"]').fill('ECE');
   //fill phone number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('7702719610');
    //create lead button
     await page.locator('[value="Create Lead"]').click();
     //get page title
    //await page.title();
    //page.url();
    

    await page.waitForTimeout(3000);
                 
    
    
 })
