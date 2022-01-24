const prompt = require('prompt');

/**
 * @class - This class contains the method that define the prompt input functionallity
 * @public - The class is accesible everywhere
 */

class RequestService {
    /**
     * 
     * @param {Array<String>} request 
     * @returns {Promise<Number>}
     * @method requestNumber - This is a static method that allows to request Numbers from the command prompt
     */
    static requestNumber(request) {
        return new Promise((resolve, _) => {

            prompt.get(request, (err, res) => {

                if (err) throw `oops something crash ${err}`;

                if (!Number.isInteger(parseInt(res[request])) || parseInt(res[request]) < 1) {

                    console.log('Please only enter positive integer numbers except 0');
                    requestNumber(request);

                } else {

                    resolve(parseInt(res[request]));

                }

            });
        });
    }
}

module.exports = RequestService;