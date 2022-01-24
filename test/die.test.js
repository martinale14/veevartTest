const Die = require('../src/domain/die');

test('Check if die only get numbers less than 7', () => {
    for (let i = 0; i < 100; i++) {
        expect(Die.roll()).toBeLessThan(7);
    }
});