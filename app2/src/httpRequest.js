const https = require('https');

_EXTERNAL_URL = 'https://192.168.1.155/csv2';

const callExternalAPIHttp = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            return callback(data);
            //console.log(JSON.stringify(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalAPIHttp;