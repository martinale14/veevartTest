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
        const ctObstacles = Math.floor(size * (Math.random() * .25)) + .15;

        for (let i = 0; i < ctObstacles; i++) {
            const from = Math.floor(Math.random() * size) + 1;
            let type = Math.floor(Math.random() * (3 - 1)) + 1;
            let to = 0;

            if (type == 1 || from <= 5) {

                type = 'stair';
                to = Math.floor(Math.random() * (size - from)) + from + 1;

            } else if (type == 2 || from >= (size - 5)) {

                type = 'snake';
                to = Math.floor(Math.random() * (from - 1)) + 1;

            }

            console.log('type:' + type);
            console.log('from: ' + from);
            console.log('to: ' + to);

            obstacles.push(new Obstacle(type, from, to));
        }

        console.log(obstacles);

        return obstacles;
    }
}

module.exports = ObstaclesService;