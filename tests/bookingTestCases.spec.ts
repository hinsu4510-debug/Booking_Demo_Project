
import{test,expect} from '../Fixture/BaseFixture';
import { PurchasePage } from '../Pages/PurchasePage';

test('TestCase1', async ({homePage,flightsPage})=>{
    
    
    await homePage.launchURL();
    const {randomFrom,randomTo} = await homePage.selectRandomCities();
    await homePage.clickFindFlights();
    await expect(await flightsPage.validateHeader(`Flights from ${randomFrom} to ${randomTo}`)).toBeTruthy();
    


});

test('TestCase2', async ({homePage,flightsPage})=>{
    
    
    await homePage.launchURL();
    const {randomFrom,randomTo} = await homePage.selectRandomCities();
    await homePage.clickFindFlights();
    await flightsPage.validateColumnValues(`Departs:${randomFrom}`);
    await flightsPage.validateColumnValues(`Arrives:${randomTo}`);


});



test('TestCase3', async ({homePage,flightsPage,purchasePage,confirmationPage})=>{
    
    
    await homePage.launchURL();
    const {randomFrom,randomTo} = await homePage.selectRandomCities();
    await homePage.clickFindFlights();
    await flightsPage.selectRandomFlight();
    await purchasePage.fillForm();
    await expect(await confirmationPage.validatePurchaseSuccess()).toBeTruthy();

});

