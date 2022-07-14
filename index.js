const express = require('express')
const app = express()
var fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/apple-app-site-association', (req, res) => {
    // var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
    // res.send(aasa);
    res.download(__dirname + '/apple-app-site-association');
});

app.get('/.well-known/apple-app-site-association', (req, res) => {
    // var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
    // res.send(aasa);
    res.download(__dirname + '/.well-known/apple-app-site-association');
});

app.listen(process.env.PORT || 3000);