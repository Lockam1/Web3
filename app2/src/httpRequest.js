const https = require('http');

_EXTERNAL_URL = 'http://192.168.1.156:80/csv2';

const callExternalAPIHttp = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            console.log(data);
            return callback(data);
           
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalAPIHttp;