const Obstacle = require('../domain/obstacle');
/**
 * @class - This class provides the obstacle initialization
*/

class ObstaclesService {
    /**
     * @param {Number} size 
     * @returns {Array<Obstacle>}
     */
    static generateObstacles(size) {
        let obstacles = new Array();

        const ctObstacles = (Math.floor(Math.random() * 30) + 30)
        console.log(ctObstacles);

        return obstacles;
    }
}

module.exports = ObstaclesService;