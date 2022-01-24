const Player = require('../src/domain/player');
const player = new Player();

test('Validating if the player initial position is 0', () => {
    expect(player.position).toBe(0);
});

test('Validating if the player changes his position correctly', () => {
    player.position += 5;

    expect(player.position).toBe(5);
});