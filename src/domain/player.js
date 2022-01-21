/**
 * @class - Class that works as a template for the players
 * @constructor - All players start at position 0
 * @public - The class is accesible from everywhere
 */

class Player {
    /**
    *    @property {Number} _position - Property that controls the position of the player
    *    @private - Only accesible on this class
    */

    _position;

    constructor() {
        this._position = 0;
    }

    /**
     * @param {Number} position - Param that bring us the new position
     */
    set position(position) {
        this._position = position;
    }

    /**
     * @returns {Number} - Returns the actual position of the player
     */
    get position() { return this._position; }
}

module.exports = Player;