const Board = require('../src/domain/board');

// Validation for the board object
test('Validation for board properties', () => {

    for (let i = 0; i < 100; i++) {
        const height = parseInt((Math.random() * 100) + 1);
        const width = parseInt((Math.random() * 100) + 1);

        const board = new Board(height, width);

        expect(board.height).toBe(height);
        expect(board.width).toBe(width);
        expect(board.size).toBe(height * width);
        expect(board.obstacles).not.toBeNull();
        expect(board.obstacles.length).toBeLessThan(board.size / 2);
    }

});
