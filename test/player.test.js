const Player = require('../src/domain/player');
const player = new Player();

// Checking all players start at the same position and its 0 position
test('Validating if the player initial position is 0', () => {
    expect(player.position).toBe(0);
});

// Checking if the players move the steps they need to move
test('Validating if the player changes his position correctly', () => {
    player.position += 5;

    expect(player.position).toBe(5);
});