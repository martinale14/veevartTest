const Obstacle = require('../domain/obstacle');
/**
 * @class - This class provides the obstacle initialization
*/

class ObstaclesService {
    /**
     * @param {Number} size - Defines the actual board size
     * @returns {Array<Obstacle>}
     */
    static generateObstacles(size) {
        let obstacles = new Array();
        let used = new Array();
        const ctObstacles = Math.floor(size * (Math.random() * .25)) + .15;

        for (let i = 0; i < ctObstacles; i++) {

            let from;
            let to;
            let type = Math.floor(Math.random() * (3 - 1)) + 1;

            //from = Math.floor(Math.random() * size) + 1;
            from = getRandomNumberNotIncluded(used, size - 1, 1);

            if (type == 1 || from <= 5) {

                type = 'stair';
                to = Math.floor(Math.random() * (size - from)) + from + 1;

            } else if (type == 2 || from >= (size - 5)) {

                type = 'snake';
                to = Math.floor(Math.random() * (from - 1)) + 1;

            }

            used.push(from, to);

            obstacles.push(new Obstacle(type, from, to));
        }
        console.log(obstacles);

        return obstacles;
    }

    getRandomNumberNotIncluded(arr, max, min) {
        let number;

        do {
            number = Math.floor(Math.random() * (max - min)) + min;
            console.log(number);
            console.log(arr.includes(number));
        } while (!arr.includes(number));

        return number;
    }
}

module.exports = ObstaclesService;