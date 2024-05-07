const { spec } = require('pactum');

describe('Catfact Service Tests', () => {

    it('should return correct structure for breeds request', async () => {
        await spec()
            .get('https://catfact.ninja/breeds')
            .expectStatus(200)
            .expectJsonLike({
                current_page: "typeof $V === 'number'",
                data: [{
                    breed: "typeof $V === 'string'",
                    country: "typeof $V === 'string'",
                    origin: "typeof $V === 'string'",
                    coat: "typeof $V === 'string'",
                    pattern: "typeof $V === 'string'",
                }]
            })
            .expectHeader('server')
            .expectHeader('cache-control')
            .expectHeader('date')
            .toss();
    });


    it('should return correct structure for fact request', async () => {
        await spec()
            .get('https://catfact.ninja/fact')
            .expectStatus(200)
            .expectJsonLike({
                fact: "typeof $V === 'string'",
                length: "typeof $V === 'number'",
            })
            .expectHeader('server')
            .expectHeader('cache-control')
            .expectHeader('date')
            .toss();
    });

    it('should return correct structure for facts request', async () => {
        await spec()
            .get('https://catfact.ninja/facts')
            .expectStatus(200)
            .expectJsonLike({
                current_page: "typeof $V === 'number'",
                data: [{
                    fact: "typeof $V === 'string'",
                    length: "typeof $V === 'number'",
                }]
            })
            .expectHeader('server')
            .expectHeader('cache-control')
            .expectHeader('date')
            .toss();
    });


    it('should return correct structure for breeds request with limit', async () => {
        const response = await spec()
            .get('https://catfact.ninja/breeds')
            .withQueryParams('limit', 2)
            .expectStatus(200)

        expect(response.json.data.length).toBe(2);
    });

    it('should return correct structure for fact request with max_length', async () => {
        const response = await spec()
            .get('https://catfact.ninja/fact')
            .withQueryParams('max_length', 20)
            .expectStatus(200)

        expect(response.json.length).toBe(20);
    });

    it('should return correct structure for facts request with max_length', async () => {
        const response = await spec()
            .get('https://catfact.ninja/facts')
            .withQueryParams('limit', 5)
            .withQueryParams('max_length', 38)
            .expectStatus(200)

        expect(response.json.data.length).toBe(5);

        response.json.data.forEach(item => {
            expect(item.length).toBeLessThanOrEqual(38);
        });
    });

    it('should return correct types of the fields fact and length', async () => {
        const response = await spec()
            .get('https://catfact.ninja/fact')
            .expectStatus(200)
            .toss();

        expect(typeof response.json.fact).toBe('string');
        expect(typeof response.json.length).toBe('number');
    });
});
