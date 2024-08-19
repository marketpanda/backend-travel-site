const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/your.env'});

const bodyParser = require('body-parser')

const path = require('path')

//get express js
const express = require('express');

//express js
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


//=== ************ ETO IMPORTANTE get http for server
const https = require('https')
const fs = require('fs')

let options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
}

const server_https = https.createServer( options, app )

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const port_https = 3002 //process.env.LISTEN_PORT//this is linux

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).send('BUSET Error')
});

//server listen to assigned port
server_https.listen(`${port_https}`, () => {
    console.log(`=========WATATRIP HTTPS SECURED Node JS Server Started at ${port_https}======`)
})
