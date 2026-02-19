import { Page } from '@playwright/test';

export class GenericPage {
  constructor(protected page: Page) {}

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async selectByValue(locator: string, value: string) {
    await this.page.locator(locator).selectOption(value);
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async getText(locator: string) {
    return await this.page.locator(locator).innerText();
  }

  async getAllOptions(locator: string) {
    return await this.page.locator(locator + ' option').allTextContents();
  }
}