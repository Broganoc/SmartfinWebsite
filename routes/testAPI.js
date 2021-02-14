var express = require('express');
var router = express.Router();

/* GET API page. */
router.get('/', function(req, res, next) {
    const https = require('https')
    const options = {
        hostname: 'api.sofarocean.com',
        path: '/api/devices?token=a1b3c0dbaa16bb21d5f0befcbcca51',
        method: 'GET',
    }

    const requ = https.request(options, resp => {
        console.log(`statusCode: ${res.statusCode}`)

        resp.setEncoding('utf8');
        resp.on('data', function (chunk){
            console.log(chunk);
            res.render('index', { title: 'Connected to API', response: chunk });
        })
    })

    requ.on('error', error => {
        console.error(error)
    })

    requ.end()


});

module.exports = router;

