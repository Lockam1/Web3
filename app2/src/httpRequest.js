const https = require('https');

function getData() {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                let json = JSON.parse(body);
                // do something with JSON
            } catch (error) {
                console.error(error.message);
            };
        });

        }).on("error", (err) => {
        console.log("Error: " + err.message);
        });
};
