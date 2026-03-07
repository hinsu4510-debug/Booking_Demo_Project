import{expect,Page,Locator} from '@playwright/test';
import { waitForDebugger } from 'inspector';

export class RedBus{
    private datePicker:Locator;
    private page:Page;
    private searchButton:Locator;
    constructor(page:Page){
        this.page=page;
        this.datePicker=page.locator("//i[@class='icon___8fc28e icon icon-date_range']");
        this.searchButton=page.locator(" xpath of the search button")
    }

    async navigate(){

        await this.page.goto('https://www.redbus.in/');
        
    }

    async selectDate(){

       
        await expect(this.datePicker).toBeVisible();
        await this.datePicker.click({force:true});
        await this.page.locator("//span[text()='13']").click();
        
    }
    async clickSearch(){

        await this.searchButton.click();
    }
}