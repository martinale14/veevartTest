const Die = require('../src/domain/die');

// Validating the random number generation for the die
test('Check if die only get numbers less than 7', () => {
    for (let i = 0; i < 100; i++) {
        expect(Die.roll()).toBeLessThan(7);
    }
});