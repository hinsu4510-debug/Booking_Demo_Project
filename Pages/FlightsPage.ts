import { GenericPage } from './GenericPage';
import { getRandomItem } from '../Utils/randomValue';

export class FlightsPage extends GenericPage {
  private selectorheader = 'h3';
  private selectortableHeaders = 'table thead th';
  private selectorChooseFlight = 'input[value="Choose This Flight"]';

  async validateHeader(expectedText: string) {
    const header = await this.page.locator(this.selectorheader).innerText();
    return header.includes(expectedText);
  }

    async validateColumnValues(expectedText: string) {
    const tableHeaders = await this.page.locator(this.selectortableHeaders).allTextContents();
    return tableHeaders.includes(expectedText);
  }

  async selectRandomFlight() {
    const buttons = this.page.locator(this.selectorChooseFlight);
    const count = await buttons.count();

    const randomIndex = Math.floor(Math.random() * count);
    await buttons.nth(randomIndex).click();
  }
}