import { test as base} from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { FlightsPage } from '../Pages/FlightsPage';
import { PurchasePage } from '../Pages/PurchasePage';
import { ConfirmationPage } from '../Pages/ConfirmationPage';


export const test = base.extend<{
    saveLogs: void;
    homePage:HomePage;
    flightsPage:FlightsPage;
    purchasePage:PurchasePage;
    confirmationPage:ConfirmationPage;
    

}>({
    saveLogs:[async({ },use)=>{
        console.log('Test Execution Started...');

        await use();

        console.log('Test Execution Completed...')
    },
    { auto: true}],
    homePage: async({ page }, use) =>{
        const homePage=new HomePage(page);
        await use(homePage);
    },
      flightsPage: async({ page }, use) =>{
        const flightsPage=new FlightsPage(page);
        await use(flightsPage);
    },
        purchasePage: async({ page }, use) =>{
        const purchasePage=new PurchasePage(page);
        await use(purchasePage);
    },

     confirmationPage: async({ page }, use) =>{
        const confirmationPage=new ConfirmationPage(page);
        await use(confirmationPage);
    },
      
    
}

)

export {expect} from '@playwright/test';