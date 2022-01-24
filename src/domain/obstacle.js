/**
 * @class - This class is the template for obstacle objects like snakes or stairs
 * @constructor - The constructor provided work with 3 params like type, from and to
 * @public - The class is accesible everywhere
 */

class Obstacle {


    /**
     * 
     * @property {String} _type - Controls if the obstacle is a stair or a snake
     * @property {Number} _from - Controls the start of the obstacle (player initial position)
     * @property {Number} _to - Controls the end of the obstacle (player final position)
     * @private
     */
    _type;
    _from;
    _to;

    /**
     * 
     * @param {Number} from - Controls the start of the obstacle (player initial position)
     * @param {Number} to - Controls the end of the obstacle (player final position)
     */
    constructor(from, to) {
        if (from < to) {

            this._type = 'stair';

        } else {

            this._type = 'snake';

        }

        this._from = from;
        this._to = to;
    }

    get type() { return this._type; }

    get from() { return this._from; }

    get to() { return this._to; }

}

module.exports = Obstacle;