/**
 * @class - This class is the template for obstacle objects like snakes or stairs
 * @constructor - The constructor provided work with 3 params like type, from and to
 * @public - The class is accesible everywhere
 */

class Obstacle {

    _type;
    _from;
    _to;

    constructor(type, from, to) {
        if (type == 'snake' && from < to) {
            throw console.error('The tail of the snake can`t be bigger than the head');
        }

        if (type == 'stair' && to < from) {
            throw console.error('The base of the stair can`t be bigger than the top');
        }

        this._type = type;
        this._from = from;
        this._to = to;
    }

    get type() { return this._type; }

    get from() { return this._from; }

    get to() { return this._to; }

}

module.exports = Obstacle;