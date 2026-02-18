import { GenericPage } from './GenericPage';
import { getRandomItem } from '../Utils/randomValue';
import { Locator } from '@playwright/test';

export class HomePage extends GenericPage {
  private fromDropdown = 'select[name="fromPort"]';
  private toDropdown = 'select[name="toPort"]';
  private findFlightsBtn = 'input[type="submit"]';

  async navigate() {
    await this.page.goto('/');
  }

  async selectRandomCities() {
    const fromCities = await this.getAllOptions(this.fromDropdown);
    const toCities = await this.getAllOptions(this.toDropdown);

    const randomFrom = getRandomItem(fromCities);
    const randomTo = getRandomItem(toCities);

    await this.selectByValue(this.fromDropdown, randomFrom);
    await this.selectByValue(this.toDropdown, randomTo);

    return { randomFrom, randomTo };
  }

  async clickFindFlights() {
    await this.click(this.findFlightsBtn);
  }
}