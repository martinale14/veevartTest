const { TestWatcher } = require('jest');
const ObstacleService = require('../src/infraestructure/obstacles_service');

test('Validate if returning null array', () => {
    expect(ObstacleService.generateObstacles().length).toBe(0);
});