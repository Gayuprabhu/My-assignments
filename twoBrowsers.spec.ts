import { chromium, firefox, test, webkit } from "@playwright/test"; // test function is imported from playwright library



test(`Test to launch two sites`, async () =>  {

    const browser1 =await chromium.launch({channel:'msedge',headless:false}) ;// launch the ms edge browser
    const context1 = await browser1.newContext() //  new context for edge
    const page1    =await context1.newPage() // new page edge
    await page1.goto('https://www.redbus.in/');
    const title1 = await page1.title();
   // print titlea
    console.log("Title  is", title1);
     
    const browser2=await firefox.launch({channel:'webkit',headless:false});// launch edge 
    const context2 =await browser2.newContext();// new context for firefox
    const page2    =await context2.newPage(); // new page flipkart
    await page2.goto('https://www.flipkart.com');
    const title2 = await page2.title();
   //print title
   console.log("Title  is", title2);

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);
    //close browsers
    await browser1.close();
    await browser2.close();   
 });
