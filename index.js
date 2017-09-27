'use strict';

const qr = require('./external/node-qr-code-reader/qrCodeReader');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.set('trust proxy', 1);
app.set('x-powered-by', false);

app.disable('etag');
app.disable('view cache');

app.use(bodyParser.json());

app.POST('/gravmatt', (req, res) => {
    console.log(req.body);

    res.send('nothing her yet');
    // qr.decode('https://appcoda.com/wp-content/uploads/2013/12/qrcode.jpg')
    //     .then(console.log)
    //     .catch(console.log);
});

app.listen(process.env.GRAVMATT_PORT || PORT, () => {
    console.log('Server is listening on port ' + (process.env.GRAVMATT_PORT || PORT));
});
