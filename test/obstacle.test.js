const ObstacleService = require('../src/infraestructure/obstacles_service');

test('Check if the type is being generated the right way', () => {
    const obstacles = ObstacleService.generateObstacles(500);

    obstacles.forEach(e => {
        if (e.type == 'stair') {
            expect(e.from).toBeLessThan(e.to);
        } else {
            expect(e.from).toBeGreaterThan(e.to);
        }
    });
});