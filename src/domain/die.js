/**
 * @class - This class controls the die function
 */

class Die {

    /**
     * 
     * @returns {Number} - This method returns the die number
     */
    static roll() {
        return Math.floor(Math.random() * 6) + 1;
    }

}

module.exports = Die;