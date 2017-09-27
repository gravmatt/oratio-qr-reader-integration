'use strict';

const qr = require('./external/node-qr-code-reader/qrCodeReader');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const oratio = require('oratio');
const PORT = 8080;

app.set('trust proxy', 1);
app.set('x-powered-by', false);

app.disable('etag');
app.disable('view cache');

app.use(bodyParser.json());
app.use(oratio());

app.post('/gravmatt', (req, res) => {
    console.log(req.body);

    if(req.body.message.type === 'image') {
        qr.decode(req.body.message.content)
        .then(res.sendText)
        .catch(res.sendText);
    }
});

app.listen(process.env.GRAVMATT_PORT || PORT, () => {
    console.log('Server is listening on port ' + (process.env.GRAVMATT_PORT || PORT));
});
