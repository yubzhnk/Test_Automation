const { spec } = require('pactum');

describe('Currency API Tests', () => {

  it('should return list of available currencies', async () => {
    const res = await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .expectStatus(200);

    console.log('Available currencies:', Object.keys(res.body));
  });

  it('should return exchange rate of Euro to other currencies', async () => {
    const res = await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
      .expectStatus(200);

    console.log('Exchange rates of Euro to other currencies:', res.body);
  });

  it('should return exchange rate of Euro to Dollar', async () => {
    const res = await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
      .expectStatus(200);

    const currency = res.body.eur.usd;
    console.log('Exchange rate of Euro to Dollar:', currency);

    if (currency > 1.073) {
      console.log('Exchange rate of Euro to Dollar is greater than 1.073');
    } else {
      console.log('Exchange rate of Euro to Dollar is NOT greater than 1.073');
    }
  });

  it('should return error for non-existing currency', async () => {
    await spec()
      .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/zwll.json')
      .expectStatus(404);

    console.log('Error for non-existing currency: Currency not found');
  });
});
