const ObstaclesService = require('../infraestructure/obstacles_service');
const Obstacle = require('./obstacle');
/**
 * @class - This class provides the template for the game board
 * @constructor - This class provides an optional parameter to make square based boards
 * @public - The class is accesible from everywhere
 */

class Board {
    /**
     * @property {Number} _height - Property that describes the height of the board
     * @property {Number} _width - Property that describes the width of the board
     * @property {Number} _size - Property that describes the full lenght of the board
     * @property {Array<Obstacle>} _obstacles - Property that contains all the obstacles info
     */

    /** @private - Only accesible on this class */
    _height;
    /** @private - Only accesible on this class */
    _width;
    /** @private - Only accesible on this class */
    _size;
    /** @private - Only accesible on this class */
    _obstacles;

    /**
     * 
     * @param {Number} height - Initialization of the height property
     * @param {Number} width  - Initialization of the width property 
     */
    constructor(height, width) {
        this._height = height;
        this._width = width;
        this._size = width * height;
        this._obstacles = ObstaclesService.generateObstacles(this._size);
    }

    /**
     * @returns {Number}
     */
    get height() { return this._height; }

    /**
     * @returns {Number}
     */
    get width() { return this._width; }

    /**
     * @returns {Number}
     */
    get size() { return this._size; }

    /**
     * @returns {Array<Obstacle>}
     */
    get obstacles() { return this._obstacles; }
}

module.exports = Board;