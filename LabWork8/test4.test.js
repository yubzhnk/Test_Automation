const { spec } = require('pactum');

describe('Dictionary API Tests', () => {
    const englishWords = ['apple', 'banana', 'cat', 'dog', 'elephant'];

    englishWords.forEach(word => {
        it(`should have examples of usage for the word '${word}'`, async () => {
            await spec()
                .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .expectStatus(200)
                .expectJsonLike('0.meanings.0.definitions.0.example', /./)
                .toss();
            console.log(`Word: ${word}`);
        });
    });
});
