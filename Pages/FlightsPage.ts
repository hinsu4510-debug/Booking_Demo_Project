import { GenericPage } from './GenericPage';
import { getRandomItem } from '../Utils/randomValue';

export class FlightsPage extends GenericPage {

  async validateHeader(expectedText: string) {
    const header = await this.page.locator('h3').innerText();
    return header.includes(expectedText);
  }

    async validateColumnValues(expectedText: string) {
    const tableHeaders = await this.page.locator('table thead th').allTextContents();
    return tableHeaders.includes(expectedText);
  }

  async selectRandomFlight() {
    const buttons = this.page.locator('input[value="Choose This Flight"]');
    const count = await buttons.count();

    const randomIndex = Math.floor(Math.random() * count);
    await buttons.nth(randomIndex).click();
  }
}