import { faker } from '@faker-js/faker';

export function generateUserData() {
  return {
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    cardNumber: faker.finance.creditCardNumber(),
    month: '12',
    year: '2028',
    nameOnCard: faker.person.fullName()
  };
}