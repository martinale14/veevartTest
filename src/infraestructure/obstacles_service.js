const Obstacle = require('../domain/obstacle');
/**
 * @class - This class provides the obstacle initialization
*/

class ObstaclesService {
    /**
     * @param {Number} size - Defines the actual board size
     * @method generateObstacles - This method is ised for generate the obstacles by defined size
     * @returns {Array<Obstacle>}
     */
    static generateObstacles(size) {
        let obstacles = new Array();
        let used = new Array();
        const ctObstacles = parseInt(size * ((Math.random() * .25) + .15));

        for (let i = 0; i < ctObstacles; i++) {

            let from;
            let to;

            from = this.getRandomNumberNotIncluded(used, size - 1, 1);
            used.push(from);
            to = this.getRandomNumberNotIncluded(used, size - 1, 1);
            used.push(to);

            obstacles.push(new Obstacle(from, to));
        }

        return obstacles;
    }

    /**
     * 
     * @param {Array<Number>} arr - Array that contain the used values
     * @param {Number} max - Max number for the random generation (Not included)
     * @param {Number} min - Minimun number for the random generation
     * @method getRandomNumberNotIncluded -This method provide us a random number that is not included in an array in a defined size
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