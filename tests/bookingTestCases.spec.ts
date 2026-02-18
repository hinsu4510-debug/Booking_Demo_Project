
import{test,expect} from '../Fixture/BaseFixture';

test('TestCase1 and Testcase2 clubbing', async ({homePage,flightsPage})=>{
    
    
    await homePage.navigate();
    const {randomFrom,randomTo} = await homePage.selectRandomCities();
    await homePage.clickFindFlights();
    await expect(await flightsPage.validateHeader(`Flights from ${randomFrom} to ${randomTo}`)).toBeTruthy();
    await flightsPage.validateColumnValues(`Departs:${randomFrom}`);
    await flightsPage.validateColumnValues(`Arrives:${randomTo}`);



});