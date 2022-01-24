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
        const ctObstacles = parseInt(size * ((Math.random() * .25) + .15));

        for (let i = 0; i < ctObstacles; i++) {

            let from;
            let to;
            let type = Math.floor(Math.random() * (3 - 1)) + 1;

            from = this.getRandomNumberNotIncluded(used, size - 1, 1);
            used.push(from);
            to = this.getRandomNumberNotIncluded(used, size - 1, 1);
            used.push(to);

            if (from < to) {

                type = 'stair';

            } else {

                type = 'snake';

            }

            obstacles.push(new Obstacle(type, from, to));
        }

        return obstacles;
    }

    /**
     * 
     * @param {Array<Number>} arr 
     * @param {Number} max 
     * @param {Number} min 
     * @returns {Number}
     */
    static getRandomNumberNotIncluded(arr, max, min) {

        if (max - min == arr.length) {
            throw 'Warning infinite loop';
        }

        let number;

        do {
            number = Math.floor(Math.random() * (max - min)) + min;
        } while (arr.includes(number));

        return number;
    }
}

module.exports = ObstaclesService;