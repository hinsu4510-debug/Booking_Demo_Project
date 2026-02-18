import { GenericPage } from './GenericPage';

export class ConfirmationPage extends GenericPage {

  async validatePurchaseSuccess() {
    const message = await this.page.locator('h1').innerText();
    return message.includes('Thank you for your purchase');
  }
}