const ObstacleService = require('../src/infraestructure/obstacles_service');

test('Validate if returning empty array', () => {
    expect(ObstacleService.generateObstacles().length).toBe(0);
});

test('Validate if is less than half size', () => {
    for (let i = 0; i < 1000; i++) {
        expect(ObstacleService.generateObstacles(100).length < 50).toBeTruthy();
    }
});

test('Validate random number without posibilities throws', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(() => ObstacleService.getRandomNumberNotIncluded(arr, 10, 1)).toThrow('Warning infinite loop');
});

test('Validate random number not included in arrray is got', () => {
    const arr = [1, 2, 3, 4, 5, 7, 8, 9];
    expect(ObstacleService.getRandomNumberNotIncluded(arr, 10, 1)).toBe(6);
});

test('validate random number generation', () => {
    const arr = [];
    for (let i = 0; i < 9; i++) {
        const number = ObstacleService.getRandomNumberNotIncluded(arr, 10, 1);
        expect(arr.includes(number)).toBeFalsy();
        arr.push(number);
        expect(number < 10 && number >= 1).toBeTruthy();

    }
});