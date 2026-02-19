import { GenericPage } from './WebUtilPage';

export class ConfirmationPage extends GenericPage {
  private selectorSucessMessage = 'h1';
  private SucessMessage = 'Thank you for your purchase';

  async validatePurchaseSuccess() {
    const message = await this.page.locator(this.selectorSucessMessage).innerText();
    return message.includes(this.SucessMessage);
  }
}