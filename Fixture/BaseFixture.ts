import { test as base} from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { FlightsPage } from '../Pages/FlightsPage';


export const test = base.extend<{
    saveLogs: void;
    homePage:HomePage;
    flightsPage:FlightsPage;
    

}>({
    saveLogs:[async({ },use)=>{
        console.log('Global before is running...');

        await use();

        console.log('Global afterEach is running...')
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
      
    
}

)

export {expect} from '@playwright/test';