import{test,expect} from '@playwright/test';
import { RedBus } from '../Pages/RedBusPage';

test("redBus datepicker ",async({page})=>{
let RedBuspage=new RedBus(page);
await RedBuspage.navigate();

await RedBuspage.selectDate();

})