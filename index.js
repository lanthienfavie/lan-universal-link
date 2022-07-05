const express = require('express')
const app = express()
var fs = require('fs');
var http = require('http');
var https = require('https');


var credentials = { key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') };
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


app.listen(process.env.PORT || 3000);

httpsServer.listen(443);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/apple-app-site-association', (req, res) => {
    // var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
    // res.send(aasa);
    res.download(__dirname + '/apple-app-site-association');
});