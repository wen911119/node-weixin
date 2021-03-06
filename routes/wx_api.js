var express = require('express');
var router = express.Router();

var fetch = require('node-fetch');
var WechatAPI = require('wechat-api');

var wxapi = new WechatAPI('wx59859d17d4f8bf42', 'be9853a7f2fc05d4610c47c23c496148');

router.get('/getqrcode', function (req, res, next) {
    const param = req.query.code;
    console.log(param);
    wxapi.createLimitQRCode(param, function (err, result) {
        if (err) {
            res.send('');
        } else {
            res.send(wxapi.showQRCodeURL(result.ticket));
        }
    });
});

router.get('/gettempqrcode', function (req, res, next) {
    const param = req.query.code;
    console.log(param);
    wxapi.createTmpQRCode(param, 1800, function (err, result) {
        if (err) {
            res.send('');
        } else {
            console.log(result);
            res.send(wxapi.showQRCodeURL(result.ticket));
        }
    });
});

module.exports = router;