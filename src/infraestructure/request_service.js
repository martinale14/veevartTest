const prompt = require('prompt');

class RequestService {
    static requestNumber(request) {
        return new Promise((resolve) => {

            prompt.get(request, (err, res) => {

                if (err) throw console.error(`oops something crash ${err}`);

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