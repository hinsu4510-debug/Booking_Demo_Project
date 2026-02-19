import { GenericPage } from './WebUtilPage';
import { generateUserData } from '../Utils/testData';

export class PurchasePage extends GenericPage {

  async fillForm() {
    const data = generateUserData();

    await this.fill('#inputName', data.name);
    await this.fill('#address', data.address);
    await this.fill('#city', data.city);
    await this.fill('#state', data.state);
    await this.fill('#zipCode', data.zip);
    await this.fill('#creditCardNumber', data.cardNumber);
    await this.fill('#creditCardMonth', data.month);
    await this.fill('#creditCardYear', data.year);
    await this.fill('#nameOnCard', data.nameOnCard);

    await this.click('input[type="submit"]');
  }
}