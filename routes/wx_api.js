var express = require('express');
var router = express.Router();


var WechatAPI = require('wechat-api');
var wxapi = new WechatAPI('wx59859d17d4f8bf42', 'be9853a7f2fc05d4610c47c23c496148');

router.get('/getqrcode', function (req, res, next) {
    wxapi.createTmpQRCode(10001, 504800, function (err, result) {
        if(err){
             res.send('err');
        }else{
            res.send(wxapi.showQRCodeURL(result.ticket));
        }
    });

   
});

module.exports = router;